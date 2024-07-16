import { Navbar } from "@/app/components/Molecules"
import Image from "next/image"
// import { ImgAboutHero } from "../../../../public/images"
import img from "../../../../public/card-panel-left-2.png"

const page = () => {
    return (
        <>
            <Navbar />
            <div className="flex flex-col  justify-center items-center mt-[70px] md:mt-[75px]">
                <div className=" lg:w-[1000px] h-[200px] sm:h-[300px] md:h-[350px] lg:h-[400px] w-full">
                    <Image className="object-cover h-full w-full" alt="#" src={img} width={1000} height={200} />
                </div>
                <div className="mt-3 px-3 sm:mt-4 md:mt-6 lg:mt-7 lg:w-[1000px]  w-full">
                    <div className="flex flex-col">
                        <h1 className="font-bold text-base sm:text-lg md:text-2xl">Membangun Portfolio UX Designer</h1>
                        <p className="text-xs sm:text-base">Monday  May 20</p>
                    </div>
                </div>

            </div>
        </>
    )
}
export default page