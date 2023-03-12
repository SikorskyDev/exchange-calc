import React, { useState } from "react";
import stl from "./Modal.module.scss";
import { AiOutlineClose } from 'react-icons/ai';


export default function Modal({ children, title }) {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    return (
        <>
            <span onClick={toggleModal} className={stl.btnModal}>
                {title}
            </span>

            {modal && (
                <div className={stl.modal}>
                    <div onClick={toggleModal} className={stl.overlay}></div>
                    <div className={stl.modalContent}>
                        {children}
                        <button className={stl.closeModal} onClick={toggleModal}>
                            <AiOutlineClose size={35} />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}