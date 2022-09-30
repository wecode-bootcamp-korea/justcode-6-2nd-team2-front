import styles from './List.module.scss';

function List({ list }) {
  console.log(list);
  return (
    <div className={styles.ticketListBox}>
      <div>
        <dl className={styles.infoList} key={list.booking_id}>
          <dt className={styles.mypageTitle}>예매내역</dt>
          <dd className={styles.infoTicket}>
            <div className={styles.posterBox}>
              <img src={list.poster_img} alt='poster' className={styles.mypagePoster} />
            </div>
            <div className={styles.ticketsInfo}>
              <p className={styles.posterTitle}> {list.title}</p>
            </div>
          </dd>
        </dl>
      </div>
    </div>
  );
}
export default List;
