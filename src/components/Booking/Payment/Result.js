import React, { useEffect, useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';
import { CountContext, AllContext } from '../../../pages/Booking/Booking';
import { ScheduleContext } from '../../../pages/Router';
import { CreditContext } from '../Payment';

import Modal2 from './Modal2';

import './Result.scss';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 15px 20px 0 0;
`;
const TitleArea = styled.div`
  position: relative;
  margin-left: 20px;
  padding: 0 0 0 28px;
  span {
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 20px;
    height: 20px;
    background-image: url(https://img.megabox.co.kr/static/pc/images/common/txt/txt-age-small-15.png);
    background-position: center;
    background-repeat: no-repeat;
  }
`;
const Title = styled.p`
  padding: 1px 0 0 0;
  font-size: 1.0667em;
  font-weight: 400;
  line-height: 1.1;
`;
const Cate = styled.p`
  padding: 4px 0 0 0;
  font-size: 0.8667em;
  color: #aaa;
  line-height: 1.1;
`;

const InfoArea = styled.div`
  position: relative;
  min-height: 50px;
  margin-left: 48px;
  padding: 0 45px 0 0;
  font-size: 0.8667em;
`;

const Theater = styled.p`
  padding: 1px 0 0 0;
  font-size: 1.0667em;
  font-weight: 400;
  line-height: 1.1;
  margin-top: 10px;
  color: #c4c4c4;
  font-size: 1em;
`;

const Date = styled.p`
  padding: 1px 0 0 0;
  font-size: 1.0667em;
  font-weight: 400;
  line-height: 1.1;
  margin-top: 5px;
  color: #c4c4c4;
  font-size: 1em;
  display: flex;
`;

const Time = styled.p`
  position: relative;
  margin-left: 10px;
  padding-left: 11px;
  color: #c4c4c4;
  font-size: 1em;
  line-height: 1.1;
  display: flex;
  &::before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 50%;
    width: 1px;
    height: 12px;
    margin-top: -7px;
    background-color: #747474;
  }
  i {
    margin-top: -2px;
    margin-right: 3px;
    overflow: hidden;
    width: 13px;
    height: 13px;
    background-image: url(https://img.megabox.co.kr/static/pc/images/common/ico/ico-clock-white.png);
    display: inline-block;
  }
`;

const SeatArea = styled.div`
  margin-left: 20px;
  height: auto;
  overflow-y: auto;
  max-height: 270px;
`;

const Box = styled.div`
  position: relative;
  border-radius: 4px;
  padding: 15px 20px;
  margin-bottom: 10px;
  background-color: #434343;
  color: #fff;
`;

const BoxDiscount = styled.div`
  position: relative;
  border-radius: 4px;
  padding: 15px 20px;
  margin-bottom: 10px;
  background-color: #434343;
  &::before {
    content: '';
    position: absolute;
    top: -18px;
    left: 50%;
    margin-left: -12px;
    width: 24px;
    height: 24px;
    background: url(https://img.megabox.co.kr/static/pc/images/common/ico/ico-circle-minus.png);
  }
`;

const SpanLeft = styled.span`
  color: #c4c4c4;
  float: left;
  font-size: 0.8667em;
`;

const SpanRight = styled.span`
  color: #c4c4c4;
  float: right;
  font-size: 0.9333em;
  font-family: Roboto;
  font-weight: 300;
`;

const All = styled.div`
  margin: 7px 0 0 0;
  padding: 7px 0 0 0;
  border-top: 1px solid #4d4d4d;
  height: 25px;
`;

const PayArea = styled.div`
  position: absolute;
  left: 0;
  bottom: 91px;
  width: 100%;
  padding: 0 20px;
  strong {
    font-size: 1.6em;
    color: #59bec9;
    margin-right: 5px;
  }
`;

const ButtonArea = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  button {
    display: block;
    float: left;
    width: 50%;
    height: 40px;
    font-size: 1.2em;
    line-height: 40px;
    text-align: center;
    vertical-align: middle;
    color: #fff;
    border: 0;
    cursor: pointer;
    background-color: #53565b;
  }
  a {
    display: block;
    float: left;
    width: 50%;
    height: 40px;
    font-size: 1.2em;
    line-height: 40px;
    text-align: center;
    vertical-align: middle;
    color: #fff;
    border: 0;
    cursor: pointer;
    background-color: #53565b;
  }
`;

function Result() {
  const { adultNum, setAdultNum, teenNum, setTeenNum } = useContext(CountContext);
  const { allSelectArray, setAllSelectArray } = useContext(AllContext);
  const { means, setMeans } = useContext(CreditContext);

  const [all, setAll] = useState([]);
  const [totalPay, setTotalPay] = useState(adultNum * 12000 + teenNum * 10000);

  const navigate = useNavigate();

  const { scheduleId, setScheduleId } = useContext(ScheduleContext);

  const [data, setData] = useState('');

  const [modalup, setModalup] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const modalUpBtn = () => {
    setModalMessage(data);
    setModalup(!modalup);
  };

  useEffect(() => {
    fetch(`http://localhost:10010/booking/schedule/${scheduleId}`, {
      method: 'get',
    })
      .then(res => res.json())
      .then(mock => {
        setData(mock.data[0]);
      });
  }, []);

  const body = {
    scheduleId: scheduleId,
    adultNumber: adultNum,
    teenagerNumber: teenNum,
    kidNumber: 0,
    seatsName: allSelectArray,
  };

  function onClickPayment() {
    /* 1. 가맹점 식별하기 */
    const { IMP } = window;
    IMP.init('imp10300638');

    let pg = '';
    let pay_method = '';

    if (means === 'credit') {
      pg = 'html5_inicis';
      pay_method = 'card';
    } else if (means === 'mobile') {
      pg = 'danal';
      pay_method = 'card';
    } else if (means === 'easy' || means === 'naver') {
      pg = 'tosspay';
      pay_method = 'trans';
    } else if (means === 'kakao') {
      pg = 'kakaopay';
      pay_method = 'card';
    } else if (means === 'payco') {
      pg = 'payco';
      pay_method = 'card';
    }

    /* 2. 결제 데이터 정의하기 */
    const data = {
      pg: pg, // PG사
      pay_method: pay_method, // 결제수단
      merchant_uid: `mid_${new window.Date().getTime()}`, // 주문번호
      amount: 100, // 결제금액
      name: '메가박스 티켓', // 주문명
      buyer_name: '스타호', // 구매자 이름
      buyer_tel: '01030003000', // 구매자 전화번호
      buyer_email: 'starbox@gmail.com', // 구매자 이메일
      buyer_addr: '스타시', // 구매자 주소
      buyer_postcode: '06018', // 구매자 우편번호
    };

    /* 4. 결제 창 호출하기 */
    IMP.request_pay(data, callback);
  }

  /* 3. 콜백 함수 정의하기 */
  function callback(response) {
    const { success } = response;

    if (success) {
      fetch('http://localhost:10010/booking/ticket', {
        method: 'POST',
        headers: {
          token: localStorage.getItem('token').accessToken,
          'Content-type': 'application/json',
        },
        body: JSON.stringify(body),
      })
        .then(res => res.json())
        .then(mock => {
          modalUpBtn();
        });
    } else {
      alert(`결제 실패하였습니다.`);
    }
  }

  useEffect(() => {
    let test = new Array(allSelectArray);
    if (allSelectArray.length >= 1) {
      for (let i = 0; i < test[0].length; i++) {
        if (test[0][i].includes('Z')) {
          let te = test[0][i];
          te = te.slice(0, -1);
          test[0][i] = te;
        }
      }
    }
    setAll(test[0]);
  }, [allSelectArray]);

  // useEffect(() => {
  //   setTotalPay(adultNum * 12000 + teenNum * 10000);
  // }, [adultNum, teenNum]);

  return (
    <>
      <Container>
        <TitleArea>
          <span />
          <Title>{data.title}</Title>
          <Cate>2D</Cate>
        </TitleArea>
        <InfoArea>
          <Theater>{data.screen_name}</Theater>
          {/* <TheaterDetail>컴포트1관</TheaterDetail> */}
          <Date>
            {data.watch_date}
            <Time>
              <i />
              {data.start_time}~{data.end_time}
            </Time>
          </Date>
        </InfoArea>
        <SeatArea>
          <Box>
            {adultNum !== 0 && (
              <div style={{ height: '25px' }}>
                <SpanLeft>성인 {adultNum} </SpanLeft>
                <SpanRight>
                  {String(adultNum * 12000).slice(0, -3) + ',' + String(adultNum * 12000).slice(-3)}
                </SpanRight>
              </div>
            )}
            {teenNum !== 0 && (
              <div style={{ height: '22px' }}>
                <SpanLeft>청소년 {teenNum} </SpanLeft>
                <SpanRight>
                  {String(teenNum * 10000).slice(0, -3) + ',' + String(teenNum * 10000).slice(-3)}
                </SpanRight>
              </div>
            )}
            <All>
              <SpanLeft style={{ color: '#fff', fontSize: '1em' }}>금액</SpanLeft>
              <SpanRight style={{ color: '#fff', fontSize: '1em' }}>
                {String(totalPay).slice(0, -3) + ',' + String(totalPay).slice(-3)}
              </SpanRight>
            </All>
          </Box>
          <BoxDiscount>
            <All>
              <SpanLeft style={{ color: '#fff', fontSize: '1em' }}>할인적용</SpanLeft>
              <SpanRight style={{ color: '#fff', fontSize: '1em' }}>0 원 </SpanRight>
            </All>
          </BoxDiscount>
        </SeatArea>
        <PayArea style={{ bottom: '124px' }}>
          <p style={{ float: 'left', marginTop: '9px', color: '#c4c4c4' }}>추가차액</p>
          <p style={{ float: 'right', color: '#c4c4c4', marginTop: '9px' }}>0</p>
        </PayArea>
        <PayArea>
          <p style={{ float: 'left', marginTop: '9px' }}>최종결제금액</p>
          <p style={{ float: 'right' }}>
            <strong>
              {totalPay === 0
                ? 0
                : String(totalPay).slice(0, -3) + ',' + String(totalPay).slice(-3)}
            </strong>
            원
          </p>
        </PayArea>
        <PayArea style={{ bottom: '51px', borderTop: '1px solid #6a6a6c' }}>
          <p style={{ float: 'left', marginTop: '9px', color: '#c4c4c4' }}>결제수단</p>
          <p style={{ float: 'right', color: '#c4c4c4', marginTop: '9px' }}>
            {means === 'credit' && '신용/체크카드'}
            {means === 'mobile' && '휴대폰 결제'}
            {(means === 'easy' || means === 'naver') && '토스페이'}
            {means === 'kakao' && '카카오페이'}
            {means === 'payco' && '페이코'}
          </p>
        </PayArea>
        <ButtonArea>
          <Link to='../Seat' style={{ borderRadius: '0px 0px 0px 4px', textDecoration: 'none' }}>
            이전
          </Link>
          <button
            style={{
              borderRadius: '0px 0px 4px 0px',
              backgroundColor: '#329eb1',
              color: '#fff',
              cursor: 'pointer',
              textDecoration: 'none',
            }}
            onClick={() => onClickPayment()}
          >
            결제
          </button>
        </ButtonArea>
        {modalup && (
          <Modal2
            modalMessage={modalMessage}
            modalUpBtn={modalUpBtn}
            adultNum={adultNum}
            teenNum={teenNum}
            allSelectArray={allSelectArray}
            totalPay={totalPay}
          />
        )}
      </Container>
    </>
  );
}

export default Result;
