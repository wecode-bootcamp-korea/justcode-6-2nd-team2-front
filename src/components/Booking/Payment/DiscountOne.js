import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import DiscountOne from './DiscountOne';

const Li = styled.li`
  list-style-type: none;
  display: list-item;
  text-align: -webkit-match-parent;
  box-sizing: border-box;
  margin-top: 10px;
`;

const Tit = styled.a`
  border: 1px solid #f2f4f5;
  background-color: #f2f4f5;

  ${props => {
    if (props.img) {
      return css`
        border: 1px solid #f2f4f5;
        background-color: #f2f4f5;
      `;
    } else if (!props.img) {
      return css`
        border: 1px solid #d8d9db;
        background-color: transparent;
      `;
    }
  }}

  display: block;
  height: 40px;
  padding: 0 0 0 20px;
  font-size: 1.0667em;
  font-weight: 700;
  color: #444;
  border-radius: 3px;
  line-height: 40px;
`;

const I = styled.i`
  background: ${props => {
    if (props.imge) {
      return 'URL(https://img.megabox.co.kr/static/pc/images/common/ico/ico-upper-arrow.png) no-repeat';
    } else if (!props.imge) {
      return 'URL(https://img.megabox.co.kr/static/pc/images/common/ico/ico-btn-more-arr.png) no-repeat';
    }
  }};
  background-position: center;
  float: right;
  width: 40px;
  height: 40px;
`;

const PointList = styled.div`
  display: block;
  padding-bottom: 120px;
`;

const ListOne = styled.div`
  width: 185px;
  position: relative;
  float: left;
  display: block;
  height: 46px;
  margin: 11px 0 0 10px;
  padding: 0;
  background-color: #fff;
  button {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    padding: 11px 18px;
    text-align: left;
    border: 1px solid #ebebeb;
    background-color: #fff;
    cursor: pointer;
  }
`;

function DiscountList({ type }) {
  const [on, setOn] = useState(false);

  return (
    <>
      <Li>
        <Tit img={on ? true : false}>
          {type === 'coupon' && '메가박스 포인트/쿠폰'}
          {type === 'ticket' && '관람권/모바일상품권'}
          {type === 'point' && '제휴포인트'}
          <I imge={on ? true : false} onClick={() => setOn(!on)} style={{ cursor: 'pointer' }} />
        </Tit>

        {on && (
          <PointList>
            <div style={{ margin: '0 0 0 -10px' }}>
              {type === 'coupon' && (
                <>
                  <ListOne>
                    <button>메가박스 멤버십 포인트</button>
                  </ListOne>
                  <ListOne>
                    <button>메가박스 할인쿠폰</button>
                  </ListOne>
                  <ListOne>
                    <button>메가박스 VIP영화쿠폰</button>
                  </ListOne>
                </>
              )}
              {type === 'ticket' && (
                <>
                  <ListOne>
                    <button>메가박스 관람권</button>
                  </ListOne>
                  <ListOne>
                    <button>메가박스/페이즈 금액권</button>
                  </ListOne>
                  <ListOne>
                    <button>스토어교환권</button>
                  </ListOne>
                  <ListOne>
                    <button>모바일 관람권</button>
                  </ListOne>
                  <ListOne>
                    <button>도서문화상품권</button>
                  </ListOne>
                  <ListOne>
                    <button>컬처랜드 모바일 상품권</button>
                  </ListOne>
                  <ListOne>
                    <button>플래티넘/스타카드</button>
                  </ListOne>
                  <ListOne>
                    <button>메가박스 아너스카드</button>
                  </ListOne>
                </>
              )}
              {type === 'point' && (
                <>
                  <ListOne>
                    <button>OK 캐쉬백</button>
                  </ListOne>
                  <ListOne>
                    <button>L.POINT</button>
                  </ListOne>
                  <ListOne>
                    <button>해피포인트</button>
                  </ListOne>
                  <ListOne>
                    <button>현대 M 포인트 카드</button>
                  </ListOne>
                  <ListOne>
                    <button>블루멤버스 포인트</button>
                  </ListOne>
                  <ListOne>
                    <button>중앙멤버십</button>
                  </ListOne>
                  <ListOne>
                    <button>해피머니상품권 해피캐시</button>
                  </ListOne>
                  <ListOne>
                    <button>문화누리카드</button>
                  </ListOne>
                </>
              )}
            </div>
          </PointList>
        )}
      </Li>
    </>
  );
}

export default DiscountList;
