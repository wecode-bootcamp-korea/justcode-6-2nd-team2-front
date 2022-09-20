import React, { useState } from 'react';
import styled from 'styled-components';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/esm/locale';
import 'react-datepicker/dist/react-datepicker.css';

import { addDays } from 'date-fns';

import './Schedule.scss';

const ScheduleWrapper = styled.div`
  width: 100%;
`;

const Wrap = styled.div`
  position: relative;
  height: 40px;
  border-top: 1px solid #555;
  border-left: 1px solid #d8d9db;
  border-right: 1px solid #d8d9db;
  border-bottom: 1px solid #d8d9db;
`;

const List = styled.div`
  width: 1016px;
  overflow: hidden;
  float: left;
  height: 39px;
  padding-right: 4px;
`;

const Year = styled.div`
  position: absolute;
  z-index: 1;
  opacity: 1;
  left: 38px;
  top: 0;
  width: 70px;
  height: 20px;
  line-height: 18px;
  margin-top: -10px;
  border-radius: 10px;
  border: 1px solid #d8d9db;
  text-align: center;
  background-color: #fff;
  font-family: Roboto;
  font-weight: 300;
  font-size: 0.8667em;
`;

const Date = styled.div`
  height: 39px;
  float: left;
  padding-left: 20px;
  padding-right: 20px;
`;

const BtnCalendar = styled.button`
  width: 50px;
  height: 40px;
  cursor: pointer;
  border: none;
  background: url('https://img.megabox.co.kr/static/pc/images/common/ico/ico-calendar-w20.png')
    no-repeat center;
  border-left: 1px solid #d8d9db;
`;

const CalWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 39px;
  display: ${props => {
    if (props.img) {
      return 'block';
    } else if (!props.img) {
      return 'none';
    }
  }};
`;

function Schedule() {
  const [cal, setCal] = useState(false);
  const [select, setSelect] = useState('1');

  const weekArr = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
  ];

  let dateTime = new window.Date();
  const [startDate, setStartDate] = useState(dateTime);

  return (
    <>
      <ScheduleWrapper>
        <Wrap>
          <List>
            <div style={{ position: 'fixed', zIndex: '800' }}>
              <Year>2022.09</Year>
            </div>
            <Date>
              <Swiper
                navigation={true}
                slidesPerView={14}
                modules={[Navigation]}
                className='mySwiper'
                style={{
                  margin: '0 0 0 20px',
                  width: '959px',
                  overflow: 'visible',
                }}
              >
                {weekArr.map(element => {
                  return (
                    <SwiperSlide
                      key={element}
                      onClick={() => setSelect(element)}
                      id={element}
                      className={element === select ? 'set-active' : 'all'}
                    >
                      {element} 토
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </Date>
          </List>

          <div style={{ display: 'flex', verticalAlign: 'top', padding: '0 0 0 34px' }}>
            <BtnCalendar onClick={() => setCal(!cal)} />
          </div>
          <CalWrapper img={cal}>
            <DatePicker
              locale={ko}
              selected={startDate}
              onChange={date => {
                setStartDate(date);
                setCal(!cal);
              }}
              showMonthAfterYear={true}
              onSelect
              disabledKeyboardNavigation
              highlightDates={[
                addDays(new window.Date(), 1),
                addDays(new window.Date(), 2),
                addDays(new window.Date(), 3),
                addDays(new window.Date(), 4),
                addDays(new window.Date(), 5),
                addDays(new window.Date(), 6),
                addDays(new window.Date(), 7),
                addDays(new window.Date(), 8),
                addDays(new window.Date(), 9),
                addDays(new window.Date(), 10),
                addDays(new window.Date(), 11),
                addDays(new window.Date(), 12),
                addDays(new window.Date(), 13),
              ]}
              inline
            ></DatePicker>
          </CalWrapper>
        </Wrap>
      </ScheduleWrapper>
    </>
  );
}

export default Schedule;
