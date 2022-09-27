import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
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

// const locationArr = [
//   {
//     id: 1,
//     url: '/movie',
//     location: [
//       {
//         id: 1,
//         url: '/',
//         link: <AiTwotoneHome color='#999' />,
//       },
//       {
//         id: 2,
//         url: '/movie',
//         link: '영화',
//       },
//       {
//         id: 2,
//         url: '/movie',
//         link: ' > 전체영화',
//       },
//     ],
//   },
//   {
//     id: 2,
//     url: '/movie/domestic',
//     location: [
//       {
//         id: 1,
//         url: '/',
//         link: <AiTwotoneHome color='#999' />,
//       },
//       {
//         id: 2,
//         url: '/movie',
//         link: '영화',
//       },
//       {
//         id: 3,
//         url: '/movie/domestic',
//         link: ' > 국내영화',
//       },
//     ],
//   },
//   {
//     id: 3,
//     url: '/movie/abroad',
//     location: [
//       {
//         id: 1,
//         url: '/',
//         link: <AiTwotoneHome color='#999' />,
//       },
//       {
//         id: 2,
//         url: '/movie',
//         link: '영화',
//       },
//       {
//         id: 3,
//         url: '/movie/abroad',
//         link: ' > 해외영화 ',
//       },
//     ],
//   },
//   {
//     id: 4,
//     url: '/movie/special',
//     location: [
//       {
//         id: 1,
//         url: '/',
//         link: <AiTwotoneHome color='#999' />,
//       },
//       {
//         id: 2,
//         url: '/movie',
//         link: ' 영화 ',
//       },
//       {
//         id: 3,
//         url: '/movie/special',
//         link: ' > 특별상영',
//       },
//     ],
//   },
//   {
//     id: 5,
//     url: '/movie/film',
//     location: [
//       {
//         id: 1,
//         url: '/',
//         link: <AiTwotoneHome color='#999' />,
//       },
//       {
//         id: 2,
//         url: '/movie',
//         link: '영화',
//       },
//       {
//         id: 3,
//         url: '/movie/film',
//         link: ' > 필름 소사이어티 ',
//       },
//     ],
//   },
//   {
//     id: 6,
//     url: '/Booking',
//     location: [
//       {
//         id: 1,
//         url: '/',
//         link: <AiTwotoneHome color='#999' />,
//       },
//       {
//         id: 2,
//         url: '/Booking',
//         link: '예매',
//       },
//       {
//         id: 3,
//         url: '/Booking',
//         link: ' > 빠른예매',
//       },
//     ],
//   },
//   {
//     id: 7,
//     url: '/Booking/TimeTable',
//     location: [
//       {
//         id: 1,
//         url: '/',
//         link: <AiTwotoneHome color='#999' />,
//       },
//       {
//         id: 2,
//         url: '/Booking',
//         link: '예매',
//       },
//       {
//         id: 3,
//         url: '/Booking/TimeTable',
//         link: ' > 빠른예매',
//       },
//     ],
//   },
//   {
//     id: 8,
//     url: '/cinema',
//     location: [
//       {
//         id: 1,
//         url: '/',
//         link: <AiTwotoneHome color='#999' />,
//       },
//       {
//         id: 2,
//         url: '/cinema',
//         link: '극장',
//       },
//     ],
//   },
//   {
//     id: 9,
//     url: '/event',
//     location: [
//       {
//         id: 1,
//         url: '/',
//         link: <AiTwotoneHome color='#999' />,
//       },
//       {
//         id: 2,
//         url: '/event',
//         link: '이벤트',
//       },
//     ],
//   },
//   {
//     id: 9,
//     url: '/store',
//     location: [
//       {
//         id: 1,
//         url: '/',
//         link: <AiTwotoneHome color='#999' />,
//       },
//       {
//         id: 2,
//         url: '/store',
//         link: '스토어',
//       },
//     ],
//   },
//   {
//     id: 10,
//     url: '/benefit',
//     location: [
//       {
//         id: 1,
//         url: '/',
//         link: <AiTwotoneHome color='#999' />,
//       },
//       {
//         id: 2,
//         url: '/benefit',
//         link: '혜택',
//       },
//     ],
//   },
// ];
