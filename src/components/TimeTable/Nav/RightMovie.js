import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';

import { ResultContext, MovieContext, MovieNameContext } from '../../../pages/TimeTable/TimeTable';

const ContainerWrapper = styled.div`
  visibility: visible;
  opacity: 1;
  padding: 0 206px 0 0;
  position: absolute;
  left: 164px;
  top: 0;
  display: block;
  width: calc(100% - 164px);
  height: 300px;
`;

const IndexWrapper = styled.div`
  float: left;
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0 40px;
  visibility: visible;
`;

const List = styled.div`
  width: 100%;
  height: 54px;
  border-bottom: 1px solid #d8d9db;
  ul {
    display: flex;
    padding-top: 23px;
    list-style-type: none;
    margin: 0;
  }
  li {
    display: list-item;
    padding-bottom: 7px;
    border-bottom: 2px solid black;
  }
`;

const Section = styled.div`
  overflow: hidden;
  height: 240px;
  padding: 20px 0;
`;

const InnerWrapper = styled.div`
  height: 200px;
`;

const Inner = styled.div`
  max-height: 200px;
  position: relative;
  overflow-y: scroll;
  height: 100%;
  max-width: 100%;
  outline: 0;
  direction: ltr;
  &::-webkit-scrollbar {
    width: 5px; /*스크롤바의 너비*/
  }

  &::-webkit-scrollbar-thumb {
    background-color: #444; /*스크롤바의 색상*/
  }

  &::-webkit-scrollbar-track {
    background-color: #ebebeb; /*스크롤바 트랙 색상*/
  }
`;

const InnerList = styled.div`
  position: relative;
  top: 0px;
  left: 0px;
  margin-right: 5px;

  width: auto;
  height: auto;
  ul {
    position: relative;
    display: block;
    min-height: 138px;
  }
`;
const Li = styled.li`
  float: left;
  width: 33.333%;
  padding: 0;
  display: list-item;
  list-style-type: none;
  button {
    display: block;
    width: 100%;
    height: 27px;
    margin: 0;
    padding: 0 28px 0 10px;
    color: black;
    font-weight: 400;
    background-color: white;
    border: 0;
    text-align: left;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    cursor: pointer;
    letter-spacing: -0.5px;
    font-size: 1em;
    line-height: 1.15;
  }
`;

const PosterWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 206px;
  height: 100%;
  background: url(https://img.megabox.co.kr/static/pc/images/reserve/bg-poster-view.png) no-repeat 0
    0;
  background-size: auto 100%;
`;

const Table = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
  }
`;

function RightMovie() {
  const [theaterName, setTheaterName] = useState('');

  const { resultData, setResultData } = useContext(ResultContext);
  const { movieIdArray, setMovieIdArray } = useContext(MovieContext);

  const [data, setData] = useState([]);
  const [imgUrl, setImgUrl] = useState('/static/media/starbox.63eba2ee644ba437ebdb.png');

  const { movieName, setMovieName } = useContext(MovieNameContext);

  useEffect(() => {
    fetch(`http://localhost:10010/movie/list`, {
      method: 'get',
    })
      .then(res => res.json())
      .then(data => {
        setData(data.data);
      });
  }, []);

  return (
    <>
      <ContainerWrapper>
        <IndexWrapper>
          <List>
            <ul>
              <li>전체영화</li>
            </ul>
          </List>
          <Section>
            <div>
              <InnerWrapper>
                <Inner>
                  <InnerList>
                    <ul>
                      {data.map(el => {
                        return (
                          <Li key={el.movie_id}>
                            <button
                              type='button'
                              onClick={e => {
                                setMovieName(el.title);
                                setTheaterName(el.title);
                                setImgUrl(el.poster_img);
                                setMovieIdArray([el.movie_id]);
                              }}
                              style={{
                                color: theaterName === el.title ? '#fff' : 'black',
                                backgroundColor: theaterName === el.title ? '#555' : 'transparent',
                              }}
                            >
                              {el.title}
                            </button>
                          </Li>
                        );
                      })}
                    </ul>
                  </InnerList>
                </Inner>
              </InnerWrapper>
            </div>
          </Section>
        </IndexWrapper>
        <PosterWrapper>
          <Table>
            <a>
              <img
                src={imgUrl}
                style={{
                  height:
                    imgUrl === '/static/media/starbox.63eba2ee644ba437ebdb.png' ? '50%' : '100%',
                  marginTop:
                    imgUrl === '/static/media/starbox.63eba2ee644ba437ebdb.png' ? '83px' : '0px',
                }}
              />
            </a>
          </Table>
        </PosterWrapper>
      </ContainerWrapper>
    </>
  );
}

export default RightMovie;
