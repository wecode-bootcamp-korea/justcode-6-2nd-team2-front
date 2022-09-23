import React, { useState } from 'react';
import styles from './Header.module.scss';
import Logo from '../../assets/starbox.png';
import mainLogo from '../../assets/starbox-wh.png';
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineUser,
  AiTwotoneHome,
  AiFillCloseCircle,
} from 'react-icons/ai';
import { BsCalendar4Week } from 'react-icons/bs';
import SubNav from './SubNav';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import Login from '../Login/Login';
import Logout from '../Login/Logout';

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location.pathname);
  const [tabIndex, setTabIndex] = useState(0);
  const [subNavMenu, setSubNavMenu] = useState(false);
  const [loginModal, setLoginModal] = useState(false);

  const openModal = () => {
    setLoginModal(true);
    setSubNavMenu(false);
  };

  //logout
  const logout = () => {
    localStorage.removeItem('token');
    navigate('/');
    console.log('로그아웃');
  };

  const tabClick = () => {
    setSubNavMenu(prev => !prev);
  };
  const tabHandler = index => setTabIndex(index);
  const tabArr = [
    {
      title: <li onClick={() => tabHandler(0)}></li>,
    },
    {
      title: (
        <li className={styles.mainMenuList} onClick={() => tabHandler(1)}>
          <Link
            to='/movie'
            style={
              location.pathname !== '/'
                ? { textDecoration: 'none', color: '#333' }
                : { textDecoration: 'none', color: '#fff' }
            }
          >
            영화
          </Link>
        </li>
      ),
      content: <AiTwotoneHome color='#999' />,
      mainMenu: (
        <Link to='/movie' style={{ textDecoration: 'none', color: '#333' }}>
          > 영화
        </Link>
      ),
      subMenu: (
        <Link to='/movie' style={{ textDecoration: 'none', color: '#333' }}>
          > 전체영화
        </Link>
      ),
    },
    {
      title: (
        <li className={styles.mainMenuList} onClick={() => tabHandler(2)}>
          <Link
            to='/Booking'
            style={
              location.pathname !== '/'
                ? { textDecoration: 'none', color: '#333' }
                : { textDecoration: 'none', color: '#fff' }
            }
          >
            예매
          </Link>
        </li>
      ),
      content: <AiTwotoneHome color='#999' />,
      mainMenu: (
        <Link to='/Booking' style={{ textDecoration: 'none', color: '#333' }}>
          > 예매
        </Link>
      ),
      subMenu: (
        <Link to='/Booking' style={{ textDecoration: 'none', color: '#333' }}>
          > 전체예매
        </Link>
      ),
    },
    {
      title: (
        <li className={styles.mainMenuList} onClick={() => tabHandler(3)}>
          <Link
            to='/cinema'
            style={
              location.pathname !== '/'
                ? { textDecoration: 'none', color: '#333' }
                : { textDecoration: 'none', color: '#fff' }
            }
          >
            극장
          </Link>
        </li>
      ),
      content: <AiTwotoneHome color='#999' />,
      mainMenu: (
        <Link to='/cinema' style={{ textDecoration: 'none', color: '#333' }}>
          > 극장
        </Link>
      ),
      subMenu: (
        <Link to='/cinema' style={{ textDecoration: 'none', color: '#333' }}>
          > 전체극장
        </Link>
      ),
    },
  ];
  return (
    // <div className={styles.headerContainer}>
    <div
      className={
        location.pathname === '/' ? `${styles.mainHeaderContainer}` : `${styles.headerContainer}`
      }
    >
      <div>
        <div className={styles.navContainer}>
          <ul className={styles.navBox}>
            <li className={styles.left}>
              <ul className={styles.leftBottom}>
                <li className={styles.leftIcon}>
                  <div onClick={tabClick}>
                    {subNavMenu ? (
                      <AiFillCloseCircle className={styles.iconSize} size='26' />
                    ) : (
                      <AiOutlineMenu className={styles.iconSize} size='26' />
                    )}
                  </div>
                  <div>
                    <AiOutlineSearch className={styles.iconSize} size='26' />
                  </div>
                </li>
                <li className={styles.mainMenuContainer}>
                  <ul className={styles.mainMenu}>
                    {tabArr.map((section, index) => {
                      return section.title;
                    })}
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <Link to='/'>
                <img
                  src={location.pathname === '/' ? `${mainLogo}` : `${Logo}`}
                  className={styles.navLogo}
                  onClick={tabIndex}
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
                <li>이벤트</li>
                <li>스토어</li>
                <li>혜택</li>
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
        </div>
        <div className={styles.borderBottom}></div>
        <div className={styles.locationView}>
          <ul className={styles.locationBox}>
            <li className={styles.tabLocation}>{tabArr[tabIndex].content}</li>
            <li className={styles.tabLocation}>{tabArr[tabIndex].mainMenu}</li>
            <li className={styles.tabLocation}>{tabArr[tabIndex].subMenu}</li>
          </ul>
        </div>
        <div className={styles.subNav}>
          {subNavMenu ? <SubNav location={location.pathname} setSubNavMenu={setSubNavMenu} /> : ''}
        </div>
        <div className={loginModal === true && `${styles.openModal}`}>
          {openModal && <Login setModal={setLoginModal} modal={loginModal} logo={Logo} />}
          {/* {localStorage.getItem('token') ? (
            <Logout logout={logout} />
          ) : (
            <Login setModal={setLoginModal} modal={loginModal} logo={Logo} />
          )} */}
        </div>
      </div>
    </div>
  );
}

export default Header;
