"use client";

import Image from "next/image";
import { Navbar, Footer } from "./components";
import { useFetch } from "./hooks/useFetch";
import { BlogsData, PartnersData } from "./types";
import { BlogCard } from "./components/Cards";

export default function Home() {
  const partners = useFetch<PartnersData[]>("/api/contents/partners");
  const blogs = useFetch<BlogsData[]>("/api/contents/blogs");
  return (
    <>
      <Navbar />
      <div className="mx-8 mt-36">
        <div className="flex flex-wrap items-center justify-evenly">
          <div>
            <h1 className="font-bold text-2xl w-96">
              Bertumbuh dengan kolaborasi, Menuju visi &quot;Bersinergi, Berkolaborasi dan
              Berinovasi&quot;
            </h1>
            <div className="mt-4">
              <a
                href="#"
                className="bg-blue-500 hover:bg-blue-700 duration-100 ease-in-out text-white p-2 rounded-md"
              >
                Bergabung
              </a>
            </div>
          </div>
          <div>
            <Image src="/home-croods-1.png" width={476} height={323} alt="Hero" />
          </div>
        </div>

        <div className="my-20">
          <h1 className="text-center font-bold text-4xl mb-4">Our Partnership</h1>
          <div className=" w-[80rem] m-auto flex flex-wrap justify-center items-center gap-8">
            {partners.data?.map((partner, i) => (
              <div
                key={i}
                className="mt-4 bg-gray-200 w-[243px] h-[105px] flex justify-center items-center rounded-md"
              >
                <Image
                  src={partner.url}
                  alt={partner.alt}
                  width={180}
                  height={100}
                  className="object-contain w-[180px] h-[100px] p-2"
                ></Image>
              </div>
            ))}
          </div>
          {/* <Partnership /> */}
        </div>

        <div className="mb-20">
          <h1 className="text-center font-bold text-4xl mb-4">Event / Blog</h1>
          <div className="w-[70rem] m-auto flex flex-wrap justify-center items-center gap-8">
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
