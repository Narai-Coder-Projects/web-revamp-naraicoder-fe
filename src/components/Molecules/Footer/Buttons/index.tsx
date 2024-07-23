import {
  BiLogoInstagramAlt,
  BiLogoGmail,
  BiLogoLinkedinSquare,
  BiLogoYoutube
} from "react-icons/bi";

export function Buttons() {
  const logos = [BiLogoInstagramAlt, BiLogoGmail, BiLogoLinkedinSquare, BiLogoYoutube];
  return (
    <>
      {logos.map((Logo, i) => (
        <li key={i}>
          <a href="#">
            <Logo className="block py-2 px-3 rounded md:border-0 md:p-0 text-black md:hover:text-blue-500 hover:text-white text-2xl" />
          </a>
        </li>
      ))}
    </>
  );
}
