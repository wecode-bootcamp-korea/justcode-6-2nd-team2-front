import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { HiOutlinePencilAlt } from 'react-icons/hi';
import { TbThumbUp } from 'react-icons/tb';
import { BsThreeDotsVertical } from 'react-icons/bs';
import SelectBox from '../../components/moviedetail/SelectBox';

function MovieCommentList() {
  const [movieList, setMovieList] = useState();
  useEffect(() => {
    fetch(`http://localhost:10010/movie/detail/1`)
      .then(res => res.json())
      .then(res => setMovieList(res.data));
  }, []);
  console.log('CommentList', movieList);

  const [view, setView] = useState(false);
  const viewComment = () => {
    setView(!view);
  };
  const rate = [
    { label: '1점', value: '1' },
    { label: '2점', value: '2' },
    { label: '3점', value: '3' },
    { label: '4점', value: '4' },
    { label: '5점', value: '5' },
  ];
  const options = [
    { label: '배우', value: 'op1' },
    { label: 'ost', value: 'op2' },
    { label: '스토리', value: 'op3' },
    { label: '연출', value: 'op4' },
    { label: '영상미', value: 'op5' },
  ];
  return (
    <>
      <CommentWrap>
        {movieList &&
          movieList.map((item, idx) => {
            return (
              <CommentTitle key={idx}>
                {item.title}에 대한 <span>11,611</span>개의 이야기가 있어요!
              </CommentTitle>
            );
          })}
        {/* 기대평 등록 상단 */}
        <CommentBox>
          <UserImg>
            <img
              src='https://img.megabox.co.kr/static/pc/images/common/ico/ico-mega-profile.png'
              alt='STARBOX'
            />
            <p>STARBOX</p>
          </UserImg>

          <UserBox>
            {view ? (
              <UserInput>
                <SelectBox placeholder='평점 선택' items={options} />
                <SelectBox placeholder='평점 선택' items={rate} />
                <InputBox type='text' placeholder='관람평을 입력해주세요' />
              </UserInput>
            ) : (
              <div>재미있게 보셨나요? 영화의 어떤 점이 좋았는지 이야기해주세요.</div>
            )}

            <PostBtn onClick={viewComment}>
              {view ? (
                <>
                  <HiOutlinePencilAlt size='20' color='#666' />
                  등록
                </>
              ) : (
                <>
                  <HiOutlinePencilAlt size='20' color='#666' />
                  관람평쓰기
                </>
              )}
            </PostBtn>
          </UserBox>
        </CommentBox>
        {/* 기대평 등록 Box */}
        <ul>
          <li>
            <CommentAnswer>
              <UserImg>
                <img
                  src='https://img.megabox.co.kr/static/pc/images/mypage/bg-photo.png'
                  alt='userid'
                />
                <p>wwjddus</p>
              </UserImg>

              <CommentItem>
                <CommTit>관람평</CommTit>
                <CommContent>
                  <CommPoint>8</CommPoint>
                  <CommRecommend>스토리</CommRecommend>
                  <CommTxt>세 주연 배우들의 캐미도 좋았고, 진부한 스토리 전개도 그럭저럭..</CommTxt>
                  <CommLike>
                    <TbThumbUp size='20' />1
                  </CommLike>
                  <CommUtil>
                    <BsThreeDotsVertical size='20' color='#666' />
                  </CommUtil>
                </CommContent>
              </CommentItem>
            </CommentAnswer>
            <CommTime>방금</CommTime>
          </li>
        </ul>
      </CommentWrap>
    </>
  );
}
const CommentWrap = styled.div`
  margin-bottom: 20px;
`;
const CommentTitle = styled.div`
  color: #006633;
  font-size: 22px;
  margin-bottom: 15px;
  margin-top: 40px;
`;
const CommentBox = styled.div`
  display: flex;
  margin-bottom: 20px;
`;
const UserBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  width: 100%;
  border: 1px solid #eaeaea;
  border-radius: 0 10px 10px 10px;
`;
const UserInput = styled.div`
  display: flex;
`;
const InputBox = styled.input`
  width: 300px;
`;
const PostBtn = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: #fff;
  color: #666;
  font-size: 15px;
  cursor: pointer;
`;
const CommentAnswer = styled.div`
  display: flex;
`;
const CommentItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 0 10px 10px 10px;
  background-color: #f8f8fa;
  color: #006633;
`;
const CommTit = styled.div`
  width: 105px;
  text-align: center;
  font-size: 15px;
  font-weight: 500;
`;
const CommContent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;
const CommPoint = styled.div`
  width: 90px;
  font-size: 36px;
  text-align: center;
  font-weight: 300;
`;
const CommRecommend = styled.div`
  width: 85px;
  text-align: center;
  padding-right: 20px;
`;

const CommTxt = styled.div`
  position: relative;
  color: #666;
  padding: 0 20px 0 30px;
  width: 100%;
  &:before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 50%;
    width: 1px;
    height: 50px;
    margin-top: -25px;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
const CommLike = styled.div`
  width: 40px;
  color: #666;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const CommUtil = styled.div`
  width: 40px;
`;
const CommTime = styled.div`
  text-align: right;
  padding-top: 10px;
  font-size: 14px;
`;

//공통
const UserImg = styled.div`
  text-align: center;
  width: 100px;
		img {
			width: 50px;
			height: 50px;
		}
	}
`;
export default MovieCommentList;
