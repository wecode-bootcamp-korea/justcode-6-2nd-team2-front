import { Link } from 'react-router-dom';
import styled from 'styled-components';

function MovieBook() {
  return (
    <>
      <Booking to='/booking'>
        <Book>예매</Book>
      </Booking>
    </>
  );
}

const Booking = styled(Link)`
  width: 63%;
  height: 36px;

  line-height: 36px;

  background: #006633;
  border-radius: 4px;

  text-align: center;
  color: white;
  font-size: 15px;
  font-weight: 400;

  &:hover {
    background-color: #004433;
    cursor: pointer;
  }
`;

const Book = styled.button`
  background: transparent;
  border: none;

  text-align: center;
  color: white;
  font-size: 15px;
  font-weight: 400;
`;

export default MovieBook;
