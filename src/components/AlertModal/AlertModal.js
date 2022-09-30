import styled from 'styled-components';
import { IoClose } from 'react-icons/io5';

function AlertModal(props) {
  const { visible, onClose, modalTitle, text, confirmText } = props;
  if (!visible) return null;
  return (
    <>
      <Modal>
        <div className='modalWrap'>
          <div className='modalHeader'>
            <div className='title'>{modalTitle}</div>
            <button className='closeButton' onClick={onClose}>
              <IoClose />
            </button>
          </div>
          <div className='content'>
            <p className='alertText'>{text}</p>
            <div className='bottom'>
              <button className='confirmButton' onClick={onClose}>
                {confirmText}
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

const Modal = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  background-color: rgba(0, 0, 0, 0.6);
  z-index: 3;

  .modalWrap {
    display: flex;
    flex-direction: column;
    position: fixed;
    left: 50%;
    top: 50%;
    overflow-y: auto;
    transform: translate(-50%, -50%);
    width: 300px;

    background-color: white;
    z-index: 4;

    .modalHeader {
      display: flex;
      justify-content: space-between;
      align-items: center;

      background-color: #006633;

      .title {
        display: flex;
        padding: 10px 15px;
        color: #fff;
        font-size: 1.2em;
        line-height: 1.1;
      }

      .closeButton {
        background-color: transparent;
        border: none;
        font-size: 20px;
        color: #fff;

        &:hover {
          cursor: pointer;
        }
      }
    }

    .content {
      display: flex;
      flex-direction: column;
      padding: 20px 20px 0 20px;

      .bottom {
        display: flex;
        justify-content: center;
        align-items: center;

        text-align: center;
        padding: 15px 0 20px 0;

        .confirmButton {
          padding: 10px 15px;

          background-color: #006633;
          border: none;
          border-radius: 4px;

          color: #fff;

          &:hover {
            cursor: pointer;
          }
        }
      }
    }
  }
`;

export default AlertModal;
