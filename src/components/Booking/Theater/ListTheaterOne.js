import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';

import ListDetailOne from './ListDetailOne';

import { AreaContext, ResultContext, TheaterContext } from '../../../pages/Booking/Booking';

import '../Nav/Schedule.scss';

const Ul = styled.ul`
  position: relative;
  height: 100%;
  list-style-type: none;
  margin: 0;
  padding: 0;
  direction: ltr;
  text-align: -webkit-match-parent;
`;

const Ll = styled.li`
  list-style-type: none;
  display: list-item;
  text-align: -webkit-match-parent;
`;

const Movie = styled.button`
  display: block;
  overflow: visible;
  position: relative;
  width: 47%;
  padding-left: 10px;
  padding-right: 10px;
  min-height: 28px;
  text-align: left;
  font-size: 0.8667em;

  letter-spacing: 0;
  -webkit-appearance: button;
  cursor: pointer;
  text-transform: none;
  line-height: 1.15;
  border: none;
`;

const Txt = styled.span`
  display: inline-block;
  margin: 0 2px 0 0;
  vertical-align: middle;

  font-weight: 400;
  text-align: left;
  letter-spacing: 0;
  cursor: pointer;
  text-transform: none;
  line-height: 1.15;
`;
const Depth = styled.div`
  display: block;
  position: absolute;
  left: 51%;
  top: 0;
  width: 49%;
  height: 320px;
  padding: 0;
`;

const DetailList = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
`;

const DetailBox = styled.div`
  position: relative;
  overflow-y: scroll;
  height: 100%;
  max-height: none;
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

const BoxContainer = styled.div`
  position: relative;
  top: 0px;
  left: 0px;
  margin-right: 5px;
  overflow: hidden;
  width: auto;
  height: auto;
  direction: ltr;
  unicode-bidi: isolate;
`;

const Line = styled.div`
  &:after {
    content: '';
    display: block;
    position: absolute;
    top: -5px;
    left: 154px;
    width: 0.5px;
    height: 102%;
    background-color: #ebebeb;
  }
`;

function ListOne({
  direct,
  reset,
  select,
  count,
  setCount,
  name,
  setName,
  areaName,
  areaCount,
  theaterName,
  id,
}) {
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

  const plus = () => {
    setCount(count + 1);
  };

  const minus = () => {
    setCount(count - 1);
  };

  const { areaIdArray, setAreaIdArray } = useContext(AreaContext);
  const { resultData, setResultData } = useContext(ResultContext);

  const [test, setTest] = useState('');

  useEffect(() => {
    if (resultData.data.theaters) {
      setTest(resultData.data.theaters);
    }
  }, [resultData]);

  useEffect(() => {
    setName([]);
    setCount(0);
  }, [areaIdArray]);

  return (
    <>
      <Ll>
        <Movie
          onClick={() => {
            reset(direct);
            setAreaIdArray(id);
          }}
          className={select ? 'set-theater-active' : 'all'}
        >
          <Txt>
            {areaName}({areaCount})
          </Txt>
        </Movie>
        <Line />
        {test && select && (
          <Depth>
            <DetailList>
              <DetailBox>
                <BoxContainer>
                  <Ul>
                    {test.map(el => {
                      return (
                        <ListDetailOne
                          key={el.theater_id}
                          plus={plus}
                          minus={minus}
                          count={count}
                          name={name}
                          setName={setName}
                          theaterOne={el.theater_name}
                          id={el.theater_id}
                        />
                      );
                    })}
                  </Ul>
                </BoxContainer>
              </DetailBox>
            </DetailList>
          </Depth>
        )}
      </Ll>
    </>
  );
}

export default ListOne;
