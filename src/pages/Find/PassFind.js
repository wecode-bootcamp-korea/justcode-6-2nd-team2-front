import { Link } from 'react-router-dom';
import styles from './Find.module.scss';
import Logo from '../../assets/starbox.png';
import { useRef, useState } from 'react';

function PassFind() {
  const pwFindName = useRef();
  const pwFindBirth = useRef();
  const pwFindPhone = useRef();
  const pwFindId = useRef();
  const [isValid, setIsValid] = useState(false);

  //disabled
  const onChane = e => {
    pwFindName.current.value.length > 0 &&
    pwFindBirth.current.value.length > 0 &&
    pwFindPhone.current.value.length > 0 &&
    pwFindId.current.value.length > 0
      ? setIsValid(true)
      : setIsValid(false);
  };

  const pwFind = e => {
    e.preventDefault();
    fetch('http://localhost:10010/user/find/password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: pwFindName.current.value, // "name" : "오인환",
        birth: pwFindBirth.current.value, // "birth": "660910",
        phone: pwFindPhone.current.value, // "01098451345",
        account_id: pwFindId.current.value, // "account_id" : "yunoroy09"
      }),
    })
      .then(res => res.json())
      .then(result => {
        console.log(result);
        if (result) {
          alert(`${pwFindName.current.value} 님 임시 비밀번호는 ${result.password} 입니다.`);
          pwFindName.current.value = '';
          pwFindBirth.current.value = '';
          pwFindPhone.current.value = '';
          pwFindId.current.value = '';
        }
      });
  };
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
                <input
                  id='name'
                  ref={pwFindName}
                  type='text'
                  placeholder='이름을 입력하세요.'
                  className={styles.inputText}
                  onChange={onChane}
                />
              </dd>
            </dl>
            <dl className={styles.inputBox}>
              <dt className={styles.inputTitle}>
                <label for='birth'>생년월일</label>
              </dt>
              <dd>
                <input
                  id='birth'
                  ref={pwFindBirth}
                  type='text'
                  placeholder='생년월일 앞8자리'
                  className={styles.inputText}
                  onChange={onChane}
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
                  ref={pwFindPhone}
                  type='tel'
                  placeholder='"-" 없이 입력'
                  className={styles.inputText}
                  onChange={onChane}
                />
              </dd>
            </dl>
            <dl className={styles.inputBox}>
              <dt className={styles.inputTitle}>
                <label for='id'>아이디</label>
              </dt>
              <dd>
                <input
                  id='id'
                  type='text'
                  ref={pwFindId}
                  placeholder='아이디를 입력하세요.'
                  className={styles.inputText}
                  onChange={onChane}
                />
              </dd>
            </dl>
          </div>
          <p style={{ fontSize: '14px', marginBottom: '30px' }}>
            ※ 휴대폰 번호가 변경된 경우 본인인증 찾기를 통하여 아이디찾기를 진행해주시기 바랍니다.
          </p>
          <button
            className={isValid ? `${styles.activeFindBtn}` : `${styles.findBtn}`}
            onClick={pwFind}
          >
            비밀번호 찾기
          </button>
        </div>
      </div>
    </div>
  );
}
export default PassFind;
