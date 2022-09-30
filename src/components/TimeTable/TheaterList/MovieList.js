import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';

import MovieOne from './MovieOne';

import {
  ResultContext,
  MovieContext,
  AreaContext,
  DateContext,
  TheaterContext,
} from '../../../pages/TimeTable/TimeTable';

import { ScheduleContext } from '../../../pages/Router';

const ContainerWrapper = styled.div`
  width: 100%;
  display: table;
  border-top: 0;
  position: relative;
`;

const Container = styled.div`
  position: relative;
  margin-bottom: 30px !important;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 35px;
    width: 100%;
    height: 1px;
    background-color: #d8d9db;
  }
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    &::before {
      content: '';
      display: table;
    }
  }
  li {
    border-color: #555;
    border-left: 1px solid #d8d9db;
    position: relative;
    float: left;
    width: 137px;
    border: 1px solid #d8d9db;
    list-style-type: none;
    a {
      color: #fff;
      background-color: #555;
      display: block;
      width: 100%;
      height: 34px;
      margin: 0;
      padding: 0;
      border: 0;
      line-height: 34px;
      text-align: center;
      text-decoration: none;
      cursor: pointer;
    }
  }
`;

const Theater = styled.div`
  position: relative;
  margin-bottom: 30px;
`;

const AreaName = styled.div`
  padding: 16px 0 15px 0;
  border-bottom: 1px solid #eaeaea;
  border-top: 1px solid #eaeaea;
  font-weight: 700;
  font-size: 1.2em;
  background-color: #f7f8f9;
  a {
    color: #666;
    text-decoration: none;
    background-color: transparent;
    font-weight: 700;
    font-size: 1.2em;
  }
`;

const Box = styled.div`
  overflow: hidden;
  width: 100%;
  position: relative;
  border-bottom: 1px solid #eaeaea;
  height: 80px;
  margin-top: 10px;
`;

const Type = styled.div`
  text-align: left;
  width: 170px;
  display: table-cell;
  vertical-align: middle;
  top: 20px;
  left: 0;
  padding: 0 !important;
  float: left;
  margin-top: 15px;
`;

const TheaterName = styled.div`
  font-size: 1.2em;
  color: #444;
  font-weight: 400;
  margin-bottom: 10px;
  line-height: 1em;
  padding: 0;
  margin-bottom: 10px;
  text-align: left;
`;

const Chair = styled.p`
  color: #666;
  margin-bottom: 10px;
  line-height: 1em;
  padding: 0;
  margin: 0;
`;

const Time = styled.p`
  width: 100%;
  margin-left: 190px;
`;

const TypeArea = styled.div`
  display: table-cell;
  vertical-align: middle;
  width: 100px;
  background-color: #f2f4f5;
  text-align: center;
  color: #444;
  font-weight: 700;
  border-bottom: 0;
  margin-right: 10px;
  height: 70px;
`;
const Timebox = styled.div`
  display: table-cell;
  width: 800px;
  table {
    border-top: 1px solid #ebebeb;
    border-left: 1px solid #ebebeb;
    margin-left: 9px;
    width: auto;
    table-layout: auto;
    margin: 0;
    border: 0;
    border-collapse: collapse;
    empty-cells: show;
    text-indent: initial;
    border-spacing: 2px;
    display: table;
    tbody {
      display: table-row-group;
      vertical-align: middle;
      border-color: inherit;
      border-collapse: collapse;
      empty-cells: show;
      tr {
        display: table-row;
        vertical-align: inherit;
        border-color: inherit;
        border-collapse: collapse;
        empty-cells: show;
      }
    }
  }
`;

const TdAb = styled.div`
  width: 100%;
  height: 69px;
  display: table;
  text-align: center;
`;

const Center = styled.p`
  float: left;
  padding: 0;
  margin: 3px 5px 0 15px;
  font-weight: 400;
  background-size: 23px 23px;
  overflow: hidden;
  display: inline-block;
  width: 23px;
  height: 23px;
  text-indent: -9999px;
  background-position: center;
  background-repeat: no-repeat;
`;

const NoLocation = styled.div`
  display: block;
  padding: 100px 0 0 0;
  text-align: center;
  background: url(https://img.megabox.co.kr/static/pc/images/reserve/bg-re-img-film.png) top center
    no-repeat;
`;

