import { useRouter } from "next/navigation"
import { useState } from "react"
import { PARTNER_API, } from "../service/api/authApi"
import { deleteRequestWithAuth, getRequestWithAuth, postPutRequestWithAuthMultiple, postRequestWithAuthMultiple } from "../utils/axios"
import { IPartner, IPartnerData, IPartnerList } from "./usePartner.type"


const usePartner = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [isRefresh, setIsRefresh] = useState<boolean>(false)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedId, setSelectedId] = useState<number>()
    const [datas, setDatas] = useState<IPartnerData[]>()
    const [data, setData] = useState<IPartnerData>()
    const router = useRouter()

    const getList = () => {
        setIsLoading(true)
        return getRequestWithAuth(PARTNER_API).
            then((r: IPartnerList) => {
                setDatas(r.data)
            })
            .catch((e) => console.log(e))
    }
    const getDetailList = (id?: number) => {
        return getRequestWithAuth(PARTNER_API + '/' + id).
            then((r: IPartnerData) => {
                setData(r.data)
            })
            .catch((e) => console.log(e))
    }
    const onDelete = (id?: number) => {
        return deleteRequestWithAuth(`${PARTNER_API}/${id}`)
            .then((response) => {
                setIsRefresh(true)
                setIsModalOpen(false)
            })
            .catch((error) => console.warn(error))
    }
    const onAdd = (payload) => {
        setIsLoading(true)
        return postRequestWithAuthMultiple(PARTNER_API, payload)
            .then((res) => {
                setIsRefresh(true)
                router.back()
                setIsLoading(false)
            })
            .catch((err) => {
                console.warn(err)
                setIsLoading(false)
            })
    }
    const onUpdate = (id: number | string, payload: IPartner) => {
        setIsLoading(true)
        const url = `${PARTNER_API}/${id}`
        return postPutRequestWithAuthMultiple(url, payload)
            .then((res) => {
                setIsLoading(false)
                setIsRefresh(true)
                router.back()
            })
            .catch((err) => console.warn(err))
    }

    const onCompirmModal = (id: number, payload: IPartner) => {
        setIsModalOpen(true)
        setSelectedId(id)
    }

    return {
        datas,
        data,
        isLoading,
        setIsRefresh,
        isModalOpen,
        selectedId,
        setIsModalOpen,
        isRefresh,
        onCompirmModal,
        onDelete,
        onAdd,
        getList,
        onUpdate,
        getDetailList,
    }


}

export default usePartner