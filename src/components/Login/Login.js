import styles from './Login.module.scss';
import Kakao from './Kakao';
import { AiOutlineClose } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Login({ setModal, modal }) {
  const navigate = useNavigate();
  //로그인 state
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  //활성화
  const [isValid, setIsValid] = useState(false);

  const [btnCol, setBtnCol] = useState(`${styles.loginBtn}`);

  const closeBtn = () => {
    setModal(false);
  };

  //onChange=> e.target.value
  const idHandler = e => {
    const idValue = e.target.value;
    setId(idValue);
    idValue !== undefined && password.length >= 8 ? setIsValid(true) : setIsValid(false);
  };
  const pwHandler = e => {
    const passwordValue = e.target.value;
    setPassword(passwordValue);
    passwordValue.length >= 8 && id !== undefined ? setIsValid(true) : setIsValid(false);
  };

  //login Btn
  const body = {
    account_id: id, //roy_oh0910 , mark_kim0106
    password: password, // qwerty12! , markzzang1!
  };
  const loginSuccess = e => {
    // POST 'http://localhost:10010/user/login'
    e.preventDefault();
    fetch('http://localhost:10010/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then(res => res.json())
      .then(result => {
        if (result.message === 'LOGIN_SUCCESS') {
          localStorage.setItem('token', result.token);
          navigate('/');
          setModal(false);
          setId('');
          setPassword('');
          setBtnCol(`${styles.loginBtn}`);
        } else {
          alert('로그인 정보 확인');
          setId('');
          setPassword('');
          setBtnCol(`${styles.loginBtn}`);
        }
      });
  };

  //checkBox
  return (
    <>
      {modal && (
        <div className={styles.loginContainer}>
          <dl className={styles.loginBox}>
            <dt className={styles.loginHeader}>
              <p>로그인</p>
              <button
                onClick={closeBtn}
                style={{
                  border: 'none',
                  backgroundColor: '#036635',
                  fontSize: '1.2em',
                }}
              >
                <AiOutlineClose color='white' />
              </button>
            </dt>
            <dd className={styles.loginContents}>
              <div className={styles.loginInput}>
                <div>
                  <input
                    type='id'
                    name='id'
                    value={id}
                    onChange={idHandler}
                    placeholder='아이디'
                    className={styles.inputBox}
                  />
                  <input
                    type='password'
                    name='password'
                    value={password}
                    onChange={pwHandler}
                    placeholder='비밀번호'
                    className={styles.inputBox}
                  />
                  <div className={styles.checkbox}>
                    <span className={styles.chkSave}>
                      <input
                        id='chkSave'
                        type='checkbox'
                        // value={check}
                        style={{ width: '16px', height: '16px' }}
                      />
                      <label for='chkSave'>아이디 저장</label>
                    </span>
                    <span style={{ color: '#3d7db7' }}>휴대폰 간편로그인</span>
                  </div>
                  <button
                    className={isValid === true ? `${styles.success}` : `${styles.loginBtn}`}
                    onClick={loginSuccess}
                  >
                    로그인
                  </button>
                </div>
                <ul className={styles.link}>
                  <li>
                    <span onClick={() => setModal(false)}>
                      <Link to='/user-find'>ID/PW 찾기</Link>
                    </span>
                    <span className={styles.centerLine}>회원가입</span>
                    <span>비회원 예매확인</span>
                  </li>
                  <li>
                    <div className={styles.snsLogin}>
                      <span>
                        <img
                          src='https://www.megabox.co.kr/static/pc/images/member/ico-facebook.png'
                          alt='facebook'
                        />
                      </span>
                      <span>
                        <img
                          src='https://www.megabox.co.kr/static/pc/images/member/ico-naver.png'
                          alt='naver'
                        />
                      </span>
                      <span>
                        <Kakao />
                      </span>
                      <span>
                        <img
                          src='https://www.megabox.co.kr/static/pc/images/member/ico-payco.png'
                          alt='payco'
                        />
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className={styles.loginImg}>
                <img
                  src='https://images.unsplash.com/photo-1560109947-543149eceb16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1vdmllfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
                  alt='img'
                />
              </div>
            </dd>
          </dl>
        </div>
      )}
    </>
  );
}
export default Login;
