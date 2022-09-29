import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';

import {
  DateContext,
  AreaContext,
  ResultContext,
  TheaterContext,
  MovieContext,
  TheaterNameContext,
} from '../../../pages/TimeTable/TimeTable';

const ContainerWrapper = styled.div`
  visibility: visible;
  opacity: 1;
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
    margin-right: 10px;
    cursor: pointer;
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
  width: 25%;
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

function RightTheater() {
  const [area, setArea] = useState('서울');
  const [theaterName, setTheaterName] = useState('');

  const [staticArea, setStaticArea] = useState([]);
  const [staticTheater, setStaticTheater] = useState([]);
  const [data, setData] = useState('');

  const { resultData, setResultData } = useContext(ResultContext);
  const { selectDate, setSelectDate } = useContext(DateContext);
  const { areaIdArray, setAreaIdArray } = useContext(AreaContext);
  const { theaterIdArray, setTheaterIdArray } = useContext(TheaterContext);
  const { movieIdArray, setMovieIdArray } = useContext(MovieContext);

  const { theaterNames, setTheaterNames } = useContext(TheaterNameContext);

  useEffect(() => {
    fetch(`http://localhost:10010/booking/schedule?date=220930`, {
      method: 'get',
    })
      .then(res => res.json())
      .then(data => {
        setStaticArea(data.data.areas);
      });
  }, []);

  useEffect(() => {
    if (resultData) {
      setData(resultData.data);
    }
  }, [resultData]);

  useEffect(() => {
    fetch(`http://localhost:10010/booking/schedule?date=220930&areaId=${areaIdArray}`, {
      method: 'get',
    })
      .then(res => res.json())
      .then(data => {
        setStaticTheater(data.data.theaters);
      });
  }, [areaIdArray]);

  return (
    <>
      <ContainerWrapper>
        <IndexWrapper>
          <List>
            {staticArea.length !== 0 && (
              <ul>
                {staticArea.map(el => {
                  return (
                    <li
                      key={el.id}
                      value={el.area_name}
                      onClick={e => {
                        setArea(el.area_name);
                        setAreaIdArray([el.id]);
                      }}
                      style={{
                        borderBottom: area !== el.area_name ? 'none' : '2px solid black',
                      }}
                    >
                      {el.area_name}({el.area_count})
                    </li>
                  );
                })}
              </ul>
            )}
          </List>
          <Section>
            <div>
              <InnerWrapper>
                <Inner>
                  <InnerList>
                    <ul>
                      {staticTheater.map(el => {
                        return (
                          <Li key={el.theater_id}>
                            <button
                              type='button'
                              onClick={e => {
                                setTheaterNames(el.theater_name);
                                setTheaterName(el.theater_name);
                                setTheaterIdArray([el.theater_id]);
                              }}
                              style={{
                                color: theaterName === el.theater_name ? '#fff' : 'black',
                                backgroundColor:
                                  theaterName === el.theater_name ? '#555' : 'transparent',
                              }}
                            >
                              {el.theater_name}
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
      </ContainerWrapper>
    </>
  );
}

export default RightTheater;
