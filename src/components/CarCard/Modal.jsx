/* eslint-disable react/prop-types */


const Modal = ({ isOpen, closeModal, children }) => {
  return (
    isOpen && (
      <div className="modal-overlay">
        <div className="modal">
          <button className="close-button" onClick={closeModal}>
            &times;
          </button>
          {children}
        </div>
      </div>
    )
  );
};

export default Modal;
