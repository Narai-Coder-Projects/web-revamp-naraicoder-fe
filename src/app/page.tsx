"use client";

import Image from "next/image";
import { useFetch } from "./hooks/useFetch";
import { BlogsData, PartnersData } from "./types";
import { BlogCard, Footer, Navbar } from "./components/Molecules";

export default function Home() {
  const partners = useFetch<PartnersData[]>("/api/contents/partners");
  const blogs = useFetch<BlogsData[]>("/api/contents/blogs");
  return (
    <>
      <Navbar />
      <div className=" bg-[#F6F6F6] flex flex-col items-center justify-center">
        <div className=" w-full  lg:w-[1000px] md:h-[400px] h-[200px] mt-[70px] md:mt-[75px] flex items-center justify-center ">
          <div className=" px-4 flex justify-between md:flex-row flex-col ">
            <div className=" md:w-[45%] md:leading-9 flex flex-col justify-center">
              <h1 className="font-bold text-[20px] md:text-[32px] ">
                Bertumbuh dengan kolaborasi, Menuju visi &quot;Bersinergi, Berkolaborasi dan
                Berinovasi&quot;
              </h1>
              <div className="mt-4">
                <a
                  href="#"
                  className="bg-[#0F3F62] hover:bg-blue-700 duration-100 ease-in-out text-white p-2 rounded-md"
                >
                  Bergabung
                </a>
              </div>
            </div>
            <div className="hidden md:flex">
              <Image src="/home-croods-1.png" width={500} height={353} alt="Hero" />
            </div>
          </div>
        </div>
      </div>

      <div className="my-20 mx-4 flex flex-col items-center justify-center">
        <div className="  w-full lg:w-[1000px]">
          <h1 className="text-center font-bold text-lg sm:text-xl lg:text-4xl mb-4">Our Partnership</h1>
          <div className=" gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid justify-center items-center ">
            {partners.data?.map((partner, i) => (
              <div
                key={i}
                className="mt-4 bg-[#F8F8F8]  h-[95px] flex justify-center items-center rounded-lg"
              >
                <Image
                  src={partner.url}
                  alt={partner.alt}
                  width={100}
                  height={90}
                  className="object-contain w-[100px] h-[90px] p-2"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="my-20 mx-4 flex flex-col items-center justify-center">
        <div className=" w-full lg:w-[1000px]">
        <h1 className="text-center font-bold text-lg sm:text-xl lg:text-4xl mb-4">Event / Blog</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-8 mt-5">
            {blogs.data?.map((blog, i) => (
              <BlogCard
                key={i}
                imgUrl={blog.imgUrl}
                title={blog.title}
                description={blog.description}
                date={blog.date}
                destUrl={blog.destUrl}
                alt={blog.alt}
              ></BlogCard>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
