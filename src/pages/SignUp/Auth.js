import styles from './Auth.module.scss';
import { GiSmartphone } from 'react-icons/gi';
import { SiNaver } from 'react-icons/si';
import Phone from './Phone';
import { useState } from 'react';

function Auth() {
  const [modal, setModal] = useState(false);
  const phoneHandler = () => {
    setModal(!modal);
  };

  return (
    <div className={styles.authContainer}>
      <div className={styles.content}>
        <h1 className={styles.title}>회원가입을 위함 본인인증 단계입니다.</h1>
        <p className={styles.titleText}>원하시는 인증방법을 선택해주세요.</p>
        <div className={styles.boxContent}>
          <button onClick={phoneHandler}>
            <GiSmartphone size='80px' color='lightgray' />
            <p>휴대폰 인증</p>
          </button>
          <button className={styles.naver}>
            <SiNaver size='50px' color='lightgray' />
            <p style={{ paddingTop: '20px' }}>네이버 로그인</p>
          </button>
        </div>
        <div>
          <ul>
            <li className={styles.titleText}>
              - 14세 미만 어린이는 보호자 인증을 추가로 완료한 후 가입이 가능합니다.
            </li>
            <li className={styles.titleText}>
              - 본인인증 시 제공되는 정보는 해당 인증기관에서 직접 수집하며, 인증 이외의 용도로 이용
              또는 저장되지 않습니다.
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.authModal}>
        {modal === true ? <Phone phoneHandler={phoneHandler} /> : null}
      </div>
    </div>
  );
}
export default Auth;
