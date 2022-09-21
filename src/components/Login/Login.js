import styles from './Login.module.scss';
import { AiOutlineClose } from 'react-icons/ai';

import { Link } from 'react-router-dom';

function Login({ setModal, modal }) {
  const closeModal = () => {
    setModal(false);
  };
  return (
    <>
      {modal && (
        <div className={styles.loginContainer}>
          <dl className={styles.loginBox}>
            <dt className={styles.loginHeader}>
              <p>로그인</p>
              <button
                onClick={closeModal}
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
                  <input type='text' placeholder='아이디' className={styles.inputBox} />
                  <input type='text' placeholder='비밀번호' className={styles.inputBox} />
                  <div className={styles.checkbox}>
                    <span className={styles.chkSave}>
                      <input
                        id='chkSave'
                        type='checkbox'
                        style={{ width: '16px', height: '16px' }}
                      />
                      <label for='chkSave'>아이디 저장</label>
                    </span>
                    <span style={{ color: '#3d7db7' }}>휴대폰 간편로그인</span>
                  </div>
                  <button className={styles.loginBtn}>로그인</button>
                </div>
                <ul className={styles.link}>
                  <li>
                    <span onClick={closeModal}>
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
                        <img
                          src='https://www.megabox.co.kr/static/pc/images/member/ico-kakao.png'
                          alt='kakao'
                        />
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
