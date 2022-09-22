import React from 'react';
import styled from 'styled-components';

const Li = styled.li`
  border-top: 0;
  list-style-type: none;
  &:hover {
    background-color: #ebebeb;
  }
`;

const LiButton = styled.button`
  overflow: hidden;
  display: table;
  table-layout: fixed;
  width: 100%;
  padding: 0;
  margin: 0;
  border: 0;
  letter-spacing: -1px;
  background-color: transparent;
  cursor: pointer;
  text-transform: none;
  border-bottom: 1px solid #d8d9db;
`;

const Legend = styled.div`
  display: table-cell;
  width: 12px;
  height: 66px;
  padding: 10px 0 0 0;
  vertical-align: top;
`;

const Time = styled.span`
  display: table-cell;
  width: 60px;
  padding: 10px 0;
  text-align: left;
  vertical-align: top;
  letter-spacing: -1px;
`;
const Strong1 = styled.strong`
  display: block;
  font-size: 1.3em;
  font-weight: 700;
  text-align: left;
`;
const Em1 = styled.em`
  display: block;
  padding: 3px 0 0 0;
  font-size: 0.8667em;
  font-weight: 300;
  font-style: normal;
  text-align: left;
  letter-spacing: 0px;
`;
const Title = styled.span`
  display: table-cell;
  width: 275px;
  padding: 10px 0;
  text-align: left;
`;
const Strong2 = styled.span`
  display: block;
  font-weight: 400;
  padding: 0 5px 0 0;
  line-height: 1.3;
`;
const Em2 = styled.em`
  display: block;
  padding-top: 7px;
  font-size: 0.8em;
  font-style: normal;
  letter-spacing: 0px;
`;

const Info = styled.div`
  display: table-cell;
  width: 110px;
  padding: 0 5px 0 0;
  font-size: 0.8em;
  vertical-align: middle;
  text-align: right;
`;

const Theater = styled.span`
  overflow: hidden;
  display: block;
  padding: 0;
  line-height: 1.5;
`;

const Seat = styled.span`
  overflow: hidden;
  display: inline-block;
  width: 50px;
  height: 20px;
  padding: 0;
  letter-spacing: 0;
  text-align: center;
  border: 1px solid #f2f4f5;
  font-size: 1em;
`;

const Strong3 = styled.strong`
  display: inline-block;
  color: #01738b;
  line-height: 20px;
  vertical-align: middle;
  font-weight: 700;
  letter-spacing: 0;
  text-align: center;
`;

const Span = styled.span`
  display: inline-block;
  margin-top: 4px;
  padding: 0;
  font-size: 0.6em;
  color: #666;
  line-height: 1.1;
  vertical-align: top;
`;

const Em3 = styled.em`
  display: inline-block;
  color: #666;
  line-height: 20px;
  vertical-align: middle;
  font-style: normal;
`;

function MovieScheduleOne() {
  return (
    <>
      <Li>
        <LiButton>
          <Legend />
          <Time>
            <Strong1>20:00</Strong1>
            <Em1>~22:11</Em1>
          </Time>
          <Title>
            <Strong2>늑대사냥</Strong2>
            <Em2>2D</Em2>
          </Title>
          <Info>
            <Theater>
              강남
              <br />
              3관
            </Theater>
            <Seat>
              <Strong3>194</Strong3>
              <Span>/</Span>
              <Em3>232</Em3>
            </Seat>
          </Info>
        </LiButton>
      </Li>
    </>
  );
}

export default MovieScheduleOne;
