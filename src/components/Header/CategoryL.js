import { NavLink } from 'react-router-dom';
import styles from './CategoryL.module.scss';

function CategoryL({ location }) {
  return (
    <div className={location.pathname === '/' ? `${styles.mainCategoryL}` : `${styles.CategoryL}`}>
      <div className={styles.categoryBox}>
        <div className={styles.subMenuView}></div>
        <div className={styles.navBox}>
          <div className={styles.hoverNavActive}>
            <div className={styles.subMenuBox}>
              <NavLink to='/movie' className={styles.menuText}>
                전체영화
              </NavLink>
              <NavLink to='/movie/now' className={styles.menuText}>
                현재상영작
              </NavLink>
              <NavLink to='/movie/upcoming' className={styles.menuText}>
                개봉예정작
              </NavLink>
            </div>
          </div>
          <div className={styles.menuBox}>
            <NavLink
              to='/movie'
              className={
                location.pathname === '/' ? `${styles.mainlinkText}` : `${styles.linkText}`
              }
            >
              영화
            </NavLink>
          </div>
        </div>
      </div>
      <div className={styles.categoryBox}>
        <div className={styles.subMenuView}></div>
        <div className={styles.navBox}>
          <div className={styles.menuBox}>
            <NavLink
              to='/Booking'
              className={
                location.pathname === '/' ? `${styles.mainlinkText}` : `${styles.linkText}`
              }
            >
              예매
            </NavLink>
          </div>
          <div className={styles.hoverNavActive}>
            <div className={styles.subMenuBox}>
              <NavLink to='/Booking' className={styles.menuText}>
                빠른예매
              </NavLink>
              <NavLink to='/TimeTable' className={styles.menuText}>
                상영시간표
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.categoryBox}>
        <div className={styles.subMenuView}></div>
        <div className={styles.navBox}>
          <div className={styles.menuBox}>
            <NavLink
              to='/cinema'
              className={
                location.pathname === '/' ? `${styles.mainlinkText}` : `${styles.linkText}`
              }
            >
              극장
            </NavLink>
          </div>
          <div className={styles.hoverNavActive}>
            <div className={styles.subMenuBox}>
              <NavLink to='/cinema' className={styles.menuText}>
                전체극장
              </NavLink>
              <NavLink to='/cinema' className={styles.menuText}>
                특별관
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CategoryL;
