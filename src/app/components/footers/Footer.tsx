import {
  BiLogoInstagramAlt,
  BiLogoGmail,
  BiLogoLinkedinSquare,
  BiLogoYoutube
} from "react-icons/bi";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <footer className="bg-white border-gray-200 mt-4 border-t-2">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-8">
          <div className="font-bold text-lg">NaraiCoder Org {year}</div>
          <div>
            <ul className="flex flex-wrap gap-x-8">
              <li>
                <a href="#">
                  <BiLogoInstagramAlt className="block py-2 px-3 rounded  md:border-0 md:p-0 text-black md:hover:text-blue-500 hover:text-white text-2xl" />
                </a>
              </li>
              <li>
                <a href="#">
                  <BiLogoGmail className="block py-2 px-3 rounded  md:border-0 md:p-0 text-black md:hover:text-blue-500 hover:text-white text-2xl" />
                </a>
              </li>
              <li>
                <a href="#">
                  <BiLogoLinkedinSquare className="block py-2 px-3 rounded  md:border-0 md:p-0 text-black md:hover:text-blue-500 hover:text-white text-2xl" />
                </a>
              </li>
              <li>
                <a href="#">
                  <BiLogoYoutube className="block py-2 px-3 rounded  md:border-0 md:p-0 text-black md:hover:text-blue-500 hover:text-white text-2xl" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
