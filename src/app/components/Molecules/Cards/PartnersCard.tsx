import Image from "next/image";

const  PartnersCard =(props: { url: string; alt: string }) => {
  return (
    <div className="mt-4 bg-gray-200 w-[243px] h-[105px] flex justify-center items-center rounded-md">
      <Image
        src={props.url}
        alt={props.alt}
        width={180}
        height={100}
        className="object-contain w-[180px] h-[100px] p-2"
      ></Image>
    </div>
  );
}

export default PartnersCard