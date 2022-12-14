import styled from 'styled-components';

import MoviePoster from './MoviePoster';
import MovieBook from './MovieBook';
import MovieLike from './MovieLike';

function MovieCard({ data, likeLoader }) {
  return (
    <>
      <Card>
        <MoviePoster data={data} height='330.82px' />
        <Div>
          <Grade alt='등급' src={data.grade_image} />
          <Title>{data.title}</Title>
        </Div>
        <div>
          <Rate>예매율 {data.book_rate}</Rate>
          <Date>개봉일 {data.open_date}</Date>
        </div>
        <Button>
          <MovieLike
            data={data}
            likeLoader={likeLoader}
            background='transparent'
            color='#000'
            fontSize='15px'
            fontWeight='400'
            hoverBackground='#ebebeb'
            offLogoColor='lightgray'
            offLogoSize='20px'
            onLogoColor='#006633'
            onLogoSize='20px'
          />
          <MovieBook />
        </Button>
      </Card>
    </>
  );
}

const Card = styled.li`
  width: 230px;
  margin: 0 0 60px 60px;
  padding: 0;

  background-color: transparent;

  div {
    display: flex;
    justify-content: space-between;
  }
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
  overflow: hidden;
  text-overflow: ellipsis;
  margin-left: 5px;
  padding: 2px 0 0 1px;

  font-size: 1.3333em;
  font-weight: 400;
`;

const Rate = styled.span`
  font-size: 15px;
`;

const Date = styled(Rate)`
  font-size: 15px;
  /* padding-left: 6px; */
`;

const Button = styled.div`
  display: flex;
  justify-content: space-between;

  width: 230px;
  height: 36px;
  margin-top: 5px;
`;

export default MovieCard;
