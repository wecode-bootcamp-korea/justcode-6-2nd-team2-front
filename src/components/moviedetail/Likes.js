import React, { useState } from 'react';
import { BsSuitHeart, BsSuitHeartFill } from 'react-icons/bs';
import styled from 'styled-components';

const LikeBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background-color: transparent;
  border-radius: 4px;
  border: 1px solid #706f72;
  height: 36px;
  width: 100px;
  min-width: 36px;
  padding: 0 10px;
  &:hover {
    color: #000;
    background-color: #fff;
    cursor: pointer;
  }
`;

function Likes() {
  const [mouseOver, setMouseOver] = useState(false);
  return (
    <>
      <LikeBtn onMouseOver={() => setMouseOver(true)} onMouseOut={() => setMouseOver(false)}>
        {mouseOver ? (
          <BsSuitHeartFill size='17' color='#006633' style={{ marginRight: 4 }} />
        ) : (
          <BsSuitHeart size='17' color='#fff' style={{ marginRight: 4 }} />
        )}
        900
      </LikeBtn>
    </>
  );
}
export default Likes;
