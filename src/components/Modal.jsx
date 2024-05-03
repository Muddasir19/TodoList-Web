import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ onClose, isOpen, children }) => {
  return (
    <>
      {isOpen && (
        <>
        <div className="border d-flex flex-col  ">
            <div className=" d-flex justify-content-end ">
                {/* <AiOutlineClose onClick={onClose} className="fs-4 icon" /> */}
            </div>
            {children}
        </div>
        <div className="" > </div>
        </>
      )}
    </>
  );
};

export default Modal;
