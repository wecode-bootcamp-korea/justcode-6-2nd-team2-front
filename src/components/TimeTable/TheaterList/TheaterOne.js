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
  margin-left: -9px;
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

const Icon = styled.p`
  position: absolute;
  overflow: hidden;
  display: inline-block;
  padding-left: 33px;
  height: 30px;
  vertical-align: middle;
  background-position: 14px 6px;
  background-repeat: no-repeat;
  background-image: ${props => {
    if (props.img === 'sun') {
      return 'url(https://img.megabox.co.kr/static/pc/images/common/ico/ico-greeting-option-sun.png)';
    } else if (props.img === 'brunch') {
      return 'url(https://img.megabox.co.kr/static/pc/images/common/ico/ico-time-brunch.png)';
    } else if (props.img === 'moon') {
      return 'url(https://img.megabox.co.kr/static/pc/images/common/ico/ico-greeting-option-moon.png)';
    }
  }};
`;

function TheaterOne({ ele, timeTableData, screenName }) {
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
            if (ele === el.theater_name && screenName === el.screen_name) {
              return (
                <td key={el.schedule_id}>
                  <TdAb>
                    <Center>
                      <Icon
                        title='조조'
                        img={
                          el.schedule_id === hover
                            ? 'none'
                            : Number(el.start_time.slice(0, 2)) < 12
                            ? 'sun'
                            : Number(el.start_time.slice(0, 2)) > 21
                            ? 'moon'
                            : 'none'
                        }
                      />
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
                          {/* <Icon img='sun' title='조조' /> */}
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
