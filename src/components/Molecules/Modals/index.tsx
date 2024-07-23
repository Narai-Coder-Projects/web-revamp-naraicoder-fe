'use client'

import Image from "next/image"
import Modal from "../../Atoms/modal"
import { ICWarning } from "../../../../public/icon"
interface IModalDelete {
    handleYes: () => void
    handleCancel: () => void
}
const ModalDelete = (props: IModalDelete) => {
    const { handleCancel, handleYes } = props

    
    return (
        <>
            <Modal iconCancel iconYes onClickYes={handleYes} onClickCancel={handleCancel}>
                <div className="flex flex-col items-center pb-3">
                    <Image src={ICWarning} alt="" height={70} width={70} />
                    <p>Are you sure you want to delete this item?</p>
                </div>
            </Modal>
        </>
    )
}

export default ModalDelete