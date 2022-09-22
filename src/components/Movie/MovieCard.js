import MoviePoster from './MoviePoster';
import MovieBook from './MovieBook';
import MovieLike from './MovieLike';

import styled from 'styled-components';

function MovieCard() {
  return (
    <>
      <Card>
        <MoviePoster />
        <Div>
          <Grade alt='등급' src={require('../../assets/age_19.png')} />
          <Title>늑댓안양</Title>
        </Div>
        <Div>
          <Rate>예매율 18.7%</Rate>
          <Date>개봉일 2022.09.21</Date>
        </Div>
        <Button>
          <MovieLike />
          <MovieBook />
        </Button>
      </Card>
    </>
  );
}

const Card = styled.li`
  width: 230px;
  height: 450px;
  margin: 0 0 0 60px;
  padding: 0;
  margin-bottom: 60px;

  background-color: transparent;

  /* border: 1px solid black; */
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-top: 5px;

  font-size: 15px;
`;

const Grade = styled.img`
  width: 20px;
  height: 20px;
`;

const Title = styled.p`
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-left: 5px;
  padding: 2px 0 0 1px;
  font-size: 1.3333em;
  font-weight: 400;
`;

const Rate = styled.span`
  margin: 0 6px 0 0;
`;

const Date = styled(Rate)`
  padding-left: 6px;
  border-left: 1px solid lightgray;
`;

const Button = styled.div`
  display: flex;
  justify-content: space-between;

  width: 230px;
  height: 36px;
  margin-top: 5px;
`;

export default MovieCard;
