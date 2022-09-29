import React, { useState, useContext, useEffect } from 'react';
import styled, { css } from 'styled-components';

import {
  AreaContext,
  ResultContext,
  TheaterContext,
  MovieContext,
  DateContext,
} from '../../../pages/Booking/Booking';

import Modal from '../Modal';

const Ll = styled.li`
  list-style-type: none;
  display: list-item;
  text-align: -webkit-match-parent;
  direction: ltr;
`;

const Movie = styled.button`
  padding-left: 12px;
  padding-right: 0;
  display: block;
  position: relative;
  width: 100%;
  min-height: 28px;
  text-align: left;
  font-size: 0.8667em;
  background-color: transparent;
  letter-spacing: 0;
  -webkit-appearance: button;
  cursor: pointer;
  text-transform: none;
  overflow: visible;
  line-height: 1.15;
  border: none;
  ${props => {
    if (props.img) {
      return css`
        background-color: #666;
        color: #fff;
      `;
    } else if (!props.img) {
      return css`
        background-color: transparent;
      `;
    }
  }}
`;

function ListDetailOne({ plus, minus, count, name, setName, theaterOne, id }) {
  const [select, setSelect] = useState(false);

  const [modalup, setModalup] = useState(false);
  const [modalMessage, setModalMessage] = useState('극장은 최대 3개까지 선택이 가능합니다.');

  const { theaterIdArray, setTheaterIdArray } = useContext(TheaterContext);

  const { movieIdArray, setMovieIdArray } = useContext(MovieContext);
  const { selectDate, setSelectDate } = useContext(DateContext);
  const { areaIdArray, setAreaIdArray } = useContext(AreaContext);

  const modalUpBtn = () => {
    setModalup(!modalup);
  };

  useEffect(() => {
    setTheaterIdArray([]);
  }, [movieIdArray, selectDate]);

  return (
    <>
      <Ll>
        <Movie
          onClick={() => {
            if (select) {
              if (count - 1 > 3) {
                modalUpBtn();
                return;
              }

              for (let i = 0; i < name.length; i++) {
                if (name[i] === theaterOne) {
                  name.splice(i, 1);
                  theaterIdArray.splice(i, 1);
                  break;
                }
              }
              setTheaterIdArray([...theaterIdArray]);
              setName(name);

              minus();
            } else {
              if (count + 1 > 3) {
                modalUpBtn();
                return;
              }
              setTheaterIdArray([...theaterIdArray, id]);
              setName([...name, theaterOne]);

              plus();
            }
            if (count > 3) {
              modalUpBtn();
              return;
            }
            setSelect(!select);
          }}
          img={select}
        >
          {theaterOne}
        </Movie>
        {modalup && <Modal modalMessage={modalMessage} modalUpBtn={modalUpBtn} />}
      </Ll>
    </>
  );
}

export default ListDetailOne;
