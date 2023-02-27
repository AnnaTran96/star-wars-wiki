import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetStarships } from "../../store/features/starshipsSlice";
import "./Modal.css";

const Modal = ({ setIsModalOpen, children, title }) => {
    const dispatch = useDispatch();
    const { starships } = useSelector((state) => state.starships);

    const closeModal = () => {
        setIsModalOpen(false);
        if (starships.length) {
            dispatch(resetStarships());
        }
        document.body.style.overflow = "scroll";
    }

    return (
        <div className="modal-container">
            <div className="overlay" onClick={() => setIsModalOpen(false)} />
            <div className="center">
                <div className="modal">
                    <h5 className="heading">{title}</h5>
                    {children}
                    <button className="closeBtn" onClick={closeModal}>
                        X
                    </button>
                </div>
            </div>
        </div >
    );
};

export default Modal;