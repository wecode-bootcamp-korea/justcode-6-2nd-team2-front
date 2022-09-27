import styles from './InfoConsent.module.scss';
function InfoConsent() {
  return (
    <div className={styles.container}>
      <div className={styles.infoConsent}>
        <p className={styles.title}>마케팅 활용을 위한 개인정보 수집 이용 안내(선택)</p>
        <dl className={styles.consentBox}>
          <dt>수집목적</dt>
          <dd className={styles.text}>
            고객맞춤형 상품 및 서비스 추천, 당사 신규 상품/서비스 안내 및 권유, 사은/할인 행사 등
            각종 이벤트 정보 등의 안내 및 권유
          </dd>
          <dt>수집항목</dt>
          <dd className={styles.text}>
            이메일, 휴대폰번호, 주소, 생년월일, 선호영화관, 문자/이메일/앱푸쉬 정보수신동의 여부,
            서비스 이용기록, 포인트 적립 및 사용 정보, 접속로그
          </dd>
          <dt>보유기간</dt>
          <dd className={styles.text}>회원 탈퇴 시 혹은 이용 목적 달성 시 까지</dd>
          <dd className={styles.checkConsenBox}>
            <input type='radio' id='agree' />
            <label for='consent' className={styles.checkTitle}>
              동의
            </label>
            <input type='radio' id='disagree' />
            <label for='disagree' className={styles.checkTitle}>
              미동의
            </label>
          </dd>
          <dt>혜택 수신설정</dt>
          <dd className={styles.text}></dd>
          <dd className={styles.checkConsenBox}>
            <input type='checkbox' id='agree' />
            <label for='consent' className={styles.checkTitle}>
              알림
            </label>
            <input type='checkbox' id='disagree' />
            <label for='disagree' className={styles.checkTitle}>
              SMS
            </label>
            <input type='checkbox' id='disagree' />
            <label for='disagree' className={styles.checkTitle}>
              이메일
            </label>
          </dd>
        </dl>
      </div>
    </div>
  );
}
export default InfoConsent;
