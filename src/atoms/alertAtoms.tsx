import { atom } from "jotai";

interface IAlertState {
  visible: boolean;
  message: string;
  type: "error" | "success";
}

export const alertStateAtom = atom<IAlertState>({
  visible: false,
  message: '',
  type: 'error',
});
