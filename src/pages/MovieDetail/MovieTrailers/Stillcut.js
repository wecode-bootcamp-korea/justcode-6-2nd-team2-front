import React from 'react';
import styled from 'styled-components';

function Stillcut() {
  return (
    <>
      <StillTitle>늑대사냥에 대한 28개의 스틸컷이 있어요!</StillTitle>
      <Column>
        <ColImg
          src='https://img.megabox.co.kr/SharedImg/2022/09/21/HSYKFNoaWZlhVGMiX0ZVP0g3xGpvaWWZ_380.jpg'
          alt='스틸컷'
        />
        <ColImg
          src='https://img.megabox.co.kr/SharedImg/2022/08/29/9puMI2LHwYXNrr77Xge7TjlW9558so35_380.jpg'
          alt='스틸컷'
        />
        <ColImg
          src='https://img.megabox.co.kr/SharedImg/2022/08/29/bHz1ZVp2Ys6t9ipuKXNV18HMyRfMlVKO_380.jpg'
          alt='스틸컷'
        />
        <ColImg
          src='https://img.megabox.co.kr/SharedImg/2022/09/21/HSYKFNoaWZlhVGMiX0ZVP0g3xGpvaWWZ_380.jpg'
          alt='스틸컷'
        />
      </Column>
      <Column>
        <ColImg
          src='https://img.megabox.co.kr/SharedImg/2022/08/29/bHz1ZVp2Ys6t9ipuKXNV18HMyRfMlVKO_380.jpg'
          alt='스틸컷'
        />
        <ColImg
          src='https://img.megabox.co.kr/SharedImg/2022/08/29/9puMI2LHwYXNrr77Xge7TjlW9558so35_380.jpg'
          alt='스틸컷'
        />
        <ColImg
          src='https://img.megabox.co.kr/SharedImg/2022/08/29/hfRQPheG1Zx8P5rk2cJ8GItxENDyAgET_380.jpg'
          alt='스틸컷'
        />
        <ColImg
          src='https://img.megabox.co.kr/SharedImg/2022/09/21/HSYKFNoaWZlhVGMiX0ZVP0g3xGpvaWWZ_380.jpg'
          alt='스틸컷'
        />
        <ColImg
          src='https://img.megabox.co.kr/SharedImg/2022/09/21/sUaMgi8aqcQ7PVmoi2Mie0qHrm8XpkKp_420.jpg'
          alt='스틸컷'
        />
      </Column>
      <Column>
        <ColImg
          src='https://img.megabox.co.kr/SharedImg/2022/09/21/sUaMgi8aqcQ7PVmoi2Mie0qHrm8XpkKp_420.jpg'
          alt='스틸컷'
        />
        <ColImg
          src='https://img.megabox.co.kr/SharedImg/2022/08/29/9puMI2LHwYXNrr77Xge7TjlW9558so35_380.jpg'
          alt='스틸컷'
        />
        <ColImg
          src='https://img.megabox.co.kr/SharedImg/2022/08/29/hfRQPheG1Zx8P5rk2cJ8GItxENDyAgET_380.jpg'
          alt='스틸컷'
        />
        <ColImg
          src='https://img.megabox.co.kr/SharedImg/2022/09/21/NstGlfsylJoUcRrBbKhx0LZnKWBt0LYc_380.jpg'
          alt='스틸컷'
        />
      </Column>
      <Column>
        <ColImg
          src='https://img.megabox.co.kr/SharedImg/2022/09/21/NstGlfsylJoUcRrBbKhx0LZnKWBt0LYc_380.jpg'
          alt='스틸컷'
        />
        <ColImg
          src='https://img.megabox.co.kr/SharedImg/2022/08/29/hfRQPheG1Zx8P5rk2cJ8GItxENDyAgET_380.jpg'
          alt='스틸컷'
        />
        <ColImg
          src='https://img.megabox.co.kr/SharedImg/2022/08/29/9puMI2LHwYXNrr77Xge7TjlW9558so35_380.jpg'
          alt='스틸컷'
        />
        <ColImg
          src='https://img.megabox.co.kr/SharedImg/2022/09/21/sUaMgi8aqcQ7PVmoi2Mie0qHrm8XpkKp_420.jpg'
          alt='스틸컷'
        />
      </Column>
    </>
  );
}
const StillTitle = styled.div`
  border-top: 1px solid #555;
  border-bottom: 1px solid #ebebeb;
  color: #006633;
  font-size: 22px;
  padding: 20px 0;
  margin-bottom: 40px;
`;
const Column = styled.div`
  width: 25%;
  float: left;
`;
const ColImg = styled.img`
  width: 100%;
  padding: 5px 10px;
  border-radius: 25px;
`;
export default Stillcut;
