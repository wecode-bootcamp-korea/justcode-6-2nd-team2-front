import styled from 'styled-components';

import MovieFilter from './MovieFilter';
import MovieSearch from './MovieSearch';

function MovieContentNav({
  filter,
  setFilter,
  dateOrder,
  setDateOrder,
  alphabeticalOrder,
  setAlphabeticalOrder,
  totalCount,
  search,
  setSearch,
}) {
  return (
    <ListNav>
      <Div>
        <MovieFilter
          filter={filter}
          setFilter={setFilter}
          dateOrder={dateOrder}
          setDateOrder={setDateOrder}
          alphabeticalOrder={alphabeticalOrder}
          setAlphabeticalOrder={setAlphabeticalOrder}
        />
        <MovieCount>
          <Count>{totalCount}</Count>
          개의 영화가 검색되었습니다.
        </MovieCount>
      </Div>
      <MovieSearch search={search} setSearch={setSearch} />
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

export default MovieContentNav;
