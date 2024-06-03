import Image from "next/image";

export function BlogCard(props: {
  imgUrl: string;
  alt: string;
  title: string;
  description: string;
  destUrl: string;
  date: string;
}) {
  return (
    <div className="w-[300px] h-[382px] bg-white rounded-md shadow-md">
      <Image
        src={props.imgUrl}
        alt={props.alt}
        width={200}
        height={200}
        className="w-full h-44 rounded-t-md"
      />

      <div className="p-4">
        <div className="mb-4">
          <h1 className="font-bold text-lg mb-2">{props.title}</h1>
          <p className="text-gray-500 text-sm">{props.description}</p>
        </div>
        <footer className="flex justify-between items-center">
          <div className="text-gray-500">{props.date}</div>
          <a href={props.destUrl} className="font-bold">
            Read More
          </a>
        </footer>
      </div>
    </div>
  );
}
