import styles from './Header.module.scss';
import { AiFillCloseCircle, AiOutlineSearch, AiOutlineMenu, AiOutlineUser } from 'react-icons/ai';
import { BsCalendar4Week } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Nav({ Logo, subNavMenu, openModal, tabClick, location, setLoginModal, logout, mainLogo }) {
  return (
    <>
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
              <ul className={styles.mainMenu}>
                <li>
                  <Link
                    to={'/movie'}
                    className={
                      location.pathname === '/' ? `${styles.mainlinkText}` : `${styles.linkText}`
                    }
                  >
                    영화
                  </Link>
                </li>
                <li>
                  <Link
                    to={'/Booking'}
                    className={
                      location.pathname === '/' ? `${styles.mainlinkText}` : `${styles.linkText}`
                    }
                  >
                    예매
                  </Link>
                </li>
                <li>
                  <Link
                    to={'/cinema'}
                    className={
                      location.pathname === '/' ? `${styles.mainlinkText}` : `${styles.linkText}`
                    }
                  >
                    극장
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <Link to='/'>
            <img
              src={location.pathname === '/' ? `${mainLogo}` : `${Logo}`}
              className={styles.navLogo}
            />
          </Link>
        </li>
        <li className={styles.right}>
          <ul className={styles.rightTop}>
            <li setLoginModal={setLoginModal}>
              {localStorage.getItem('token') ? (
                <span onClick={logout}>로그아웃</span>
              ) : (
                <span onClick={openModal}>로그인</span>
              )}
            </li>
            <li>
              <Link
                to='/signup'
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
            <li>
              <Link
                to={'/event'}
                className={
                  location.pathname === '/' ? `${styles.mainTextR}` : `${styles.linkTextR}`
                }
              >
                이벤트
              </Link>
            </li>
            <li>
              <Link
                to={'/store'}
                className={
                  location.pathname === '/' ? `${styles.mainTextR}` : `${styles.linkTextR}`
                }
              >
                스토어
              </Link>
            </li>
            <li>
              <Link
                to={'/benefit'}
                className={
                  location.pathname === '/' ? `${styles.mainTextR}` : `${styles.linkTextR}`
                }
              >
                혜택
              </Link>
            </li>
            <li className={styles.rightIcon}>
              <div>
                <BsCalendar4Week className={styles.iconSize} size='26' />
              </div>
              <div>
                <AiOutlineUser className={styles.iconSize} size='26' />
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
}
export default Nav;
