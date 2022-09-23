import React from 'react';
import styled from 'styled-components';
import ListMovie from './Movie/ListMovie';
import ListTheater from './Theater/ListTheater';
import ListTime from './Time/ListTime';
import MovieSchedule from './Time/MovieSchedule';

const MovieChoice = styled.div`
  position: relative;
  float: left;

  width: ${props => {
    if (props.img === 'movie') {
      return '270px';
    } else if (props.img === 'theater') {
      return '351px';
    } else if (props.img === 'time') {
      return '477px';
    }
  }};
  height: 529px;
  padding: 0 20px 17px 20px;
  border-right: 1px solid #d8d9db;
  border-bottom: 1px solid #d8d9db;
  border-left: ${props => {
    if (props.img === 'movie') {
      return '1px solid #d8d9db';
    }
  }};
`;

const TitleArea = styled.div`
  display: flex;
  overflow: hidden;
  height: 38px;
`;

const Title = styled.p`
  overflow: visible;
  display: block;
  width: 100%;
  height: 38px;
  margin: 0;
  padding: 0;
  color: #222;
  font-size: 1.2em;
  line-height: 38px;
`;

const IconWrapper = styled.div`
  font-size: 0.8em;
  font-weight: 400;
  float: right;
  padding: 12px 0 0 0;
  width: 333px;
  margin-left: 45px;
`;

const Icon = styled.p`
  margin-left: 5px;
  overflow: hidden;
  display: inline-block;
  margin: -1px 0 0 0;
  padding-left: 18px;

  width: 55px;
  height: 30px;
  vertical-align: middle;
  background-position: 0 0;
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

function ScrollContainer({ type }) {
  return (
    <>
      <MovieChoice img={type}>
        <TitleArea>
          <Title>{type === 'movie' ? '영화' : type === 'theater' ? '극장' : '시간'}</Title>
          {type === 'time' && (
            <IconWrapper>
              <Icon img='sun' title='조조'>
                조조
              </Icon>
              <Icon img='brunch' title='브런치'>
                브런치
              </Icon>
              <Icon
                img='moon'
                title='심야'
                style={{ backgroundPosition: '0 3px', marginLeft: '4px' }}
              >
                심야
              </Icon>
            </IconWrapper>
          )}
        </TitleArea>
        {type === 'movie' && <ListMovie type={type} />}
        {type === 'theater' && <ListTheater type={type} />}
        {type === 'time' && <ListTime type={type} />}
        {type === 'time' && <MovieSchedule type={type} />}
      </MovieChoice>
    </>
  );
}

export default ScrollContainer;
