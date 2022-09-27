import { NavLink } from 'react-router-dom';
import styles from './Location.module.scss';
import locationArr from './locationData';

function Location({ location }) {
  return (
    <div className={styles.container}>
      {locationArr.map(list => {
        return (
          <div key={list.id} className={styles.locationList}>
            {location === list.url &&
              list.location.map(link => {
                return (
                  <div key={link.id}>
                    <NavLink to={link.url} className={styles.locationData}>
                      {link.link}
                    </NavLink>
                  </div>
                );
              })}
          </div>
        );
      })}
    </div>
  );
}
export default Location;
