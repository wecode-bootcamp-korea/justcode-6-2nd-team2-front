import styled from 'styled-components';
import { CgSearch } from 'react-icons/cg';

function MovieSearch({
  search,
  onChangeSearch,
  onSearch,
  border,
  borderRadius,
  borderBottom,
  color,
  caretColor,
}) {
  return (
    <Search border={border} borderBottom={borderBottom} borderRadius={borderRadius}>
      <Input
        value={search}
        color={color}
        caretColor={caretColor}
        type='search'
        placeholder='영화명 검색'
        onKeyPress={e => {
          if (e.key === 'Enter') {
            onSearch(e.target.value);
          }
        }}
        onChange={e => onChangeSearch(e.target.value)}
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

  border: ${props => props.border};
  border-bottom: ${props => props.borderBottom};
  border-radius: ${props => props.borderRadius};
`;

const Input = styled.input`
  width: 100%;
  height: 34px;
  padding-left: 10px;

  background-color: transparent;
  border: 0;
  outline: none;

  color: ${props => props.color};
  caret-color: ${props => props.caretColor};
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
