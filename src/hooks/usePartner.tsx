import { useAtom } from "jotai";
import { useRouter } from "next/navigation";
import { useState } from "react";
import * as Yup from 'yup';
import { PARTNER_API } from "@/service/api/authApi";
import { deleteRequestWithAuth, getRequestWithAuth, postPutRequestWithAuthMultiple, postRequestWithAuthMultiple } from "@/utils/axios";
import { alertStateAtom } from "@/atoms/alertAtoms";
import { IPartner, IPartnerData, IPartnerList } from "./usePartner.type";

const usePartner = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isRefresh, setIsRefresh] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<number>();
  const [datas, setDatas] = useState<IPartnerData[]>();
  const [data, setData] = useState<IPartnerData>();
  const [initValues, setInitValues] = useState({
    name: '',
    website: '',
    image: ''
  });
  const [alertState, setAlertState] = useAtom(alertStateAtom);

  const router = useRouter();

  const getList = () => {
    setIsLoading(true);
    return getRequestWithAuth(PARTNER_API)
      .then((r: IPartnerList) => {
        setDatas(r.data);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setAlertState({
          type: "error",
          message: "Failed to fetch partner list.",
          visible: true,
        });
        setIsLoading(false);
      });
  };

  const getDetailList = (id?: number) => {
    return getRequestWithAuth(PARTNER_API + '/' + id)
      .then((r: IPartnerData) => {
        setData(r.data);
      })
      .catch((e) => {
        console.log(e);
        setAlertState({
          type: "error",
          message: "Failed to fetch partner details.",
          visible: true,
        });
      });
  };

  const onDelete = (id?: number) => {
    return deleteRequestWithAuth(`${PARTNER_API}/${id}`)
      .then((response) => {
        setIsRefresh(true);
        setIsModalOpen(false);
        setAlertState({
          type: "success",
          message: "Partner deleted successfully.",
          visible: true,
        });
      })
      .catch((error) => {
        console.warn(error);
        setAlertState({
          type: "error",
          message: "Failed to delete partner.",
          visible: true,
        });
      });
  };

  const onAdd = (payload) => {
    setIsLoading(true);
    return postRequestWithAuthMultiple(PARTNER_API, payload)
      .then((res) => {
        setIsRefresh(true);
        router.back();
        setIsLoading(false);
        setAlertState({
          type: "success",
          message: "Partner added successfully.",
          visible: true,
        });
      })
      .catch((err) => {
        console.warn(err);
        setIsLoading(false);
        setAlertState({
          type: "error",
          message: "Failed to add partner.",
          visible: true,
        });
      });
  };

  const onUpdate = (id: number | string, payload: IPartner) => {
    setIsLoading(true);
    const url = `${PARTNER_API}/${id}`;
    return postPutRequestWithAuthMultiple(url, payload)
      .then((res) => {
        setIsLoading(false);
        setIsRefresh(true);
        router.back();
        setAlertState({
          type: "success",
          message: "Partner updated successfully.",
          visible: true,
        });
      })
      .catch((err) => {
        console.warn(err);
        setIsLoading(false);
        setAlertState({
          type: "error",
          message: "Failed to update partner.",
          visible: true,
        });
      });
  };

  const onCompirmModal = (id: number, payload: IPartner) => {
    setIsModalOpen(true);
    setSelectedId(id);
  };

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
  };
}

export default usePartner;
