import { ReactNode } from "react";

export function BasicButton(props: {
  children: ReactNode;
  active: boolean;
  href?: string;
  fontXl?: boolean;
}) {
  return (
    <li>
      <a
        href={props.href ?? "#"}
        className={`block py-2 px-3 ${
          props.active ? "text-blue-500" : "text-black"
        } rounded md:bg-transparent md:p-0 ${props.fontXl ? "text-2xl" : ""}`}
        aria-current="page"
      >
        {props.children}
      </a>
    </li>
  );
}
