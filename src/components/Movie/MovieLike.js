import React, { useState } from 'react';
import styled from 'styled-components';
// import { BsSuitHeart, BsSuitHeartFill } from 'react/-icons/bs';

import AlertModal from '../AlertModal/AlertModal';

function MovieLike() {
  const [alertModal, setAlertModal] = useState(false);
  return (
    <>
      <Like
        onClick={() => {
          setAlertModal(!alertModal);
        }}
      >
        111
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
  width: 34%;
  height: 36px;

  line-height: 36px;

  background: #503396;
  background-color: transparent;
  border: 1px solid #ebebeb;
  border-radius: 4px;

  text-align: center;
  color: #004433;
  font-weight: 400;

  &:hover {
    background-color: #ebebeb;
    cursor: pointer;
  }
`;

export default MovieLike;
