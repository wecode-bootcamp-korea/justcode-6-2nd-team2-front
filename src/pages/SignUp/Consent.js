import styles from './Consent.module.scss';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
function Consent() {
  const navigate = useNavigate();
  const [check, setCheck] = useState([]); //list
  const [nextStep, setNextStep] = useState('button');

  //모두 선택시 전체체크박스 활성화
  const checkAll = e => {
    if (check.length === 5) {
      setNextStep('button');
    } else {
      setNextStep('nextBtn');
    }
    e.target.checked ? setCheck(['check1', 'check2', 'check3', 'check4', 'check5']) : setCheck([]);
  };

  //전체 선택 <=>해제
  const handlerCheck = e => {
    e.target.checked
      ? setCheck([...check, e.target.name])
      : setCheck(check.filter(el => el !== e.target.name));
  };
  //필수체크 해제 =>전체체크박스해제
  useEffect(() => {
    if (check.includes('check1') && check.includes('check2')) {
      setNextStep('nextBtn');
    } else {
      setNextStep('button');
    }
  }, [check]);

  //버튼활성화
  const nextClick = e => {
    e.preventDefault();
    if (nextStep === 'nextBtn') {
      navigate('/signup' + '/info');
    }
  };

  return (
    <div className={styles.authContainer}>
      <div className={styles.content}>
        <h1 className={styles.title}>약관동의 및 정보활용동의</h1>
        <p className={styles.titleText}>스타박스 서비스 이용을 위한 약관에 동의해주세요.</p>
        <div className={styles.boxContent}>
          <label>
            <input
              type='checkbox'
              checked={check.length === 5 ? true : false}
              onChange={checkAll}
            />
            {/* name으로 체크박스 통일 */}
            <span className={styles.contentTitle}>전체항목 동의</span>
          </label>
        </div>
        <div>
          <div className={styles.consentBox}>
            {/* 필수 */}
            <input
              name='check1'
              checked={check.includes('check1') ? true : false}
              type='checkbox'
              onChange={handlerCheck}
            />
            <span className={styles.boxTitle}>서비스 이용 약관 동의(필수)</span>
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
                  제 1조. 목적 본 약관은 회원(본 위치기반 서비스 이용 약관에 동의한 자를 말합니다.
                  이하 “회원”이라고 합니다.)이 메가박스중앙㈜(이하 “회사”라고 합니다)가 제공하는
                  위치기반 서비스(이하 “서비스”라고 합니다)를 이용함에 있어 회사와 회원의 권리·의무
                  및 책임사항을 규정함을 목적으로 합니다. 제 2조. 이용약관의 효력 및 변경 1. 이
                  약관은 회사에서 운영하는 홈페이지(www.megabox.co.kr, 이하 “홈페이지”라 함)에
                  온라인으로 공시함으로써 효력이 발생합니다. 이 약관에 동의하고 회원가입을 한 회원은
                  약관에 동의한 시점부터 동의한 약관의 적용을 받고 약관의 변경이 있을 경우에는
                  변경의 효력이 발생한 시점부터 변경된 약관의 적용을 받습니다. 2. 이 약관에 동의하는
                  것은 서비스 이용을 위한 위치정보를 수집할 수 있다는 내용을 포함하여 서비스의 이용
                  조건에 대한 동의 및 정기적으로 약관의 변경 사항을 확인하는 것에 동의하는 것을
                  의미합니다. 3. 회사는 위치정보의 보호 및 이용 등에 관한 법률, 콘텐츠산업 진흥법,
                  전자상거래 등에서의 소비자보호에 관한 법률, 소비자기본법 약관의 규제에 관한 법률
                  등 관련법령을 위배하지 않는 범위에서 본 약관을 개정할 수 있습니다. 4. 회사가
                  약관을 개정할 경우에는 기존약관과 개정약관 및 개정약관의 적용일자와 개정사유를
                  명시하여 기존 약관과 함께 그 적용일자 7일 전부터 적용일 이후 상당한 기간 동안
                  공지만을 하고, 개정 내용이 회원에게 불리하게 변경되거나 중요한 내용인 경우에는 그
                  적용일자 30일 전부터 적용일 이후 상당한 기간 동안 각각 이를 서비스 홈페이지에
                  게시하거나 회원에게 전자적 형태(전자우편, SMS 등)로 약관 개정 사실을 발송하여
                  고지합니다. 5. 회사가 전항에 따라 회원에게 통지하면서 공지 또는 공지·고지일로부터
                  개정약관 시행일 7일 후까지 거부 의사를 표시하지 아니하면 이용약관에 승인한 것으로
                  봅니다. 회원이 개정약관에 동의하지 않을 경우 회원은 이용계약을 해지할 수 있습니다.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.consentBox}>
            {/* 필수 */}
            <input
              name='check2'
              checked={check.includes('check2') ? true : false}
              type='checkbox'
              onChange={handlerCheck}
            />
            <span className={styles.boxTitle}>개인정보 수집 및 이용 동의(필수)</span>
            <div className={styles.contentBox}>
              <div className={styles.borderBox}>
                <p className={styles.boxText}>제1조</p>
                <p className={styles.boxText}>
                  스타박스중앙(주)(이하"회사")는 다음의 목적을 위하여 개인정보를 처리합니다.
                  처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이
                  변경되는 경우에는 개인정보 보호법 제 18조에 따라 별도의 동의를 받는 등 필요한
                  조치를 이행할 예정입니다.
                </p>
                <p className={styles.boxText}>
                  제 2조. 서비스내용변경 통지 등 1. 회사가 서비스 내용을 변경하거나 종료하는 경우
                  회사는 회원의 등록된 전자우편 주소 또는 통신 단말장치 등을 통하여 서비스 내용의
                  변경 사항 또는 종료를 통지할 수 있습니다. 2. 제1항의 경우 불특정 다수인을 상대로
                  통지를 함에 있어서는 회사의 홈페이지 공지사항을 통해 회원들에게 통지할 수
                  있습니다. 제 7조. 서비스이용의 제한 및 중지 1. 회사는 아래 각 호의 1에 해당하는
                  사유가 발생한 경우에는 회원의 서비스 이용을 제한하거나 중지시킬 수 있습니다. 1)
                  회원이 회사 서비스의 운영을 고의 또는 중과실로 방해하는 경우 2) 서비스용 설비
                  점검, 보수 또는 공사로 인하여 부득이한 경우 3) 전기통신사업법에 규정된
                  기간통신사업자가 전기통신 서비스를 중지했을 경우 4) 국가비상사태, 서비스 설비의
                  장애 또는 서비스 이용의 폭주 등으로 서비스 이용에 지장이 있는 때 5) 기타 중대한
                  사유로 인하여 회사가 서비스 제공을 지속하는 것이 부적당하다고 인정하는 경우 2.
                  회사는 전항의 규정에 의하여 서비스의 이용을 제한하거나 중지한 때에는 그 사유 및
                  제한기간 등을 회원에게 알려야 합니다. 제 8조. 개인위치정보의 이용 또는 제공 1.
                  회사는 개인위치정보를 이용하여 서비스를 제공하고자 하는 경우에는 미리 이용약관에
                  명시한 후 개인위치정보주체의 동의를 얻어야 합니다. 2. 회원 및 법정대리인의 권리와
                  그 행사방법은 제소 당시의 이용자의 주소에 의하며, 주소가 없는 경우에는 거소를
                  관할하는 지방법원의 전속관할로 합니다. 다만, 제소 당시 이용자의 주소 또는 거소가
                  분명하지 않거나 외국 거주자의 경우에는 민사소송법상의 관할법원에 제기합니다 3.
                  회사는 타사업자 또는 이용 고객과의 요금정산 및 민원처리를 위해 위치정보
                  이용·제공·사실 확인자료를 자동 기록·보존하며, 해당 자료는 6개월간 보관합니다. 4.
                  회사는 개인위치정보를 회원이 지정하는 제3자에게 제공하는 경우에는 개인위치정보를
                  수집한 당해 통신 단말장치로 매회 회원에게 제공받는 자, 제공일시 및 제공목적을 즉시
                  통보합니다. 단, 아래 각 호의 1에 해당하는 경우에는 회원이 미리 특정하여 지정한
                  통신 단말장치 또는 전자우편주소로 통보합니다. 1) 개인위치정보를 수집한 당해
                  통신단말장치가 문자, 음성 또는 영상의 수신기능을 갖추지 아니한 경우 2)
                  개인위치정보주체가 개인위치정보를 수집한 해당 통신단말장치 외의 통신단말장치 또는
                  전자우편주소 등으로 통보할 것을 미리 요청한 경우
                </p>
              </div>
            </div>
          </div>
          <div className={styles.consentBox}>
            {/* 선택 */}
            <input
              name='check3'
              checked={check.includes('check3') ? true : false}
              type='checkbox'
              onChange={handlerCheck}
            />
            <span className={styles.boxTitle}>
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
            {/* 선택 */}
            <input
              name='check4'
              checked={check.includes('check4') ? true : false}
              type='checkbox'
              onChange={handlerCheck}
            />
            <span className={styles.boxTitle}>위치기반서비스 이용 약관 동의(선택)</span>
            <div className={styles.contentBox}>
              <div className={styles.borderBox}>
                <p className={styles.boxText}>제 1조.목적</p>
                <p className={styles.boxText}>
                  본 약관은 스타박스중앙(주)(이하 "회사"라 합니다)가 제공하는 온라인,오프라인
                  서비스(이하 "서비스"라 합니다) 이용과 관련하여 회사와 이용자의 권리, 의무 및
                  책임사항을 규정함을 목적으로 합니다.
                </p>
                <p className={styles.boxText}>
                  제 12조. 위치정보관리책임자의 지정 1. 회사는 위치정보를 적절히 관리·보호하고
                  개인위치정보주체의 불만을 원활히 처리할 수 있도록 실질적인 책임을 질 수 있는
                  지위에 있는 자를 위치정보관리책임자로 지정해 운영합니다. 2. 위치정보관리책임자는
                  위치기반서비스를 제공하는 부서의 부서장으로서 구체적인 사항은 본 약관의 부칙에
                  따릅니다. 제 13조. 손해배상 1. 회사가 위치정보의 보호 및 이용 등에 관한 법률
                  제15조 내지 제26조의 규정을 위반한 행위로 회원에게 손해가 발생한 경우 회원은
                  회사에 대하여 손해배상 청구를 할 수 있습니다. 이 경우 회사는 고의, 과실이 없음을
                  입증하지 못하는 경우 책임을 면할 수 없습니다. 2. 회원이 본 약관의 규정을 위반하여
                  회사에 손해가 발생한 경우 회사는 회원에 대하여 손해배상을 청구할 수 있습니다. 이
                  경우 회원은 고의, 과실이 없음을 입증하지 못하는 경우 책임을 면할 수 없습니다. 제
                  14조. 면책 1. 회사는 다음 각 호의 경우로 서비스를 제공할 수 없는 경우 이로 인하여
                  회원에게 발생한 손해에 대해서는 책임을 부담하지 않습니다. 1) 천재지변 또는 이에
                  준하는 불가항력의 상태가 있는 경우 2) 서비스 제공을 위하여 회사와 서비스
                  제휴계약을 체결한 제3자의 고의적인 서비스 방해가 있는 경우 3) 회원의 귀책사유로
                  서비스 이용에 장애가 있는 경우 4) 제1호 내지 제3호를 제외한 기타 회사의
                  고의·과실이 없는 사유로 인한 경우 2. 회사는 서비스 및 서비스에 게재된 정보, 자료,
                  사실의 신뢰도, 정확성 등에 대해서는 보증을 하지 않으며 이로 인해 발생한 회원의
                  손해에 대하여는 책임을 부담하지 아니합니다. 제 15조. 규정의 준용 1. 본 약관은
                  대한민국법령에 의하여 규정되고 이행됩니다. 2. 본 약관에 규정되지 않은 사항에
                  대해서는 관련법령 및 상관습에 의합니다. 제 16조. 분쟁의 조정 및 기타 1. 회사는
                  위치정보와 관련된 분쟁에 대해 당사자간 협의가 이루어지지 아니하거나 협의를 할 수
                  없는 경우에는 위치정보의 보호 및 이용 등에 관한 법률 제28조 규정에 의한
                  방송통신위원회에 재정을 신청할 수 있습니다. 2. 회사 또는 고객은 위치정보와 관련된
                  분쟁에 대해 당사자간 협의가 이루어지지 아니하거나 협의를 할 수 없는 경우에는
                  개인정보보호법 제43조의 규정에 의한 개인정보분쟁조정위원회에 조정을 신청할 수
                  있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={nextClick}
        className={nextStep === 'nextBtn' ? `${styles.nextBtn}` : `${styles.button}`}
      >
        확인
      </button>
    </div>
  );
}
export default Consent;
