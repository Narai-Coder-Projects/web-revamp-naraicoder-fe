import { ButtonHTMLAttributes, ReactNode } from "react";

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    active?: boolean;
    href?: string;
    fontXl?: boolean;
    backgroundColor?: string
    textColor?: string
}