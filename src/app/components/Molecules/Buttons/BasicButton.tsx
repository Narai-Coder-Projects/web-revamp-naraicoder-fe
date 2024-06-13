import Link from "next/link";
import { IBasicButtonProps } from "./BasicButton.type";

const BasicButton = (props: IBasicButtonProps) => {
  const { children, active, fontXl, href, type, backgroundColor, textColor } = props
  const styleNavbarBtn = `block py-2 px-3 ${active ? "text-blue-500" : "text-black"
    } rounded md:bg-transparent md:p-0 ${fontXl ? "text-2xl" : ""}`


  if (type) {
    return (
      <button
        type={type}
        className={`${backgroundColor ? backgroundColor : 'bg-primary'} 
        ${textColor ? textColor: 'text-white'}
        py-3 w-full rounded-lg text-sm`}
      >
        {children}
      </button>
    )
  }
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