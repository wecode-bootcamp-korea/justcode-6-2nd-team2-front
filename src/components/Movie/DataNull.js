import styled from 'styled-components';
import Logo from '../../assets/starbox.png';

function DataNull() {
  return (
    <Null>
      <img alt='이미지' src={Logo} />
      <h4>현재 상영 중인 영화가 없습니다.</h4>
    </Null>
  );
}

const Null = styled.div`
  padding: 50px 0 0 0;

  color: #000;
  text-align: center;
  font-size: 1.3333em;

  width: 100%;
  padding: 50px 0;
  border: 1px solid #f5f5f5;
  border-width: 1px 0 1px 0;

  img {
    width: 200px;
  }
`;

export default DataNull;
