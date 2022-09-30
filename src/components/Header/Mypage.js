import { useEffect, useState } from 'react';
import styles from './Mypage.module.scss';
import ticketBg from '../../assets/ticket.png';
import Logo from '../../assets/starbox.png';

function Mypage() {
  const [userInfo, setUserInfo] = useState([]);
  const [userTicket, setUserTicket] = useState([]);
  const [listModal, setListModal] = useState(false);

  useEffect(() => {
    fetch('http://localhost:10010/user/mypage', {
      //GET 'http://localhost:10010/user/mypage'
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: JSON.parse(localStorage.getItem('token')).accessToken,
      },
    })
      .then(res => res.json())
      .then(data => {
        setUserTicket(data.mypage.ticket);
        setUserInfo(data.mypage);
      });
  }, []);
  console.log(userInfo);
  console.log(userTicket);
  return (
    <div className={styles.mypageWrap}>
      <div className={styles.mypageContent}>
        <div className={styles.userInfoBox}>
          <dl className={styles.infoList}>
            <dt className={styles.mypageTitle}>안녕하세요!</dt>
            <dd className={styles.userName}>
              <span>{userInfo.name}</span>
              <span className={styles.smallText}>회원님</span>
            </dd>
            <dd className={styles.dateFont}>마지막 접속일 : 2022-09-29 14:49:48</dd>
            <button className={styles.mypageBtn}>나의 스타박스</button>
          </dl>
        </div>
        <div className={styles.userInfoListBox}>
          <dl className={styles.infoList}>
            <dt className={styles.mypageTitle}>Point</dt>
            <dd className={styles.infoContent}>0</dd>
            <button className={styles.mypageBtn}>멤버쉽 포인트</button>
          </dl>
          <dl className={styles.infoList}>
            <dt className={styles.mypageTitle}>쿠폰/관람권</dt>
            <dd className={styles.infoContent}>1/0</dd>
            <dd>
              <button className={styles.mypageBtnSmall}>쿠폰</button>
              <button className={styles.mypageBtnSmall}>관람권</button>
            </dd>
          </dl>
          <div>
            <dl className={styles.infoList}>
              <dt className={styles.mypageTitle}>최근 예매내역</dt>
              <dd className={styles.infoTicket}>
                <div className={styles.posterBox}>
                  <img src={ticketBg} alt='bg' className={styles.ticketBg} />
                  <img src={userTicket.poster_img} alt='poster' className={styles.mypagePoster} />
                </div>
                <div>
                  <p className={styles.ticketsInfo}> {userTicket.title}</p>
                  <p className={styles.ticketsDetail}>
                    <span> {userTicket.schedule_detail}</span>
                  </p>
                  <p className={styles.ticketCount}>
                    <span> {userTicket.theater_detail}</span>
                    <span>{userTicket.person_count}</span>
                  </p>
                  <p className={styles.ticketPrice}>
                    <span>{userTicket.total_price} 원</span>
                  </p>
                  <p className={styles.ticketLogo}>
                    <img src={Logo} alt='logo' className={styles.ticketStamp} />
                  </p>
                  <p className={styles.ticketPrice}>
                    <span>{userTicket.total_price} 원</span>
                  </p>
                </div>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Mypage;
