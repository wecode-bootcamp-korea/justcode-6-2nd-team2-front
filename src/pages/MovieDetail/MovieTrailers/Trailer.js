import React, { useState } from 'react';
import styled from 'styled-components';

function Trailer() {
  const [slideIdx, setSlideIdx] = useState(0);
  const nextClick = () => {
    slideIdx + 1 < slideImg.length ? setSlideIdx(slideIdx + 1) : setSlideIdx(0);
  };
  const prevClick = () => {
    slideIdx === slideImg.length - slideImg.length
      ? setSlideIdx(slideImg.length - 1)
      : setSlideIdx(slideIdx - 1);
  };

  return (
    <>
      <TrailerTitle>메인예고편</TrailerTitle>

      <TrailerWrap>
        <SlideWrap>
          <video controls width='800px' height='450px' poster={slideImg[slideIdx].posterUrl}>
            <source src={slideImg[slideIdx].videoUrl} type='video/mp4' />
          </video>
          <SlideBtn>
            <LeftBtn onClick={prevClick} />
            <RightBtn onClick={nextClick} />
          </SlideBtn>
        </SlideWrap>
      </TrailerWrap>
    </>
  );
}
const TrailerTitle = styled.div`
  border-top: 1px solid #555;
  border-bottom: 1px solid #ebebeb;
  color: #006633;
  font-size: 22px;
  padding: 20px 0;
  margin-bottom: 40px;
`;
const TrailerWrap = styled.div`
  position: relative;
  margin-bottom: 40px;
`;
const SlideWrap = styled.div`
  height: 100%;
  text-align: center;
`;
const SlideBtn = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  justify-content: space-between;
  transform: translate(-50%, -50%);
  width: 100%;
`;
const LeftBtn = styled.button`
cursor: pointer;
  width 64px;
  height:64px;
  background: url('https://img.megabox.co.kr/static/pc/images/common/ico/ico-prev-circle.png')
    center no-repeat;
  border: none;
`;
const RightBtn = styled.button`
cursor: pointer;
  width 64px;
  height:64px; 
  background: url('https://img.megabox.co.kr/static/pc/images/common/ico/ico-next-circle.png')
    center no-repeat;
  border: none;
`;

const slideImg = [
  {
    id: 1,
    videoUrl:
      'https://s3550.smartucc.kr/encodeFile/3550/2022/09/21/82af65ac2fbd5f18ee14034eae7e17c2_W.mp4',
    posterUrl:
      'https://img.megabox.co.kr/SharedImg/2022/09/21/qqMojns1Ey49kejbX8k5RSmVZ9nPQu6z_1100.jpg',
  },
  {
    id: 2,
    videoUrl:
      'https://s3550.smartucc.kr/encodeFile/3550/2022/09/21/65af29fb8f7bf6246ec0ebeb505d5dd4_W.mp4',
    posterUrl:
      'https://img.megabox.co.kr/SharedImg/2022/09/21/iKB1tNRLt5ytdx4Hft1tFEiAkZVbLdnm_1100.jpg',
  },
  {
    id: 3,
    videoUrl:
      'https://s3550.smartucc.kr/encodeFile/3550/2022/09/21/87c051b601ce3170ea2c1ef7fcf5130f_W.mp4',
    posterUrl:
      'https://img.megabox.co.kr/SharedImg/2022/09/21/1npSQkOLvImfTFc2Q2gEux8O7p2qZt8u_1100.jpg',
  },
];
export default Trailer;
