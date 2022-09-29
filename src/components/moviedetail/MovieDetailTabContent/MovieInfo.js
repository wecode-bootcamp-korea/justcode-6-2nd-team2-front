import React, { useState, useEffect } from 'react';
import styles from '../../../pages/MovieDetail/index.module.scss';
import MovieComment from './MovieComment';

function MovieInfo({ movieList }) {
  // console.log('주요정보:', movieList);
  // const [movieList, setMovieList] = useState([]);

  // useEffect(() => {
  //   fetch(`http://localhost:10010/movie/detail/1`)
  //     .then(res => res.json())
  //     .then(res => setMovieList(res.data));
  // }, []);
  return (
    <>
      {movieList &&
        movieList.map((item, idx) => {
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
                  <div className={styles.graphTitle}>기대평 평점</div>
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
      <MovieComment movieList={movieList} />
    </>
  );
}
export default MovieInfo;
