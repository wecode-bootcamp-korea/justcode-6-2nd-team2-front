import styles from './SignUp.module.scss';
import { Link } from 'react-router-dom';
import Logo from '../../assets/starbox.png';
import Auth from './Auth';
import Info from './Info';
import Consent from './Consent';
import React, { useState } from 'react';

function SignUp() {
  const [tabIndex, setTabIndex] = useState(1);
  const tabHandler = index => setTabIndex(index);
  const tabArr = [
    {
      title: (
        <li className={styles.mainMenuList} onClick={() => tabHandler(1)}>
          영화
        </li>
      ),
      content: <Auth />,
    },
    {
      title: (
        <li className={styles.mainMenuList} onClick={() => tabHandler(2)}>
          예매
        </li>
      ),
      content: <Consent />,
    },
    {
      title: (
        <li className={styles.mainMenuList} onClick={() => tabHandler(3)}>
          > 극장
        </li>
      ),
      content: <Info />,
    },
  ];
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
      </div>
    </div>
  );
}
export default SignUp;
