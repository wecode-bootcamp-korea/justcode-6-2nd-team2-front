import styles from './SubNav.module.scss';

function TabNav({ list }) {
  // console.log(list);
  return (
    <div className={styles.subNavContent}>
      {list &&
        list.map((data, index) => {
          return <p key={index}>{data.list}</p>;
        })}
    </div>
  );
}
export default TabNav;
