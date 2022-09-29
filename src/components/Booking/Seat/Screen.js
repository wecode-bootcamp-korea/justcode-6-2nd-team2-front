import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';

import { CountContext, AllContext } from '../../../pages/Booking/Booking';
import { ScheduleContext } from '../../../pages/Router';

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

function Screen({ data }) {
  const [total, setTotal] = useState(0);
  const [row, setRow] = useState([]);

  useEffect(() => {
    if (data) {
      let alpha = [];
      for (let i = 65; i < 65 + Math.ceil(data.total_seat / 20); i++) {
        alpha.push(String.fromCharCode(i));
      }
      console.log(data);
      setRow(row.concat(alpha));
      setTotal(data.total_seat);
    }
  }, [data]);
  return (
    <>
      <Container>
        <Layout>
          <LayoutInner>
            <TopImage src='https://www.megabox.co.kr/static/pc/images/reserve/img-theater-screen.png' />
            <ExitImage src='https://www.megabox.co.kr/static/pc/images/reserve/img-door-left.png' />
            <div>
              {total !== 0 && (
                <>
                  {row.map((el, index) => {
                    if (row.length - 1 === index) {
                      return (
                        <ScreenRow
                          key={el}
                          alpha={el}
                          index={index + 2}
                          last={total % 20 === 0 ? 20 : total % 20}
                          booked={data.booked_seat_list}
                        />
                      );
                    }

                    if (index < 4) {
                      return (
                        <ScreenRow
                          key={el}
                          alpha={el}
                          index={index}
                          last={-1}
                          booked={data.booked_seat_list}
                        />
                      );
                    } else {
                      return (
                        <ScreenRow
                          key={el}
                          alpha={el}
                          index={index + 1}
                          last={-1}
                          booked={data.booked_seat_list}
                        />
                      );
                    }
                  })}
                </>
              )}
            </div>
          </LayoutInner>
        </Layout>
      </Container>
    </>
  );
}

export default Screen;
