import { useRef } from 'react';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import { FaTimes } from 'react-icons/fa';

import './Modal.scss';

const modalElement = document.getElementById('portal');

const Modal = ({ isOpen, setIsOpen, children, title }) => {
  const nodeRef = useRef(null);

  const closeLayer = (e) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  return createPortal(
    <CSSTransition
      in={isOpen}
      nodeRef={nodeRef}
      timeout={300}
      classNames="modal"
      unmountOnExit
    >
      <div ref={nodeRef} className="modal" onClick={(e) => closeLayer(e)}>
        <div className="modal__content">
          <span
            onClick={() => setIsOpen(false)}
            className="modal__content__close-button"
          >
            <FaTimes />
          </span>

          {title && <div className="modal__content__title"> {title}</div>}

          <div className="modal__content__body">{children}</div>
        </div>
      </div>
    </CSSTransition>,
    modalElement
  );
};

export default Modal;
