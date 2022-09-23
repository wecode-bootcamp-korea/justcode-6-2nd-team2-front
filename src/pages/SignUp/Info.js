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
        </div>
        <div className={styles.boxContent}>
          <div className={styles.inputBox}>
            <label for='phone'>휴대폰 번호</label>
            <input type='text' id='phone' />
          </div>
        </div>
        <div className={styles.boxContent}>
          <div className={styles.inputBox}>
            <label for='id'>아이디</label>
            <input type='text' id='id' />
          </div>
        </div>
        <div className={styles.boxContent}>
          <div className={styles.inputBox}>
            <label for='password'>비밀번호</label>
            <input type='text' id='password' />
          </div>
        </div>
        <div className={styles.boxContent}>
          <div className={styles.inputBox}>
            <label for='pwConfirm'>생년월일</label>
            <input type='text' id='pwConfirm' />
          </div>
        </div>
        <div className={styles.boxContent}>
          <div className={styles.inputBox}>
            <label for='email'>이메일 주소</label>
            <input type='text' id='email' />
          </div>
        </div>
        <div className={styles.boxContent}>
          <div className={styles.inputKiosk}>
            <p>
              무인발권기 <span>기능 설정</span>
            </p>
            <div className={styles.kioskTrue}>
              <label for='kiosk1'>사용</label>
              <input type='checkbox' id='kiosk1' />
              <label for='kiosk1'></label>
              <input type='checkbox' id='kiosk1' />
            </div>
            <div className={styles.kioskFalse}>
              <label for='kiosk2'>미사용</label>
              <input type='checkbox' id='kiosk2' />
              <label for='kiosk2'></label>
              <input type='checkbox' id='kiosk2' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Info;
