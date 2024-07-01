'use client'

import Image from "next/image"
import { ICWarning } from "../../../../../public/icon"
import { useState } from "react"
import Modal from "../../Atoms/modal"
interface IModalDelete {
    onClickY: () => void
    // handleDelete: () => void
    idDeletePayload: number
}
const ModalDelete = (props: IModalDelete) => {
    const { idDeletePayload } = props
    const [isModalOpen, setIsModalOpen] = useState(false)

    const { onClickY } = props
    const handleDeleted = (id: number) => {
        setIsModalOpen(true)
        console.log('hahaa')
    }
    console.log('isModalOpen', isModalOpen)
    return (
        <>
            {
                isModalOpen && (
                    <Modal onClickYes={()=>handleDeleted} onClickCancel={() => handleDeleted(5)}>
                    {/* <Modal onClickYes={onClickY} onClickCancel={() => handleDeleted(idDeletePayload)}> */}
                        <div className="flex flex-col items-center pb-3">
                            <Image src={ICWarning} alt="" height={70} width={70} />
                            <p>Are you sure you want to delete this item?</p>
                        </div>
                    </Modal>
                )
            }

        </>
    )
}

export default ModalDelete