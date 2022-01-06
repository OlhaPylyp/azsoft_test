import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import styles from './Modal.module.scss';

const modalRoot = document.querySelector('#modal-root');
const isMobile = window.screen.width < 400;

function Modal({ close, children }) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return function reset() {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = event => {
    if (event.code === 'Escape') {
      close();
    }
  };

  //   const backdropClick = e => {
  //     if (e.target !== e.currentTarget) {
  //       return;
  //     } else close();
  //   };
  return createPortal(
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        {children}
        <button
          className={styles.modal_closeButton}
          type="button"
          onClick={close}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            className={styles.modal_icon}
          >
            {isMobile ? (
              <path
                d="M14 1.5V4.5H2M2 4.5L5.5 1M2 4.5L5.5 8"
                stroke="black"
                strokeWidth="2"
              />
            ) : (
              <path d="M15.8333 5.3415L14.6583 4.1665L9.99998 8.82484L5.34164 4.1665L4.16664 5.3415L8.82498 9.99984L4.16664 14.6582L5.34164 15.8332L9.99998 11.1748L14.6583 15.8332L15.8333 14.6582L11.175 9.99984L15.8333 5.3415Z" />
            )}
          </svg>
        </button>
      </div>
    </div>,
    modalRoot,
  );
  //     <div className={styles.backdrop} onClick={backdropClick}>
  //       <div className={styles.modal}>
  // <button
  //   className={styles.modal_closeButton}
  //   type="button"
  //   onClick={close}
  // >
  //   <svg
  //     width="20"
  //     height="20"
  //     viewBox="0 0 20 20"
  //     className={styles.modal_icon}
  //   >
  //     {isMobile ? (
  //       <path
  //         d="M14 1.5V4.5H2M2 4.5L5.5 1M2 4.5L5.5 8"
  //         stroke="black"
  //         strokeWidth="2"
  //       />
  //     ) : (
  //       <path d="M15.8333 5.3415L14.6583 4.1665L9.99998 8.82484L5.34164 4.1665L4.16664 5.3415L8.82498 9.99984L4.16664 14.6582L5.34164 15.8332L9.99998 11.1748L14.6583 15.8332L15.8333 14.6582L11.175 9.99984L15.8333 5.3415Z" />
  //     )}
  //   </svg>
  // </button>

  //         <Link
  //           //   to={routes.register}
  //           className={styles.modal_button}
  //           onClick={close}
  //         >
  //           Yes
  //         </Link>
  //         <Link
  //           //   to={routes.register}
  //           className={styles.modal_button}
  //           onClick={close}
  //         >
  //           No
  //         </Link>
  //       </div>
  //     </div>,
  //     modalRoot,
  //   );
}

export default Modal;
