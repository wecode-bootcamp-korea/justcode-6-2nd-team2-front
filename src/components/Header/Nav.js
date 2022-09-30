import styles from './Nav.module.scss';
import { AiFillCloseCircle, AiOutlineSearch, AiOutlineMenu, AiOutlineUser } from 'react-icons/ai';
import { BsCalendar4Week } from 'react-icons/bs';
import { Link, NavLink } from 'react-router-dom';
import CategoryL from './CategoryL';
import CategoryR from './CategoryR';
import Mypage from './Mypage';

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
  mypageTab,
  mypage,
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
            <li className={styles.mainMenuContainer} onClick={tabClose}>
              <CategoryL location={location} />
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
                <span onClick={logout} className={styles.mouseStyle}>
                  로그아웃
                </span>
              ) : (
                <span onClick={openModal} className={styles.mouseStyle}>
                  로그인
                </span>
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
            <li className={styles.mainMenuContainerR} onClick={tabClose}>
              <CategoryR location={location} />
            </li>
            <li className={styles.rightIcon}>
              <div onClick={tabClose}>
                <NavLink to='/TimeTable'>
                  <BsCalendar4Week
                    className={
                      location.pathname === '/' ? `${styles.mainIconSize}` : `${styles.iconSize}`
                    }
                    size='26'
                  />
                </NavLink>
              </div>
              <div onClick={mypageTab}>
                <NavLink>
                  {mypage === true ? (
                    <AiFillCloseCircle
                      size='26'
                      className={
                        location.pathname === '/' ? `${styles.mainIconSize}` : `${styles.iconSize}`
                      }
                    />
                  ) : (
                    <AiOutlineUser
                      className={
                        location.pathname === '/' ? `${styles.mainIconSize}` : `${styles.iconSize}`
                      }
                      size='26'
                    />
                  )}
                </NavLink>
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
