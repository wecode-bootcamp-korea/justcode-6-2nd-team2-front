import React from 'react';
import styled from 'styled-components';

const MovieOptions = styled.div`
  width: 100%;
  overflow: hidden;
  margin-bottom: 20px !important;
  margin-top: 50px;
`;

const Option = styled.div`
  float: left;
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  li {
    float: left;
    margin-right: 15px;
    line-height: 1em;
    display: list-item;
  }
  i {
    margin-right: 5px;
    margin-top: -3px;
    width: 12px;
    height: 12px;
    overflow: hidden;
    display: inline-block;
    padding: 0;
    font-size: 0;
    line-height: 0;
    vertical-align: middle;
    background-position: 0 0;
    background-repeat: no-repeat;
  }
`;

function MovieOption() {
  return (
    <>
      <MovieOptions>
        <Option>
          <ul>
            <li>
              <i
                title='조조'
                style={{
                  backgroundImage:
                    'url(https://img.megabox.co.kr/static/pc/images/common/ico/ico-greeting-option-sun.png)',
                }}
              ></i>
              조조
            </li>
            <li>
              <i
                title='브런치'
                style={{
                  backgroundImage:
                    'url(https://img.megabox.co.kr/static/pc/images/common/ico/ico-time-brunch.png)',
                }}
              ></i>
              브런치
            </li>
            <li>
              <i
                title='심야'
                style={{
                  backgroundImage:
                    'url(https://img.megabox.co.kr/static/pc/images/common/ico/ico-greeting-option-moon.png)',
                }}
              ></i>
              심야
            </li>
          </ul>
        </Option>
      </MovieOptions>
    </>
  );
}

export default MovieOption;
