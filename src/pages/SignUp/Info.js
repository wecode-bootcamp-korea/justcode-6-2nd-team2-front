import styles from './Info.module.scss';
import { useState, useRef } from 'react';
import InfoConsent from './InfoCosent';
import { useNavigate } from 'react-router-dom';

function Info() {
  const navigate = useNavigate();
  const [idError, setIdError] = useState('');
  const [pwError, setPwError] = useState('');
  const [pwCfmError, setPwCfmError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [value, setValue] = useState();

  const email = useRef();
  const id = useRef();
  const password = useRef();
  const pwConfirm = useRef();
  const kiosk = useRef();

  //id validation
  const Validation = e => {
    e.preventDefault();
    fetch('http://localhost:10010/user/idcheck', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        account_id: id.current.value,
      }),
    })
      .then(res => res.json())
      .then(result => {
        console.log(result);
        if (result.message === 'USER_ALREADY_EXISTS') {
          alert('실패');
          id.current.value = '';
        } else {
          alert('성공');
        }
      });
  };

  //pw check
  const validationPwHandler = e => {
    const pwValue = password.current.value;
    const pwRegExp = new RegExp(/^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,20}$)/);
    if (!pwRegExp.test(pwValue)) {
      setPwError('영문, 숫자, 특수기호 중 2가지 이상 조합');
    } else if (pwValue.length <= 0) {
      setPwError('');
    } else {
      setPwError('');
    }
  };

  const validationEmail = e => {
    const emailValue = email.current.value;
    const emailRegExp = new RegExp(/^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+$/);

    if (!emailRegExp.test(emailValue)) {
      setEmailError('이메일형식이 맞지 않습니다.');
    } else {
      setEmailError('');
    }
  };

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
        account_id: id.current.value,
        password: password.current.value,
        pwConfirm: pwConfirm.current.value,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.message === 'USER_CREATED') {
          alert('성공');
          navigate('/signup/complete');
        } else {
          alert('가입실패');
          navigate('');
          window.localStorage.clear();
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
            <dl className={styles.flexLayout}>
              <dt className={styles.title}>
                <label for='birth' className={styles.title}>
                  생년월일
                </label>
              </dt>
              <dd className={styles.inputBlock}>
                <span>{birth}</span>
              </dd>
            </dl>
          </div>
          <div className={styles.inputBox}>
            <dl className={styles.flexLayout}>
              <dt className={styles.title}>
                <label for='phone' className={styles.title}>
                  휴대폰 번호
                </label>
              </dt>
              <dd className={styles.inputBlock}>{phone}</dd>
            </dl>
          </div>
          <div className={styles.inputBox}>
            <dl className={styles.flexLayout}>
              <dt className={styles.title}>
                <label for='id' className={styles.title}>
                  아이디
                </label>
              </dt>
              <dd className={styles.inputBlock}>
                <input
                  type='text'
                  id='userId'
                  ref={id}
                  name='userId'
                  minLength='8'
                  maxLength='12'
                  placeholder='영문, 숫자 조합(8~12자)'
                  onChange={e =>
                    id.current.value.length < 7
                      ? setIdError('영문, 숫자 조합(8~12자)')
                      : setIdError('')
                  }
                />
                <span className={styles.validationMsg}>{idError}</span>
              </dd>
              <dd className={styles.checkBtn}>
                <span onClick={Validation}>중복확인</span>
              </dd>
            </dl>
          </div>

          <div className={styles.inputBox}>
            <dl className={styles.flexLayout}>
              <dt className={styles.title}>
                <label for='password'>비밀번호</label>
              </dt>
              <dd className={styles.inputBlock}>
                <input
                  type='password'
                  id='text'
                  name='pwInput'
                  ref={password}
                  maxLength='20'
                  placeholder='영문, 숫자, 특수기호 중 2가지 이상 조합'
                  onChange={validationPwHandler}
                />
                <p className={styles.validationMsg}>{pwError}</p>
              </dd>
            </dl>
          </div>

          <div className={styles.inputBox}>
            <dl className={styles.flexLayout}>
              <dt className={styles.title}>
                <label for='password' className={styles.title}>
                  비밀번호 확인
                </label>
              </dt>
              <dd className={styles.inputBlock}>
                <input
                  type='password'
                  ref={pwConfirm}
                  id='text'
                  name='pwInputCfm'
                  maxLength='20'
                  placeholder='영문, 숫자, 특수기호 중 2가지 이상 조합'
                  onChange={() => {
                    pwConfirm.current.value !== password.current.value
                      ? setPwCfmError('비밀번호가 맞지 않습니다.')
                      : setPwCfmError('');
                  }}
                />
                <p className={styles.validationMsg}>{pwCfmError}</p>
              </dd>
            </dl>
          </div>
          <div className={styles.inputBox}>
            <dl className={styles.flexLayout}>
              <dt className={styles.title}>
                <label for='email' className={styles.title}>
                  이메일 주소
                </label>
              </dt>
              <dd className={styles.inputBlock}>
                <input
                  type='text'
                  id='email'
                  ref={email}
                  placeholder='이메일 주소를 입력해 주세요'
                  onChange={validationEmail}
                />
                <p className={styles.validationMsg}>{emailError}</p>
              </dd>
            </dl>
          </div>
          <div className={styles.inputKiosk}>
            <p className={styles.kioskTitle}>
              무인발권기 <span>기능 설정</span>
            </p>
            <div className={styles.kioskTrue}>
              <label for='kiosk1'>사용</label>
              <input type='radio' name='kiosk' onChange={e => setValue(e.target.value)} />
            </div>
            <div className={styles.kioskFalse}>
              <label for='kiosk2'>미사용</label>
              <input type='radio' name='kiosk' onChange={e => setValue(e.target.value)} />
            </div>
            <div className={styles.text}>* '생년월일 + 휴대폰번호로' 티켓출력</div>
          </div>

          <div className={styles.infoConsent}>
            <InfoConsent className={styles.consetComponent} />
          </div>
        </div>
      </div>
      <button
        onClick={register}
        className={value ? `${styles.nextCompleteBtn}` : `${styles.completeBtn}`}
      >
        회원가입
      </button>
      <button onClick={clearUser} className={styles.cencleBtn}>
        취소
      </button>
    </div>
  );
}
export default Info;
