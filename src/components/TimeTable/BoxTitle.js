import React, { useContext } from 'react';
import styled from 'styled-components';

import { MovieNameContext, TheaterNameContext } from '../../pages/TimeTable/TimeTable';

const Tit = styled.div`
  padding: 8px 0 41px 0;
`;

const Left = styled.h3`
  margin-top: 60px !important;
  padding: 0 0 16px 0;
  font-size: 1.6em;
  font-weight: 400;
  color: #503396;
  line-height: 44px;
  float: left;
`;

const Em = styled.em`
  color: #037b94 !important;
  font-style: normal;
`;

function Title() {
  const { theaterNames, setTheaterNames } = useContext(TheaterNameContext);
  const { movieName, setMovieName } = useContext(MovieNameContext);

  return (
    <>
      <Tit>
        <Left>
          <Em>{theaterNames ? theaterNames : movieName}</Em> &nbsp;상영시간표
        </Left>
      </Tit>
    </>
  );
}

export default Title;
