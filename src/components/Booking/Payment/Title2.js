import React from 'react';
import styled from 'styled-components';

const Tit = styled.div`
  padding: 8px 0 7px 0;
  margin-top: 40px !important;
`;

const Left = styled.h3`
  font-size: 1.2em;
  font-weight: 400;
  line-height: 32px;
  float: left;
`;

const Right = styled.div`
  position: relative;
  float: Right;

  button {
    line-height: 32px;
    border: 1px solid #c1c1c1;
    border-radius: 5px;
    height: 32px;
    padding: 0 12px;
    font-size: 0.9333em;
    background-color: white;
    cursor: pointer;
  }

  i {
    width: 14px;
    height: 14px;
    background-image: url(https://img.megabox.co.kr/static/pc/images/common/ico/ico-reset-small.png);
    display: inline-block;
    margin: -3px 6px 0 0;
    vertical-align: middle;
  }
`;

function Title2() {
  return (
    <>
      <Tit>
        <Left>결제수단선택</Left>
        <Right></Right>
      </Tit>
    </>
  );
}

export default Title2;
