import styled from 'styled-components';
import { MdToggleOff } from 'react-icons/md';

function MovieFilter() {
  return (
    <Filter type='button'>
      <MdToggleOff className='logo' />
      &nbsp;개봉작만
    </Filter>
  );
}

const Filter = styled.button`
  /* padding: 0 0 0 30px; */
  /* background: url(https://img.megabox.co.kr/static/pc/images/common/btn/btn-on-air.png) no-repeat 0
    2px; */

  display: flex;
  align-items: center;

  background-color: transparent;
  border: none;
  font-family: 'NanumBarunGothic';
  font-size: 15px;

  .logo {
    position: relative;
    font-size: 30px;
    color: lightgray;
  }

  &:hover {
    cursor: pointer;
  }
`;

export default MovieFilter;
