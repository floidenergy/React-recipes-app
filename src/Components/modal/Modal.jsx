import React, { useContext } from 'react';

import { GlobalContext } from '../../context';

import './Modal.css'

const Modal = () => {

    const { isShowModal } = useContext(GlobalContext);

    return (
        <div>
            { isShowModal && <SubModal /> }
        </div>
    )
}

const SubModal = () => {
    return <div className='Modal'>
        <article className="modal-article">
            MODAL
        </article>
    </div>
}

export default Modal;