import styled from 'styled-components';
import { Link } from 'react-router-dom';

function MoviePoster() {
  return (
    <>
      <Div>
        <div className='wrap'>
          <div className='poster'>
            <Rank>1</Rank>
            <Poster alt='포스터 이미지' src={require('../../assets/poster.png')} />
          </div>
          <div className='posterHover'>
            <DetailLink to='moviedetail'>
              <div className='content'>
                <div className='summary'>
                  늑댓안양 내용 어쩌구 저쩌구늑댓안양 내용 어쩌구 저쩌구늑댓안양 내용 어쩌구
                  저쩌구늑댓안양 내용 어쩌구 저쩌구늑댓안양 내용 어쩌구 저쩌구늑댓안양 내용 어쩌구
                  저쩌구늑댓안양 내용 어쩌구 저쩌구늑댓안양 내용 어쩌구 저쩌구
                </div>
                <div className='reviewRate'>
                  관람평 <span>9.1</span>
                </div>
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
    width: 100%;
  }

  .wrap:hover > .posterHover {
    display: block;
    overflow: hidden;
  }

  .posterHover {
    display: none;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    position: absolute;
    top: 0;
    left: 0;

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
      padding: 10px;
      color: #fff;

      .summary {
        padding: 6px;
        line-height: 150%;
      }

      .reviewRate {
        text-align: center;

        span {
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
