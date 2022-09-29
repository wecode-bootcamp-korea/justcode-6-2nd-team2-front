// /* eslint-disable */
import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

import { ResultContext } from '../../../pages/TimeTable/TimeTable';

import { ScheduleContext } from '../../../pages/Router';

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
