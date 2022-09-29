import React from 'react';
import styled from 'styled-components';

function SelectBox({ items, placeholder, value }) {
  const handleChange = e => {
    // event handler
    console.log(e.target.value);
  };
  return (
    <>
      <Select required onChange={handleChange}>
        <option disabled value={placeholder}>
          {placeholder}
        </option>
        {items.map((item, idx) => {
          return (
            <option key={idx} value={item.value}>
              {item.label}
            </option>
          );
        })}
      </Select>
    </>
  );
}
const Select = styled.select`
  padding: 5px;
  height: 45px;
  borderL 1px solid #d8d9db;
  margin-right: 20px;
`;
export default SelectBox;
