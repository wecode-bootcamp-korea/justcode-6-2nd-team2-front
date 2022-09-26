import styled from 'styled-components';

function MovieFilter({ sort, setSort }) {
  return (
    <>
      <Filter
        onClick={() => {
          setSort(null);
        }}
      >
        {/* onClick={() => {
          setFilter(!filter);
          activeFilter();
        }}
      >
        {filter ? <span className='onLogo'>전체</span> : <span className='offLogo'>전체</span>}  */}
        <span className={sort === null ? 'onLogo' : 'offLogo'}>전체</span>
      </Filter>
      <Filter
        onClick={() => {
          // setDateOrder(!dateOrder);
          // activeDateOrder();
          setSort('date');
        }}
      >
        {sort === 'date' ? (
          <span className='onLogo'>개봉일순</span>
        ) : (
          <span className='offLogo'>개봉일순</span>
        )}
      </Filter>
      <Filter
        onClick={() => {
          // setAlphabeticalOrder(!alphabeticalOrder);
          // activeAlphabeticalOrder();
          setSort('title');
        }}
      >
        {sort === 'title' ? (
          <span className='onLogo'>가나다순</span>
        ) : (
          <span className='offLogo'>가나다순</span>
        )}
      </Filter>
    </>
  );
}

const Filter = styled.button`
  display: flex;
  align-items: center;
  padding: 0 6px 0 0;

  background-color: transparent;
  border: none;
  font-family: 'NanumBarunGothic';
  font-size: 15px;

  .onLogo {
    color: #006633;
    /* font-weight: 700; */
  }

  .offLogo {
    font-weight: 400;
  }

  &:hover {
    cursor: pointer;
  }
`;

export default MovieFilter;
