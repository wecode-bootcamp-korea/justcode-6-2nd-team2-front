import styles from './SignUp.module.scss';
import { Link } from 'react-router-dom';
import Logo from '../../assets/starbox.png';
import Auth from './Auth';
import Info from './Info';
import Consent from './Consent';
import Final from './Final';
import React, { useState } from 'react';

function SignUp() {
  const [stepIndex, setStepIndex] = useState(0);
  const tabHandler = index => setStepIndex(index);
  const stepArr = [
    {
      title: <li onClick={() => tabHandler(0)}>STEP1.본인인증</li>,
      content: <Auth />,
    },
    {
      title: <li onClick={() => tabHandler(1)}>STEP2.약관동의</li>,
      content: <Consent />,
    },
    {
      title: <li onClick={() => tabHandler(2)}>STEP3.정보입력</li>,
      content: <Info />,
    },
    {
      title: <li onClick={() => tabHandler(3)}>STEP4.가입완료</li>,
      content: <Final />,
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
            {stepArr.map((step, index) => {
              return step.title;
            })}
          </ul>
        </div>
        <div className={styles.content}>
          <ul>
            <li>{stepArr[stepIndex].content}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default SignUp;
