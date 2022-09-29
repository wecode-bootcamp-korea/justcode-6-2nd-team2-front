import React, { useState, createContext, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import TimeSelect from '../../components/TimeTable/TimeSelect';

const InnerWrap = styled.div`
  position: relative;
  height: 100%;
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

const Context9 = createContext({
  scheduleId: '',
  setScheduleId: () => {},
});

const Context10 = createContext({
  theaterSelect: '',
  setTheaterSelect: () => {},
});

const Context11 = createContext({
  navOn: 'movie',
  setNavOn: () => {},
});

const Context12 = createContext({
  movieName: '',
  setMovieName: () => {},
});

const Context13 = createContext({
  theaterNames: '',
  setTheaterNames: () => {},
});

function TimeTable() {
  const [adultNum, setAdultNum] = useState(0);
  const [teenNum, setTeenNum] = useState(0);
  const [allSelectArray, setAllSelectArray] = useState([]);

  const [movieIdArray, setMovieIdArray] = useState([]);
  const [theaterIdArray, setTheaterIdArray] = useState([]);
  const [areaIdArray, setAreaIdArray] = useState(1);
  const [selectDate, setSelectDate] = useState(new window.Date());
  const [resultData, setResultData] = useState();
  const [theaterSelect, setTheaterSelect] = useState();

  const [navOn, setNavOn] = useState('movie');

  const [movieName, setMovieName] = useState('');
  const [theaterNames, setTheaterNames] = useState('');

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
        console.log(url);
        console.log(data);
        console.log(theaterIdArray);
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
                    {/* <Context9.Provider value={{ scheduleId, setScheduleId }}> */}
                    <Context10.Provider value={{ theaterSelect, setTheaterSelect }}>
                      <Context11.Provider value={{ navOn, setNavOn }}>
                        <Context12.Provider value={{ movieName, setMovieName }}>
                          <Context13.Provider value={{ theaterNames, setTheaterNames }}>
                            <InnerWrap>
                              <Routes>
                                <Route path='/' element={<TimeSelect />} />
                              </Routes>
                            </InnerWrap>
                          </Context13.Provider>
                        </Context12.Provider>
                      </Context11.Provider>
                    </Context10.Provider>
                    {/* </Context9.Provider> */}
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

export default TimeTable;
export const CountContext = Context2;
export const AllContext = Context3;

export const MovieContext = Context4;
export const TheaterContext = Context5;
export const DateContext = Context6;
export const AreaContext = Context7;
export const ResultContext = Context8;
// export const ScheduleContext = Context9;
export const TheaterSelectContext = Context10;
export const OnOffContext = Context11;
export const MovieNameContext = Context12;
export const TheaterNameContext = Context13;
