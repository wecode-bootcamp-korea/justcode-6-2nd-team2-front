import styled from 'styled-components';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { FiFilm } from 'react-icons/fi';
import { HiOutlineTicket } from 'react-icons/hi';

import MovieSearch from '../../components/Movie/MovieSearch';

function MainSearchLink() {
  return (
    <SearchLink>
      <MovieSearch />
      <ScreenTime>
        <FaRegCalendarAlt className='icon' />
        상영시간표
      </ScreenTime>
      <BoxOffice>
        <FiFilm className='icon' />
        박스오피스
      </BoxOffice>
      <Booking>
        <HiOutlineTicket className='icon' />
        빠른예매
      </Booking>
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

  background-color: rgba(0, 0, 0, 0.2);
`;

const ScreenTime = styled.div`
  display: flex;
  align-items: center;
  padding: 0 60px;

  color: #fff;

  .icon {
    text-align: center;
    margin-right: 10px;
    font-size: 30px;
  }
`;

const BoxOffice = styled.div`
  display: flex;
  align-items: center;
  padding: 0 60px;

  color: #fff;

  .icon {
    margin-right: 10px;
    font-size: 30px;
  }
`;

const Booking = styled.div`
  display: flex;
  align-items: center;
  padding: 0 60px;

  color: #fff;

  .icon {
    margin-right: 10px;
    font-size: 35px;
  }
`;

export default MainSearchLink;
