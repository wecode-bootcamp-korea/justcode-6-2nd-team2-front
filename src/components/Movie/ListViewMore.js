import styled from 'styled-components';
import { IoIosArrowDown } from 'react-icons/io';

function ListViewMore({ onLoadMore }) {
  return (
    <ViewMore onClick={onLoadMore}>
      더보기 <IoIosArrowDown />
    </ViewMore>
  );
}
const ViewMore = styled.button`
  width: 100%;
  height: 40px;

  margin-top: 20px;

  border: 1px solid #eaeaea;
  background-color: transparent;
  color: #666;

  &:hover {
    cursor: pointer;
    border: 1px solid #666;
  }
`;
export default ListViewMore;
