import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ListOne from './ListMovieOne';

const BtnTab = styled.button`
  display: block;
  position: relative;
  left: 0;
  top: 0;
  z-index: 2;
  height: 30px;
  font-size: 0.9333em;
  color: #222;
  border: 1px solid #d9d8dd;
  border-right: 1px solid #555;
  width: 115px;
  border-color: #666;
  border-bottom: 0;
  background-color: #fff;
`;

const BtnTabOn = styled.button`
  left: 135px;
  width: 109px;
  border-left: 0;
  display: block;
  position: absolute;
  top: 38px;
  z-index: 2;
  height: 30px;
  font-size: 0.9333em;
  color: #222;
  border: none;
  border-bottom: 1px solid #666;
  background-color: #fff;
`;

const List = styled.div`
  display: block;
  width: 100%;
  height: 320px;
  margin-top: 10px;
`;

const ListWrapper = styled.div`
  overflow: hidden;
  display: block;
  width: 100%;
  height: 100%;
`;

const InnerWrapper = styled.div`
  position: relative;
  overflow-y: scroll;
  height: 100%;
  max-width: 100%;
  outline: 0;
  direction: ltr;
  max-height: none;
  margin-right: 5px;
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

const Inner = styled.div`
  position: relative;
  left: 0px;
  overflow: hidden;
  width: auto;
  height: auto;
`;

const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const ViewArea = styled.div`
  width: 100%;
  padding: 0;
`;

const PictureList = styled.div`
  overflow: hidden;
  margin: 22px 0 0 0;
`;

const Bg = styled.div`
  overflow: hidden;
  float: left;
  width: 63px;
  height: 90px;
  background: url(https://img.megabox.co.kr/static/pc/images/reserve/bg-empty-cell.png) no-repeat
    center;
`;

const Wrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Img = styled.div`
  width: 100%;
  height: 100%;
  font-size: 0;
  line-height: 0;
`;

const But = styled.button`
  display: block;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 2;
  width: 20px;
  height: 20px;
  font-size: 0;
  line-height: 0;
  background: url(https://img.megabox.co.kr/static/pc/images/reserve/btn-choice-dell.png) no-repeat
    0 0;
  margin: 0;
  padding: 0;
  border: 0;
  letter-spacing: -1px;
  cursor: pointer;
`;

const NoChoice = styled.div`
  overflow: hidden;
  width: 99%;
  height: 90px;
  margin: 10px 0 0 0;
  padding: 25px 0 0 0;
  font-size: 0.9333em;
  line-height: 1.3;
  text-align: center;
  border: 1px solid #ebebeb;
  background-color: #fff;
`;

const NoStrong = styled.strong`
  display: block;
  padding: 0;
  font-weight: 400;
`;

const NoSpan = styled.span``;

function ListMovie({ type }) {
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

  const [count, setCount] = useState(0);
  const [movieURL, setMovieURL] = useState([]);
  const [data, setData] = useState([]);

  const plus = () => {
    setCount(count + 1);
  };

  const minus = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    fetch('./data/booking/movie.json', {
      method: 'get',
    })
      .then(res => res.json())
      .then(mock => {
        setData(mock.data);
      });
  }, []);

  return (
    <>
      <div>
        <div>
          <BtnTab>전체</BtnTab>
          <BtnTabOn />
        </div>
        <List>
          <ListWrapper>
            <InnerWrapper tabindex='0'>
              <Inner style={{ top: '0px' }}>
                <Ul>
                  {data.map(el => {
                    return (
                      <ListOne
                        key={el}
                        array={weekArr}
                        type={type}
                        plus={plus}
                        minus={minus}
                        count={count}
                        movieURL={movieURL}
                        setMovieURL={setMovieURL}
                        title={el.title}
                        grade={el.grade}
                        img={el.img}
                      />
                    );
                  })}
                </Ul>
              </Inner>
            </InnerWrapper>
          </ListWrapper>
        </List>
        <ViewArea>
          {movieURL.length === 0 && (
            <NoChoice>
              <NoStrong>모든영화</NoStrong>
              <NoSpan>목록에서 영화를 선택하세요.</NoSpan>
            </NoChoice>
          )}
          {movieURL.length > 0 && (
            <PictureList>
              <Bg>
                {movieURL[0] && (
                  <Wrap>
                    <Img>
                      <img
                        src={movieURL[0]}
                        alt='늑대사냥'
                        style={{
                          width: '100%',
                          height: '100%',
                        }}
                      />
                    </Img>
                    <But>삭제</But>
                  </Wrap>
                )}
              </Bg>
              <Bg style={{ marginLeft: '16px' }}>
                {movieURL[1] && (
                  <Wrap>
                    <Img>
                      <img
                        src={movieURL[1]}
                        alt='늑대사냥'
                        style={{
                          width: '100%',
                          height: '100%',
                        }}
                      />
                    </Img>
                    <But>삭제</But>
                  </Wrap>
                )}
              </Bg>
              <Bg style={{ marginLeft: '16px' }}>
                {movieURL[2] && (
                  <Wrap>
                    <Img>
                      <img
                        src={movieURL[2]}
                        alt='늑대사냥'
                        style={{
                          width: '100%',
                          height: '100%',
                        }}
                      />
                    </Img>
                    <But>삭제</But>
                  </Wrap>
                )}
              </Bg>
            </PictureList>
          )}
        </ViewArea>
      </div>
    </>
  );
}

export default ListMovie;
