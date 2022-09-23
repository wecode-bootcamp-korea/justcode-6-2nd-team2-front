import React from 'react';
import styled from 'styled-components';

const TitleWrapper = styled.div`
  position: relative;
  z-index: 1;
  padding-bottom: 55px;
`;

const Title = styled.h2`
  float: left;
  padding: 0 !important;
  line-height: 1.1;
  font-size: 1.8666em;
  font-weight: 400;
  letter-spacing: -1px;
`;

function NavTitle() {
  return (
    <>
      <TitleWrapper>
        <Title>빠른예매</Title>
      </TitleWrapper>
    </>
  );
}

export default NavTitle;
