import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { FiFilm } from 'react-icons/fi';
import { HiOutlineTicket } from 'react-icons/hi';

import MovieSearch from '../Movie/MovieSearch';

function MainSearchLink() {
  const [link] = useState([
    {
      id: 1,
      //수정 필요
      link: '/timetable',
      title: '상영시간표',
      icon: <FaRegCalendarAlt className='icon' />,
    },
    {
      id: 2,
      link: '/movie',
      title: '박스오피스',
      icon: <FiFilm className='icon' />,
    },
    {
      id: 3,
      link: '/booking',
      title: '빠른예매',
      icon: <HiOutlineTicket className='icon' />,
    },
  ]);
  return (
    <SearchLink>
      <MovieSearch
        border='none'
        borderBottom='1px solid #ebebeb'
        borderRadius='0px'
        color='#fff'
        caretColor='#fff'
      />
      {link.map(el => {
        return (
          <li key={el.id}>
            <MainLink to={el.link}>
              {el.icon}
              {el.title}
            </MainLink>
          </li>
        );
      })}
    </SearchLink>
  );
}

const SearchLink = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  height: 75px;
  margin: 50px 0 0 0;

  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 4px;

  li {
    list-style: none;
  }
`;

const MainLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0 60px;

  text-decoration: none;
  color: #fff;

  .icon {
    text-align: center;
    margin-right: 10px;
    font-size: 30px;
  }
`;

export default MainSearchLink;
