import styles from './Nav.module.scss';
import { AiFillCloseCircle, AiOutlineSearch, AiOutlineMenu, AiOutlineUser } from 'react-icons/ai';
import { BsCalendar4Week } from 'react-icons/bs';
import { Link, NavLink } from 'react-router-dom';
import CategoryL from './CategoryL';
import CategoryR from './CategoryR';

function Nav({
  Logo,
  subNavMenu,
  openModal,
  tabClick,
  location,
  setLoginModal,
  logout,
  mainLogo,
  setSubNavMenu,
}) {
  const tabClose = () => {
    setSubNavMenu(false);
  };
  return (
    <div className={styles.navWrap}>
      <ul className={styles.navBox}>
        <li className={styles.left}>
          <ul className={styles.leftBottom}>
            <li className={styles.leftIcon}>
              <div onClick={tabClick}>
                {subNavMenu ? (
                  <AiFillCloseCircle size='26' className={styles.iconPadding} />
                ) : (
                  <AiOutlineMenu size='26' className={styles.iconPadding} />
                )}
              </div>
              <div>
                <AiOutlineSearch size='26' className={styles.iconPadding} />
              </div>
            </li>
            <li className={styles.mainMenuContainer}>
              <CategoryL location={location} tabClose={tabClose} />
            </li>
          </ul>
        </li>
        <li>
          <Link to='/' onClick={tabClose}>
            <img
              src={location.pathname === '/' ? `${mainLogo}` : `${Logo}`}
              className={styles.navLogo}
            />
          </Link>
        </li>
        <li className={styles.right}>
          <ul className={styles.rightTop}>
            <li
              setLoginModal={setLoginModal}
              onClick={tabClose}
              className={
                location.pathname === '/' ? `${styles.mainNavLogin}` : `${styles.navLogin}`
              }
            >
              {localStorage.getItem('token') ? (
                <span onClick={logout}>로그아웃</span>
              ) : (
                <span onClick={openModal}>로그인</span>
              )}
            </li>
            <li>
              <Link
                to='/signup'
                onClick={tabClose}
                style={
                  location.pathname === '/'
                    ? { textDecoration: 'none', color: '#fff' }
                    : { textDecoration: 'none', color: '#222' }
                }
              >
                회원가입
              </Link>
            </li>
            <li>
              <Link
                to='/Booking'
                onClick={tabClose}
                style={
                  location.pathname === '/'
                    ? { textDecoration: 'none', color: '#fff' }
                    : { textDecoration: 'none', color: '#222' }
                }
              >
                빠른예매
              </Link>
            </li>
          </ul>
          <ul className={styles.rightBottom}>
            <li className={styles.mainMenuContainerR}>
              <CategoryR location={location} tabClose={tabClose} />
            </li>
            <li className={styles.rightIcon}>
              <div onClick={tabClose}>
                <BsCalendar4Week className={styles.iconSize} size='26' />
              </div>
              <div onClick={tabClose}>
                <AiOutlineUser className={styles.iconSize} size='26' />
              </div>
            </li>
          </ul>
        </li>
      </ul>
      <div className={styles.navHoverBg}></div>
    </div>
  );
}
export default Nav;
