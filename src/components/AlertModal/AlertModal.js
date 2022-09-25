import styled from 'styled-components';

function AlertModal(props) {
  const { visible, text, onClose, confirmText, onConfirm } = props;
  if (!visible) return null;
  return (
    <>
      <Background />
      <Modal>
        <button className='x' onClick={onClose} />
        <div>
          <p>{text}</p>
          <button className='confirm' onClick={onConfirm}>
            {confirmText}
          </button>
        </div>
      </Modal>
    </>
  );
}

const Background = styled.div``;

const Modal = styled.div``;

export default AlertModal;
