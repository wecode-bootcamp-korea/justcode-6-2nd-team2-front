import styles from './Consent.module.scss';

function Consent() {
  return (
    <div className={styles.authContainer}>
      <div className={styles.content}>
        <h1 className={styles.title}>약관동의 및 정보활용동의</h1>
        <p className={styles.titleText}>메가박스 서비스 이용을 위한 약관에 동의해주세요.</p>
        <div className={styles.boxContent}>
          <input type='checkbox' /> <span>필수항목 전체동의</span>
        </div>
        <div>
          <div className={styles.consentBox}>
            <input type='checkbox' />{' '}
            <span className={styles.boxTitle} style={{ color: '#036635' }}>
              서비스 이용 약관 동의(필수)
            </span>
            <div className={styles.contentBox}>
              <p className={styles.boxText}>제 1조.목적</p>
              <p className={styles.boxText}>
                본 약관은 메가박스중앙(주)(이하 "회사"라 합니다)가 제공하는 온라인,오프라인
                서비스(이하 "서비스"라 합니다) 이용과 관련하여 회사와 이용자의 권리, 의무 및
                책임사항을 규정함을 목적으로 합니다.
              </p>
            </div>
          </div>
          <div className={styles.consentBox}>
            <input type='checkbox' />{' '}
            <span className={styles.boxTitle} style={{ color: '#036635' }}>
              서비스 이용 약관 동의(필수)
            </span>
            <div className={styles.contentBox}>
              <p className={styles.boxText}>제 1조.목적</p>
              <p className={styles.boxText}>
                본 약관은 메가박스중앙(주)(이하 "회사"라 합니다)가 제공하는 온라인,오프라인
                서비스(이하 "서비스"라 합니다) 이용과 관련하여 회사와 이용자의 권리, 의무 및
                책임사항을 규정함을 목적으로 합니다.
              </p>
            </div>
          </div>
          <div className={styles.consentBox}>
            <input type='checkbox' />{' '}
            <span className={styles.boxTitle} style={{ color: '#036635' }}>
              서비스 이용 약관 동의(필수)
            </span>
            <div className={styles.contentBox}>
              <p className={styles.boxText}>제 1조.목적</p>
              <p className={styles.boxText}>
                본 약관은 메가박스중앙(주)(이하 "회사"라 합니다)가 제공하는 온라인,오프라인
                서비스(이하 "서비스"라 합니다) 이용과 관련하여 회사와 이용자의 권리, 의무 및
                책임사항을 규정함을 목적으로 합니다.
              </p>
            </div>
          </div>
          <div className={styles.consentBox}>
            <input type='checkbox' />{' '}
            <span className={styles.boxTitle} style={{ color: '#036635' }}>
              서비스 이용 약관 동의(필수)
            </span>
            <div className={styles.contentBox}>
              <p className={styles.boxText}>제 1조.목적</p>
              <p className={styles.boxText}>
                본 약관은 메가박스중앙(주)(이하 "회사"라 합니다)가 제공하는 온라인,오프라인
                서비스(이하 "서비스"라 합니다) 이용과 관련하여 회사와 이용자의 권리, 의무 및
                책임사항을 규정함을 목적으로 합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Consent;
