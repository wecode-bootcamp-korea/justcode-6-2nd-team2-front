import styles from './SubNav.module.scss';

function SubNav() {
  return (
    <div className={styles.subNavContainer}>
      <dl className={styles.sitemap}>
        SITEMAP
        <dt className={styles.subNavTitle}>영화</dt>
        <dd>전체영화</dd>
        <dd>큐레이션</dd>
        <dd>영화제</dd>
        <dd>무비포스트</dd>
      </dl>
    </div>
  );
}
export default SubNav;
