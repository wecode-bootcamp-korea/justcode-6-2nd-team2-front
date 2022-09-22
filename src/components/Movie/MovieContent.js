import { useState } from 'react';
import MovieContentNav from './MovieContentNav';
import MovieList from './MovieList';

function MovieContent() {
  const [filter, setFilter] = useState(false);
  const [search, setSearch] = useState('');
  const [cardList] = useState([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);

  return (
    <>
      <MovieContentNav
        filter={filter}
        setFilter={setFilter}
        totalCount={cardList.length}
        search={search}
        setSearch={setSearch}
      />
      <MovieList cardList={cardList} search={search} setSearch={setSearch} />
    </>
  );
}

export default MovieContent;
