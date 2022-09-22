import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

function MovieCategory() {
  return (
    <>
      <Category>
        <CategoryBox>
          <CategoryTitle>
            <CategoryLink to='/movie' end className={({ isActive }) => (isActive ? 'active' : '')}>
              박스오피스
            </CategoryLink>
          </CategoryTitle>
          <CategoryTitle>
            <CategoryLink to='b'>국내 영화</CategoryLink>
          </CategoryTitle>
          <CategoryTitle>
            <CategoryLink to='c'>해외 영화</CategoryLink>
          </CategoryTitle>
          <CategoryTitle>
            <CategoryLink to='d'>특별 상영</CategoryLink>
          </CategoryTitle>
          <CategoryTitle>
            <CategoryLink to='e'>필름 소사이어티</CategoryLink>
          </CategoryTitle>
        </CategoryBox>
      </Category>
    </>
  );
}

const Category = styled.div``;

const CategoryBox = styled.ul`
  display: flex;
  flex-direction: row;
`;
const CategoryTitle = styled.li`
  width: 100%;
`;
const CategoryLink = styled(NavLink)`
  position: relative;
  display: block;
  width: 100%;
  height: 41px;
  line-height: 40px;
  padding: 0;

  border: 1px solid lightgray;
  border-bottom: 1px solid #006633;

  text-align: center;
  color: #222;
  font-size: 1.0667em;
  text-decoration: none;

  &.active {
    border-bottom: none;
    border-color: #006633;
    color: #006633;
  }

  &:hover {
    cursor: pointer;
  }
`;

export default MovieCategory;
