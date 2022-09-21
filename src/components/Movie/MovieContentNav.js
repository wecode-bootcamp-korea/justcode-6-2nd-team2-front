import styled from 'styled-components';

// import MovieCard from './MovieCard';
import MovieFilter from './MovieFilter';
import MovieSearch from './MovieSearch';

function MovieListNav({ totalCount }) {
  return (
    <ListNav>
      <Div>
        <MovieFilter />
        <MovieCount>
          <Count>{totalCount}</Count>
          개의 영화가 검색되었습니다.
        </MovieCount>
      </Div>
      <MovieSearch />
    </ListNav>
  );
}

const ListNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 40px;
  margin-bottom: 15px;
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
`;

const MovieCount = styled.div`
  padding: 1px;
  margin-left: 10px;
  font-size: 15px;
`;

const Count = styled.strong``;

export default MovieListNav;
