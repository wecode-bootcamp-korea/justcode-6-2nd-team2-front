import React, { useContext } from 'react';
import styled from 'styled-components';

import {
  OnOffContext,
  MovieContext,
  TheaterContext,
  AreaContext,
  MovieNameContext,
  TheaterNameContext,
} from '../../../pages/TimeTable/TimeTable';

const ContainerWrapper = styled.div`
  float: left;
  width: 145px;
  height: 100%;
`;

const Container = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  li {
    border-bottom: none;
    display: block;
    text-align: center;
    width: 100%;
    height: 148px;
    line-height: 98px;
    border: 1px solid #d8d9db;
    border-width: 0 1px 1px 0;
    background-color: #f2f4f5;
    list-style-type: none;
  }
  button {
    display: block;
    margin-left: 20px;
    color: #444;
    font-size: 1.2em;
    font-weight: 400;
    background-color: transparent;
    line-height: 158px;
    border: none;
    cursor: pointer;
  }
  i {
    width: 36px;
    height: 32px;
    overflow: hidden;
    display: inline-block;
    margin: -6px 3px 0 0;
    vertical-align: middle;
    background-position: 0 0;
    background-repeat: no-repeat;
    color: #444;
    text-align: center;
  }
`;

function TabLeft() {
  const { navOn, setNavOn } = useContext(OnOffContext);
  const { movieIdArray, setMovieIdArray } = useContext(MovieContext);
  const { theaterIdArray, setTheaterIdArray } = useContext(TheaterContext);
  const { areaIdArray, setAreaIdArray } = useContext(AreaContext);

  const { theaterNames, setTheaterNames } = useContext(TheaterNameContext);
  const { movieName, setMovieName } = useContext(MovieNameContext);

  return (
    <>
      <ContainerWrapper>
        <Container>
          <li style={{ backgroundColor: navOn === 'movie' ? '#fff' : '#f2f4f5' }}>
            <button
              title='영화별 선택'
              onClick={() => {
                setTheaterNames('');
                setTheaterIdArray([]);
                setNavOn('movie');
              }}
            >
              <i
                style={{
                  backgroundImage:
                    navOn === 'movie'
                      ? 'url(https://img.megabox.co.kr/static/pc/images/common/ico/ico-tab-movie-on.png)'
                      : 'url(https://img.megabox.co.kr/static/pc/images/common/ico/ico-tab-movie.png)',
                }}
              />
              영화별
            </button>
          </li>
          <li style={{ backgroundColor: navOn === 'theater' ? '#fff' : '#f2f4f5' }}>
            <button
              title='극장별 선택'
              onClick={() => {
                setMovieName('');
                setMovieIdArray([]);
                setNavOn('theater');
              }}
            >
              <i
                style={{
                  backgroundImage:
                    navOn === 'theater'
                      ? 'url(https://img.megabox.co.kr/static/pc/images/common/ico/ico-tab-theater-on.png)'
                      : 'url(https://img.megabox.co.kr/static/pc/images/common/ico/ico-tab-theater.png)',
                }}
              />
              극장별
            </button>
          </li>
        </Container>
      </ContainerWrapper>
    </>
  );
}

export default TabLeft;
