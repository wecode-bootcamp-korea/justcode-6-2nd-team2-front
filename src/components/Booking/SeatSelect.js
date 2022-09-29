import React, { createContext, useState, useContext, useEffect } from 'react';
import styled from 'styled-components';

import { CountContext, AllContext } from '../../pages/Booking/Booking';
import { ScheduleContext } from '../../pages/Router';

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

function SeatSelect() {
  const [initial, setInitial] = useState(false);

  const { scheduleId, setScheduleId } = useContext(ScheduleContext);

  const [data, setData] = useState();

  useEffect(() => {
    fetch(`http://localhost:10010/booking/schedule/${scheduleId}`, {
      method: 'get',
    })
      .then(res => res.json())
      .then(mock => {
        setData(mock.data[0]);
      });
  }, [scheduleId]);

  return (
    <>
      <Context.Provider value={{ initial, setInitial }}>
        <NavTitle />
        <ContainerWrapper>
          <Section>
            <SectionInner>
              <Title />
              <Count />
              <Screen data={data} />
            </SectionInner>
            <SectionInner2>
              <Result data={data} />
            </SectionInner2>
          </Section>
        </ContainerWrapper>
      </Context.Provider>
    </>
  );
}

export default SeatSelect;
export const InitialContext = Context;
