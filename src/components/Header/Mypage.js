import styles from './Mypage.module.scss';

function Mypage() {
  return (
    <div className={styles.mypageWrap}>
      <div className={styles.mypageContent}>
        <div className={styles.userInfoBox}>
          <dl className={styles.infoList}>
            <dt className={styles.mypageTitle}>안녕하세요!</dt>
            <dd className={styles.userName}>
              오인환 <span className={styles.smallText}>회원님</span>
            </dd>
            <dd className={styles.dateFont}>마지막 접속일 : 2022-09-29 14:49:48</dd>
            <button className={styles.mypageBtn}>나의 스타박스</button>
          </dl>
        </div>
        <div className={styles.userInfoListBox}>
          <dl className={styles.infoList}>
            <dt className={styles.mypageTitle}>Point</dt>
            <dd className={styles.infoContent}>0</dd>
            <button className={styles.mypageBtn}>멤버쉽 포인트</button>
          </dl>
          <dl className={styles.infoList}>
            <dt className={styles.mypageTitle}>쿠폰/관람권</dt>
            <dd className={styles.infoContent}>1/0</dd>
            <dd>
              <button className={styles.mypageBtnSmall}>쿠폰</button>
              <button className={styles.mypageBtnSmall}>관람권</button>
            </dd>
          </dl>
          <dl className={styles.infoList}>
            <dt className={styles.mypageTitle}>예매내역</dt>
            <dd className={styles.infoContent}>예매내역이 없어요!</dd>
            <button className={styles.mypageBtn}>예매내역</button>
          </dl>
        </div>
      </div>
    </div>
  );
}
export default Mypage;
