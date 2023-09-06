import { useState } from "react";
import { createPortal } from "react-dom";
import ModalResult from "./ModalResult";

const ModalBtn = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button className="relative z-0 mx-auto mt-2 py-1 px-2 text-sm text-[#F6F6F6] rounded bg-[#0078AA] hover:bg-[#3AB4F2] cursor-pointer"
            onClick={()=> setShowModal(!showModal)}>
                Get the code
            </button>
            {showModal &&
                createPortal(
                    <ModalResult closeModal={() => setShowModal(!showModal)} />,
                    document.body
                )}
        </>
    );
};

export default ModalBtn;
