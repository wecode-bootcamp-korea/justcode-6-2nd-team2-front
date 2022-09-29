import React, { useState, useEffect } from 'react';
import styles from './index.module.scss';
import MovieComment from './MovieComment';

function MovieInfo() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:10010/movie/detail/1`)
      .then(res => res.json())
      .then(res => setMovieList(res.data));
  }, []);
  return (
    <>
      {movieList.map((item, idx) => {
        return (
          <div className={styles.innerWrap} key={idx}>
            <div className={styles.summary}>
              <div>
                <div className={styles.detailTitle}>{item.detail_title}</div>
                <div className={styles.detailContent}>{item.detail_content}</div>
              </div>
            </div>
            <div className={styles.movieInfo}>
              <p>상영타입 : 2D</p>
              <div>
                <p>감독 : {item.director}</p>
                <span>|</span>
                <p>등급 : {item.grade_name}</p>
                <span>|</span>
                <p>장르 : {item.genre}</p>
                <span>|</span>
                <p>개봉일 : {item.open_date}</p>
              </div>
              <div>
                <p>출연진 : {item.actor}</p>
              </div>
            </div>
            <div className={styles.movieGraph}>
              <div className={styles.graphBox}>
                <div className={styles.graphTitle}>관람포인트</div>
                <div className={styles.graphColor}>배우 스토리</div>
              </div>
              <div className={styles.graphBox}>
                <div className={styles.graphTitle}>실관람 평점</div>
                <div className={styles.circle}>{item.reviews_rate}</div>
                <div className={styles.graphTitle}>예매율</div>
                <div className={styles.graphColor}>{item.book_rate}</div>
              </div>
              <div className={styles.graphBox}>
                <div className={styles.graphTitle}>누적관객수</div>
                <div className={styles.graphColor}>
                  {new Intl.NumberFormat().format(item.audience)}
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <MovieComment />
      {/* <div className={styles.innerWrap}>
        <div className={styles.summary}>
          <div className={styles.summaryBox}>
            <div className={styles.detailTitle}>{movieList.detail_title}</div>
            <div className={styles.detailContent}>{movieList.detail_content}</div>
          </div>
          <button className={styles.viewBtn}>
            더보기
            <MdKeyboardArrowDown />
          </button>
        </div>
        <div className={styles.movieInfo}>
          <p>상영타입 : 2D</p>
          <div>
            <p>감독 : {movieList.director}</p>
            <span>|</span>
            <p>장르 : {movieList.genre}</p>
            <span>|</span>
            <p>등급 : {movieList.grade_name}</p>
            <span>|</span>
            <p>개봉일 : {movieList.open_date}</p>
          </div>
          <div>
            <p>출연진 : {movieList.actor}</p>
          </div>
        </div>
        <div className={styles.movieGraph}>
          <div className={styles.graphBox}>
            <div className={styles.graphTitle}>관람포인트</div>
            <div className={styles.graphColor}>배우 스토리</div>
          </div>
          <div className={styles.graphBox}>
            <div className={styles.graphTitle}>실관람 평점</div>
            <div className={styles.circle}>{movieList.reviews_rate}</div>
            <div className={styles.graphTitle}>예매율</div>
            <div className={styles.graphColor}>{movieList.reviews_rate}%</div>
          </div>
          <div className={styles.graphBox}>
            <div className={styles.graphTitle}>누적관객수</div>
            <div className={styles.graphColor}>
              {' '}
              {new Intl.NumberFormat().format(movieList.audience)}
            </div>
          </div>
        </div>
      </div> */}
      {/* <Comment movieList={movieList} /> */}
    </>
  );
  // }
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
}
export default MovieInfo;
