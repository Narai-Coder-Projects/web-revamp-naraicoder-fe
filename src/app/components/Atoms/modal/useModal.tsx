'use client'
import { ReactNode, useState } from "react"

const useModal = () => {
    const [isClose, setClose] = useState(false)
    const onCancel = () => {
        setClose(!isClose)
    }
    
    return { onCancel, isClose, setClose }
}

export default useModal