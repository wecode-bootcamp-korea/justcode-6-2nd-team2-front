import { Link } from 'react-router-dom';
import styles from './Find.module.scss';
import Logo from '../../assets/starbox.png';

function PassFind() {
  return (
    <div className={styles.containerBackground}>
      <div className={styles.container}>
        <Link to='/'>
          <h1>
            <img src={Logo} alt='logo' />
          </h1>
        </Link>

        <ul className={styles.tabBar}>
          <li>
            <p className={styles.findTitle}>아이디/비밀번호 찾기</p>
          </li>
          <li>
            <div className={styles.tabMenu}>
              <p className={styles.before}>
                <Link to='/user-find' style={{ textDecoration: 'none', color: '#222' }}>
                  아이디 찾기
                </Link>
              </p>
              <p style={{ border: '1px solid #036635', borderBottom: 'none' }}>
                <Link to='/pass-find' style={{ textDecoration: 'none', color: '#036635' }}>
                  비밀번호 찾기
                </Link>
              </p>
            </div>
          </li>
        </ul>
        <div className={styles.contentBox}>
          <h2>간편찾기</h2>
          <div className={styles.inputBoxContainer}>
            <dl className={styles.inputBox}>
              <dt className={styles.inputTitle}>
                <label for='name'>이름</label>
              </dt>
              <dd>
                <input id='name' type='text' placeholder='이름' className={styles.inputText} />
              </dd>
            </dl>
            <dl className={styles.inputBox}>
              <dt className={styles.inputTitle}>
                <label for='birth'>생년월일</label>
              </dt>
              <dd>
                <input
                  id='birth'
                  type='text'
                  placeholder='생년월일 앞8자리'
                  className={styles.inputText}
                />
              </dd>
            </dl>
            <dl className={styles.inputBox}>
              <dt className={styles.inputTitle}>
                <label for='phone'>휴대폰 번호</label>
              </dt>
              <dd>
                <input
                  id='phone'
                  type='text'
                  placeholder='"-" 없이 입력'
                  className={styles.inputText}
                />
                <input type='submit' value='인증요청' className={styles.inputBtn} />
              </dd>
            </dl>
            <dl className={styles.inputBox}>
              <dt className={styles.inputTitle}>
                <label for='phone'>인증번호</label>
              </dt>
              <dd>
                <input id='phone' type='text' className={styles.inputText} />
                <span style={{ position: 'absolute', top: '14px', left: '320px', color: 'red' }}>
                  3:00
                </span>
                <input type='submit' value='인증확인' className={styles.inputBtn} />
              </dd>
            </dl>
          </div>
          <p style={{ fontSize: '14px', marginBottom: '30px' }}>
            ※ 휴대폰 번호가 변경된 경우 본인인증 찾기를 통하여 아이디찾기를 진행해주시기 바랍니다.
          </p>
          <button className={styles.findBtn}> 비밀번호 찾기 </button>
        </div>
      </div>
    </div>
  );
}
export default PassFind;
