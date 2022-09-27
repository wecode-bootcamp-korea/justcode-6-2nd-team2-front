import styled from 'styled-components';
import { CgSearch } from 'react-icons/cg';

function MovieSearch({ search, onSearch }) {
  return (
    <Search>
      <Input
        type='search'
        placeholder='영화명 검색'
        onKeyPress={e => {
          if (e.key === 'Enter') {
            onSearch(e.target.value);
          }
        }}
      />
      <Button
        type='button'
        onClick={() => {
          onSearch(search);
        }}
      >
        <CgSearch className='icon' />
      </Button>
    </Search>
  );
}

const Search = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 230px;
  height: 36px;
  margin: 0;

  border: 1px solid #d8d9db;
  border-radius: 3px;
`;

const Input = styled.input`
  width: 100%;
  height: 34px;
  padding-left: 10px;

  background-color: transparent;
  border: 0;
  outline: none;
  caret-color: #000;
`;

const Button = styled.button`
  width: 30px;
  height: 32px;

  border: none;
  background-color: transparent;

  .icon {
    vertical-align: middle;
    background-color: transparent;
    text-align: center;
    font-size: 18px;
    color: gray;
  }

  &:hover {
    cursor: pointer;
  }
`;
export default MovieSearch;
