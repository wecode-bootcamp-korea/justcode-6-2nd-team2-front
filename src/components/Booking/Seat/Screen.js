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

const ExitImage = styled.img`
  position: absolute;
  left: 157px;
  top: 67px;
  width: 16px;
  height: 16px;
`;

function Screen() {
  const [total, setTotal] = useState(280);
  const [row, setRow] = useState([]);

  useEffect(() => {
    let alpha = [];
    for (let i = 65; i < 65 + Math.ceil(total / 20); i++) {
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
            <ExitImage src='https://www.megabox.co.kr/static/pc/images/reserve/img-door-left.png' />
            <div>
              {row.map((el, index) => {
                if (row.length - 1 === index) {
                  return (
                    <ScreenRow
                      key={el}
                      alpha={el}
                      index={index + 2}
                      last={total % 20 === 0 ? 20 : total % 20}
                    />
                  );
                }

                if (index < 4) {
                  return <ScreenRow key={el} alpha={el} index={index} last={-1} />;
                } else {
                  return <ScreenRow key={el} alpha={el} index={index + 1} last={-1} />;
                }
              })}
            </div>
          </LayoutInner>
        </Layout>
      </Container>
    </>
  );
}

export default Screen;
