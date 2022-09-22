import React from 'react';
import styled from 'styled-components';

import NavTitle from './Nav/NavTitle';
import Schedule from './Nav/Schedule';
import ReserveArea from './ReserveArea';

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
          <ReserveArea />
        </ContainerWrapper>
      </div>
    </>
  );
}

export default MovieSelect;
