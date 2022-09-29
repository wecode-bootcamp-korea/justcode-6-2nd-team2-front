import React, { useState, useContext } from 'react';
import styled from 'styled-components';

import TabLeft from './TabLeft';
import TabRight from './TabRight';

const ContainerWrapper = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 300px;
  margin: 0;
  border: 3px solid #686571;
  border-radius: 10px;
  padding: 0;
`;

function Nav() {
  return (
    <>
      <ContainerWrapper>
        <TabLeft />
        <TabRight />
      </ContainerWrapper>
    </>
  );
}

export default Nav;
