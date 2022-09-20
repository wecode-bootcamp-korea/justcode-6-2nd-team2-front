import React from 'react';
import styled from 'styled-components';

import MovieSelect from '../../components/Booking/MovieSelect';

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
        <MovieSelect />
      </InnerWrap>
    </>
  );
}

export default Booking;
