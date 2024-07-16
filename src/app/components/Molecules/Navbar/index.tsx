import Image from "next/image";
import Link from "next/link";
import { ICInstagram, ICLinkedin, ICYoutobe } from "../../../../../public/icon";
import BasicButton from "../Buttons/BasicButton";

const Navbar = () => {
  const LOGOS = [
    {
      href: 'https://www.instagram.com/naraicoder/',
      icon: ICInstagram
    }, {
      href: 'https://www.youtube.com/@naraicoder7273',
      icon: ICYoutobe
    }, {
      href: 'https://www.linkedin.com/company/naraicoder/posts/?feedView=all',
      icon: ICLinkedin
    },
  ]
  return (
    <>
      <nav className="bg-white lg:flex justify-center items-center fixed w-full z-20 top-0 start-0">
        <div className=" lg:w-[1000px] flex justify-between items-center">
          <div>
            <Link href="/" className="flex items-center space-x-3 ">
              <Image src="/nav-icon.png" width={200} height={75} alt="Logo" />
            </Link>
          </div>

          <div className="hidden lg:flex ">
            <ul className="font-medium flex flex-col p-4 lg:p-0 mt-4 border rounded-lg  lg:flex-row lg:space-x-8  lg:mt-0 lg:border-0 lg:bg-white">
              <BasicButton active={true}>Home</BasicButton>
              <BasicButton active={false}>Blogs</BasicButton>
              <BasicButton active={false} href="/about">About</BasicButton>
              <BasicButton active={false}>Contact</BasicButton>
              {
                LOGOS.map((data, key) => (
                  <Link href={data.href} key={key}>
                    <Image src={data.icon} alt="#" width={24} height={24} />
                  </Link>
                ))
              }
              {/* <BasicButton backgroundColor="bg-primary" href="auth/sign-in">Sign In</BasicButton> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar