import styled from 'styled-components';

import MovieFilter from './MovieFilter';
import MovieSearch from './MovieSearch';

function MovieContentBar({ sort, setSort, totalCount, search, onSearch, onChangeSearch }) {
  return (
    <ListNav>
      <Div>
        <MovieFilter sort={sort} setSort={setSort} />
        <MovieCount>
          <Count>{totalCount}</Count>
          개의 영화가 검색되었습니다.
        </MovieCount>
      </Div>
      <MovieSearch
        search={search}
        onSearch={onSearch}
        onChangeSearch={onChangeSearch}
        border='1px solid #ebebeb'
        borderRadius='4px'
        color='#000'
        caretColor='#000'
      />
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
  align-items: center;

  text-align: center;
`;

const MovieCount = styled.div`
  margin-left: 10px;
  font-size: 15px;
`;

const Count = styled.strong`
  color: #006633;
`;

export default MovieContentBar;
