import styled from 'styled-components';
import { MdToggleOn } from 'react-icons/md';
import { MdToggleOff } from 'react-icons/md';

function MovieFilter({
  filter,
  setFilter,
  dateOrder,
  setDateOrder,
  alphabeticalOrder,
  setAlphabeticalOrder,
}) {
  return (
    <>
      <Filter
        onClick={() => {
          setFilter(!filter);
        }}
      >
        {filter ? (
          <span className='onLogo'>&nbsp;전체</span>
        ) : (
          <span className='offLogo'>&nbsp;전체</span>
        )}
        {/* &nbsp;전체 */}
      </Filter>
      <Filter
        onClick={() => {
          setDateOrder(!dateOrder);
        }}
      >
        {dateOrder ? <MdToggleOn className='onLogo' /> : <MdToggleOff className='offLogo' />}
        &nbsp;개봉일순
      </Filter>
      <Filter
        onClick={() => {
          setAlphabeticalOrder(!alphabeticalOrder);
        }}
      >
        {alphabeticalOrder ? (
          <MdToggleOn className='onLogo' />
        ) : (
          <MdToggleOff className='offLogo' />
        )}
        &nbsp;가나다순
      </Filter>
    </>
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
    /* position: relative;
    font-size: 30px;
    color: lightblue; */
    font-weight: 700;
  }

  .offLogo {
    /* position: relative;
    font-size: 30px;*/
    /* color: lightgray; */
    font-weight: 400;
  }

  &:hover {
    cursor: pointer;
  }
`;

export default MovieFilter;
