import styles from './Info.module.scss';

function Info() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>user님 안녕하세요.</h1>
        <p>회원정보를 입력해주세요.</p>
        <div className={styles.boxContent}>
          <div className={styles.inputBox}>
            <label for='birth'>생년월일</label>
            <input type='text' id='birth' />
          </div>
          <div className={styles.inputBox}>
            <label for='phone'>휴대폰 번호</label>
            <input type='text' id='phone' />
          </div>
          <div className={styles.inputBox}>
            <label for='id'>아이디</label>
            <input type='text' id='id' minLength='8' maxLength='12' />
          </div>
          <div className={styles.inputBox}>
            <label for='password'>비밀번호</label>
            <input type='text' id='password' maxLength='20' />
          </div>
          <div className={styles.inputBox}>
            <label for='password'>비밀번호 확인</label>
            <input type='text' id='password' maxLength='20' />
          </div>
          <div className={styles.inputBox}>
            <label for='email'>이메일 주소</label>
            <input type='text' id='email' />
          </div>
          <div className={styles.inputKiosk}>
            <p>
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
          </div>
          <div className={styles.addCinema}>
            <p>자주 방문하는 스타박스를 등록해 주세요!</p>
            <button>설정</button>
            <div className={styles.CinemaContainer}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Info;
