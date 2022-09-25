import Auth from './Auth';
import Complete from './Complete';
import Consent from './Consent';
import Info from './Info';

const SignupArr = [
  {
    id: 1,
    title: 'step1. 본인인증',
    url: '',
    content: <Auth />,
  },
  {
    id: 2,
    title: 'step2. 약관동의',
    url: '/consent',
    content: <Consent />,
  },
  {
    id: 3,
    title: 'step3. 정보입력',
    url: '/info',
    content: <Info />,
  },
  {
    id: 4,
    title: 'step4. 가입완료',
    url: '/complete',
    content: <Complete />,
  },
];
export default SignupArr;
