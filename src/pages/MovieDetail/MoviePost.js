import React from 'react';
import styled from 'styled-components';
import MoviePostList from '../../components/Moviedetail/MoviePostList';
function MoviePost() {
  return (
    <>
      <PostTitle>
        {postList[0].title}에 대한 {postList.length}건의 무비포스트가 있어요!
      </PostTitle>
      <PostSum>
        전체 (<span>{postList.length}</span>)건
      </PostSum>
      <MoviePostList postList={postList} />
    </>
  );
}
const PostTitle = styled.div`
  font-size: 22px;
  color: #006633;
  margin-top: 40px;
`;
const PostSum = styled.div`
  color: #444;
  font-weight: 700;
  margin-top: 5px;
  margin-bottom: 10px;
  span {
    color: #006633;
  }
`;
const postList = [
  {
    id: 1,
    title: '늑대사냥',
    imgUrl:
      'https://img.megabox.co.kr/SharedImg/2022/09/21/t4V3Vxux4F52zFqHU0GmQO5imCJMH8RM_230.jpg',
    userId: 'wjddus57',
    content: '재밋어요',
    time: '1시간전',
  },
  {
    id: 2,
    title: '늑대사냥',
    imgUrl:
      'https://img.megabox.co.kr/SharedImg/2022/09/21/t4V3Vxux4F52zFqHU0GmQO5imCJMH8RM_230.jpg',
    userId: 'wjddus57',
    content: '재밋어요',
    time: '1시간전',
  },
  {
    id: 3,
    title: '늑대사냥',
    imgUrl:
      'https://img.megabox.co.kr/SharedImg/2022/09/21/t4V3Vxux4F52zFqHU0GmQO5imCJMH8RM_230.jpg',
    userId: 'wjddus57',
    content: '재밋어요',
    time: '1시간전',
  },
  {
    id: 4,
    title: '늑대사냥',
    imgUrl:
      'https://img.megabox.co.kr/SharedImg/2022/09/21/t4V3Vxux4F52zFqHU0GmQO5imCJMH8RM_230.jpg',
    userId: 'wjddus57',
    content: '재밋어요',
    time: '1시간전',
  },
  {
    id: 5,
    title: '늑대사냥',
    imgUrl:
      'https://img.megabox.co.kr/SharedImg/2022/09/21/t4V3Vxux4F52zFqHU0GmQO5imCJMH8RM_230.jpg',
    userId: 'wjddus57',
    content: '재밋어요',
    time: '1시간전',
  },
];
export default MoviePost;
