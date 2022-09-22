import React from 'react';
import styled from 'styled-components';

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
  width: 20px;
  height: 18px;
  font-size: 0.7333em;
  color: white;
  vertical-align: middle;
  border: 1px solid #ccc;
  background-color: #747474;
  background-image: url(https://img.megabox.co.kr/static/pc/images/common/bg/bg-seat-condition-common.png);
  padding: 0;
`;

function ScreenRow({ alpha, index }) {
  return (
    <>
      <div>
        <SeatRow style={{ top: `${85 + index * 20}px` }}>{alpha}</SeatRow>
        {[1, 2, 3, 4].map(el => {
          return (
            <SeatOne key={el} style={{ left: `${160 + el * 20}px`, top: `${85 + index * 20}px` }}>
              {el}
            </SeatOne>
          );
        })}

        {[5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(el => {
          return (
            <SeatOne key={el} style={{ left: `${180 + el * 20}px`, top: `${85 + index * 20}px` }}>
              {el}
            </SeatOne>
          );
        })}

        {[17, 18, 19, 20].map(el => {
          return (
            <SeatOne key={el} style={{ left: `${200 + el * 20}px`, top: `${85 + index * 20}px` }}>
              {el}
            </SeatOne>
          );
        })}
      </div>
    </>
  );
}

export default ScreenRow;
