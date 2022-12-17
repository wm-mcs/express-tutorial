import { createPortal } from 'react-dom';

import './Modal.scss';

const modalElement = document.getElementById('portal');

const Modal = ({ setIsOpen, children }) => {
  const close = (e) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };
  return createPortal(
    <div className="modal" onClick={(e) => close(e)}>
      <div className="modal__content">{children}</div>
    </div>,
    modalElement
  );
};

export default Modal;
