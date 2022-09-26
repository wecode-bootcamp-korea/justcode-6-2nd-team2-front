import React from 'react';
import styled from 'styled-components';
import { HiOutlinePencilAlt } from 'react-icons/hi';
import { TbThumbUp } from 'react-icons/tb';
import { BsThreeDotsVertical } from 'react-icons/bs';

function Comment() {
  return (
    <>
      <CommentWrap>
        <CommentTitle>
          {/* {item.title}  */}에 대한 <span>11,611</span>개의 이야기가 있어요!
        </CommentTitle>
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
            <div>재미있게 보셨나요? 영화의 어떤 점이 좋았는지 이야기해주세요.</div>
            <PostBtn>
              <HiOutlinePencilAlt size='20' color='#666' />
              관람평쓰기
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
export default Comment;
