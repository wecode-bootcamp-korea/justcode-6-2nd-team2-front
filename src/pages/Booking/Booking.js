import React, { useState, createContext, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import MovieSelect from '../../components/Booking/MovieSelect';
import SeatSelect from '../../components/Booking/SeatSelect';
import Payment from '../../components/Booking/Payment';

const InnerWrap = styled.div`
  position: relative;
  height: 800px;
  width: 1100px;
  margin: 0 auto;
  padding-top: 40px;
  padding-bottom: 100px;
`;

const Context2 = createContext({
  adultNum: 0,
  setAdultNum: () => {},
  teenNum: 0,
  setTeenNum: () => {},
});

const Context3 = createContext({
  allSelectArray: [],
  setAllSelectArray: () => {},
});

const Context4 = createContext({
  movieIdArray: [],
  setMovieIdArray: () => {},
});

const Context5 = createContext({
  theaterIdArray: [],
  setTheaterIdArray: () => {},
});

const Context6 = createContext({
  selectDate: '',
  setSelectDate: () => {},
});

const Context7 = createContext({
  areaIdArray: '',
  setAreaIdArray: () => {},
});

const Context8 = createContext({
  resultData: '',
  setResultData: () => {},
});

const Context10 = createContext({
  theaterSelect: '',
  setTheaterSelect: () => {},
});

function Booking() {
  const [adultNum, setAdultNum] = useState(0);
  const [teenNum, setTeenNum] = useState(0);
  const [allSelectArray, setAllSelectArray] = useState([]);

  const [movieIdArray, setMovieIdArray] = useState([]);
  const [theaterIdArray, setTheaterIdArray] = useState([]);
  const [areaIdArray, setAreaIdArray] = useState('');
  const [selectDate, setSelectDate] = useState(new window.Date());
  const [resultData, setResultData] = useState();
  const [theaterSelect, setTheaterSelect] = useState();

  useEffect(() => {
    let year = String(selectDate.getFullYear()).substring(2);
    let month =
      Number(selectDate.getMonth()) + 1 >= 10
        ? String(Number(selectDate.getMonth()) + 1)
        : '0' + (Number(selectDate.getMonth()) + 1);
    let date =
      Number(selectDate.getDate()) >= 10
        ? String(Number(selectDate.getDate()))
        : '0' + Number(selectDate.getDate());

    let url = `date=${year + month + date}`;

    for (let i = 0; i < movieIdArray.length; i++) {
      url = url + `&movieId=${movieIdArray[i]}`;
    }

    if (areaIdArray) {
      url = url + `&areaId=${areaIdArray}`;
    }

    for (let i = 0; i < theaterIdArray.length; i++) {
      url = url + `&theaterId=${theaterIdArray[i]}`;
    }

    fetch(`http://localhost:10010/booking/schedule?${url}`, {
      method: 'get',
    })
      .then(res => res.json())
      .then(data => {
        setResultData(data);
      });
  }, [movieIdArray, theaterIdArray, areaIdArray, selectDate]);

  return (
    <>
      <Context2.Provider value={{ adultNum, setAdultNum, teenNum, setTeenNum }}>
        <Context3.Provider value={{ allSelectArray, setAllSelectArray }}>
          <Context4.Provider value={{ movieIdArray, setMovieIdArray }}>
            <Context5.Provider value={{ theaterIdArray, setTheaterIdArray }}>
              <Context6.Provider value={{ selectDate, setSelectDate }}>
                <Context7.Provider value={{ areaIdArray, setAreaIdArray }}>
                  <Context8.Provider value={{ resultData, setResultData }}>
                    <Context10.Provider value={{ theaterSelect, setTheaterSelect }}>
                      <InnerWrap>
                        <Routes>
                          <Route path='/' element={<MovieSelect />} />
                          <Route path='Seat' element={<SeatSelect />} />
                          <Route path='Payment' element={<Payment />} />
                        </Routes>
                      </InnerWrap>
                    </Context10.Provider>
                  </Context8.Provider>
                </Context7.Provider>
              </Context6.Provider>
            </Context5.Provider>
          </Context4.Provider>
        </Context3.Provider>
      </Context2.Provider>
    </>
  );
}

export default Booking;
export const CountContext = Context2;
export const AllContext = Context3;

export const MovieContext = Context4;
export const TheaterContext = Context5;
export const DateContext = Context6;
export const AreaContext = Context7;
export const ResultContext = Context8;
export const TheaterSelectContext = Context10;
