import { GiPresent } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';
import styles from './Complete.module.scss';

function Complete() {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <GiPresent className={styles.icons} />
      <h1>스타박스 가입을 환영합니다.</h1>
      <p>이제부터 스타박스에서 제공하는 다양한 멤버십 혜택을 이용할 수 있습니다.</p>

      <button onClick={() => navigate('/main')}>가입완료</button>
    </div>
  );
}
export default Complete;
