import { useState } from 'react';
import MovieContentNav from './MovieContentNav';

import MovieList from './MovieList';

function MovieContent() {
  const [cardList] = useState([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
  return (
    <>
      <MovieContentNav totalCount={cardList.length} />
      <MovieList cardList={cardList} />
    </>
  );
}

export default MovieContent;
