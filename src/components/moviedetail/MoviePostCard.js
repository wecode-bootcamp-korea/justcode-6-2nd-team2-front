import React from 'react';
import styled from 'styled-components';
import { RiThumbUpLine } from 'react-icons/ri';
import { MdChatBubbleOutline } from 'react-icons/md';

function MoviePostCard({ postList }) {
  return (
    <>
      {/* <PostItem></PostItem> */}
      {postList.map((item, idx) => {
        return (
          <PostItem key={idx}>
            <PostImg src={item.imgUrl} alt={item.title} />
            <Content>
              <User>{item.userId}</User>
              <Title>{item.title}</Title>
              <Con>{item.content}</Con>
              <Con>{item.time}</Con>
              <ThumbBox>
                <Thumb>
                  <RiThumbUpLine color='#acabb0' size='20' />3
                </Thumb>
                <Thumb>
                  <MdChatBubbleOutline color='#acabb0' size='20' />0
                </Thumb>
              </ThumbBox>
            </Content>
          </PostItem>
        );
      })}
    </>
  );
}

const PostItem = styled.li`
  width: 230px;
  margin: 0 0 0 60px;
  padding: 0;
  margin-bottom: 60px;
  border: 1px solid #ddd;
  border-radius: 10px;
`;
const PostImg = styled.img`
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
`;
const Content = styled.div`
  padding: 20px;
`;
const User = styled.div`
  font-size: 13px;
  padding-bottom: 15px;
`;
const Title = styled.div`
  font-size: 15px;
  padding-bottom: 15px;
`;
const Con = styled.div`
  font-size: 14px;
  padding-bottom: 15px;
`;
const ThumbBox = styled.div`
  display: flex;
`;
const Thumb = styled.div`
  display: flex;
  margin-right: 5px;
`;

export default MoviePostCard;
