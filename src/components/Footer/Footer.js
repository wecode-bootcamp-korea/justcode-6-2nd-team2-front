/* eslint-disable */
import React from 'react';
import styled from 'styled-components';

const Container = styled.footer`
  min-width: 1100px;
  width: 100%;
  height: 220px;
  margin: 0;
  padding: 0;
  bottom: 0;
  background-color: #f8f8fa;
`;

const FooterTop = styled.div`
  overflow: hidden;
  width: 1100px;
  margin: 0 auto;
  padding: 30px 0;
  ul {
    float: left;
    list-style-type: none;
    margin: 0;
    padding: 0;
    li {
      margin-right: 15px;
      float: left;
      list-style-type: none;
      color: #666;
      cursor: pointer;
    }
  }
`;

const FooterBottom = styled.div`
  display: flex;
  overflow: hidden;
  width: 1100px;
  margin: 0 auto;
  padding: 0;
`;

const Inner = styled.div`
  display: flex;

  width: 1100px;
  margin: 0 auto;
`;
const Logo = styled.div`
  overflow: hidden;
  display: block;
  float: left;
  width: 123px;
  height: 100px;
  margin: 0 20px 0 0;
  padding: 0;
  text-indent: -9999px;
  background: url(http://localhost:3000/static/media/starbox.63eba2ee644ba437ebdb.png) no-repeat
    center;
  background-size: contain;
`;

const Info = styled.div`
  float: left;
  font-size: 0.8667em;
  letter-spacing: 0;
  margin-top: 24px;
  p {
    display: inline-block;
    vertical-align: top;
  }
`;

const FooterSns = styled.div`
  float: right;
  width: 185px;
  margin-top: 34px;
  a {
    display: block;
    float: left;
    width: 32px;
    height: 30px;
    margin-left: 5px;
    font-size: 0;
    line-height: 0;
  }
  i {
    display: block;
    margin: 0;
    width: 30px;
    height: 30px;
  }
`;

function Footer() {
  return (
    <>
      <Container>
        <FooterTop>
          <ul>
            <li>회사소개</li>
            <li>인재채용</li>
            <li>사회공헌</li>
            <li>제휴/광고/부대사업문의</li>
            <li>이용약관</li>
            <li>위치기반서비스 이용관</li>
            <li>개인정보처리방침</li>
            <li>윤리경영</li>
          </ul>
        </FooterTop>
        <FooterBottom>
          <Inner>
            <Logo>MEGABOX : Life Theater</Logo>
            <Info>
              <div>
                <p>서울특별시 강남구 테헤란로 427, 위워크타워 / </p>&nbsp;
                <p> PHONE 010-7365-4553</p>
              </div>
              <div>
                <p>대표자명 송은우</p>
                <p>· 개인정보보호책임자 xxx</p>
                <p>· 사업자등록번호 530-81-01310</p>
                <p>· 통신판매업신고번호 제 00 호</p>
              </div>
              <p>Copyright © JUSTCODE. All rights reserved.</p>
            </Info>
          </Inner>
          <FooterSns>
            <a
              href='https://www.youtube.com/channel/UCc3lqKQ9Ydf2sQLR8n4pkaQ/featured'
              target='_blank'
              title='STARBOX 유튜브 페이지로 이동'
            >
              <i
                style={{
                  backgroundImage:
                    'url(https://img.megabox.co.kr/static/pc/images/common/ico/ico-youtubeN.png)',
                }}
              >
                유튜브
              </i>
            </a>
            <a
              href='https://www.instagram.com/just_code_bootcamp/'
              target='_blank'
              title='STARBOX 인스타 페이지로 이동'
            >
              <i
                style={{
                  backgroundImage:
                    'url(https://img.megabox.co.kr/static/pc/images/common/ico/ico-instagramN.png)',
                }}
              >
                인스타그램
              </i>
            </a>
            <a
              href='https://ko-kr.facebook.com/'
              target='_blank'
              title='STARBOX 페이스북 페이지로 이동'
            >
              <i
                style={{
                  backgroundImage:
                    'url(https://img.megabox.co.kr/static/pc/images/common/ico/ico-facebookN.png)',
                }}
              >
                페이스북
              </i>
            </a>
            <a
              href='https://twitter.com/i/flow/login'
              target='_blank'
              title='STARBOX 트위터 페이지로 이동'
            >
              <i
                style={{
                  backgroundImage:
                    'url(https://img.megabox.co.kr/static/pc/images/common/ico/ico-twitterN.png)',
                }}
              >
                트위터
              </i>
            </a>
          </FooterSns>
        </FooterBottom>
      </Container>
    </>
  );
}

export default Footer;
