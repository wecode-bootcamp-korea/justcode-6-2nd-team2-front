import React, { useState, useContext } from 'react';
import styled from 'styled-components';

import { CreditContext } from '../Payment';

const Container = styled.div`
  border: 1px solid #ebebeb;
  border-radius: 10px;
`;

const RadioGroup = styled.div`
  padding: 20px;
  span {
    margin-right: 30px;
    display: inline-block;
    position: relative;
  }
  input {
    width: 16px;
    height: 16px;
    vertical-align: middle;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: inherit;
    font-size: 1em;
    line-height: 1.15;
    -webkit-transform: scale(1.5);
  }
  label {
    position: relative;
    padding: 0 30px 0 10px;
    line-height: 28px;
    display: inline-block;
    vertical-align: middle;
    cursor: pointer;
  }
`;

const MobileInfo = styled.div`
  display: block;
  padding: 20px;
  border-top: 1px solid #ebebeb;
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    li {
      position: relative;
      padding: 0 0 0 11px;
      font-size: 0.9333em;
    }
  }
`;

const EasypayInfo = styled.div`
  display: flex;
  align-itmes: center;
  padding: 20px;
  border-top: 1px solid #ebebeb;
  input {
    width: 16px;
    height: 16px;
    vertical-align: middle;
    box-sizing: border-box;
    padding: 0;
    margin-right: 5px;
    font-family: inherit;
    font-size: 1em;
    line-height: 1.15;
  }
  label {
    margin-right: 20px;
    display: inline-block;
    vertical-align: middle;
  }
`;
function DiscountList() {
  const { means, setMeans } = useContext(CreditContext);

  const clickHandler = e => {
    setMeans(e.target.value);
  };

  return (
    <>
      <Container>
        <RadioGroup>
          <span>
            <input
              type='radio'
              value='credit'
              name='credit'
              onChange={e => clickHandler(e)}
              checked={means === 'credit' ? true : false}
            />
            <label>신용/체크카드(통합)</label>
            <input
              type='radio'
              value='mobile'
              name='credit'
              onChange={e => clickHandler(e)}
              checked={means === 'mobile' ? true : false}
            />
            <label>휴대폰 결제</label>
            <input
              type='radio'
              value='easy'
              name='credit'
              onChange={e => clickHandler(e)}
              checked={
                means === 'easy' || means === 'kakao' || means === 'payco' || means === 'naver'
                  ? true
                  : false
              }
            />
            <label>간편 결제</label>
          </span>
        </RadioGroup>
        {means === 'credit' && (
          <MobileInfo>
            <ul>
              <li>
                - 결제하신 금액은 익월 신용카드 요금에 합산되어 청구되며, 신용카드 결제한도는
                카드사별 월 누적 이용 제한에 따라 적용됩니다.
              </li>
              <li>
                - 매월 말일 23시30분 ~ 익월 00시 10분까지(40분간)는 시스템 점검시간으로 이용이
                어려울 수 있습니다.
              </li>
              <li>- 신용카드 결제와 관련된 추가 안내는 FAQ를 참조해주세요.</li>
            </ul>
          </MobileInfo>
        )}
        {means === 'mobile' && (
          <MobileInfo>
            <ul>
              <li>
                - 결제하신 금액은 익월 휴대폰 요금에 합산되어 청구되며, 휴대폰 결제한도는 통산사별
                월 누적 이용 제한에 따라 적용됩니다.
              </li>
              <li>
                - 매월 말일 23시30분 ~ 익월 00시 10분까지(40분간)는 시스템 점검시간으로 이용이
                어려울 수 있습니다.
              </li>
              <li>- 휴대폰 결제와 관련된 추가 안내는 FAQ를 참조해주세요.</li>
            </ul>
          </MobileInfo>
        )}

        {(means === 'easy' || means === 'kakao' || means === 'payco' || means === 'naver') && (
          <EasypayInfo>
            <input
              type='radio'
              name='detail'
              value='naver'
              onChange={e => clickHandler(e)}
              defaultChecked={true}
            />
            <label>토스페이</label>

            <input type='radio' name='detail' value='kakao' onChange={e => clickHandler(e)} />
            <label>카카오페이</label>

            <input type='radio' name='detail' value='payco' onChange={e => clickHandler(e)} />
            <label>페이코</label>
          </EasypayInfo>
        )}
      </Container>
    </>
  );
}

export default DiscountList;
