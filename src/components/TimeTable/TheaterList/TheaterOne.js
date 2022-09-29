// /* eslint-disable */
import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

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

const TheaterList = styled.div`
  position: relative;
`;

const AreaName = styled.div`
  padding: 38px 0 15px 0;
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
  margin: 0;
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

const Center = styled.div`
  display: table-cell;
  vertical-align: middle;
  position: relative;
  a {
    display: inline-block;
    padding-top: 13px;
    width: 95px;
    height: 95%;
    color: #666;
    text-decoration: none;
    outline: 1px dotted #e1c8c8;
    background-color: transparent;
    cursor: pointer;
  }
`;

function TheaterOne({ ele, timeTableData }) {
  const [hover, setHover] = useState('');

  const { resultData, setResultData } = useContext(ResultContext);
  const { scheduleId, setScheduleId } = useContext(ScheduleContext);

  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    if (resultData) {
      setTableData(timeTableData);
    }
  }, [resultData]);

  return (
    <>
      {timeTableData && (
        <>
          {timeTableData.map(el => {
            if (ele === el.theater_name) {
              return (
                <td key={el.schedule_id}>
                  <TdAb>
                    <Center>
                      <Link
                        to='../Booking/Seat'
                        id={el.schedule_id}
                        style={{
                          marginLeft: '10px',
                          backgroundColor: el.schedule_id === hover ? '#503396' : 'transparent',
                        }}
                        onMouseOver={event => setHover(el.schedule_id)}
                        onMouseOut={() => setHover('')}
                        onClick={() => setScheduleId(el.schedule_id)}
                      >
                        <Time
                          style={{
                            marginLeft: '0px',
                            color: el.schedule_id === hover ? 'white' : '#444',
                          }}
                        >
                          {el.schedule_id === hover
                            ? `${el.start_time}~${el.end_time}`
                            : el.start_time}
                        </Time>
                        <Chair
                          style={{
                            color: el.schedule_id === hover ? 'white' : '#444',
                          }}
                        >
                          {el.schedule_id === hover
                            ? `${Number(el.total_seat) - Number(el.booked_seat)}/${el.total_seat}석`
                            : `${el.total_seat}석`}
                        </Chair>
                      </Link>
                    </Center>
                  </TdAb>
                </td>
              );
            } else {
              return;
            }
          })}
        </>
      )}
    </>
  );
}

export default TheaterOne;
