import React, { useContext } from 'react';
import styled from 'styled-components';

import RightMovie from './RightMovie';
import RightTheater from './RightTheater';

import { OnOffContext } from '../../../pages/TimeTable/TimeTable';

const ContainerWrapper = styled.div`
  display: block;
`;

function TabRight() {
  const { navOn, setNavOn } = useContext(OnOffContext);

  return (
    <>
      <ContainerWrapper>
        {navOn === 'movie' && <RightMovie />}
        {navOn === 'theater' && <RightTheater />}
      </ContainerWrapper>
    </>
  );
}

export default TabRight;
