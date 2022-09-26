import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import { InitialContext } from '../SeatSelect';
import { CountContext, AllContext } from '../../../pages/Booking/Booking';

import Modal from '../Modal';

const Container = styled.div`
  min-height: 52px;
  padding: 10px 0 10px 20px;
  background-color: #f2f4f5;
  border: 1px solid #d8d9db;
  border-bottom: 0;
`;

const Cell = styled.div`
  float: left;
  width: 25%;

  p {
    float: left;
    padding: 0 10px 0 0;
    line-height: 32px;
  }
`;

const CellInner = styled.div`
  float: left;
  width: 106px;

  p {
    float: left;
    padding: 0 10px 0 0;
    line-height: 32px;
  }
`;

const Down = styled.div`
  float: left;
  width: 32px;
  height: 32px;
  padding-top: 5px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px 0 0 5px;
  text-align: center;
  cursor: pointer;
  -webkit-user-select: none;
  p {
    float: left;
    padding: 0 10px 0 0;
    line-height: 32px;
  }
`;

const Up = styled.div`
  float: left;
  width: 32px;
  height: 32px;
  padding-top: 5px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 0 5px 5px 0;
  text-align: center;
  cursor: pointer;
  -webkit-user-select: none;
  p {
    float: left;
    padding: 0 10px 0 0;
    line-height: 32px;
  }
`;

const Number = styled.div`
  position: relative;
  float: left;
  width: 42px;

  button {
    width: 42px;
    height: 32px;
    border: 1px solid #ccc;
    border-width: 1px 0;
    background-color: #fff;
    font-weight: 300;
    font-size: 1em;
  }
`;

function Count() {
  const { initial, setInitial } = useContext(InitialContext);
  const { adultNum, setAdultNum, teenNum, setTeenNum } = useContext(CountContext);
  const { allSelectArray, setAllSelectArray } = useContext(AllContext);

  const [modalup, setModalup] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const clickDown = type => {
    if (type === 'adult') {
      if (adultNum === 0) {
        return;
      }
      setAdultNum(adultNum - 1);
    } else if (type === 'teen') {
      if (teenNum === 0) {
        return;
      }
      setTeenNum(teenNum - 1);
    }
  };

  const clickUp = type => {
    if (type === 'adult') {
      setAdultNum(adultNum + 1);
    } else if (type === 'teen') {
      setTeenNum(teenNum + 1);
    }
  };

  const modalUpBtn = state => {
    setModalMessage(state);
    setModalup(!modalup);
  };

  useEffect(() => {
    if (initial === true) {
      setAdultNum(0);
      setTeenNum(0);
      setInitial(false);
    }
  }, [initial]);

  return (
    <>
      <Container>
        <Cell>
          <p>성인</p>
          <CellInner>
            <Down
              onClick={() => {
                if (allSelectArray.length > adultNum + teenNum - 1) {
                  modalUpBtn('좌석을 먼저 취소해주세요');
                  return;
                }
                clickDown('adult');
              }}
            >
              -
            </Down>
            <Number>
              <button>{adultNum}</button>
            </Number>
            <Up
              onClick={() => {
                if (8 < adultNum + teenNum + 1) {
                  modalUpBtn('인원선택은 총 8명까지 가능합니다.');
                  return;
                }
                clickUp('adult');
              }}
            >
              +
            </Up>
          </CellInner>
        </Cell>
        <Cell>
          <p>청소년</p>
          <CellInner>
            <Down
              onClick={() => {
                if (allSelectArray.length > adultNum + teenNum - 1) {
                  modalUpBtn('좌석을 먼저 취소해주세요');
                  return;
                }
                clickDown('teen');
              }}
            >
              -
            </Down>
            <Number>
              <button>{teenNum}</button>
            </Number>
            <Up
              onClick={() => {
                if (8 < adultNum + teenNum + 1) {
                  modalUpBtn('인원선택은 총 8명까지 가능합니다.');
                  return;
                }
                clickUp('teen');
              }}
            >
              +
            </Up>
          </CellInner>
        </Cell>
        {modalup && <Modal modalMessage={modalMessage} modalUpBtn={modalUpBtn} />}
      </Container>
    </>
  );
}

export default Count;
