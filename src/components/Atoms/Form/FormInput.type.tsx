import { InputHTMLAttributes } from "react";

export interface IFormInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string
}