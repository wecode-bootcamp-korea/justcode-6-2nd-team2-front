import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import styles from './index.module.scss';
import { BsShare, BsShareFill, BsFillQuestionCircleFill } from 'react-icons/bs';
import { RiCheckboxMultipleLine } from 'react-icons/ri';
import { IoTicketOutline, IoPeopleOutline } from 'react-icons/io5';

function MovieDetailContent({ movieList }) {
  const [share, setShare] = useState(false);
  return (
    <>
      {movieList.map(item => {
        return (
          <div key={item.id}>
            <div className={styles.container}>
              <BgImg backgroundImg={item.background_img} />

              <div className={styles.bgMask} />
              <div className={styles.content}>
                <p className={styles.title}>{item.title}</p>
                <p className={styles.titleEng}>{item.eng_title}</p>
                <div className={styles.btnUtil}>
                  <button
                    className={styles.shareBtn}
                    onMouseOver={() => setShare(true)}
                    onMouseOut={() => setShare(false)}
                  >
                    {share ? (
                      <ShareIconFill size='17' color='#006633' />
                    ) : (
                      <ShareIcon size='17' color='#fff' />
                    )}
                    공유하기
                  </button>
                </div>
                <div className={styles.info}>
                  <div className={styles.score}>
                    <p className={styles.tit}>기대평 평점</p>
                    <div className={styles.flex}>
                      <RiCheckboxMultipleLine size='22' />
                      <p className={styles.number}>
                        <span className={styles.scorePoint}>
                          {item.reviews_rate ? item.reviews_rate : 0}
                        </span>
                        <span className={styles.unit}> 점</span>
                      </p>
                    </div>
                  </div>
                  <div className={styles.score}>
                    <p className={styles.tit}>예매율</p>
                    <div className={styles.flex}>
                      <IoTicketOutline size='22' />
                      <p className={styles.number}>
                        2<span className={styles.unit}> 위 ({item.book_rate})</span>
                      </p>
                    </div>
                  </div>
                  <div className={styles.score}>
                    <div className={`${styles.tit} ${styles.flexCenter}`}>
                      <div>누적관객수</div>
                      <div className={styles.toolTip}>
                        <BsFillQuestionCircleFill />
                        <div className={styles.toolTipCon}>
                          <div className={styles.toolTipArr} />
                          누적관객 및 전일관객은 영화진흥 위원회
                          <br />
                          영화관 입장권 통합전산망제공 기준입니다.
                        </div>
                      </div>
                    </div>
                    <div className={styles.flex}>
                      <IoPeopleOutline size='22' />
                      <p className={styles.number}>
                        {new Intl.NumberFormat().format(item.audience)}
                        <span className={styles.unit}> 명</span>
                      </p>
                    </div>
                  </div>
                </div>
                <Poster>
                  <PosterWrap>
                    <GradeImg gradeImg={item.grade_image} />
                    <img src={item.poster_img} alt={item.title} />
                  </PosterWrap>
                </Poster>
                <Link className={styles.ticketingBtn} to='/booking'>
                  예매
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
const BgImg = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  background: url(${props => props.backgroundImg}) center no-repeat;

  background-size: 100% auto;
  margin: 0 0 0 -550px;
  z-index: 1;
  width: 1100px;
  height: 100%;
  opacity: 0.8;
`;

const ShareIcon = styled(BsShare)`
  margin-right: 4px;
`;
const ShareIconFill = styled(BsShareFill)`
  margin-right: 4px;
`;
const Poster = styled.div`
  overflow: hidden;
  display: block;
  position: absolute;
  right: 0;
  top: 45px;
  width: 260px;
  height: 374px;
`;
const PosterWrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  img {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
`;
const GradeImg = styled.div`
  position: absolute;
  left: 10px;
  top: 10px;
  width: 23px;
  height: 23px;
  background: url(${props => props.gradeImg}) center no-repeat;
`;
// const movieList = {
//   title: '공조 2: 인터내셔날',
//   // engTitle
//   likes: 900,
//   score: 9.1,
//   book_rate: 17.7,
//   audience: 4732511,
//   backImg:
//     'https://img.megabox.co.kr/SharedImg/2022/09/16/7SKcz0FHj1a0OANAOk2PC9IwDYsbz0D8_570.jpg',
//   poster: 'https://img.megabox.co.kr/SharedImg/2022/08/29/oUQrNQTflUqvHUQG6kvlzF8SEhJSomfh_420.jpg',
//   director: '이석훈',
//   genre: '액션,코미디 / 129분',
//   grade: '15세이상관람가',
//   grade_image: 'https://img.megabox.co.kr/static/pc/images/common/txt/txt-age-15.png',
//   open_date: '2022.09.07',
//   actor: '현빈, 유해진, 임윤아, 다니엘 헤니, 진선규',
//   detail_title: '공조 이즈 백! 이번엔 삼각 공조다!',
//   detail_content: (
//     <>
//       남한으로 숨어든 글로벌 범죄 조직을 잡기 위해 <br />
//       새로운 공조 수사에 투입된 북한 형사 ‘림철령’(현빈). <br /> 수사 중의 실수로 사이버수사대로
//       전출됐던 남한 형사 ‘강진태’(유해진)는 <br /> 광수대
//       <br />
//       복귀를 위해 모두가 기피하는 ‘철령’의 파트너를 자청한다. <br /> <br /> 이렇게 다시 공조하게 된
//       ‘철령’과 ‘진태’! <br /> ‘철령’과 재회한 ‘민영’(임윤아)의 마음도 불타오르는 가운데, <br />
//       ‘철령’과 ‘진태’는 여전히 서로의 속내를 의심하면서도 나름 그럴싸한 공조 수사를 펼친다. <br />
//       드디어 범죄 조직 리더인 ‘장명준’(진선규)의 은신처를 찾아내려는 찰나, <br /> 미국에서 날아온
//       FBI 소속 ‘잭’(다니엘 헤니)이 그들 앞에 나타나는데…! <br />
//       <br /> 아직도 짠내 나는 남한 형사,
//       <br /> 여전한 엘리트 북한 형사, <br /> 그리고 FBI 소속 해외파 형사까지! <br /> 각자의 목적으로
//       뭉친 그들의 짜릿한 공조 수사가 시작된다!
//     </>
//   ),
// };
// const movieList = {
//   title: '아바타 리마스터링',
//   eng_title: 'Avatar',
//   // engTitle
//   likes: 900,
//   score: 9.1,
//   book_rate: 13.1,
//   audience: 0,
//   // grade_img : '',
//   backImg:
//     'https://img.megabox.co.kr/SharedImg/2022/09/19/klsu7B86lYgHPdYBTF53b2aMdCQe3ETp_570.jpg',
//   poster:
//     'https://img.megabox.co.kr/SharedImg/2022/08/29/nxQhoJtnfnmVqAG1QVCl2Hp5bRNrTtqL_420.jpg',
// };
// background: url(${movieList.backImg}) center no-repeat;
//background: url(https://img.megabox.co.kr/SharedImg/2022/09/19/klsu7B86lYgHPdYBTF53b2aMdCQe3ETp_570.jpg)
//center no-repeat;
export default MovieDetailContent;
