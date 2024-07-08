'use client'
import { useEffect, useState } from "react";
import Modal from "../../Atoms/modal";
import Image from "next/image";
import { ICError, ICSuccess } from "../../../../../public/icon";

export const useModalError = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const onVisible = () => {
        setIsOpen(true);
    };

    const onClose = () => {
        setIsOpen(false);
    };

    return { onVisible, onClose, isOpen };
};

const ModalError = () => {
    const { onVisible, onClose, isOpen } = useModalError();

    useEffect(() => {
        onVisible();
        const timer = setTimeout(() => {
            onClose();
        }, 3000);

        return () => clearTimeout(timer); 
    }, []);

    return (
        <>
            {isOpen && (
                <Modal onClickCancel={onClose}>
                    <Image alt="#" src={ICError} width={150} height={150} />
                </Modal>
            )}
        </>
    );
};

export default ModalError;
