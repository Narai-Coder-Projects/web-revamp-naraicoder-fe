"use client"
import Image from "next/image";
import { ReactNode, useEffect } from "react";
import { useAtom } from "jotai";
import { ICClose, ICError, ICSuccess } from "../../../../public/icon";
import { alertStateAtom } from "@/atoms/alertAtoms";

interface IAlert {
    children?: ReactNode;
    iconClose?: boolean;
    onClickCancel?: () => void;
    iconCancel?: boolean;
}

const Alert = (props: IAlert) => {
    const [alertState, setAlertState] = useAtom(alertStateAtom);

    useEffect(() => {
        const timer = setTimeout(() => {
            handleCancel()
        }, 5000);

        return () => clearTimeout(timer);
    }, [alertState.visible, setAlertState]);

    const handleCancel = () => {
        if (props.onClickCancel) {
            props.onClickCancel();
        }
        setAlertState((prev) => ({ ...prev, visible: false }));
    };

    if (!alertState.visible) {
        return null;
    }

    return (
        <div className={` absolute top-0 left-1/2 shadow-lg z-50 items-center justify-center`}>
            <div className="bg-white flex gap-2 justify-center items-center text-gray-950 p-6 rounded-xl shadow-lg">
                <div className="flex gap-2">
                    {alertState.type === "error" && (<Image alt="#" src={ICError} width={24} height={24} />)}
                    {alertState.type === "success" && (<Image alt="#" src={ICSuccess} width={24} height={24} />)}
                    <p>{alertState.message}</p>
                </div>
                {props.iconClose && (
                    <div className="justify-end flex">
                        <button className="p-3 hover:bg-slate-100 rounded-full" onClick={handleCancel}>
                            <Image src={ICClose} alt="Close" width={14} height={14} />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Alert;
