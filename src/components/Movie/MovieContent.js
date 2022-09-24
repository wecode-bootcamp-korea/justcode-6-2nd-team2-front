import { useState } from 'react';
import MovieContentNav from './MovieContentNav';
import MovieList from './MovieList';

function MovieContent() {
  const [filter, setFilter] = useState(false);
  const [search, setSearch] = useState('');
  const [movieList, setMovieList] = useState([]);

  return (
    <>
      <MovieContentNav
        filter={filter}
        setFilter={setFilter}
        totalCount={movieList.length}
        search={search}
        setSearch={setSearch}
      />
      <MovieList movieList={movieList} search={search} setSearch={setSearch} />
    </>
  );
}

export default MovieContent;
