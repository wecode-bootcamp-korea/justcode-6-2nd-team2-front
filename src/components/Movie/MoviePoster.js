import styled from 'styled-components';

function MoviePoster() {
  return (
    <>
      <Div>
        <Rank>1</Rank>
        <Poster alt='포스터 이미지' src={require('../../assets/poster.png')} />
      </Div>
    </>
  );
}

const Div = styled.div``;

const Rank = styled.p`
  position: absolute;
  z-index: 100;

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
  width: 100%;
`;

export default MoviePoster;
