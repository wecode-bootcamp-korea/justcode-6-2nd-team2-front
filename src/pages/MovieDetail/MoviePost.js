import React from 'react';
import styled from 'styled-components';
import MoviePostList from '../../components/moviedetail/MoviePostList';
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
      'https://img.megabox.co.kr/SharedImg/2022/08/29/Lrk2QlEeGXVYpPcwlnowZRCUQV8ZuwvJ_230.jpg',
    userId: 'moigy',
    content: '흥미 진진 해요~!',
    time: '3시간전',
  },
  {
    id: 3,
    title: '늑대사냥',
    imgUrl:
      'https://img.megabox.co.kr/SharedImg/2022/08/29/1Z1E4EdkxgGiC732eI84Ub2CrCaJWym6_230.jpg',
    userId: 'inhwan05',
    content: '너무 잔인해요 못보겠어요',
    time: '1시간전',
  },
  {
    id: 4,
    title: '늑대사냥',
    imgUrl:
      'https://img.megabox.co.kr/SharedImg/2022/08/29/9puMI2LHwYXNrr77Xge7TjlW9558so35_230.jpg',
    content: '친구랑 또봐야지~',
    time: '1시간전',
  },
  {
    id: 5,
    title: '늑대사냥',
    imgUrl:
      'https://img.megabox.co.kr/SharedImg/2022/08/29/tcLlcyXSHJTbLvmUCHhmeImXYHdS48Al_230.jpg',
    userId: 'dongho',
    content: '아 이런 정말 엽기 끔찍한 일이 있을법 해서 소름~~~ 2탄 나오는 거죠?',
    time: '1시간전',
  },
  {
    id: 6,
    title: '늑대사냥',
    imgUrl:
      'https://img.megabox.co.kr/SharedImg/2022/08/29/tcLlcyXSHJTbLvmUCHhmeImXYHdS48Al_230.jpg',
    userId: 'dongho3434',
    content: '아 이런 정말 엽기 끔찍한 일이 있을법 해서 소름~~~ 2탄 나오는 거죠?',
    time: '1시간전',
  },
  {
    id: 7,
    title: '늑대사냥',
    imgUrl:
      'https://img.megabox.co.kr/SharedImg/2022/08/29/9puMI2LHwYXNrr77Xge7TjlW9558so35_230.jpg',
    userId: 'mmmminu',
    content: '와우,,,',
    time: '1시간전',
  },
  {
    id: 8,
    title: '늑대사냥',
    imgUrl:
      'https://img.megabox.co.kr/SharedImg/2022/08/29/U5GZfJHB54LLscuG8NtmyZN6OdtyLrCF_230.jpg',
    userId: 'jeongyeon',
    content: '언능언능 후편보구싶어요~~. 외화가 아닌 우리나라도 이런 영화... 아주 좋아요',
    time: '1시간전',
  },
];
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

export default MoviePost;
