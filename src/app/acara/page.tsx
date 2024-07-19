import Link from "next/link"
import { Footer, Navbar } from "../components/Molecules"
import Image from "next/image"
import { bgRegisterEventHero1, bgRegisterEventHero2, ImgBatangGaringRight, ImgSignIn } from "../../../public/images"
import { FormPendaftaran, SliderEvent } from "./components"

const page = () => {
    const datasa = [ImgSignIn];
    return (
        <>
            <Navbar />
            <div className=" flex flex-col items-center justify-center">
                <div className="text-secondary bg-blue-50 py-[32px] md:py-0 md:bg-[#FDFDFE]  md:h-[50vh]  text-center flex-col w-full mt-[70px] md:mt-[70px]  sm:flex gap-2  sm:items-center">
                    <div className="z-10  flex flex-col items-center  md:h-[50vh]  justify-between ">
                        <div>
                            <p className="text-[18px] md:text-[26px] font-bold">In Collaboartion Naraicoder x Jagoan Hosting x Hactiv8 </p>
                            <p className="text-[14px] md:text-[24px]">Present Talk show and Wokshop as Frontend Developer</p>
                            <p className="text-[12px] md:text-[18px] font-bold">20, Juni 2024 di <Link href={"#"} className="text-link cursor-pointer">Lapangan Mentikei</Link></p>
                        </div>
                        <Link href={'#daftar'} className="bg-secondary mb-[15px] mt-[30px] md:mt-[100px] w-fit rounded-xl text-white text-xs md:text-base py-2 px-4 md:py-3 md:px-6">
                            Daftar Acara
                        </Link>
                    </div>
                    <div className="hidden sm:flex absolute top-17 right-0  z-0 ">
                        <Image alt="#" src={ImgBatangGaringRight} width={200} height={300} />
                    </div>
                    <div className="hidden sm:flex absolute top-17 left-0  z-0 ">
                        <Image alt="#" src={bgRegisterEventHero1} width={243} height={128} />
                    </div>
                    <Image className="hidden sm:flex absolute w-[484px] h-[159px] left-1/2 top-30  z-0" alt="#" src={bgRegisterEventHero2} width={504} height={159} />

                </div>
                <section className="md:bg-secondary py-4 md:py-12 w-full text-white flex items-center justify-center">
                    <div className="lg:w-[1000px]">
                        <SliderEvent datas={datasa} />
                    </div>
                </section>
                <section id="daftar" className="my-10">
                    <div className="lg:w-[1000px] h-[410px] flex justify-center">
                        <FormPendaftaran />
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}
export default page