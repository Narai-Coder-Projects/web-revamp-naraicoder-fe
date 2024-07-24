"use client"
import { alertStateAtom } from "@/atoms/alertAtoms";
import { TEAMS_API } from "@/service/api/dashboardAPI";
import { getRequestWithAuth, postPutRequestWithAuthMultiple, postRequestWithAuthMultiple } from "@/utils/axios";
import { useAtom } from "jotai";
import { useState } from "react";
import { ITeamsList, TTeam } from "./useTeam.type";
import * as Yup from 'yup';
import { useRouter } from "next/navigation";


const useTeam = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [alertState, setAlertState] = useAtom(alertStateAtom);
  const [datas, setDatas] = useState<TTeam[]>();
  const [data, setData] = useState<TTeam>();
  const [isRefresh, setIsRefresh] = useState<boolean>(false);
  const router = useRouter();
  const [initValues, setInitValues] = useState({
    name: '',
    email: '',
    role: '',
    image: ''
  });
  const getList = () => {
    setIsLoading(true);
    return getRequestWithAuth(TEAMS_API)
      .then((r: ITeamsList) => {
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

  const onAdd = (payload) => {
    setIsLoading(true);
    return postRequestWithAuthMultiple(TEAMS_API, payload)
      .then((res) => {
        console.log('res', res)
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

  const onUpdate = (id: number | string, payload: TTeam) => {
    setIsLoading(true);
    const url = `${TEAMS_API}/${id}`;
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

  const getDetailList = (id?: number) => {
    return getRequestWithAuth(TEAMS_API + '/' + id)
      .then((r: TTeam) => {
        setData(r);
        console.log('r', r)
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



  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Nama wajib diisi'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    role: Yup.string().required('Role wajib diisi'),
    image: Yup.mixed().test(
      "fileFormat",
      "Unsupported Format",
      value => {
        if (typeof value === 'string') return true; // If the value is a URL, it's valid
        return value && ['image/jpeg', 'image/png', 'image/gif'].includes(value?.type);
      }
    ).required('Image is required')
  });

  return { getList, isLoading, data, onAdd, setInitValues, getDetailList, validationSchema, initValues, onUpdate, datas, isRefresh, setIsRefresh }
}

export default useTeam