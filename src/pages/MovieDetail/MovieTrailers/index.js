import React from 'react';
import Stillcut from './Stillcut';
import Trailer from './Trailer';
import styled from 'styled-components';

function MovieTrailers() {
  return (
    <>
      <Title>예고편(5) | 스틸컷(28)</Title>
      <Trailer />
      <Stillcut />
    </>
  );
}
const Title = styled.div`
  color: #444;
  font-size: 15px;
  font-weight: 400px;
  margin-top: 40px;
`;
export default MovieTrailers;
