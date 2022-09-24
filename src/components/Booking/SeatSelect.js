import React, { createContext, useState } from 'react';
import styled from 'styled-components';

import NavTitle from './Nav/NavTitle';
import Title from './Seat/Title';
import Count from './Seat/Count';
import Screen from './Seat/Screen';
import Result from './Seat/Result';

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

const SectionInner2 = styled.div`
  position: absolute;
  left: 770px;
  top: 0;
  width: 310px;
  height: 602px;
  margin-left: 20px;
  color: #fff;
  background-color: #333;
  border-radius: 10px;
`;

const Context = createContext({
  initial: false,
  setInitial: () => {},
});

const Context2 = createContext({
  adultNum: 0,
  setAdultNum: () => {},
  teenNum: 0,
  setTeenNum: () => {},
});

function SeatSelect() {
  const [initial, setInitial] = useState(false);
  const [adultNum, setAdultNum] = useState(0);
  const [teenNum, setTeenNum] = useState(0);

  return (
    <>
      <Context.Provider value={{ initial, setInitial }}>
        <Context2.Provider value={{ adultNum, setAdultNum, teenNum, setTeenNum }}>
          <NavTitle />
          <ContainerWrapper>
            <Section>
              <SectionInner>
                <Title />
                <Count />
                <Screen />
              </SectionInner>
              <SectionInner2>
                <Result />
              </SectionInner2>
            </Section>
          </ContainerWrapper>
        </Context2.Provider>
      </Context.Provider>
    </>
  );
}

export default SeatSelect;
export const InitialContext = Context;
export const CountContext = Context2;
