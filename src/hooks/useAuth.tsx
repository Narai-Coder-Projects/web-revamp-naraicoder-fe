'use client'
import { useRouter } from 'next/navigation';
import { useState } from "react";
import { LoginPayload } from "./useAuth.type";
import { postRequest } from '@/utils/axios';
import { POST_LOGIN_ADMIN_API, POST_LOGOUT_ADMIN_API } from '@/service/api/dashboardAPI';
import { getItemLocalStorage, removeItemLocalStorage, setItemLocalStorage } from '@/utils/localStorage';

const useAuth = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const router = useRouter()
  const onLogin = (payload: LoginPayload) => {
    setIsLoading(true)
    return postRequest(POST_LOGIN_ADMIN_API, payload)
      .then((response) => {
        setItemLocalStorage('token', response.data.access_token)
        document.cookie = `token=${response.data.access_token}; path=/`;
        router.replace('/dashboard')
        setIsLoading(false)
      })
      .catch((error) => {
        console.error(error)
        setIsLoading(false)
      });
  };

  const onLogout = () => {
    const getToken = getItemLocalStorage<string>('token');
    return postRequest(POST_LOGOUT_ADMIN_API, {}, {
      headers: { Authorization: `Bearer ${getToken}` }
    }).then((r) => {
      removeItemLocalStorage('token');
      router.replace('/auth/sign-in')
    }).catch((e) => console.error(e));
  };
  return { onLogin, isLoading, setIsLoading, onLogout }
}

export default useAuth