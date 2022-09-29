import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';

import {
  AreaContext,
  ResultContext,
  TheaterContext,
  MovieContext,
} from '../../../pages/Booking/Booking';

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
  div {
    height: 100%;
  }
  i {
    display: block;
    margin: 0 auto;
    width: 46px;
    height: 46px;
    background-image: url(https://img.megabox.co.kr/static/pc/images/common/ico/ico-movie-time.png);
  }
`;

const None = styled.div`
  height: 100%;
  padding: 150px 0 0 0;
`;

const Ul = styled.ul`
  height: 100%;
  list-style-type: none;
  margin: 0;
  overflow: hidden;
  padding: 0;
  font-size: 0;
  line-height: 0;
  vertical-align: middle;
  background-position: 0 0;
  background-repeat: no-repeat;
`;

function MovieSchedule({ type, select }) {
  const [array, setArray] = useState([]);

  const { resultData, setResultData } = useContext(ResultContext);
  const { theaterIdArray, setTheaterIdArray } = useContext(TheaterContext);
  const { movieIdArray, setMovieIdArray } = useContext(MovieContext);

  useEffect(() => {
    if (resultData) {
      if (resultData.data.timeTables) {
        setArray(resultData.data.timeTables);
      } else {
        setArray([]);
      }
    }
  }, [resultData, theaterIdArray, movieIdArray]);

  return (
    <>
      <Area>
        <ResultWrapper>
          <Result>
            <ListWrapper>
              <List>
                {array.length === 0 && (
                  <None>
                    <i />

                    <p>
                      영화와 극장을 선택하시면
                      <br />
                      상영시간표를 비교하여 볼 수 있습니다.
                    </p>
                  </None>
                )}
                {array.length !== 0 && (
                  <Ul>
                    {array.map(el => {
                      if (Number(el.start_time.substring(0, 2)) >= Number(select)) {
                        return (
                          <MovieScheduleOne
                            key={el.schedule_id}
                            title={el.title}
                            theaterName={el.theater_name}
                            screenName={el.screen_name}
                            startTime={el.start_time}
                            endTime={el.end_time}
                            totalSeat={el.total_seat}
                            bookedSeat={el.booked_seat}
                            id={el.schedule_id}
                          />
                        );
                      }
                    })}
                  </Ul>
                )}
              </List>
            </ListWrapper>
          </Result>
        </ResultWrapper>
      </Area>
    </>
  );
}

export default MovieSchedule;
