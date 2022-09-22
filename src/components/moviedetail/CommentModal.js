import React from 'react';
import styled from 'styled-components';
import { IoClose } from 'react-icons/io5';

function CommentModal({ onClose }) {
  return (
    <>
      <ModalWrap>
        <Modal>
          <TitleWrap>
            <Title>알림</Title>
            <CloseBtn onClick={onClose}>
              <IoClose size='30' />
            </CloseBtn>
          </TitleWrap>
          <Content>
            <input type='text' />
          </Content>
          <Bottom>
            <OkBtn onClick={onClose}>확인</OkBtn>
          </Bottom>
        </Modal>
      </ModalWrap>
    </>
  );
}
const ModalWrap = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1010;
  background-color: rgba(0, 0, 0, 0.65);
`;
const Modal = styled.div`
  background-color: white;
  width: 40%;
  width: 300px;
  height: 300px;
  overflow-y: auto;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1011;
`;
const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #006633;
  padding: 10px;
`;
const Title = styled.div`
  color: #fff;
`;
const CloseBtn = styled.button`
  display: flex;
  color: #fff;
  cursor: pointer;
  border: none;
  background-color: transparent;
`;
const Content = styled.div`
  text-align: center;
`;
const Bottom = styled.div`
  text-align: center;
`;
const OkBtn = styled.button`
  text-align: center;
  background-color: #006633;
  color: #fff;
  border: none;
  padding: 10px;
  cursor: pointer;
`;

export default CommentModal;
