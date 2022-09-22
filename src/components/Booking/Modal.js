import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import './Modal.scss';

function Modal({ modalMessage, modalUpBtn }) {
  return (
    <div className='Modal'>
      <div className='modalBody' onClick={e => e.stopPropagation()}>
        <header className='layer-header'>
          <p className='tit'>알 림</p>
        </header>
        <p style={{ textAlign: 'left', paddingTop: '35px' }}>{modalMessage}</p>

        <button id='modalCloseBtn' onClick={modalUpBtn}>
          확인
        </button>
        <button className='btn-layer-close' onClick={modalUpBtn}>
          레이어 닫기
        </button>
      </div>
    </div>
  );
}

export default Modal;
