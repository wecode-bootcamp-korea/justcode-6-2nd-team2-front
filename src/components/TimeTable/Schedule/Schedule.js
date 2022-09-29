import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';

import { DateContext } from '../../../pages/TimeTable/TimeTable';

import Modal from '../Modal';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/esm/locale';
import 'react-datepicker/dist/react-datepicker.css';

import { addDays } from 'date-fns';

const ScheduleWrapper = styled.div`
  margin-top: 77px;
  width: 100%;
`;

const Wrap = styled.div`
  position: relative;
  height: 66px;
  border-top: 1px solid #d8d9db;
  border-bottom: 1px solid #d8d9db;
`;

const List = styled.div`
  width: 1016px;
  overflow-x: clip;
  float: left;
  height: 39px;
  padding-right: 4px;
`;

const Year = styled.div`
  position: absolute;
  z-index: 500;
  opacity: 1;
  left: 38px;
  top: 0;
  width: 70px;
  height: 28px;
  line-height: 26px;
  margin-top: -17px;
  border-radius: 15px;
  border: 1px solid #d8d9db;
  text-align: center;
  background-color: #fff;
  font-family: Roboto;
  font-weight: 300;
  font-size: 0.9em;
  overflow: visible;
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
  const [select, setSelect] = useState(new window.Date().getDate());
  const [weekArr, setWeekArr] = useState([new window.Date().getDate()]);
  const [originDay, setOrignDay] = useState([addDays(new window.Date(), 1)]);
  const [index, setIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalup, setModalup] = useState(false);
  const [modalMessage, setModalMessage] = useState('예매가능한 날짜가 아닙니다.');

  const [day, setDay] = useState([new window.Date().getDay()]);

  const [sendDay, setSendDay] = useState([new window.Date()]);

  let dateTime = new window.Date();
  const [startDate, setStartDate] = useState(dateTime);

  const [swiper, setSwiper] = useState(null);

  const modalUpBtn = () => {
    setModalup(!modalup);
  };

  const slideTo = index => {
    swiper.slideTo(index);
  };

  const { selectDate, setSelectDate } = useContext(DateContext);

  useEffect(() => {
    for (let i = 1; i < 19; i++) {
      setSendDay(sendDay => [...sendDay, addDays(new window.Date(), i)]);
      setDay(day => [...day, addDays(new window.Date(), i).getDay()]);
      setWeekArr(weekArr => [...weekArr, addDays(new window.Date(), i).getDate()]);
      if (addDays(new window.Date(), i).getDate() === 1) {
        setIndex(i);
      }
    }
  }, []);

  useEffect(() => {
    for (let i = 1; i < 19; i++) {
      if (i < 18) {
        setOrignDay(originDay => [...originDay, addDays(new window.Date(), i + 1)]);
      }
    }
  }, []);

  return (
    <>
      <ScheduleWrapper>
        <Wrap>
          <List>
            <div style={{ zIndex: '800', overflow: 'visible' }}>
              <Year>
                {dateTime.getMonth() + 1 >= 10 && activeIndex < index
                  ? `2022.${dateTime.getMonth() + 1}`
                  : dateTime.getMonth() + 1 < 10 && activeIndex < index
                  ? `2022.0${dateTime.getMonth() + 1}`
                  : dateTime.getMonth() + 2 >= 10 && activeIndex >= index
                  ? `2022.${dateTime.getMonth() + 2}`
                  : dateTime.getMonth() + 2 < 10 && activeIndex >= index
                  ? `2022.0${dateTime.getMonth() + 2}`
                  : ''}
              </Year>
            </div>
            <Date>
              <Swiper
                navigation={true}
                slidesPerView={14}
                modules={[Navigation]}
                onSlideChange={swiperCore => {
                  const { activeIndex } = swiperCore;
                  setActiveIndex(activeIndex);
                }}
                className='mySwiper'
                style={{
                  margin: '0 0 0 20px',
                  width: '959px',
                  overflow: 'visible',
                }}
                onSwiper={setSwiper}
              >
                {weekArr.map((element, index) => {
                  if (element === 1 && index !== 0) {
                    return (
                      <SwiperSlide
                        key={element}
                        onClick={() => {
                          setSelectDate(sendDay[index]);
                          setSelect(element);
                          for (let i = 1; i < 19; i++) {
                            if (addDays(new window.Date(), i).getDate() === element) {
                              setStartDate(addDays(new window.Date(), i));
                              break;
                            }
                          }
                        }}
                        id={element}
                        className={element === select ? 'set-active' : 'set-all'}
                        style={{
                          height: '65px',
                        }}
                      >
                        {activeIndex <= index && (
                          <Year key={element} style={{ left: '-2px', overflow: 'visible' }}>
                            {dateTime.getMonth() + 2 >= 10 && `2022.${dateTime.getMonth() + 2}`}
                            {dateTime.getMonth() + 2 < 10 && `2022.0${dateTime.getMonth() + 2}`}
                          </Year>
                        )}
                        <p>{element}</p>
                        <p>
                          {index === 0 && '오늘'}
                          {index === 1 && '내일'}
                          {day[index] === 0 && index > 1 && '일'}
                          {day[index] === 1 && '월'}
                          {day[index] === 2 && '화'}
                          {day[index] === 3 && '수'}
                          {day[index] === 4 && '목'}
                          {day[index] === 5 && '금'}
                          {day[index] === 6 && '토'}
                        </p>
                      </SwiperSlide>
                    );
                  } else {
                    return (
                      <SwiperSlide
                        key={element}
                        onClick={() => {
                          setSelectDate(sendDay[index]);
                          setSelect(element);
                          for (let i = 1; i < 19; i++) {
                            if (addDays(new window.Date(), i).getDate() === element) {
                              setStartDate(addDays(new window.Date(), i));
                              break;
                            }
                          }
                        }}
                        id={element}
                        className={element === select ? 'set-active' : 'set-all'}
                        style={{
                          height: '65px',
                        }}
                      >
                        <p>{element}</p>
                        <p>
                          {index === 0 && '오늘'}
                          {index === 1 && '내일'}
                          {day[index] === 0 && index > 1 && '일'}
                          {day[index] === 1 && index > 1 && '월'}
                          {day[index] === 2 && index > 1 && '화'}
                          {day[index] === 3 && index > 1 && '수'}
                          {day[index] === 4 && index > 1 && '목'}
                          {day[index] === 5 && index > 1 && '금'}
                          {day[index] === 6 && index > 1 && '토'}
                        </p>
                      </SwiperSlide>
                    );
                  }
                })}
              </Swiper>
            </Date>
          </List>

          <div
            style={{
              display: 'flex',
              verticalAlign: 'top',
              padding: '0 0 0 34px',
              marginTop: '12px',
            }}
          >
            <BtnCalendar onClick={() => setCal(!cal)} />
          </div>
          <CalWrapper img={cal}>
            <DatePicker
              locale={ko}
              selected={startDate}
              onChange={date => {
                if (addDays(new window.Date(), 18).getTime() < date.getTime()) {
                  modalUpBtn();
                  return;
                }
                for (let i = 0; i < 19; i++) {
                  if (addDays(new window.Date(), i).getDate() === date.getDate()) {
                    slideTo(i);
                  }
                }
                setStartDate(date);
                setSelectDate(date);
                setSelect(date.getDate());
                setCal(!cal);
              }}
              showMonthAfterYear={true}
              disabledKeyboardNavigation
              highlightDates={originDay}
              inline
            />
          </CalWrapper>
        </Wrap>
        {modalup && <Modal modalMessage={modalMessage} modalUpBtn={modalUpBtn} />}
      </ScheduleWrapper>
    </>
  );
}

export default Schedule;
