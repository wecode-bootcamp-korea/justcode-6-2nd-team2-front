import React from 'react';

import styled from 'styled-components';

function MovieBook() {
  return (
    <>
      <Book>예매</Book>
    </>
  );
}

const Book = styled.button`
  width: 63%;
  height: 36px;

  line-height: 36px;

  background: #006633;
  border: none;
  border-radius: 4px;

  text-align: center;
  color: white;
  font-size: 15px;
  font-weight: 400;

  &:hover {
    background-color: #004433;
    cursor: pointer;
  }
`;

export default MovieBook;
