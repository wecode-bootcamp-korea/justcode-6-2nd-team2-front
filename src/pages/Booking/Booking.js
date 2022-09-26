import React, { useState, createContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import MovieSelect from '../../components/Booking/MovieSelect';
import SeatSelect from '../../components/Booking/SeatSelect';
import Payment from '../../components/Booking/Payment';

const InnerWrap = styled.div`
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

function Booking() {
  const [adultNum, setAdultNum] = useState(0);
  const [teenNum, setTeenNum] = useState(0);
  const [allSelectArray, setAllSelectArray] = useState([]);

  return (
    <>
      <Context2.Provider value={{ adultNum, setAdultNum, teenNum, setTeenNum }}>
        <Context3.Provider value={{ allSelectArray, setAllSelectArray }}>
          <InnerWrap>
            <Routes>
              <Route path='/' element={<MovieSelect />} />
              <Route path='Seat' element={<SeatSelect />} />
              <Route path='Payment' element={<Payment />} />
            </Routes>
          </InnerWrap>
        </Context3.Provider>
      </Context2.Provider>
    </>
  );
}

export default Booking;
export const CountContext = Context2;
export const AllContext = Context3;
