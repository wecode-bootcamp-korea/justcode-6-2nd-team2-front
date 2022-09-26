import React, { useState } from 'react';
import { BsSuitHeart, BsSuitHeartFill } from 'react-icons/bs';
import styled from 'styled-components';

const LikeBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.fontColor};
  background-color: ${props => props.background};
  border-radius: 4px;
  border: 1px solid #ebebeb;
  height: 36px;
  min-width: 36px;
  width: ${props => props.width};
  padding: 0 10px;
  &:hover {
    color: ${props => props.hoverColor};
    background-color: ${props => props.hoverBackground};
    cursor: pointer;
  }
`;

function Likes({ width, background, hoverBackground, fontColor, hoverColor, iconColor }) {
  const [mouseOver, setMouseOver] = useState(false);
  return (
    <>
      <LikeBtn
        width={width}
        background={background}
        hoverBackground={hoverBackground}
        fontColor={fontColor}
        hoverColor={hoverColor}
        onMouseOver={() => setMouseOver(true)}
        onMouseOut={() => setMouseOver(false)}
      >
        {mouseOver ? (
          <BsSuitHeartFill size='17' color={iconColor} style={{ marginRight: 4 }} />
        ) : (
          <BsSuitHeart size='17' color='#fff' style={{ marginRight: 4 }} />
        )}
        900
      </LikeBtn>
    </>
  );
}
export default Likes;
