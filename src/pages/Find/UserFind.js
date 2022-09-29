import { Link } from 'react-router-dom';
import styles from './Find.module.scss';
import Logo from '../../assets/starbox.png';
import { useRef, useState } from 'react';

function UserFind() {
  const userName = useRef();
  const userBirth = useRef();
  const userPhone = useRef();
  const [isValid, setIsValid] = useState(false);

  //disabled
  const onChane = e => {
    userPhone.current.value.length > 0 &&
    userBirth.current.value.length > 0 &&
    userPhone.current.value.length > 0
      ? setIsValid(true)
      : setIsValid(false);
  };

  const findClick = e => {
    e.preventDefault();
    fetch('http://localhost:10010/user/find/id', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: userName.current.value, // "name" : "오인환",
        birth: userBirth.current.value, // birth: '660910',
        phone: userPhone.current.value, //phone: '01098451345',
      }),
    })
      .then(res => res.json())
      .then(result => {
        console.log(result);
        if (result.account_id) {
          alert(`${userName.current.value} 님의 아이디는 ${result.account_id} 입니다.`);
          userName.current.value = '';
          userBirth.current.value = '';
          userPhone.current.value = '';
        } else {
          alert('입력정보를 확인하세요!');
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
              <p style={{ border: '1px solid #036635', borderBottom: 'none' }}>
                <Link to='/user-find' style={{ textDecoration: 'none', color: '#036635' }}>
                  아이디 찾기
                </Link>
              </p>
              <p className={styles.before}>
                <Link to='/pass-find' style={{ textDecoration: 'none', color: '#222' }}>
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
                  ref={userName}
                  type='text'
                  placeholder='이름'
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
                  ref={userBirth}
                  type='password'
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
                  type='tel'
                  ref={userPhone}
                  placeholder='"-" 없이 입력'
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
            onClick={findClick}
            className={isValid ? `${styles.activeFindBtn}` : `${styles.findBtn}`}
          >
            아이디 찾기
          </button>
        </div>
      </div>
    </div>
  );
}
export default UserFind;
