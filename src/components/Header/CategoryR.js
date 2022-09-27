import { NavLink } from 'react-router-dom';
import styles from './CategoryR.module.scss';

function CategoryR({ tabClose, location }) {
  return (
    <div className={location.pathname === '/' ? `${styles.mainCategoryR}` : `${styles.CategoryR}`}>
      <div className={styles.categoryRBox}>
        <div className={styles.subMenuViewR}></div>
        <div className={styles.navBoxR}>
          <div className={styles.menuBoxR}>
            <NavLink
              to='/event'
              onClick={tabClose}
              className={
                location.pathname === '/' ? `${styles.mainlinkTextR}` : `${styles.linkTextR}`
              }
            >
              이벤트
            </NavLink>
          </div>
          <div className={styles.hoverNavActiveR}>
            <div className={styles.subMenuBoxR}>
              <NavLink className={styles.menuTextR}>진행이벤트</NavLink>
              <NavLink className={styles.menuTextR}>지난이벤트</NavLink>
              <NavLink className={styles.menuTextR}>당첨발표</NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.categoryRBox}>
        <div className={styles.subMenuViewR}></div>
        <div className={styles.navBoxR}>
          <div className={styles.menuBoxR}>
            <NavLink
              to='/store'
              onClick={tabClose}
              className={
                location.pathname === '/' ? `${styles.mainlinkTextR}` : `${styles.linkTextR}`
              }
            >
              스토어
            </NavLink>
          </div>
        </div>
      </div>
      <div className={styles.categoryRBox}>
        <div className={styles.subMenuViewR}></div>
        <div className={styles.navBoxR}>
          <div className={styles.menuBoxR}>
            <NavLink
              to='/benefit'
              onClick={tabClose}
              className={
                location.pathname === '/' ? `${styles.mainlinkTextR}` : `${styles.linkTextR}`
              }
            >
              혜택
            </NavLink>
          </div>
          <div className={styles.hoverNavActiveR}>
            <div className={styles.subMenuBoxR}>
              <NavLink className={styles.menuTextR}>스타박스멤버쉽</NavLink>
              <NavLink className={styles.menuTextR}>제휴/할인</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CategoryR;
