import Image from "next/image";
import Link from "next/link";

const BlogCard = (props: IBlogCard) => {
  return (
    <div className=" bg-white rounded-md shadow-md">
      <div className="flex justify-center">
        <Image
          src={props.imgUrl}
          alt={props.alt}
          width={400}
          height={400}
          className="rounded-t-md hover:animate-pulse"
        />
      </div>
      <div className="p-4">
        <div className="mb-4">
          <h1 className="font-bold text-lg mb-2 md:text-xl">{props.title}</h1>
          <p className="text-gray-500 text-sm md:text-base">{props.description}</p>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-gray-500">{props.date}</div>
          <Link href={props.destUrl} className="font-bold hover:text-secondary">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}
export default BlogCard