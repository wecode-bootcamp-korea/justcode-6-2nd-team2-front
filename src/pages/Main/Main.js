import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { AiOutlinePlus } from 'react-icons/ai';

import MainBoxOffice from '../../components/Main/MainBoxOffice';
import MainSearchLink from '../../components/Main/MainSearchLink';

function Main() {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:10010/movie').then(response => {
      setMovieList(response.data.data);
    });
  }, []);

  return (
    <MainPage>
      <div className='background' />
      <div className='backgroundImg'>
        <Div>
          <Title>
            <span>박스오피스</span>
          </Title>
          <More to='/movie'>
            더 많은 영화 보기
            <AiOutlinePlus className='icon' />
          </More>
          <section>
            <MainBoxOffice movieList={movieList} />
          </section>
          <MainSearchLink />
        </Div>
      </div>
    </MainPage>
  );
}

const MainPage = styled.div`
  display: block;
  position: relative;
  min-height: 880px;
  padding: 0 0 80px 0;

  .background {
    /* ::before {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      z-index: -2;
      width: 100%;
      height: 100%;
      background: -moz-linear-gradient(
        left,
        rgba(85, 63, 5, 1) 0%,
        rgba(23, 17, 1, 0) 50%,
        rgba(85, 63, 5, 1) 100%
      );
      background: -o-linear-gradient(
        left,
        rgba(85, 63, 5, 1) 0%,
        rgba(23, 17, 1, 0) 50%,
        rgba(85, 63, 5, 1) 100%
      );
      background: -ms-linear-gradient(
        left,
        rgba(85, 63, 5, 1) 0%,
        rgba(23, 17, 1, 0) 50%,
        rgba(85, 63, 5, 1) 100%
      );
      background: linear-gradient(
        to right,
        rgba(85, 63, 5, 1) 0%,
        rgba(23, 17, 1, 0) 50%,
        rgba(85, 63, 5, 1) 100%
      );
    }

    ::after {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      z-index: -2;
      background-color: rgba(3, 1, 21, 0.7);
    } */
  }

  .backgroundImg {
    overflow: hidden;
    position: absolute;
    width: 100%;
    min-width: 1100px;
    height: 100%;
    margin: 0 auto;

    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
      url('https://img.megabox.co.kr/SharedImg/2022/09/21/sUaMgi8aqcQ7PVmoi2Mie0qHrm8XpkKp_420.jpg')
        no-repeat;
    background-size: cover;
    background-position: 0 -100px;
  }
`;

const Div = styled.div`
  width: 1100px;
  height: auto;
  margin: 0 auto;
  padding: 100px 0 200px 0;

  background-color: transparent;
`;

const Title = styled.button`
  width: 100%;

  border: none;
  outline: none;
  background-color: transparent;
  font-size: 18px;
  color: #fff;

  span {
    position: relative;
    display: inline-block;

    &::after {
      content: '';
      position: absolute;
      bottom: -7px;
      left: 2.5%;
      width: 95%;
      height: 2px;
      align-items: center;
      background: rgba(255, 255, 255, 0.3);
    }
  }
`;

const More = styled(Link)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  vertical-align: middle;

  margin-right: -5px;
  margin-bottom: 10px;

  font-size: 15px;
  color: #aaa;
  line-height: 16px;
  text-decoration: none;

  .icon {
    margin-left: 4px;

    font-size: 25px;
  }
`;

export default Main;