const NoLocationInner = styled.div`
  text-align: center;
`;

function MovieList() {
  const [hover, setHover] = useState('');

  const { resultData, setResultData } = useContext(ResultContext);
  const { areaIdArray, setAreaIdArray } = useContext(AreaContext);
  const { scheduleId, setScheduleId } = useContext(ScheduleContext);
  const { selectDate, setSelectDate } = useContext(DateContext);
  const { theaterIdArray, setTheaterIdArray } = useContext(TheaterContext);

  const [data, setData] = useState([]);
  const [timeTableData, setTimeTableData] = useState([]);
  const [movieData, setMovieData] = useState([]);

  const [tab, setTab] = useState('서울');

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    let test = [];
    let test2 = [];
    if (resultData) {
      if (resultData.data.timeTables) {
        setTimeTableData(resultData.data.timeTables);

        outer: for (let i = 0; i < resultData.data.timeTables.length; i++) {
          inner: for (let j = 0; j < test2.length; j++) {
            if (
              test2[j].title === resultData.data.timeTables[i].title &&
              test2[j].screen_name === resultData.data.timeTables[i].screen_name
            ) {
              continue outer;
            }
          }
          let imsi = {
            id: i,
            title: resultData.data.timeTables[i].title,
            screen_name: resultData.data.timeTables[i].screen_name,
          };
          test2.push(imsi);
        }

        const set = new Set(test2);
        const arr = [...set];

        outer2: for (let i = 0; i < arr.length - 1; i++) {
          for (let j = i + 1; j < arr.length; j++) {
            if (arr[i].title === arr[j].title) {
              if (Number(arr[i].screen_name.slice(0, 1)) > Number(arr[j].screen_name.slice(0, 1))) {
                let imsi2 = arr[i];
                arr[i] = arr[j];
                arr[j] = imsi2;
              }
              continue outer2;
            }
          }
        }

        console.log(arr);
        setMovie(arr);
        for (let i = 0; i < resultData.data.movies.length; i++) {
          for (let j = 0; j < resultData.data.timeTables.length; j++) {
            if (resultData.data.movies[i].title === resultData.data.timeTables[j].title) {
              test.push(resultData.data.movies[i]);
              break;
            }
          }
        }

        // console.log(resultData);
        // if (resultData.data.timeTables) {
        //   setTimeTableData(resultData.data.timeTables);
        //   for (let i = 0; i < resultData.data.movies.length; i++) {
        //     for (let j = 0; j < resultData.data.timeTables.length; j++) {
        //       if (resultData.data.movies[i].title === resultData.data.timeTables[j].title) {
        //         test.push(resultData.data.movies[i]);
        //         break;
        //       }
        //     }
        //   }
      } else {
        setTimeTableData([]);
      }

      setMovieData(test);
    }
  }, [resultData]);

  return (
    <>
      <ContainerWrapper>
        {timeTableData.length === 0 && (
          <NoLocation>
            <NoLocationInner />
            해당 지역에 상영 시간표가 없습니다. 다른지역을 선택해 주세요.
          </NoLocation>
        )}
        {timeTableData.length !== 0 && (
          <>
            {movieData.map(ele => {
              return (
                <Theater key={ele.movie_id}>
                  <AreaName>
                    <Center style={{ backgroundImage: `url(${ele.grade_image})` }} />
                    <a href={`../moviedetail/${ele.movie_id}`}>{ele.title}</a>
                  </AreaName>
                  {movie.map(el => {
                    if (ele.title === el.title) {
                      return (
                        <Box key={el.id}>
                          <Type>
                            <TheaterName>{el.screen_name}</TheaterName>
                            <Chair>총 100석</Chair>
                          </Type>
                          <Time>
                            <TypeArea>2D</TypeArea>
                            <Timebox>
                              <table>
                                <tbody>
                                  <tr style={{ display: 'flex' }}>
                                    <MovieOne
                                      ele={ele.title}
                                      timeTableData={timeTableData}
                                      screenName={el.screen_name}
                                    />
                                  </tr>
                                </tbody>
                              </table>
                            </Timebox>
                          </Time>
                        </Box>
                      );
                    }
                  })}
                </Theater>
              );
            })}
          </>
        )}
      </ContainerWrapper>
    </>
  );
}

export default MovieList;
