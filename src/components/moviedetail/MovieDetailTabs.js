import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

function MovieDetailTab() {
  return (
    <>
      <TabWrap>
        <TabInner>
          <TabList>
            <TabLink to='movieinfo' end className={({ isActive }) => (isActive ? 'active' : '')}>
              주요정보
            </TabLink>
          </TabList>
          <TabList>
            <TabLink to='comment'>기대평</TabLink>
          </TabList>
          <TabList>
            <TabLink to='moviepost'>무비포스트</TabLink>
          </TabList>
          <TabList>
            <TabLink to='trailers'>예고편/스틸컷</TabLink>
          </TabList>
        </TabInner>
      </TabWrap>
    </>
  );
}
const TabWrap = styled.div`
  display: flex;
`;
const TabInner = styled.ul`
  width: 100%;
`;
const TabList = styled.li`
  float: left;
  width: 25%;
  text-align: center;
  }
`;
const TabLink = styled(NavLink)`
  position: relative;
  display: block;
  width: 100%;
  height: 41px;
  line-height: 40px;
  padding: 0;
  border: 1px solid #ddd;
  border-bottom: 1px solid #006633;
  text-align: center;
  color: #222;
  font-size: 1.0667em;
  text-decoration: none;
  &.active {
    border-color: #006633;
    border-style: solid;
    border-width: 1px 1px 0 1px;
    color: #006633;
  }
  &:hover {
    cursor: pointer;
  }
`;
export default MovieDetailTab;
