import React from "react";

const Modal = ({
  modal,
  closeModal,
  text = "Mohon periksa kembali informasi anda",
}) => {
  const style = modal ? "modal modal--open" : "modal modal--closed";
  return (
    <>
      {modal && <div className="backdrop" onClick={closeModal} />}
      <div className={style}>
        <p>{text}</p>
        <button className="btn btn--primary" onClick={closeModal}>
          Ok
        </button>
      </div>
    </>
  );
};

export default Modal;
