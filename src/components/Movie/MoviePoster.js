import { Link } from 'react-router-dom';
import styled from 'styled-components';

function MoviePoster({ data }) {
  return (
    <>
      <Div>
        <div className='wrap'>
          <div className='poster'>
            <Rank>{data.movie_id}</Rank>
            <Poster alt='포스터 이미지' src={data.poster_img} className='lazyload blur-up' />
          </div>
          <div className='posterHover'>
            <DetailLink to={`/moviedetail/${data.movie_id}`}>
              <div className='content'>
                <div className='summary'>{data.detail_content}</div>
                {data.reviews_rate && (
                  <div className='reviewScore'>
                    <div className='review'>
                      <span>관람평</span>
                    </div>
                    <div className='score'>{data.reviews_rate}</div>
                  </div>
                )}
              </div>
            </DetailLink>
          </div>
        </div>
      </Div>
    </>
  );
}

const Div = styled.div`
  .wrap {
    position: relative;
    height: 100%;
  }

  .poster {
    width: 230px;
    height: 331px;
  }

  .wrap:hover > .posterHover {
    display: block;
    overflow: hidden;
  }

  .posterHover {
    position: absolute;
    display: none;
    width: 230px;
    height: 331px;
    top: 0;
    left: 0;
    z-index: 2;

    background: rgba(0, 0, 0, 0.7);

    &:hover {
      cursor: pointer;
    }

    .content {
      position: absolute;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;
      height: 100%;
      padding: 15px;
      color: #fff;

      .summary {
        width: 100%;
        height: 155px;
        overflow: hidden;
        text-align: justify;
        line-height: 130%;
      }

      .reviewScore {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;

        .score {
          margin-left: 10px;
          font-size: 25px;
          color: #008833;
        }
      }
    }
  }
`;

const Rank = styled.p`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  width: 240px;
  height: 150px;
  padding: 8px 0 0 10px;

  line-height: 1.1;
  font-size: 2em;
  font-style: italic;
  font-weight: 300;
  color: #fff;
  text-shadow: 2px 2px 2px rgb(0 0 0 / 80%);
`;

const Poster = styled.img`
  display: block;
  width: 100%;
`;

const DetailLink = styled(Link)``;

export default MoviePoster;
