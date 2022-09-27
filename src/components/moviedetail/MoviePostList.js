import React from 'react';
import styled from 'styled-components';
import MoviePostCard from './MoviePostCard';

function MoviePostList({ postList }) {
  return (
    <>
      {/* <div>{postList.length}</div> */}
      <PostList>
        <MoviePostCard postList={postList} />
      </PostList>
    </>
  );
}

const PostList = styled.ol`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;

  margin-left: -60px;
`;

export default MoviePostList;
