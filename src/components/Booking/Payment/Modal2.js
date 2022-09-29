import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';

function Modal2({ modalMessage, modalUpBtn, adultNum, teenNum, allSelectArray, totalPay }) {
  const navigate = useNavigate();

  return (
    <div className='Modal'>
      <div className='modalBody' onClick={e => e.stopPropagation()}>
        <header className='layer-header'>
          <p className='tit'>알 림</p>
        </header>
        <p style={{ textAlign: 'left', paddingTop: '35px', color: 'black' }}>
          예매가 정상적으로 완료되었습니다.
        </p>
        <p style={{ textAlign: 'left', paddingTop: '26px', color: 'black' }}>
          예매영화: &nbsp;&nbsp;{modalMessage.title} / 2D
        </p>
        <p style={{ textAlign: 'left', color: 'black' }}>
          관람극장: &nbsp;&nbsp;{modalMessage.theater_name} / {modalMessage.screen_name}
        </p>
        <p style={{ textAlign: 'left', color: 'black' }}>
          관람일시: &nbsp;&nbsp;{modalMessage.watch_date} / {modalMessage.start_time}
        </p>
        <p style={{ textAlign: 'left', color: 'black' }}>
          관람인원: &nbsp;&nbsp;성인 {adultNum}명 {teenNum !== 0 ? `청소년 ${teenNum}명` : ''}
        </p>
        <p style={{ textAlign: 'left', color: 'black' }}>
          좌석번호: &nbsp;&nbsp;{allSelectArray.toString()}
        </p>
        <p style={{ textAlign: 'left', color: 'black' }}>
          결제정보: &nbsp;&nbsp;{String(totalPay).slice(0, -3) + ',' + String(totalPay).slice(-3)}원
        </p>
        <button
          id='modalCloseBtn'
          onClick={() => {
            modalUpBtn();
            navigate('../../');
          }}
        >
          확인
        </button>
        <button
          className='btn-layer-close'
          onClick={() => {
            modalUpBtn();
            navigate('../../');
          }}
        >
          레이어 닫기
        </button>
      </div>
    </div>
  );
}

export default Modal2;
