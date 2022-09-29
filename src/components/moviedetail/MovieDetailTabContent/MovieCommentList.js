import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { HiOutlinePencilAlt } from 'react-icons/hi';
import { TbTrash } from 'react-icons/tb';
import SelectBox from '../SelectBox';
const LOGIN_TOKEN = 'login-token';
function MovieCommentList() {
  const [movieList, setMovieList] = useState();
  const [view, setView] = useState(false);
  const [value, setValue] = useState();
  const [rates, setRates] = useState();
  const [option, setOption] = useState();
  const [input, setInput] = useState();
  const [movieId, setMovieId] = useState();
  console.log(movieList);

  useEffect(() => {
    fetch(`http://localhost:10010/movie/detail/1`)
      .then(res => res.json())
      .then(res => {
        setMovieList(res.data);
        setMovieId(res.data[0].movie_id);
      });
  }, [view]);

  const rate = [
    { id: 1, label: '1점', value: '1' },
    { id: 2, label: '2점', value: '2' },
    { id: 3, label: '3점', value: '3' },
    { id: 4, label: '4점', value: '4' },
    { id: 5, label: '5점', value: '5' },
    { id: 6, label: '6점', value: '6' },
    { id: 7, label: '7점', value: '7' },
    { id: 8, label: '8점', value: '8' },
    { id: 9, label: '9점', value: '9' },
    { id: 10, label: '10점', value: '10' },
  ];
  const options = [
    { id: 1, label: '연출', value: '1' },
    { id: 2, label: '배우', value: '2' },
    { id: 3, label: 'ost', value: '3' },
    { id: 4, label: '스토리', value: '4' },
    { id: 5, label: '영상미', value: '5' },
  ];
  const viewComment = () => {
    setView(!view);
  };
  // // 댓글 POST
  const addComment = () => {
    const token = localStorage.getItem(LOGIN_TOKEN);

    // if (!token) {
    //   alert('로그인 후 이용해주세요');
    //   return;
    // }

    const body = {
      movie_id: movieId,
      account_id: 'roy2',
      rate: rates,
      content: input,
      option_id: option,
    };
    console.log(body);
    fetch(`http://localhost:10010/review/create`, {
      method: 'POST',
      headers: {
        token: token,
        'Content-type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then(res => res.json())
      .then(res => setView(!view));
  };

  // 댓글 DELETE
  const DeleteComment = () => {
    alert('삭제하시겠습니까 ?');
    // const token = localStorage.getItem(LOGIN_TOKEN);
    // fetch(`http://localhost:10010/review/delete`, {
    //   method: 'DELETE',
    //   headers: {
    //     token: token,
    //     'Content-type': 'application/json',
    //   },
    //   body: JSON.stringify(body),
    // });
    // .then(res => res.json())
    // .then(res => res.data)
  };

  return (
    <>
      <CommentWrap>
        {movieList &&
          movieList.map((item, idx) => {
            return (
              <CommentTitle key={idx}>
                {item.title}에 대한 <span> {item.reviews.length} </span>개의 이야기가 있어요!
              </CommentTitle>
            );
          })}{' '}
        {movieList && (
          <>
            <CommentBox>
              <UserImg>
                <img
                  src='https://img.megabox.co.kr/static/pc/images/common/ico/ico-mega-profile.png'
                  alt='STARBOX'
                />
                <p>STARBOX</p>
              </UserImg>

              <UserBox>
                {view ? (
                  <>
                    <UserInput>
                      <SelectBox placeholder='옵션' items={options} setValue={setOption} />
                      <SelectBox placeholder='평점' items={rate} setValue={setRates} />
                      <InputBox
                        type='text'
                        placeholder='관람평을 입력해주세요'
                        onChange={e => setInput(e.target.value)}
                      />
                    </UserInput>
                    {/*등록 */}
                    <PostBtn onClick={addComment}>
                      <HiOutlinePencilAlt size='20' color='#666' />
                      등록
                    </PostBtn>
                  </>
                ) : (
                  <>
                    <div>재미있게 보셨나요? 영화의 어떤 점이 좋았는지 이야기해주세요.</div>
                    <PostBtn onClick={viewComment}>
                      <>
                        <HiOutlinePencilAlt size='20' color='#666' />
                        관람평쓰기
                      </>
                    </PostBtn>
                  </>
                )}
              </UserBox>
            </CommentBox>

            <ul>
              {movieList[0].reviews &&
                movieList[0].reviews.map(item => {
                  return (
                    <li key={item.id}>
                      <CommentAnswer>
                        <UserImg>
                          <img
                            src='https://img.megabox.co.kr/static/pc/images/mypage/bg-photo.png'
                            alt='userid'
                          />
                          <p>{item.account_id}</p>
                        </UserImg>

                        <CommentItem>
                          <CommTit>관람평</CommTit>
                          <CommContent>
                            <CommPoint>{item.rate}</CommPoint>
                            <CommRecommend>{item.options}</CommRecommend>
                            <CommTxt>{item.content}</CommTxt>
                            <CommUtil>
                              <DeleteBtn onClick={DeleteComment}>
                                <TbTrash size='20' color='#666' />
                              </DeleteBtn>
                            </CommUtil>
                          </CommContent>
                        </CommentItem>
                      </CommentAnswer>
                      <CommTime>방금</CommTime>
                    </li>
                  );
                })}
            </ul>
          </>
        )}
      </CommentWrap>
    </>
  );
}
const CommentWrap = styled.div`
  margin-bottom: 20px;
`;
const CommentTitle = styled.div`
  color: #006633;
  font-size: 22px;
  margin-bottom: 15px;
  margin-top: 40px;
`;
const CommentBox = styled.div`
  display: flex;
  margin-bottom: 20px;
`;
const UserBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  width: 100%;
  border: 1px solid #eaeaea;
  border-radius: 0 10px 10px 10px;
`;
const UserInput = styled.div`
  display: flex;
`;
const InputBox = styled.input`
  width: 300px;
`;
const PostBtn = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: #fff;
  color: #666;
  font-size: 15px;
  cursor: pointer;
`;
const CommentAnswer = styled.div`
  display: flex;
`;
const CommentItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 0 10px 10px 10px;
  background-color: #f8f8fa;
  color: #006633;
`;
const CommTit = styled.div`
  width: 105px;
  text-align: center;
  font-size: 15px;
  font-weight: 500;
`;
const CommContent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;
const CommPoint = styled.div`
  width: 90px;
  font-size: 36px;
  text-align: center;
  font-weight: 300;
`;
const CommRecommend = styled.div`
  width: 85px;
  text-align: center;
  padding-right: 20px;
`;

const CommTxt = styled.div`
  position: relative;
  color: #666;
  padding: 0 20px 0 30px;
  width: 100%;
  &:before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 50%;
    width: 1px;
    height: 50px;
    margin-top: -25px;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const CommUtil = styled.div`
  width: 40px;
`;
const DeleteBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
const CommTime = styled.div`
  text-align: right;
  padding-top: 10px;
  font-size: 14px;
`;

//공통
const UserImg = styled.div`
  text-align: center;
  width: 100px;
		img {
			width: 50px;
			height: 50px;
		}
	}
`;
export default MovieCommentList;
