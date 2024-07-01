import { useEffect, useState } from "react"
import { DELETE_PARTNER_LIST, GET_PARTNER_LIST, POST_ADD_PARTNER } from "../service/api/authApi"
import { deleteRequestWithAuth, getRequestWithAuth, postRequest, postRequestWithAuth, postRequestWithAuthMultiple } from "../utils/axios"
import { IPartnerData, IPartnerList } from "./usePartner.type"
import { useRouter } from "next/navigation"


const usePartner = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [isRefresh, setIsRefresh] = useState<boolean>(false)
    const [datas, setDatas] = useState<IPartnerData[]>()
    const router = useRouter()

    const getList = () => {
        setIsLoading(true)
        return getRequestWithAuth(GET_PARTNER_LIST).
            then((r: IPartnerList) => {
                setDatas(r.data)
            }
            )
            .catch((e) => console.log(e))
    }
    const onDelete = (id: number) => {
        return deleteRequestWithAuth(`${DELETE_PARTNER_LIST}/${id}`)
            .then((response) => {
                setIsRefresh(true)
            })
            .catch((error) => console.warn(error))
    }
    const onAdd = (payload) => {
        console.log('payload', payload)
        return postRequestWithAuthMultiple(POST_ADD_PARTNER, payload)
            .then((res) => {
                setIsRefresh(true)
                router.back()
            })
            .catch((err) => console.warn(err))
    }
    return { datas, onDelete, onAdd, getList, isRefresh, setIsRefresh }


}

export default usePartner