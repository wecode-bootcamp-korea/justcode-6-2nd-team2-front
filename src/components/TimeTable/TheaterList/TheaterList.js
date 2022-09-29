// /* eslint-disable */
import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

import TheaterOne from './TheaterOne';

import { ResultContext, MovieContext, AreaContext } from '../../../pages/TimeTable/TimeTable';

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
  font-weight: 700;
  font-size: 1.2em;
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

function TheaterList() {
  const [hover, setHover] = useState('');

  const { resultData, setResultData } = useContext(ResultContext);
  const { movieIdArray, setMovieIdArray } = useContext(MovieContext);
  const { areaIdArray, setAreaIdArray } = useContext(AreaContext);
  const { scheduleId, setScheduleId } = useContext(ScheduleContext);

  const [data, setData] = useState([]);
  const [timeTableData, setTimeTableData] = useState([]);
  const [theaterData, setTheaterData] = useState([]);

  const [tab, setTab] = useState('서울');

  useEffect(() => {
    if (resultData) {
      setData(resultData.data.areas);
      if (resultData.data.timeTables) {
        setTimeTableData(resultData.data.timeTables);
      } else {
        setTimeTableData([]);
      }

      setTheaterData(resultData.data.theaters);
    }
  }, [resultData]);

  return (
    <>
      {data && (
        <ContainerWrapper>
          <Container>
            <ul>
              {data.map(el => {
                return (
                  <li key={el.id}>
                    <a
                      id={el.id}
                      onClick={() => {
                        setTab(el.area_name);
                        setAreaIdArray(el.id);
                      }}
                      style={{
                        backgroundColor: el.area_name === tab ? '#555' : 'transparent',
                        color: el.area_name === tab ? 'white' : '#666',
                      }}
                    >
                      {el.area_name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </Container>
          {timeTableData.length !== 0 && (
            <>
              {theaterData.map(ele => {
                return (
                  <Theater key={ele.theater_id}>
                    <AreaName>
                      <a>{ele.theater_name}</a>
                    </AreaName>
                    <Box>
                      <Type>
                        <TheaterName>5관</TheaterName>
                        <Chair>총 100석</Chair>
                      </Type>
                      <Time>
                        <TypeArea>2D</TypeArea>
                        <Timebox>
                          <table>
                            <tbody>
                              <tr style={{ display: 'flex' }}>
                                <TheaterOne ele={ele.theater_name} timeTableData={timeTableData} />
                                {/* {timeTableData.map(el => {
                                  if (ele.theater_name === el.theater_name) {
                                    return (
                                      <td key={el.schedule_id}>
                                        <TdAb>
                                          <Center>
                                            <Link
                                              to='Seat'
                                              id={el.schedule_id}
                                              style={{
                                                marginLeft: '10px',
                                                backgroundColor:
                                                  el === hover ? '#503396' : 'transparent',
                                              }}
                                              onMouseOver={event => setHover(el.schedule_id)}
                                              onMouseOut={() => setHover('')}
                                              onClick={() => setScheduleId(el.schedule_id)}
                                            >
                                              <Time
                                                style={{
                                                  marginLeft: '0px',
                                                  color:
                                                    el.schedule_id === hover ? 'white' : '#444',
                                                }}
                                              >
                                                {el.schedule_id === hover
                                                  ? `${el.start_time}~${el.end_time}`
                                                  : el.start_time}
                                              </Time>
                                              <Chair
                                                style={{
                                                  color:
                                                    el.schedule_id === hover ? 'white' : '#444',
                                                }}
                                              >
                                                {el.schedule_id === hover
                                                  ? `${
                                                      Number(el.total_seat) - Number(el.booked_seat)
                                                    }/${el.total_seat}석`
                                                  : `${el.total_seat}석`}
                                              </Chair>
                                            </Link>
                                          </Center>
                                        </TdAb>
                                      </td>
                                    );
                                  }
                                })} */}
                              </tr>
                            </tbody>
                          </table>
                        </Timebox>
                      </Time>
                    </Box>
                  </Theater>
                );
              })}
            </>
          )}

          {/* <Theater>
          <AreaName>
            <a href=''>강남</a>
          </AreaName>
          <Box>
            <Type>
              <TheaterName>1관</TheaterName>
              <Chair>총 223석</Chair>
            </Type>
            <Time>
              <TypeArea>3D(자막)</TypeArea>
              <Timebox>
                <table>
                  <tbody>
                    <tr style={{ display: 'flex' }}>
                      {[4, 5, 6].map(el => {
                        return (
                          <td>
                            <TdAb>
                              <Center>
                                <a
                                  key={el}
                                  href=''
                                  id={el}
                                  style={{
                                    marginLeft: '10px',
                                    backgroundColor: el === hover ? '#503396' : 'transparent',
                                  }}
                                  onMouseOver={event => setHover(el)}
                                  onMouseOut={() => setHover('')}
                                >
                                  <Time
                                    style={{
                                      marginLeft: '0px',
                                      color: el === hover ? 'white' : '#444',
                                    }}
                                  >
                                    {el === hover ? '11:30~14:57' : '11:30'}
                                  </Time>
                                  <Chair
                                    style={{
                                      color: el === hover ? 'white' : '#444',
                                    }}
                                  >
                                    {el === hover ? '200/225석' : '225석'}
                                  </Chair>
                                </a>
                              </Center>
                            </TdAb>
                          </td>
                        );
                      })}
                    </tr>
                  </tbody>
                </table>
              </Timebox>
            </Time>
          </Box>
        </Theater> */}
        </ContainerWrapper>
      )}
    </>
  );
}

export default TheaterList;
