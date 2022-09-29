import { NavLink } from 'react-router-dom';
import styles from './SubNav.module.scss';

function TabNav({ list }) {
  // console.log(list);
  return (
    <div className={styles.subNavContent}>
      {list &&
        list.map(data => {
          return (
            <div key={data.id}>
              <NavLink to={data.url} className={styles.linkText}>
                {data.list}
              </NavLink>
            </div>
          );
        })}
    </div>
  );
}
export default TabNav;
