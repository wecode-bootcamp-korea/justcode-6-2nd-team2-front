import React, { useState, useEffect, useContext } from 'react';
import styled, { css } from 'styled-components';
import { CountContext, AllContext } from '../../../pages/Booking/Booking';

import './ScreenRow.scss';

const SeatRow = styled.button`
  position: absolute;
  left: 126px;
  width: 16px;
  height: 16px;
  font-size: 0.7333em;
  color: #000;
  vertical-align: middle;
  border: 1px solid #ccc;
  background-color: #fff;
  padding: 0;
`;

const SeatOne = styled.button`
  position: absolute;
  left: 126px;
  width: 17px;
  height: 18px;
  font-size: 0.7333em;
  color: white;
  vertical-align: middle;
  border: 1px solid #ccc;
  background-color: #747474;
  background-image: url(https://img.megabox.co.kr/static/pc/images/common/bg/bg-seat-condition-common.png);
  padding: 0;
`;

const SeatLast = styled.button`
  position: absolute;
  left: 126px;
  width: 17px;
  height: 18px;
  font-size: 0.7333em;
  color: white;
  vertical-align: middle;
  border: 1px solid #ccc;
  padding: 0;
  background-color: #747474;
  background-image: url(https://img.megabox.co.kr/static/pc/images/common/bg/bg-seat-condition-common.png);
`;

