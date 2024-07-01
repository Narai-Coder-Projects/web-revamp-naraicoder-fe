'use client'

import Image from "next/image"
import { ICClose, ICWarning } from "../../../../../public/icon"
import { ReactNode, useState } from "react"
import useModal from "./useModal"
interface IModal {
    children: ReactNode,
    iconClose?: boolean,
    onClickCancel:() => void,
    onClickYes: () => void
}

const Modal = (props: IModal) => {
    // const { onCancel, isClose } = useModal()
    return (
        <>
            <div className={`fixed inset-0 z-40 bg-black opacity-50`}></div>
            <div className={`fixed inset-0 z-50 flex items-center justify-center`}>
                <div className="max-w-[400px] bg-white text-gray-950 p-6 rounded-xl shadow-lg">
                    {
                        props.iconClose && (
                            <div className="justify-end flex">
                                <button className="p-3 hover:bg-slate-100 rounded-full " onClick={props.onClickCancel}>
                                    <Image src={ICClose} alt="#" width={14} height={14} />
                                </button>
                            </div>
                        )
                    }

                    {props.children}
                    <div className="w-full flex flex-row  space-x-3" >
                        <button onClick={props.onClickCancel} className="bg-red-200 hover:bg-red-400 py-2 flex w-full justify-center rounded">Cancel</button>
                        <button onClick={props.onClickYes} className="border border-primary hover:bg-blue-300 py-2 flex w-full justify-center rounded">Yes</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal