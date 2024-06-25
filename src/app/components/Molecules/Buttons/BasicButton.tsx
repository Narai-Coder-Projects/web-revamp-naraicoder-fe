import Link from "next/link";
import { IBasicButtonProps } from "./BasicButton.type";

const BasicButton = (props: IBasicButtonProps) => {
  const { children, active, fontXl, href } = props
  const styleNavbarBtn = `block py-2 px-3 ${active ? "text-blue-500" : "text-black"
    } rounded md:bg-transparent md:p-0 ${fontXl ? "text-2xl" : ""}`

  return (
    <Link
      href={href ?? "#"}
      className={styleNavbarBtn}
    >
      {children}
    </Link>
  );
}


export default BasicButton