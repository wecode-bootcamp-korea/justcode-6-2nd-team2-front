import React, { createContext, useState } from 'react';
import styled from 'styled-components';

import NavTitle from './Nav/NavTitle';
import Title from './Payment/Title';
import DiscountList from './Payment/DiscountList';
import Result from './Payment/Result';
import Credit from './Payment/Credit';
import Title2 from './Payment/Title2';

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

const Context4 = createContext({
  means: 'credit',
  setMeans: () => {},
});

function Payment() {
  const [means, setMeans] = useState('credit');

  return (
    <>
      <Context4.Provider value={{ means, setMeans }}>
        <NavTitle />
        <ContainerWrapper>
          <Section>
            <SectionInner1>
              <Title />
              <DiscountList />
              <Title2 />
              <Credit />
            </SectionInner1>
            <SectionInner2>
              <Result />
            </SectionInner2>
          </Section>
        </ContainerWrapper>
      </Context4.Provider>
    </>
  );
}

export default Payment;
export const CreditContext = Context4;
