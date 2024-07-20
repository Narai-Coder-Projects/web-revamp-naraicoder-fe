import Image from "next/image"
import { ReactNode } from "react"
import { ICClose } from "../../../../public/icon"

interface IModal {
    children: ReactNode,
    iconClose?: boolean,
    onClickCancel?: () => void,
    onClickYes?: () => void
    iconCancel?: boolean
    iconYes?: boolean
}

const Modal = (props: IModal) => {
    return (
        <>
            <div className={`animate-fade-in fixed inset-0 z-40  opacity-50 bg-black`}></div>
            <div className={`animate-fade-in-up fixed inset-0 z-50 flex items-center justify-center`}>
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
                        {
                            props.iconCancel && (
                                <button onClick={props.onClickCancel} className="bg-red-200 hover:bg-red-400 py-2 flex w-full justify-center rounded">Cancel</button>
                            )
                        }
                        {
                            props.iconYes && (
                                <button onClick={props.onClickYes} className="border border-primary hover:bg-blue-300 py-2 flex w-full justify-center rounded">Yes</button>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal