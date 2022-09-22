import React from 'react';
import styled from 'styled-components';
import ScrollContainer from './ScrollContainer';

const ReserveAreaWrapper = styled.div`
  border: 1px solid #d8d9db;
  border-top: 0;
`;

function ReserveArea() {
  return (
    <>
      <ReserveAreaWrapper>
        <ScrollContainer type='movie' />
        <ScrollContainer type='theater' />
        <ScrollContainer type='time' />
      </ReserveAreaWrapper>
    </>
  );
}

export default ReserveArea;
