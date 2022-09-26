import React from 'react';
import styled from 'styled-components';

import DiscountOne from './DiscountOne';
import Title2 from './Title2.js';

const Container = styled.div`
  display: block;
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
`;

function DiscountList() {
  return (
    <>
      <Container>
        <div>
          <ul>
            <DiscountOne type='coupon' />
            <DiscountOne type='ticket' />
            <DiscountOne type='point' />
          </ul>
        </div>
      </Container>
    </>
  );
}

export default DiscountList;
