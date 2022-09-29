// /* eslint-disable */
import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';

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
    let test = [];
    let test2 = [];
    if (resultData) {
      setData(resultData.data.areas);
      if (resultData.data.timeTables) {
        setTimeTableData(resultData.data.timeTables);

        for (let i = 0; i < resultData.data.timeTables.length; i++) {
          test2.push(resultData.data.timeTables[i].screen_name);
        }

        const set = new Set(test2);
        const newArr = [...set];

        for (let i = 0; i < resultData.data.theaters.length; i++) {
          for (let j = 0; j < resultData.data.timeTables.length; j++) {
            if (
              resultData.data.theaters[i].theater_name ===
              resultData.data.timeTables[j].theater_name
            ) {
              test.push(resultData.data.theaters[i]);
              break;
            }
          }
        }
      } else {
        setTimeTableData([]);
      }

      setTheaterData(test);
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
        </ContainerWrapper>
      )}
    </>
  );
}

export default TheaterList;
