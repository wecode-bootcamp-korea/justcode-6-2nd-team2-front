import React from 'react';
import styled from 'styled-components';

import NavTitle from './NavTitle';
import Schedule from './Schedule';

const ContainerWrapper = styled.div`
  width: 1100px;
  margin: 0 auto;
  padding: 0;
`;

function MovieSelect() {
  return (
    <>
      <div>
        <NavTitle />
        <ContainerWrapper>
          <Schedule />
        </ContainerWrapper>
      </div>
    </>
  );
}

export default MovieSelect;
