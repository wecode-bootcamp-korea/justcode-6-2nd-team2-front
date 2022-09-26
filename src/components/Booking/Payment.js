import React from 'react';
import styled from 'styled-components';

import NavTitle from './Nav/NavTitle';
import Title from './Payment/Title';
import DiscountList from './Payment/DiscountList';
import Result from './Payment/Result';

const ContainerWrapper = styled.div`
  width: 1100px;
  margin: 0 auto;
  padding: 0;
`;

const Section = styled.div`
  position: relative;
`;

const SectionInner1 = styled.div`
  float: left;
  width: 770px;
  height: auto;
  min-height: 556px;
  border-top: 1px solid #000;
  background-color: #fff;
`;

const SectionInner2 = styled.div`
  position: absolute;
  left: 770px;
  top: 0;
  width: 310px;
  height: 556px;
  margin-left: 20px;
  color: #fff;
  background-color: #333;
  border-radius: 10px;
`;

function Payment() {
  return (
    <>
      <NavTitle />
      <ContainerWrapper>
        <Section>
          <SectionInner1>
            <Title />
            <DiscountList />
          </SectionInner1>
          <SectionInner2>
            <Result />
          </SectionInner2>
        </Section>
      </ContainerWrapper>
    </>
  );
}

export default Payment;
