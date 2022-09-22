import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import ScreenRow from './ScreenRow';

const Container = styled.div`
  position: relative;
  height: 500px;
  border: 1px solid #d8d9db;
  border-top: 0;
`;

const Layout = styled.div`
  width: 100%;
  padding: 30px 0;
`;

const LayoutInner = styled.div`
  width: 100%;
  height: 310px;
`;

const TopImage = styled.img`
  position: absolute;
  left: 62px;
  top: 40px;
`;

function Screen() {
  const [total, setTotal] = useState(360);
  const [row, setRow] = useState([]);

  useEffect(() => {
    let alpha = [];
    for (let i = 65; i < 65 + total / 20; i++) {
      alpha.push(String.fromCharCode(i));
    }

    setRow(row.concat(alpha));
  }, []);

  return (
    <>
      <Container>
        <Layout>
          <LayoutInner>
            <TopImage src='https://www.megabox.co.kr/static/pc/images/reserve/img-theater-screen.png' />
            <div>
              {row.map((el, index) => {
                console.log(1111);
                return <ScreenRow key={el} alpha={el} index={index} />;
              })}
            </div>
          </LayoutInner>
        </Layout>
      </Container>
    </>
  );
}

export default Screen;
