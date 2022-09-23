import { useState } from 'react';
import styles from './Phone.module.scss';

function Phone() {
  return (
    <div className={styles.phoneContainer}>
      <div className={styles.phoneBox}>
        <input type='text' placeholder='휴대폰 번호 입력' /> <button>인증하기</button>
      </div>
    </div>
  );
}
export default Phone;
