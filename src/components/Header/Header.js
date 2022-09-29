/* eslint-disable */
import React, { useEffect, useState } from 'react';
import styles from './Header.module.scss';
import SubNav from './SubNav';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import mainLogo from '../../assets/starbox-wh.png';
import Logo from '../../assets/starbox.png';
import Login from '../Login/Login';
import Nav from './Nav';
import Location from './Location';
import Mypage from './Mypage';

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location.pathname);
  const [subNavMenu, setSubNavMenu] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [mypage, setMypage] = useState(false);

  //login modal
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

  //햄버거 tab
  const tabClick = () => {
    setSubNavMenu(prev => !prev);
  };

  //mypage
  const mypageTab = () => {
    setMypage(prev => !prev);
  };

  return (
    // <div className={styles.headerContainer}>
    <div
      className={
        location.pathname === '/' ? `${styles.mainHeaderContainer}` : `${styles.headerContainer}`
      }
    >
      <div className={styles.navWrap}>
        <div className={styles.navContainer}>
          <Nav
            className={styles.mainNav}
            Logo={Logo}
            mainLogo={mainLogo}
            subNavMenu={subNavMenu}
            openModal={openModal}
            tabClick={tabClick}
            location={location}
            setLoginModal={setLoginModal}
            logout={logout}
            setSubNavMenu={setSubNavMenu}
            mypageTab={mypageTab}
            mypage={mypage}
          />
          <div className={styles.bgColor}></div>
        </div>
        <div className={styles.borderBottom}></div>
        <div className={styles.locationView}>
          <ul className={styles.locationBox}>
            <li>
              <Location location={location.pathname} />
            </li>
          </ul>
        </div>

        <div className={styles.subNav}>
          {subNavMenu && <SubNav location={location.pathname} setSubNavMenu={setSubNavMenu} />}
        </div>
        <div className={loginModal === true && `${styles.openModal}`}>
          {openModal && <Login setModal={setLoginModal} modal={loginModal} logo={Logo} />}
        </div>
        <div className={styles.mypageTabContainer}>
          {mypage && (
            <Mypage
              location={location.pathname}
              setSubNavMenu={setSubNavMenu}
              setMypage={setMypage}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
