import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './SubNav.module.scss';
import TabNav from './TabNav';

function SubNav({ setSubNavMenu, location, tabArr }) {
  const [subArr, setSubArr] = useState([]);
  const remove = () => {
    setSubNavMenu(false);
  };
  useEffect(() => {
    fetch('data/subNavData.json')
      .then(res => res.json())
      .then(data => {
        setSubArr(data.subNavData);
      });
  }, []);

  return (
    <div className={styles.subNavContainer}>
      <div className={styles.sitemap}>SITEMAP</div>
      {subArr.map(data => {
        return (
          <div key={data.id} className={styles.subNavBox}>
            <div className={styles.subNavTitle}>{data.title}</div>
            <Link to={'/' + data.url} style={{ textDecoration: 'none' }} onClick={remove}>
              <TabNav list={data.content} />
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default SubNav;
