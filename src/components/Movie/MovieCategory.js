import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

function MovieCategory() {
  const [category] = useState([
    {
      id: 1,
      link: '/movie',
      title: '박스오피스',
    },
    {
      id: 2,
      link: 'now',
      title: '현재 상영작',
    },
    {
      id: 3,
      link: 'upcoming',
      title: '개봉 예정작',
    },
    {
      id: 4,
      link: 'domestic',
      title: '국내 영화',
    },
    {
      id: 5,
      link: 'abroad',
      title: '해외 영화',
    },
  ]);

  return (
    <>
      <Category>
        <CategoryBox>
          {category.map(link => {
            switch (link.id) {
              // case 1: {
              //   return (
              //     <CategoryTitle key={link.id}>
              //       <CategoryLink
              //         to={link.link}
              //         end={link.id === 1}
              //         className={({ isActive }) => (isActive ? 'active' : '')}
              //       >
              //         {link.title}
              //       </CategoryLink>
              //     </CategoryTitle>
              //   );
              // }
              default: {
                return (
                  // <CategoryTitle key={link.id}>
                  //   <CategoryLink to={link.link}>{link.title}</CategoryLink>
                  // </CategoryTitle>
                  <CategoryTitle key={link.id}>
                    <CategoryLink
                      to={link.link}
                      end={link.id === 1}
                      className={({ isActive }) => (isActive ? 'active' : '')}
                    >
                      {link.title}
                    </CategoryLink>
                  </CategoryTitle>
                );
              }
            }
          })}
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
