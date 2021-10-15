import React from 'react';
import { Modal } from 'antd';

const ModalPopup = ({ title, content, visible }) => {

    return (
        <Modal title={title} visible={visible} closable={false} footer={null}>
            <p>{content}</p>
        </Modal>
    );

};

export default ModalPopup;