/* eslint-disable */
import React, { useState } from 'react';
import styles from './Header.module.scss';
import SubNav from './SubNav';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import mainLogo from '../../assets/starbox-wh.png';
import Logo from '../../assets/starbox.png';
import Login from '../Login/Login';
import MainNav from './MainNav';
import Location from './Location';

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location.pathname);
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

  return (
    // <div className={styles.headerContainer}>
    <div
      className={
        location.pathname === '/' ? `${styles.mainHeaderContainer}` : `${styles.headerContainer}`
      }
    >
      <div>
        <div className={styles.navContainer}>
          <MainNav
            Logo={Logo}
            mainLogo={mainLogo}
            subNavMenu={subNavMenu}
            openModal={openModal}
            tabClick={tabClick}
            location={location}
            setLoginModal={setLoginModal}
            logout={logout}
          />
        </div>
        <div className={styles.borderBottom}></div>
        <div className={styles.locationView}>
          <ul className={styles.locationBox}>
            <li className={styles.tabLocation}>
              {location.pathname === '/' ? null : <Location location={location} />}
            </li>
            <li></li>
          </ul>
        </div>
        <div className={styles.subNav}>
          {subNavMenu ? <SubNav location={location.pathname} setSubNavMenu={setSubNavMenu} /> : ''}
        </div>
        <div className={loginModal === true && `${styles.openModal}`}>
          {openModal && <Login setModal={setLoginModal} modal={loginModal} logo={Logo} />}
        </div>
      </div>
    </div>
  );
}

export default Header;
