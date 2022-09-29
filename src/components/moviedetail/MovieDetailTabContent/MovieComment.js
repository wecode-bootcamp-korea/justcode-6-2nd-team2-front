import React from 'react';
import MovieCommentList from './MovieCommentList';

function MovieComment({ movieList }) {
  // console.log('MovieComment', movieList);
  return (
    <>
      <MovieCommentList movieList={movieList} />
    </>
  );
}
export default MovieComment;
