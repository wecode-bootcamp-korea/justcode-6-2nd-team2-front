import styles from './Info.module.scss';
import ListMovie from '../../components/Booking/Theater/ListTheater';
import { useState, useRef } from 'react';
import InfoConsent from './InfoCosent';
import { useNavigate } from 'react-router-dom';

function Info() {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [user, setUser] = useState('');
  // const [user, setUser] = useState('');ㄴ
  // const [birth, setBirth] = useState('');
  const email = useRef();
  const idValue = useRef();
  const password = useRef();
  const pwConfirm = useRef();

  //id validation
  const Validation = () => {
    const account_id = 'roy_oh0910';
    if (idValue.current.value === account_id) {
      alert('사용할수 없는 아이디입니다.');
    } else {
      alert('사용할수 있는 아이디입니다.');
    }
  };

  const openModal = () => {
    setModal(!modal);
  };

  //acount check

  //user info
  const name = window.localStorage.getItem('name');
  const birth = window.localStorage.getItem('birth');
  const phone = window.localStorage.getItem('phone');

  //user clear
  const clearUser = () => {
    window.localStorage.clear();
  };

  //register POST
  const register = () => {
    //POST 'http://localhost:10010/user/signup'
    fetch('http://localhost:10010/user/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        phone: phone,
        birth: birth,
        email: email.current.value,
        account_id: idValue.current.value,
        password: password.current.value,
        pwConfirm: pwConfirm.current.value,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.message === 'USER_CREATED') {
          // console.log(res);
          alert('성공');
          navigate('/signup/complete');
        } else {
          alert('가입실패');
          // navigate('');
          // window.localStorage.clear();
        }
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1> {name}님 안녕하세요.</h1>
        <p className={styles.mainText}>회원정보를 입력해주세요.</p>
        <div className={styles.contentBox}>
          <div className={styles.inputBox}>
            <label for='birth' className={styles.title}>
              생년월일
            </label>
            <span>{birth}</span>
          </div>
          <div className={styles.inputBox}>
            <label for='phone' className={styles.title}>
              휴대폰 번호
            </label>
            {phone}
          </div>
          <div className={styles.inputBox}>
            <label for='id' className={styles.title}>
              아이디
            </label>
            <div>
              <input
                type='text'
                id='id'
                ref={idValue}
                minLength='8'
                maxLength='12'
                placeholder='영문, 숫자 조합(8~12자)'
              />
              <span className={styles.validationMsg}>message</span>
            </div>
            <span className={styles.checkBtn} onClick={Validation}>
              중복확인
            </span>
          </div>

          <div className={styles.inputBox}>
            <label for='password' className={styles.title}>
              비밀번호
            </label>
            <input
              type='password'
              id='text'
              ref={password}
              maxLength='20'
              placeholder='영문, 숫자, 특수기호 중 2가지 이상 조합'
            />
          </div>
          <div className={styles.inputBox}>
            <label for='password' className={styles.title}>
              비밀번호 확인
            </label>
            <input
              type='password'
              ref={pwConfirm}
              id='text'
              maxLength='20'
              placeholder='영문, 숫자, 특수기호 중 2가지 이상 조합'
            />
          </div>
          <div className={styles.inputBox}>
            <label for='email' className={styles.title}>
              이메일 주소
            </label>
            <input type='text' id='email' ref={email} placeholder='이메일 주소를 입력해 주세요' />
          </div>
          <div className={styles.inputKiosk}>
            <p className={styles.kioskTitle}>
              무인발권기 <span>기능 설정</span>
            </p>
            <div className={styles.kioskTrue}>
              <label for='kiosk1'>사용</label>
              <input type='radio' id='kiosk1' />
            </div>
            <div className={styles.kioskFalse}>
              <label for='kiosk2'>미사용</label>
              <input type='radio' id='kiosk2' />
            </div>
            <div className={styles.text}>* '생년월일 + 휴대폰번호로' 티켓출력</div>
          </div>
          <div className={styles.addTheater}>
            <p className={styles.title}>나만의 메가박스</p>
            <p className={styles.text}>자주 방문하는 스타박스를 등록해 주세요!</p>
            <button onClick={openModal}>설정</button>
          </div>
          <div className={styles.infoConsent}>
            <InfoConsent />
          </div>
          <div className={styles.modalContainer}>{modal === true ? <ListMovie /> : null}</div>
        </div>
      </div>
      <button onClick={register}>회원가입</button>
      <button onClick={clearUser}>취소</button>
    </div>
  );
}
export default Info;
