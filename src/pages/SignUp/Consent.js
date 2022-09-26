import { useState } from 'react';
import Issue from '../../components/Signup/Issue';
import styles from './Consent.module.scss';

function Consent() {
  const issue = [...Array(5).keys()]; //체크박트 컴포넌트와 함께 box map돌리기
  const [checkedItems, setCheckedItems] = useState(new Set());
  const [isAllChecked, setIsAllChecked] = useState(false);

  const checkItemHandler = (id, isChecked) => {
    if (isChecked) {
      checkedItems.add(id);
      setCheckedItems(checkedItems);
    } else if (!isChecked && checkedItems.has(id)) {
      checkedItems.delete(id);
      setCheckedItems(checkedItems);
    }
  };

  const allCheckedHandler = isChecked => {
    if (isChecked) {
      setCheckedItems(new Set(id => id));
      setIsAllChecked(true);
    } else {
      checkedItems.clear();
      setCheckedItems(setCheckedItems);
      setIsAllChecked(false);
    }
  };

  return (
    <div className={styles.authContainer}>
      <div className={styles.content}>
        <h1 className={styles.title}>약관동의 및 정보활용동의</h1>
        <p className={styles.titleText}>스타박스 서비스 이용을 위한 약관에 동의해주세요.</p>
        <div className={styles.boxContent}>
          <input type='checkbox' onChange={allCheckedHandler} />
          <span>필수항목 전체동의</span>
        </div>
        <div>
          <div className={styles.consentBox}>
            {/* <input type='checkbox' /> */}
            <Issue checkItemHandler={checkItemHandler} isAllChecked={isAllChecked} />
            <span className={styles.boxTitle} style={{ color: '#036635' }}>
              서비스 이용 약관 동의(필수)
            </span>
            <div className={styles.contentBox}>
              <div className={styles.borderBox}>
                <p className={styles.boxText}>제 1조.목적</p>
                <p className={styles.boxText}>
                  본 약관은 스타박스중앙(주)(이하 "회사"라 합니다)가 제공하는 온라인,오프라인
                  서비스(이하 "서비스"라 합니다) 이용과 관련하여 회사와 이용자의 권리, 의무 및
                  책임사항을 규정함을 목적으로 합니다.
                </p>
                <p className={styles.boxText}>제 2조. 약관의 효력 및 변경</p>
                <p className={styles.boxText}>
                  1. 본 약관은 서비스를 이용하고자 본 약관에 동의한 모든 회원에 대하여 그 효력을
                  발생합니다. 2. 본 약관의 내용은 회원(서비스)가입 시 게재되거나 공지된 내용에
                  회원이 동의함으로써 그 효력이 발생합니다. 3. 회사는 합리적인 사유가 발생될 경우 본
                  약관을 변경(수정 또는 개정)할 수 있으며, 약관을 개정할 경우 회사는 시행일 및 개정
                  사유를 명시하여 현행 약관과 함께 시행일로부터 최소 7일 전, 고객에게 불리하게
                  변경되거나 중요한 내용인 경우에는 최소 30일 전에 회사의 웹사이트 또는 전자메일
                  등을 통해 공지합니다. 4. 회원은 변경된 약관에 동의하지 않을 경우 회원 탈퇴를
                  요청할 수 있으며, 변경된 약관의 효력 발생일 이후 탈퇴 요청을 하지 않을 경우 약관의
                  변경 사항에 동의한 것으로 간주됩니다.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.consentBox}>
            {/* <input type='checkbox' /> */}
            <Issue checkItemHandler={checkItemHandler} />
            <span className={styles.boxTitle} style={{ color: '#036635' }}>
              개인정보 수집 및 이용 동의(필수)
            </span>
            <div className={styles.contentBox}>
              <div className={styles.borderBox}>
                <p className={styles.boxText}>제1조</p>
                <p className={styles.boxText}>
                  스타박스중앙(주)(이하"회사")는 다음의 목적을 위하여 개인정보를 처리합니다.
                  처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이
                  변경되는 경우에는 개인정보 보호법 제 18조에 따라 별도의 동의를 받는 등 필요한
                  조치를 이행할 예정입니다.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.consentBox}>
            <input type='checkbox' />{' '}
            <span className={styles.boxTitle} style={{ color: '#036635' }}>
              마케팅 활용을 위한 개인정보 수집 이용 안내(선택)
            </span>
            <div className={styles.contentBox}>
              <div className={styles.borderBox}>
                <p className={styles.boxText}>선택 입력(수집) 항목</p>
                <p className={styles.boxText}>
                  구분 항목 이용 목적 고객 맞춤형 상품 및 서비스 추천 등 마케팅 정보 이메일,
                  휴대폰번호, 주소, 생년월일, 선호영화관, 선호장르, 선호시간대, 문자/이메일/앱푸쉬
                  정보 수신 동의 여부, 서비스 이용 기록, 포인트 적립 및 사용 정보, 접속 로그, 프로필
                  사진, 본인 갤러리 사진 정보 고객 맞춤형 상품 및 서비스 추천, 당사 신규 상품 /
                  서비스 안내 및 권유, 사은/할인 행사 등 각종 이벤트 정보 등의 안내 및 권유 마케팅
                  홍보 등을 위한 고객 분석, 혜택 및 서비스 개발을 위한 고객 통계 분석 및 연구 조사
                  신규 서비스 개발 및 맞춤 서비스 제공 개인 프로필 설정 / 포토카드 서비스 이용 위치
                  정보 활용 모바일 단말기 기기 정보 위치 정보 서비스 기반 기록 활용 및 서비스 혜택
                  안내- 해당 정보는 자료 수집 시점에 별도 동의를 받으며, 동의를 받은 기간 까지만
                  보관 후 안전한 방법으로 파기 합니다.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.consentBox}>
            <input type='checkbox' />{' '}
            <span className={styles.boxTitle} style={{ color: '#036635' }}>
              위치기반서비스 이용 약관 동의(선택)
            </span>
            <div className={styles.contentBox}>
              <div className={styles.borderBox}>
                <p className={styles.boxText}>제 1조.목적</p>
                <p className={styles.boxText}>
                  본 약관은 스타박스중앙(주)(이하 "회사"라 합니다)가 제공하는 온라인,오프라인
                  서비스(이하 "서비스"라 합니다) 이용과 관련하여 회사와 이용자의 권리, 의무 및
                  책임사항을 규정함을 목적으로 합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Consent;
