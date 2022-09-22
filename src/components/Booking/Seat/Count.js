import React from 'react';
import styled from 'styled-components';

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
  return (
    <>
      <Container>
        <Cell>
          <p>성인</p>
          <CellInner>
            <Down>-</Down>
            <Number>
              <button>0</button>
            </Number>
            <Up>+</Up>
          </CellInner>
        </Cell>
        <Cell>
          <p>청소년</p>
          <CellInner>
            <Down>-</Down>
            <Number>
              <button>0</button>
            </Number>
            <Up>+</Up>
          </CellInner>
        </Cell>
      </Container>
    </>
  );
}

export default Count;
