import { useEffect, useState } from 'react';

function Issue({ checkItemHandler, isAllChecked }) {
  const [checked, setChecked] = useState();
  const [btnCheck, setBtnCheck] = useState(false);
  const checkHandler = ({ target }) => {
    setBtnCheck(!btnCheck);
    checkItemHandler(target.checked);
  };
  const allCheckedHandler = () => {
    setChecked(isAllChecked);
  };
  useEffect(() => allCheckedHandler(), [isAllChecked]);
  return (
    <>
      <input type='checkbox' checked={btnCheck} onChange={e => checkHandler(e)} />
    </>
  );
}
export default Issue;
