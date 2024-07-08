import { useRouter } from "next/navigation"
import { useState } from "react"
import { PARTNER_API, } from "../service/api/authApi"
import { deleteRequestWithAuth, getRequestWithAuth, postPutRequestWithAuthMultiple, postRequestWithAuthMultiple } from "../utils/axios"
import { IPartner, IPartnerData, IPartnerList } from "./usePartner.type"
import * as Yup from 'yup';


const usePartner = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [isRefresh, setIsRefresh] = useState<boolean>(false)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedId, setSelectedId] = useState<number>()
    const [datas, setDatas] = useState<IPartnerData[]>()
    const [data, setData] = useState<IPartnerData>()
    const [initValues, setInitValues] = useState({
        name: '',
        website: '',
        image: ''
    });

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

   

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        website: Yup.string().url('Invalid URL').required('Website is required'),
        image: Yup.mixed().test(
            "fileFormat",
            "Unsupported Format",
            value => {
                if (typeof value === 'string') return true; // If the value is a URL, it's valid
                return value && ['image/jpeg', 'image/png', 'image/gif'].includes(value?.type);
            }
        ).required('Image is required')
    });

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
        initValues,
        setInitValues,
        validationSchema
    }


}

export default usePartner