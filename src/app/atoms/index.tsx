import { atom } from "jotai";

interface IENV {
    NEXT_PUBLIC_API_URL?: string
}
const ENV: IENV = {
    NEXT_PUBLIC_API_URL: ''
}

export const ENVAtom = atom(ENV)