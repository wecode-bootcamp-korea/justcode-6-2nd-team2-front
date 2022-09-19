import React, { useState } from 'react';
import styled from 'styled-components';
import styles from './Header.module.scss';
import Logo from '../../assets/starbox.png';
import { AiOutlineMenu, AiOutlineSearch, AiOutlineUser, AiTwotoneHome } from 'react-icons/ai';
import { BsCalendar4Week } from 'react-icons/bs';
import SubNav from './SubNav';

function Header() {
  const [tabIndex, setTabIndex] = useState(0);

  const tabHandler = index => setTabIndex(index);

  const tabArr = [
    {
      title: (
        <li className={styles.mainMenuList} onClick={() => tabHandler(0)}>
          영화
        </li>
      ),
      content: <AiTwotoneHome color='#999' />,
      mainMenu: '> 영화',
      subMenu: '> 전체영화',
    },
    {
      title: (
        <li className={styles.mainMenuList} onClick={() => tabHandler(1)}>
          예매
        </li>
      ),
      content: <AiTwotoneHome color='#999' />,
      mainMenu: '> 예매',
      subMenu: '> 전체예매',
    },
    {
      title: (
        <li className={styles.mainMenuList} onClick={() => tabHandler(2)}>
          극장
        </li>
      ),
      content: <AiTwotoneHome color='#999' />,
      mainMenu: '> 극장',
      subMenu: '> 전체극장',
    },
  ];
  return (
    <div className={styles.headerContainer}>
      <div className={styles.navContainer}>
        <ul className={styles.navBox}>
          <li className={styles.left}>
            <ul className={styles.leftBottom}>
              <li className={styles.leftIcon}>
                <div>
                  <AiOutlineMenu className={styles.iconSize} size='26' />
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
            <img src={Logo} className={styles.navLogo} />
          </li>
          <li className={styles.right}>
            <ul className={styles.rightTop}>
              <li>로그인</li>
              <li>회원가입</li>
              <li>빠른예매</li>
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
        <SubNav />
      </div>
    </div>
  );
}

export default Header;
