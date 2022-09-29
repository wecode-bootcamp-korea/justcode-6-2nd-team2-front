import React, { useRef, useState } from 'react';
import styled from 'styled-components';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

import './ListTime.scss';

const ScheduleBar = styled.div`
  overflow: visible;
  position: relative;
  width: 100%;
  height: 30px;
  padding: 0;
  &:after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    left: -21px;
    width: 110%;
    height: 1px;
    background-color: #d8d9db;
    z-index: 10;
  }
  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: -21px;
    width: 110%;
    height: 1px;
    background-color: #d8d9db;
    z-index: 10;
  }
`;

const ButtonPrev = styled.button`
  overflow: visible;
  display: block;
  position: absolute;
  left: -47px;
  top: 5px;
  width: 44px;
  height: 28px;
  text-indent: -9999px;
  background: url(https://img.megabox.co.kr/static/pc/images/common/btn/btn-prev-time.png) no-repeat
    center;
  background-color: white;
  font-size: 1em;
  margin: 0;
  padding: 0;
  border: 0;
  letter-spacing: -1px;
  line-height: 1.15;
  cursor: pointer;
  text-transform: none;
  z-index: 10;
`;

const ButtonNext = styled.button`
  overflow: visible;
  display: block;
  position: absolute;
  right: -44px;
  top: 5px;
  width: 44px;
  height: 28px;
  text-indent: -9999px;
  background: url(https://img.megabox.co.kr/static/pc/images/common/btn/btn-next-time.png) no-repeat
    center;
  background-color: white;
  margin: 0;
  padding: 0;
  border: 0;
  letter-spacing: -1px;
  cursor: pointer;
  text-transform: none;
  font-size: 1em;
  line-height: 1.15;
  z-index: 10;
`;

const Wrapper = styled.div`
  overflow: hidden;
  position: relative;
  z-index: 2;
  width: 412px;
  height: 30px;
  margin: 0 auto;
  background-color: transparent;
`;

function ListTime({ type, select, setSelect }) {
  const [time, setTime] = useState([
    '00',
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
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
    '22',
    '23',
  ]);

  SwiperCore.use([Navigation]);

  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <>
      <ScheduleBar>
        <Wrapper>
          <Swiper
            slidesPerView={10}
            onInit={swiper => {
              for (let i = 0; i < 24; i++) {
                if (i === new window.Date().getHours()) {
                  if (i >= 0 && i < 10) {
                    setSelect('0' + String(i));
                  } else {
                    setSelect(String(i));
                  }

                  swiper.slideTo(i);
                }
              }
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            style={{ top: '-4px', width: '336px', overflow: 'visible' }}
          >
            {time.map(element => {
              return (
                <SwiperSlide
                  key={element}
                  onClick={() => {
                    setSelect(element);
                  }}
                  className={element === select ? 'time-active' : 'time-all'}
                  style={
                    new window.Date().getHours() > Number(element)
                      ? { opacity: '0.5' }
                      : { opacity: '1' }
                  }
                >
                  {element}
                </SwiperSlide>
              );
            })}
            <ButtonPrev ref={navigationPrevRef}>이전 시간 보기</ButtonPrev>
            <ButtonNext ref={navigationNextRef}>다음 시간 보기</ButtonNext>
          </Swiper>
        </Wrapper>
      </ScheduleBar>
    </>
  );
}

export default ListTime;
