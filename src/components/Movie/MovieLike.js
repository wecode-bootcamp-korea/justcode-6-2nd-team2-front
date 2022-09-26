import React from 'react';
import styled from 'styled-components';
// import { BsSuitHeart, BsSuitHeartFill } from 'react/-icons/bs';

function MovieLike({ alertModal, setAlertModal }) {
  return (
    <>
      <Like
        onClick={() => {
          setAlertModal(!alertModal);
        }}
      >
        111
      </Like>
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
