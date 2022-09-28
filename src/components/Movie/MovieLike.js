import React, { useState } from 'react';
import styled from 'styled-components';
import { HiHeart } from 'react-icons/hi';
import { HiOutlineHeart } from 'react-icons/hi';

import AlertModal from '../AlertModal/AlertModal';

function MovieLike({
  data,
  likeLoader,
  width,
  height,
  background,
  color,
  fontSize,
  fontWeight,
  hoverColor,
  hoverBackground,
  offLogoColor,
  offLogoSize,
  onLogoColor,
  onLogoSize,
}) {
  // const [like, setLike] = useState(false);
  const [alertModal, setAlertModal] = useState(false);

  // const activeLike = () => {
  // const token = localStorage.getItem('login_token');
  // if (!token) {
  //   setAlertModal(true);
  //   return;
  // }
  // };

  return (
    <>
      <Like
        width={width}
        height={height}
        background={background}
        color={color}
        fontSize={fontSize}
        fontWeight={fontWeight}
        hoverColor={hoverColor}
        hoverBackground={hoverBackground}
        offLogoColor={offLogoColor}
        offLogoSize={offLogoSize}
        onLogoColor={onLogoColor}
        onLogoSize={onLogoSize}
        onClick={() => {
          // activeLike();
          likeLoader();
        }}
      >
        <HiOutlineHeart className='offLogo' />
        &nbsp;&nbsp;{data.likes}
      </Like>
      <AlertModal
        visible={alertModal}
        modalTitle='알림'
        text='로그인 후 이용가능한 서비스입니다.'
        confirmText='확인'
        onClose={() => {
          setAlertModal(false);
        }}
        onConfirm={() => {
          setAlertModal(false);
        }}
      />
    </>
  );
}

const Like = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.width};
  height: ${props => props.height};
  min-width: 34%;
  min-height: 36px;

  background: ${props => props.background};
  border: 1px solid #ebebeb;
  border-radius: 4px;

  color: ${props => props.color};
  text-align: center;
  line-height: 36px;
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};

  .offLogo {
    font-size: ${props => props.offLogoSize};
    color: ${props => props.offLogoColor};
  }

  .onLogo {
    font-size: ${props => props.onLogoSize};
    color: ${props => props.onLogoColor};
  }

  &:hover {
    cursor: pointer;

    background-color: ${props => props.hoverBackground};
    color: ${props => props.hoverColor};
  }
`;

export default MovieLike;
