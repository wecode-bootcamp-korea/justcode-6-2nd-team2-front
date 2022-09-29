/* eslint-disable */
import { useState, useRef, useEffect } from 'react';
import styles from './Phone.module.scss';
import { AiOutlineClose } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

function Phone({ setModal }) {
  const navigate = useNavigate();
  const [num, setNum] = useState('');
  const [name, setName] = useState('');
  const [birth, setBirth] = useState('');
  const [toggle, setToggle] = useState(false);

  //e.target.value
  const [phoneValue, setPhoneValue] = useState('');
  const [validation, setValidation] = useState('');

  const closeBtn = () => {
    setModal(false);
  };

  const phoneRef = useRef();
  const verifyRef = useRef();
  const userName = useRef();
  const birthValue = useRef();

  //phone Num
  // const phoneHandler = e => {
  //   const value = phoneRef.current.value.replace(/\D+/g, '');
  //   const numberLenth = 11;

  //   let result;
  //   result = '';

  //   for (let i = 0; i < value.length && i < numberLenth; i++) {
  //     switch (i) {
  //       case 3:
  //         result += '-';
  //         break;
  //       case 7:
  //         result += '-';
  //         break;

  //       default:
  //         break;
  //     }
  //     result += value[i];
  //   }
  //   phoneRef.current.value = result;
  //   setNum(e.target.value);
  //   setIsValid('nextPhoneBoxBtn');
  // };

  //휴대폰번호 발송
  const phoneSend = e => {
    setToggle(true);
    //POST  'http://localhost:10010/user/send/verify'
    fetch('http://localhost:10010/user/send/verify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        // "phone": "010-6863-0106"
        phone: phoneRef.current.value,
        name: userName.current.value,
        birth: birthValue.current.value,
      }),
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        // localStorage.setItem('token', res.data.jwt);
      });
    e.preventDefault();
  };
  //인증번호 발송
  const verifyCode = e => {
    // POST 'http://localhost:10010/user/check/verify'
    fetch('http://localhost:10010/user/check/verify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        // "name" : "오인환",
        // "phone" : "010-9459-5314",
        // "birth" : "770808",
        // "verificationCode" : "110572"
        name: userName.current.value,
        phone: phoneRef.current.value,
        birth: birthValue.current.value,
        verificationCode: verifyRef.current.value,
      }),
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        alert('인증성공');
        navigate('/signup/consent');
        window.localStorage.setItem('name', userName.current.value);
        window.localStorage.setItem('birth', birthValue.current.value);
        window.localStorage.setItem('phone', phoneRef.current.value);
      });
  };
  //success 페이지 이동

  return (
    <div className={styles.phoneContainer}>
      <div className={styles.top}>
        <p>휴대폰 인증하기</p>
        <button onClick={closeBtn}>
          <AiOutlineClose color='white' />
        </button>
      </div>
      <div className={styles.contentBox}>
        <div className={styles.inputBox}>
          <label className={styles.title} for='name'>
            이름
          </label>
          <input
            id='name'
            ref={userName}
            type='text'
            placeholder='성명입력'
            className={styles.inputBorder}
          />
        </div>
        <div className={styles.inputBox}>
          <label className={styles.title} for='birth'>
            생년월일
          </label>
          <input
            id='birth'
            ref={birthValue}
            type='text'
            placeholder='생년월일'
            className={styles.inputBorder}
          />
        </div>
        <div className={styles.inputBox}>
          <label className={styles.title} for='phone'>
            휴대폰 번호
          </label>
          <input
            id='phone'
            value={num}
            ref={phoneRef}
            // onChange={phoneHandler}
            type='tel'
            placeholder='" - " 없이 입력해주세요.'
            className={styles.inputBorder}
            onChange={e => {
              setPhoneValue(e.target.value);
            }}
          />
          <button
            onClick={phoneSend}
            className={phoneValue ? `${styles.nextPhoneBoxBtn}` : `${styles.phoneBoxBtn}`}
          >
            확인
          </button>
        </div>
        {toggle === true ? (
          <div className={styles.toggle}>
            <div className={styles.inputBox}>
              <label className={styles.title} for='phone'>
                휴대폰 번호
              </label>
              <input
                id='phone'
                ref={phoneRef}
                value={phoneRef.current.value}
                onChange={phoneHandler}
                type='tel'
                className={styles.inputBorder}
              />
            </div>
            <div className={styles.inputBox}>
              <label className={styles.title} for='auth'>
                인증번호
              </label>
              <input
                id='auth'
                ref={verifyRef}
                type='text'
                placeholder='6자리 번호 입력'
                className={styles.inputBorder}
                onChange={e => {
                  setValidation(e.target.value);
                }}
              />
              <button
                onClick={verifyCode}
                className={validation ? `${styles.nextPhoneBoxBtn}` : `${styles.phoneBoxBtn}`}
              >
                인증확인
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
export default Phone;
