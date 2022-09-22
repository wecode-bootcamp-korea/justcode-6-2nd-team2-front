import styled from 'styled-components';
import { MdToggleOn } from 'react-icons/md';
import { MdToggleOff } from 'react-icons/md';

function MovieFilter({ filter, setFilter }) {
  return (
    <Filter
      type='button'
      onClick={() => {
        setFilter(!filter);
      }}
    >
      {filter ? <MdToggleOn className='onLogo' /> : <MdToggleOff className='offLogo' />}
      &nbsp;개봉작만
    </Filter>
  );
}

const Filter = styled.button`
  display: flex;
  align-items: center;

  background-color: transparent;
  border: none;
  font-family: 'NanumBarunGothic';
  font-size: 15px;

  .onLogo {
    position: relative;
    font-size: 30px;
    color: lightblue;
  }

  .offLogo {
    position: relative;
    font-size: 30px;
    color: lightgray;
  }

  &:hover {
    cursor: pointer;
  }
`;

export default MovieFilter;
