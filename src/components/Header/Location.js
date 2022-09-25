import { AiTwotoneHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

function Location({ location }) {
  return (
    <div>
      {locationArr.map(list => {
        return (
          <ul key={list.id}>
            <li>
              <AiTwotoneHome color='#999' />
            </li>
            <li>{location.pathname === `${list.url}` ? `${list.content}` : null}</li>
          </ul>
        );
      })}
    </div>
  );
}
export default Location;

const locationArr = [
  {
    id: 1,
    url: '/movie',
    content: [
      {
        title: <Link to={'/movie'}>'영화'</Link>,
        secondTitle: <Link to={'/movie'}>'전체영화'</Link>,
      },
    ],
  },
  {
    id: 2,
    url: '/Booking',
    content: [
      {
        title: <Link to={'/Booking'}>'예매'</Link>,
        secondTitle: <Link to={'/Booking'}>'빠른예매'</Link>,
      },
    ],
  },
];
