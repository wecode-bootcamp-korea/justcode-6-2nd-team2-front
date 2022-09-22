import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Modal from '../Modal';

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

  let dateTime = new window.Date();
  const [startDate, setStartDate] = useState(dateTime);

  const [swiper, setSwiper] = useState(null);

  const modalUpBtn = () => {
    setModalup(!modalup);
  };

  const slideTo = index => {
    swiper.slideTo(index);
  };

  useEffect(() => {
    for (let i = 1; i < 19; i++) {
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
                      <>
                        <SwiperSlide
                          key={element}
                          onClick={() => {
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
                        >
                          {activeIndex <= index && (
                            <Year key={element} style={{ left: '-2px', overflow: 'visible' }}>
                              {dateTime.getMonth() + 2 >= 10 && `2022.${dateTime.getMonth() + 2}`}
                              {dateTime.getMonth() + 2 < 10 && `2022.0${dateTime.getMonth() + 2}`}
                            </Year>
                          )}
                          {element} 토
                        </SwiperSlide>
                      </>
                    );
                  } else {
                    return (
                      <SwiperSlide
                        key={element}
                        onClick={() => {
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
                      >
                        {element} 토
                      </SwiperSlide>
                    );
                  }
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
