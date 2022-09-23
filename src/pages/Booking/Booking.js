import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import MovieSelect from '../../components/Booking/MovieSelect';
import SeatSelect from '../../components/Booking/SeatSelect';

const InnerWrap = styled.div`
  width: 1100px;
  margin: 0 auto;
  padding-top: 40px;
  padding-bottom: 100px;
`;

function Booking() {
  return (
    <>
      <InnerWrap>
        <Routes>
          <Route path='/' element={<MovieSelect />} />
          <Route path='Seat' element={<SeatSelect />} />
        </Routes>
      </InnerWrap>
    </>
  );
}

export default Booking;
