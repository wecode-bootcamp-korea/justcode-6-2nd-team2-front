/* eslint-disable */
import styles from './SignUp.module.scss';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../assets/starbox.png';
import Auth from './Auth';
import Info from './Info';
import Consent from './Consent';
import Final from './Complete';
import React, { useState } from 'react';
import Complete from './Complete';

function SignUp() {
  const location = useLocation();

  return (
    <div className={styles.container}>
      <div className={styles.contentsBox}>
        <Link to='/'>
          <h1>
            <img src={Logo} alt='logo' />
          </h1>
        </Link>
        <div className={styles.tabTitle}>
          <ul>
            <li>STEP1.본인인증</li>
            <li>STEP2.약관동의</li>
            <li>STEP3.정보입력</li>
            <li>STEP4.가입완료</li>
          </ul>
        </div>
        <div className={styles.content}>
          <ul>
            <li>{location.pathname === '/signup' ? <Auth /> : null}</li>
            <li>{location.pathname === '/signup/consent' ? <Consent /> : null}</li>
            <li>{location.pathname === '/signup/info' ? <Info /> : null}</li>
            <li>{location.pathname === '/signup/complete' ? <Complete /> : null}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default SignUp;
