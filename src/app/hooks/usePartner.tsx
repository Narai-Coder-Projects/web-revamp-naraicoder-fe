import { useEffect, useState } from "react"
import { GET_PARTNER_LIST } from "../service/api/authApi"
import { getRequestWithAuth } from "../utils/axios"
import { IPartnerData, IPartnerList } from "./usePartner.type"

const usePartner = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [datas, setDatas] = useState<IPartnerData[]>()
    useEffect(() => {
        getList()
    }, [])
    const getList = () => {
        setIsLoading(true)
        return getRequestWithAuth(GET_PARTNER_LIST).
            then((r:IPartnerList) => {
                console.log(r)
                setDatas(r.data)
            }
            )
            .catch((e) => console.log(e))
    }
    return { datas }
}

export default usePartner