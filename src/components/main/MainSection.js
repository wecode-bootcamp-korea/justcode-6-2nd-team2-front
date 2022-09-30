import React from 'react';
import styled from 'styled-components';

function MainSection() {
  return (
    <>
      <BenefitSection>
        <BenefitWrap>
          <Title>혜택</Title>
          <BannerBox>
            {/* 왼쪽 */}
            <BannerLeft>
              <LeftTop>
                <LeftTopOne
                  src='https://images.unsplash.com/photo-1607979036079-af88d8d6159e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQ1fHxtb3ZpZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
                  alt='배너1'
                />
              </LeftTop>
              <LeftBottom>
                <LeftBottomOne
                  src='https://images.unsplash.com/photo-1518173835740-f5d14111d76a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA3fHxtb3ZpZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
                  alt='배너1'
                />
                <LeftBottomTwo
                  src='https://images.unsplash.com/photo-1620177088258-c84147ee601f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fG1vdmllfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
                  alt='영화배너2'
                />
              </LeftBottom>
            </BannerLeft>

            {/* 오른쪽 */}
            <BannerRight>
              <RightImg
                src='https://images.unsplash.com/photo-1616530940355-351fabd9524b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG1vdmllfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
                alt='영화이미지1'
              />
            </BannerRight>
          </BannerBox>

          <IconBox>
            <IconItem>
              <img
                src='https://www.megabox.co.kr/static/pc/images/common/ico/ico-vip-main.png'
                alt='아이콘 링크'
              />
              <div>VIP LOUNGE</div>
            </IconItem>
            <IconItem>
              <img
                src='https://www.megabox.co.kr/static/pc/images/common/ico/ico-membership-main.png'
                alt='아이콘 링크'
              />
              <div>멤버십</div>
            </IconItem>
            <IconItem>
              <img
                src='https://www.megabox.co.kr/static/pc/images/common/ico/ico-card-main.png'
                alt='아이콘 링크'
              />{' '}
              <div>할인카드안내</div>
            </IconItem>
            <IconItem>
              <img
                src='https://www.megabox.co.kr/static/pc/images/common/ico/ico-event-main.png'
                alt='아이콘 링크'
              />{' '}
              <div>이벤트</div>
            </IconItem>
            <IconItem>
              <img
                src='https://www.megabox.co.kr/static/pc/images/common/ico/ico-vip-main.png'
                alt='아이콘 링크'
              />{' '}
              <div>스토어</div>
            </IconItem>
          </IconBox>
        </BenefitWrap>
      </BenefitSection>
    </>
  );
}
export default MainSection;

const BenefitSection = styled.div`
  position: relative;
  padding: 0 0 100px 0;
  height: 850px;
  background: linear-gradient(180deg, #ddd 60%, #006633 40%);
`;
const BenefitWrap = styled.div`
  position: relative;
  width: 1100px;
  margin: 0 auto;
  padding: 0;
`;
const Title = styled.div`
  font-size: 30px;
  padding-top: 50px;
  color: #006633;
`;
const BannerBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
const BannerLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const LeftTop = styled.div``;
const LeftBottom = styled.div`
  display: flex;
`;
const LeftTopOne = styled.img`
  width: 100%;
  height: 300px;
`;
const BannerRight = styled.div`
  display: flex;
  align-items: flex-end;
`;
const LeftBottomOne = styled.img`
  width: 441px;
  height: 203px;
  margin-right: 20px;
`;
const LeftBottomTwo = styled.img`
  width: 203px;
  height: 203px;
`;
const RightImg = styled.img`
  width: 415px;
  height: 530px;
`;
const IconBox = styled.div`
  padding-top: 30px;
  display: flex;
  justify-content: space-around;
`;
const IconItem = styled.div`
  text-align: center;
  div {
    color: #fff;
  }
`;
