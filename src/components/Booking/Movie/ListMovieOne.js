import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import Modal from '../Modal';

const Ll = styled.li`
  list-style-type: none;
  display: list-item;
  text-align: -webkit-match-parent;
`;

const Movie = styled.button`
  display: block;
  position: relative;
  width: 100%;
  min-height: 28px;
  padding: 3px 30px 3px 30px;
  text-align: left;
  font-size: 0.8667em;

  ${props => {
    if (props.img) {
      return css`
        background-color: #666;
        color: #fff;
      `;
    } else if (!props.img) {
      return css`
        background-color: transparent;
      `;
    }
  }}

  letter-spacing: 0;
  -webkit-appearance: button;
  cursor: pointer;
  text-transform: none;
  overflow: visible;
  line-height: 1.15;
  direction: ltr;
  border: none;
  &:after {
    content: '';
    display: block;
    position: absolute;
    right: -6px;
    top: 50%;
    z-index: 2;
    width: 6px;
    height: 11px;
    margin: -6px 0 0 0;
    background: url(https://img.megabox.co.kr/static/pc/images/reserve/bg-arr-theater-choice.png)
      no-repeat 0 0;
  }
`;

const MovieGrade = styled.span`
  position: absolute;
  left: 5px;
  top: 3px;
  display: inline-block;
  margin: 0 2px 0 0;
  vertical-align: middle;
  width: 20px;
  height: 20px;
  overflow: hidden;
  padding: 0;
  text-indent: -9999px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  text-align: left;
  font-size: 0.8667em;
  letter-spacing: 0;
`;

const Heart = styled.i`
  position: absolute;
  right: 5px;
  top: 10px;
  display: block;
  margin: 0 2px 0 0;
  width: 12px;
  height: 11px;

  background-image: url(https://img.megabox.co.kr/static/pc/images/common/ico/ico-heart-small.png);
  overflow: hidden;
  padding: 0;
  font-size: 0;
  line-height: 0;
  vertical-align: middle;
  background-position: 0 0;
  background-repeat: no-repeat;
  color: #fff;
  font-weight: 400;
  letter-spacing: 0;
`;

const Txt = styled.span`
  display: inline;
  margin: 0 2px 0 0;
  vertical-align: middle;
  font-weight: 400;
  text-align: left;
  letter-spacing: 0;
  cursor: pointer;
  text-transform: none;
  line-height: 1.15;
`;

function ListOne({
  array,
  type,
  plus,
  minus,
  count,
  movieURL,
  setMovieURL,
  title,
  grade,
  img,
  id,
}) {
  const [select, setSelect] = useState(false);
  const [modalup, setModalup] = useState(false);
  const [modalMessage, setModalMessage] = useState('영화는 최대 3개까지 선택이 가능합니다.');

  const modalUpBtn = () => {
    setModalup(!modalup);
  };

  return (
    <>
      <Ll>
        <Movie
          onClick={() => {
            if (select) {
              if (count - 1 > 3) {
                modalUpBtn();
                return;
              }
              movieURL.pop();
              setMovieURL(movieURL);
              minus();
            } else {
              if (count + 1 > 3) {
                modalUpBtn();
                return;
              }
              setMovieURL([...movieURL, img]);
              plus();
            }
            if (count > 3) {
              modalUpBtn();
              return;
            }
            setSelect(!select);
          }}
          img={select}
        >
          {type === 'movie' && (
            <>
              <MovieGrade style={{ backgroundImage: `url(${grade})` }}>청소년관람불가</MovieGrade>
              <Heart>보고싶어 설정안함</Heart>
            </>
          )}

          <Txt>{title}</Txt>
        </Movie>
        {modalup && <Modal modalMessage={modalMessage} modalUpBtn={modalUpBtn} />}
      </Ll>
    </>
  );
}

export default ListOne;
