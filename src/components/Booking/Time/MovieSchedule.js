import React, { useState } from 'react';
import styled from 'styled-components';

import MovieScheduleOne from './MovieScheduleOne';

const Area = styled.div`
  overflow: hidden;
  margin-top: 10px;
  height: 430px;
  background-color: #fff;
`;

const ResultWrapper = styled.div`
  height: 100%;
  padding: 0;
  text-align: center;
`;
const Result = styled.div`
  height: 100%;
  text-align: center;
  touch-action: auto;
`;

const ListWrapper = styled.div`
  position: relative;
  overflow-y: scroll;
  height: 100%;
  max-width: 100%;
  outline: 0;
  direction: ltr;
  max-height: none;
  &::-webkit-scrollbar {
    width: 5px; /*스크롤바의 너비*/
  }

  &::-webkit-scrollbar-thumb {
    background-color: #444; /*스크롤바의 색상*/
  }

  &::-webkit-scrollbar-track {
    background-color: #ebebeb; /*스크롤바 트랙 색상*/
  }
`;

const List = styled.div`
  position: relative;
  top: 0;
  left: 0;
  margin-right: 5px;

  width: auto;
  height: auto;
`;

const Ul = styled.ul`
  height: 100%;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

function MovieSchedule() {
  const [array, setArray] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  return (
    <>
      <Area>
        <ResultWrapper>
          <Result>
            <ListWrapper>
              <List>
                <Ul>
                  {array.map(el => {
                    return <MovieScheduleOne key={el} />;
                  })}
                </Ul>
              </List>
            </ListWrapper>
          </Result>
        </ResultWrapper>
      </Area>
    </>
  );
}

export default MovieSchedule;