function ScreenRow({ alpha, index, last, booked }) {
  const [array, setArray] = useState([]);
  const [hoverArray, setHoverArray] = useState([]);
  const [selectArray, setSelectArray] = useState([]);

  const { adultNum, setAdultNum, teenNum, setTeenNum } = useContext(CountContext);
  const { allSelectArray, setAllSelectArray } = useContext(AllContext);

  const [bookedIndex, setBookedIndex] = useState([]);

  useEffect(() => {
    let test = [];
    for (let i = 1; i < last + 1; i++) {
      test.push(i);
    }
    setArray(test);
  }, []);

  useEffect(() => {
    if (adultNum + teenNum === 0) {
      setAllSelectArray([]);
      setHoverArray([]);
    }
  }, [adultNum, teenNum]);

  return (
    <>
      {last !== -1 ? (
        <div>
          <SeatRow style={{ top: `${85 + index * 20}px` }}>{alpha}</SeatRow>
          {array.map(el => {
            if (booked && booked.includes(alpha + el)) {
              return (
                <SeatLast
                  key={el}
                  style={{
                    left: `${155 + el * 20 + ((22 - last) / 2) * 20}px`,
                    top: `${85 + index * 20}px`,
                    backgroundImage:
                      'url("https://img.megabox.co.kr/static/pc/images/common/bg/bg-seat-condition-finish-s.png")',
                  }}
                />
              );
            } else {
              return (
                <SeatLast
                  key={el}
                  style={{
                    left: `${155 + el * 20 + ((22 - last) / 2) * 20}px`,
                    top: `${85 + index * 20}px`,
                    backgroundImage: !booked
                      ? 'url("https://img.megabox.co.kr/static/pc/images/common/bg/bg-seat-condition-common-s.png") 0 0 no-repeat'
                      : booked.includes(alpha + el) &&
                        'url("https://img.megabox.co.kr/static/pc/images/common/bg/bg-seat-condition-finish-s.png") 0 0 no-repeat',
                  }}
                  onClick={event => {
                    let rest = allSelectArray;
                    let elString = rest.indexOf(alpha + String(el));
                    let elStringm = rest.indexOf(alpha + String(el - 1));

                    if (allSelectArray.includes(alpha + String(el) + 'Z')) {
                      let indexZ = allSelectArray.indexOf(alpha + String(el) + 'Z');
                      allSelectArray.splice(indexZ, 1);

                      setAllSelectArray(allSelectArray.slice());
                    } else if (allSelectArray.includes(alpha + String(el))) {
                      if (el % 2 === 1) {
                        allSelectArray.splice(elString, 2);
                        // rest[elString + 1] = '';
                        // rest[elString] = '';
                        setAllSelectArray(allSelectArray.slice());
                      } else {
                        allSelectArray.splice(elStringm, 2);
                        // rest[elString - 1] = '';
                        // rest[elString] = '';
                        setAllSelectArray(allSelectArray.slice());
                      }
                    } else if (allSelectArray.length === adultNum + teenNum) {
                      return;
                    } else {
                      if (hoverArray.length === 1) {
                        hoverArray[0] = hoverArray[0] + 'Z';
                        setAllSelectArray(allSelectArray.concat(hoverArray));
                      } else {
                        if (allSelectArray.includes(hoverArray[0] + 'Z')) {
                          hoverArray[1] = hoverArray[1] + 'Z';
                          setAllSelectArray(allSelectArray.concat(hoverArray[1]));
                        } else if (allSelectArray.includes(hoverArray[1] + 'Z')) {
                          hoverArray[0] = hoverArray[0] + 'Z';
                          setAllSelectArray(allSelectArray.concat(hoverArray[0]));
                        } else {
                          setAllSelectArray(allSelectArray.concat(hoverArray));
                        }
                      }
                    }
                  }}
                  onMouseOver={event => {
                    if (
                      adultNum + teenNum === 0 ||
                      allSelectArray.includes(alpha + String(el)) ||
                      allSelectArray.includes(alpha + String(el) + 'Z') ||
                      allSelectArray.length === adultNum + teenNum
                    ) {
                      return;
                    } else if (
                      adultNum + teenNum === 1 ||
                      allSelectArray.length === adultNum + teenNum - 1
                    ) {
                      setHoverArray([alpha + event.target.id]);
                    } else if (adultNum + teenNum >= 2) {
                      if (el % 2 === 0) {
                        setHoverArray([
                          alpha + String(Number(event.target.id) - 1),
                          alpha + event.target.id,
                        ]);
                      } else {
                        setHoverArray([
                          alpha + event.target.id,
                          alpha + String(Number(event.target.id) + 1),
                        ]);
                      }
                    }
                  }}
                  onMouseOut={() => {
                    if (
                      adultNum + teenNum === 0 ||
                      allSelectArray.includes(alpha + String(el)) ||
                      allSelectArray.length === adultNum + teenNum
                    ) {
                      return;
                    }
                    setHoverArray([]);
                  }}
                  id={el}
                  className={`${hoverArray.includes(alpha + String(el)) ? 'on' : 'no'} ${
                    allSelectArray.includes(alpha + String(el)) ||
                    allSelectArray.includes(alpha + String(el) + 'Z')
                      ? 'selected'
                      : 'none'
                  }`}
                  // disblaed={}
                >
                  {el}
                </SeatLast>
              );
            }
          })}
        </div>
      ) : (
        <div>
          <SeatRow style={{ top: `${85 + index * 20}px` }}>{alpha}</SeatRow>

          {[1, 2, 3, 4].map(el => {
            if (booked && booked.includes(alpha + el)) {
              return (
                <SeatOne
                  key={el}
                  style={{
                    left: `${155 + el * 20}px`,
                    top: `${85 + index * 20}px`,
                    backgroundImage:
                      'url("https://img.megabox.co.kr/static/pc/images/common/bg/bg-seat-condition-finish-s.png")',
                  }}
                />
              );
            } else {
              return (
                <SeatOne
                  key={el}
                  style={{
                    left: `${155 + el * 20}px`,
                    top: `${85 + index * 20}px`,
                  }}
                  onClick={event => {
                    let rest = allSelectArray;
                    let elString = rest.indexOf(alpha + String(el));
                    let elStringm = rest.indexOf(alpha + String(el - 1));

                    if (allSelectArray.includes(alpha + String(el) + 'Z')) {
                      let indexZ = allSelectArray.indexOf(alpha + String(el) + 'Z');
                      allSelectArray.splice(indexZ, 1);

                      setAllSelectArray(allSelectArray.slice());
                    } else if (allSelectArray.includes(alpha + String(el))) {
                      if (el % 2 === 1) {
                        allSelectArray.splice(elString, 2);
                        // rest[elString + 1] = '';
                        // rest[elString] = '';
                        setAllSelectArray(allSelectArray.slice());
                      } else {
                        allSelectArray.splice(elStringm, 2);
                        // rest[elString - 1] = '';
                        // rest[elString] = '';
                        setAllSelectArray(allSelectArray.slice());
                      }
                    } else if (allSelectArray.length === adultNum + teenNum) {
                      return;
                    } else {
                      if (hoverArray.length === 1) {
                        hoverArray[0] = hoverArray[0] + 'Z';
                        setAllSelectArray(allSelectArray.concat(hoverArray));
                      } else {
                        if (allSelectArray.includes(hoverArray[0] + 'Z')) {
                          hoverArray[1] = hoverArray[1] + 'Z';
                          setAllSelectArray(allSelectArray.concat(hoverArray[1]));
                        } else if (allSelectArray.includes(hoverArray[1] + 'Z')) {
                          hoverArray[0] = hoverArray[0] + 'Z';
                          setAllSelectArray(allSelectArray.concat(hoverArray[0]));
                        } else {
                          setAllSelectArray(allSelectArray.concat(hoverArray));
                        }
                      }
                    }
                  }}
                  onMouseOver={event => {
                    // if (adultNum + teenNum === 0) {
                    //   return;
                    // } else if (adultNum + teenNum === 1) {
                    //   setHoverArray([event.target.id]);
                    // } else if (adultNum + teenNum >= 2) {
                    //   if (el !== 4) {
                    //     setHoverArray([event.target.id, String(Number(event.target.id) + 1)]);
                    //   } else {
                    //     setHoverArray([event.target.id, String(Number(event.target.id) - 1)]);
                    //   }
                    // }

                    if (
                      adultNum + teenNum === 0 ||
                      allSelectArray.includes(alpha + String(el)) ||
                      allSelectArray.includes(alpha + String(el) + 'Z') ||
                      allSelectArray.length === adultNum + teenNum
                    ) {
                      return;
                    } else if (
                      adultNum + teenNum === 1 ||
                      allSelectArray.length === adultNum + teenNum - 1
                    ) {
                      setHoverArray([alpha + event.target.id]);
                    } else if (adultNum + teenNum >= 2) {
                      if (el % 2 === 0) {
                        setHoverArray([
                          alpha + String(Number(event.target.id) - 1),
                          alpha + event.target.id,
                        ]);
                      } else {
                        setHoverArray([
                          alpha + event.target.id,
                          alpha + String(Number(event.target.id) + 1),
                        ]);
                      }
                    }
                  }}
                  onMouseOut={() => {
                    // setHoverArray([]);
                    if (
                      adultNum + teenNum === 0 ||
                      allSelectArray.includes(alpha + String(el)) ||
                      allSelectArray.length === adultNum + teenNum
                    ) {
                      return;
                    }
                    setHoverArray([]);
                  }}
                  id={el}
                  // className={hoverArray.includes(String(el)) ? 'on' : 'no'}
                  className={`${hoverArray.includes(alpha + String(el)) ? 'on' : 'no'} ${
                    allSelectArray.includes(alpha + String(el)) ||
                    allSelectArray.includes(alpha + String(el) + 'Z')
                      ? 'selected'
                      : 'none'
                  }`}
                >
                  {el}
                </SeatOne>
              );
            }
          })}

          {[5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(el => {
            if (booked && booked.includes(alpha + el)) {
              return (
                <SeatOne
                  key={el}
                  style={{
                    left: `${176 + el * 20}px`,
                    top: `${85 + index * 20}px`,
                    backgroundImage:
                      'url("https://img.megabox.co.kr/static/pc/images/common/bg/bg-seat-condition-finish-s.png")',
                  }}
                />
              );
            } else {
              return (
                <SeatOne
                  key={el}
                  style={{
                    left: `${176 + el * 20}px`,
                    top: `${85 + index * 20}px`,
                  }}
                  onClick={event => {
                    let rest = allSelectArray;
                    let elString = rest.indexOf(alpha + String(el));
                    let elStringm = rest.indexOf(alpha + String(el - 1));
                    if (allSelectArray.includes(alpha + String(el) + 'Z')) {
                      let indexZ = allSelectArray.indexOf(alpha + String(el) + 'Z');
                      allSelectArray.splice(indexZ, 1);
                      setAllSelectArray(allSelectArray.slice());
                    } else if (allSelectArray.includes(alpha + String(el))) {
                      if (el % 2 === 1) {
                        allSelectArray.splice(elString, 2);
                        // rest[elString + 1] = '';
                        // rest[elString] = '';
                        setAllSelectArray(allSelectArray.slice());
                      } else {
                        allSelectArray.splice(elStringm, 2);
                        // rest[elString - 1] = '';
                        // rest[elString] = '';
                        setAllSelectArray(allSelectArray.slice());
                      }
                    } else if (allSelectArray.length === adultNum + teenNum) {
                      return;
                    } else {
                      if (hoverArray.length === 1) {
                        hoverArray[0] = hoverArray[0] + 'Z';
                        setAllSelectArray(allSelectArray.concat(hoverArray));
                      } else {
                        if (allSelectArray.includes(hoverArray[0] + 'Z')) {
                          hoverArray[1] = hoverArray[1] + 'Z';
                          setAllSelectArray(allSelectArray.concat(hoverArray[1]));
                        } else if (allSelectArray.includes(hoverArray[1] + 'Z')) {
                          hoverArray[0] = hoverArray[0] + 'Z';
                          setAllSelectArray(allSelectArray.concat(hoverArray[0]));
                        } else {
                          setAllSelectArray(allSelectArray.concat(hoverArray));
                        }
                      }
                    }
                  }}
                  onMouseOver={event => {
                    // if (adultNum + teenNum === 0) {
                    //   return;
                    // } else if (adultNum + teenNum === 1) {
                    //   setHoverArray([event.target.id]);
                    // } else if (adultNum + teenNum >= 2) {
                    //   if (el !== 16) {
                    //     setHoverArray([event.target.id, String(Number(event.target.id) + 1)]);
                    //   } else {
                    //     setHoverArray([event.target.id, String(Number(event.target.id) - 1)]);
                    //   }
                    // }
                    if (
                      adultNum + teenNum === 0 ||
                      allSelectArray.includes(alpha + String(el)) ||
                      allSelectArray.includes(alpha + String(el) + 'Z') ||
                      allSelectArray.length === adultNum + teenNum
                    ) {
                      return;
                    } else if (
                      adultNum + teenNum === 1 ||
                      allSelectArray.length === adultNum + teenNum - 1
                    ) {
                      setHoverArray([alpha + event.target.id]);
                    } else if (adultNum + teenNum >= 2) {
                      if (el % 2 === 0) {
                        setHoverArray([
                          alpha + String(Number(event.target.id) - 1),
                          alpha + event.target.id,
                        ]);
                      } else {
                        setHoverArray([
                          alpha + event.target.id,
                          alpha + String(Number(event.target.id) + 1),
                        ]);
                      }
                    }
                  }}
                  onMouseOut={() => {
                    if (
                      adultNum + teenNum === 0 ||
                      allSelectArray.includes(alpha + String(el)) ||
                      allSelectArray.length === adultNum + teenNum
                    ) {
                      return;
                    }
                    setHoverArray([]);
                  }}
                  id={el}
                  className={`${hoverArray.includes(alpha + String(el)) ? 'on' : 'no'} ${
                    allSelectArray.includes(alpha + String(el)) ||
                    allSelectArray.includes(alpha + String(el) + 'Z')
                      ? 'selected'
                      : 'none'
                  }`}
                >
                  {el}
                </SeatOne>
              );
            }
          })}

          {[17, 18, 19, 20].map(el => {
            if (booked && booked.includes(alpha + el)) {
              return (
                <SeatOne
                  key={el}
                  style={{
                    left: `${195 + el * 20}px`,
                    top: `${85 + index * 20}px`,
                    backgroundImage:
                      'url("https://img.megabox.co.kr/static/pc/images/common/bg/bg-seat-condition-finish-s.png")',
                  }}
                />
              );
            } else {
              return (
                <SeatOne
                  key={el}
                  style={{
                    left: `${195 + el * 20}px`,
                    top: `${85 + index * 20}px`,
                  }}
                  onClick={event => {
                    let rest = allSelectArray;
                    let elString = rest.indexOf(alpha + String(el));
                    let elStringm = rest.indexOf(alpha + String(el - 1));
                    if (allSelectArray.includes(alpha + String(el) + 'Z')) {
                      let indexZ = allSelectArray.indexOf(alpha + String(el) + 'Z');
                      allSelectArray.splice(indexZ, 1);
                      setAllSelectArray(allSelectArray.slice());
                    } else if (allSelectArray.includes(alpha + String(el))) {
                      if (el % 2 === 1) {
                        allSelectArray.splice(elString, 2);
                        // rest[elString + 1] = '';
                        // rest[elString] = '';
                        setAllSelectArray(allSelectArray.slice());
                      } else {
                        allSelectArray.splice(elStringm, 2);
                        // rest[elString - 1] = '';
                        // rest[elString] = '';
                        setAllSelectArray(allSelectArray.slice());
                      }
                    } else if (allSelectArray.length === adultNum + teenNum) {
                      return;
                    } else {
                      if (hoverArray.length === 1) {
                        hoverArray[0] = hoverArray[0] + 'Z';
                        setAllSelectArray(allSelectArray.concat(hoverArray));
                      } else {
                        if (allSelectArray.includes(hoverArray[0] + 'Z')) {
                          hoverArray[1] = hoverArray[1] + 'Z';
                          setAllSelectArray(allSelectArray.concat(hoverArray[1]));
                        } else if (allSelectArray.includes(hoverArray[1] + 'Z')) {
                          hoverArray[0] = hoverArray[0] + 'Z';
                          setAllSelectArray(allSelectArray.concat(hoverArray[0]));
                        } else {
                          setAllSelectArray(allSelectArray.concat(hoverArray));
                        }
                      }
                    }
                  }}
                  onMouseOver={event => {
                    // if (adultNum + teenNum === 0) {
                    //   return;
                    // } else if (adultNum + teenNum === 1) {
                    //   setHoverArray([event.target.id]);
                    // } else if (adultNum + teenNum >= 2) {
                    //   if (el !== 20) {
                    //     setHoverArray([event.target.id, String(Number(event.target.id) + 1)]);
                    //   } else {
                    //     setHoverArray([event.target.id, String(Number(event.target.id) - 1)]);
                    //   }
                    // }
                    if (
                      adultNum + teenNum === 0 ||
                      allSelectArray.includes(alpha + String(el)) ||
                      allSelectArray.includes(alpha + String(el) + 'Z') ||
                      allSelectArray.length === adultNum + teenNum
                    ) {
                      return;
                    } else if (
                      adultNum + teenNum === 1 ||
                      allSelectArray.length === adultNum + teenNum - 1
                    ) {
                      setHoverArray([alpha + event.target.id]);
                    } else if (adultNum + teenNum >= 2) {
                      if (el % 2 === 0) {
                        setHoverArray([
                          alpha + String(Number(event.target.id) - 1),
                          alpha + event.target.id,
                        ]);
                      } else {
                        setHoverArray([
                          alpha + event.target.id,
                          alpha + String(Number(event.target.id) + 1),
                        ]);
                      }
                    }
                  }}
                  onMouseOut={() => {
                    if (
                      adultNum + teenNum === 0 ||
                      allSelectArray.includes(alpha + String(el)) ||
                      allSelectArray.length === adultNum + teenNum
                    ) {
                      return;
                    }
                    setHoverArray([]);
                  }}
                  id={el}
                  className={`${hoverArray.includes(alpha + String(el)) ? 'on' : 'no'} ${
                    allSelectArray.includes(alpha + String(el)) ||
                    allSelectArray.includes(alpha + String(el) + 'Z')
                      ? 'selected'
                      : 'none'
                  }`}
                >
                  {el}
                </SeatOne>
              );
            }
          })}
        </div>
      )}
    </>
  );
}

export default ScreenRow;
