import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ListTheaterOne from './ListTheaterOne';

const BtnTab = styled.button`
  display: block;
  position: relative;
  left: 0;
  top: 0;
  z-index: 2;
  height: 30px;
  font-size: 0.9333em;
  color: #222;
  border: 1px solid #d9d8dd;
  border-right: 1px solid #555;
  width: 155px;
  border-color: #666;
  border-bottom: 0;
  background-color: #fff;
`;

const BtnTabOn = styled.button`
  left: 175px;
  width: 148px;
  border-left: 0;
  display: block;
  position: absolute;
  top: 38px;
  z-index: 2;
  height: 30px;
  font-size: 0.9333em;
  color: #222;
  border: none;
  border-bottom: 1px solid #666;
  background-color: #fff;
`;

const List = styled.div`
  display: block;
  width: 100%;
  height: 320px;
  margin-top: 10px;
`;

const ListWrapper = styled.div`
  overflow: hidden;
  display: block;
  width: 100%;
  height: 100%;
`;

const InnerWrapper = styled.div`
  position: relative;
  overflow: hidden;
  height: 100%;
  max-width: 100%;
  outline: 0;
  direction: ltr;
  max-height: none;
  margin-right: 5px;
`;

const Ul = styled.ul`
  position: relative;
  height: 100%;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const ViewArea = styled.div`
  width: 100%;
  padding: 0;
`;

const PictureList = styled.div`
  overflow: hidden;
  margin: 22px 0 0 0;
`;

const Bg = styled.div`
  overflow: visible;
  display: table;
  table-layout: fixed;
  float: left;
  width: 90px;
  height: 90px;
  background: url(https://img.megabox.co.kr/static/pc/images/reserve/bg-empty-cell-circle.png)
    no-repeat center;
`;

const Wrap = styled.div`
  display: table-cell;
  position: relative;
  width: 90px;
  height: 90px;
  border-radius: 90px;
  vertical-align: middle;
  text-align: center;
  background-color: #ebebeb;
`;

const Ptxt = styled.div`
  display: inline-block;
  padding: 0 10px;
  color: #222;
  font-size: 0.8667em;
  letter-spacing: 0;
  margin: 0;
`;

const But = styled.button`
  display: block;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 2;
  width: 24px;
  height: 24px;
  font-size: 0;
  line-height: 0;
  background: url(https://img.megabox.co.kr/static/pc/images/reserve/btn-choice-dell-circle.png)
    no-repeat 0 0;
  margin: 0;
  padding: 0;
  border: 0;
  letter-spacing: -1px;
  cursor: pointer;
`;

const NoChoice = styled.div`
  overflow: hidden;
  width: 99%;
  height: 90px;
  margin: 10px 0 0 0;
  padding: 25px 0 0 0;
  font-size: 0.9333em;
  line-height: 1.3;
  text-align: center;
  border: 1px solid #ebebeb;
  background-color: #fff;
`;

const NoStrong = styled.strong`
  display: block;
  padding: 0;
  font-weight: 400;
`;

const NoSpan = styled.span``;

function ListMovie({ type }) {
  const [select, setSelect] = useState('');
  const [count, setCount] = useState(0);
  const [name, setName] = useState([]);
  const [data, setData] = useState([]);

  const reset = direct => {
    setSelect(direct);
  };

  useEffect(() => {
    fetch('./data/booking/theater.json', {
      method: 'get',
    })
      .then(res => res.json())
      .then(mock => {
        setData(mock.data);
      });
  }, []);

  return (
    <>
      <div>
        <div>
          <BtnTab>전체</BtnTab>
          <BtnTabOn />
        </div>
        <List>
          <ListWrapper>
            <InnerWrapper tabindex='0'>
              <Ul>
                {data.map(el => {
                  if (el === select) {
                    return (
                      <ListTheaterOne
                        key={el}
                        direct={el}
                        reset={reset}
                        select={true}
                        count={count}
                        setCount={setCount}
                        name={name}
                        setName={setName}
                        areaName={el.area_name}
                        theaterName={el.theater_name}
                      />
                    );
                  } else {
                    return (
                      <ListTheaterOne
                        key={el}
                        direct={el}
                        reset={reset}
                        select={false}
                        count={count}
                        setCount={setCount}
                        name={name}
                        setName={setName}
                        areaName={el.area_name}
                        theaterName={el.theater_name}
                      />
                    );
                  }
                })}
              </Ul>
            </InnerWrapper>
          </ListWrapper>
        </List>
        <ViewArea>
          {name.length === 0 && (
            <NoChoice>
              <NoStrong>전체극장</NoStrong>
              <NoSpan>목록에서 극장을 선택하세요.</NoSpan>
            </NoChoice>
          )}
          {name.length > 0 && (
            <PictureList>
              <Bg>
                {name[0] && (
                  <Wrap>
                    <Ptxt>
                      {name[0]}
                      <But>삭제</But>
                    </Ptxt>
                  </Wrap>
                )}
              </Bg>
              <Bg style={{ marginLeft: '16px' }}>
                {name[1] && (
                  <Wrap>
                    <Ptxt>
                      {name[1]}
                      <But>삭제</But>
                    </Ptxt>
                  </Wrap>
                )}
              </Bg>
              <Bg style={{ marginLeft: '16px' }}>
                {name[2] && (
                  <Wrap>
                    <Ptxt>
                      {name[2]}
                      <But>삭제</But>
                    </Ptxt>
                  </Wrap>
                )}
              </Bg>
            </PictureList>
          )}
        </ViewArea>
      </div>
    </>
  );
}

export default ListMovie;
