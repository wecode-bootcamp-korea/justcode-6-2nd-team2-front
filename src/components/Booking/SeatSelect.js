import React from 'react';
import styled from 'styled-components';

import NavTitle from './Nav/NavTitle';
import Title from './Seat/Title';
import Count from './Seat/Count';
import Screen from './Seat/Screen';

const ContainerWrapper = styled.div`
  width: 1100px;
  margin: 0 auto;
  padding: 0;
`;
const Section = styled.div`
  position: relative;
`;

const SectionInner = styled.div`
  float: left;
  width: 770px;
  height: 556px;
  border-top: 1px solid #000;
  background-color: #fff;
`;
function SeatSelect() {
  return (
    <>
      <NavTitle />
      <ContainerWrapper>
        <Section>
          <SectionInner>
            <Title />
            <Count />
            <Screen />
          </SectionInner>
        </Section>
      </ContainerWrapper>
    </>
  );
}

export default SeatSelect;
