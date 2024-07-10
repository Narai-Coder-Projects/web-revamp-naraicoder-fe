import Image from "next/image"
import { Navbar } from "../components/Molecules"
import { ImgAboutHero } from "../../../public/images"
import { member1, member2, member3 } from "../../../public/member"

const about = () => {
    const datas = [
        {
            name: 'Devon Lane',
            image: member1,
            job: 'Senior Developer'
        }, {
            name: 'Darrell Steward',
            image: member2,
            job: 'Digital Product Designer'
        }, {
            name: 'Jane Cooper',
            image: member3,
            job: 'UI/UX Designer'
        }, {
            name: 'Devon Lane',
            image: member1,
            job: 'Senior Developer'
        }, {
            name: 'Darrell Steward',
            image: member2,
            job: 'Digital Product Designer'
        }, {
            name: 'Jane Cooper',
            image: member3,
            job: 'UI/UX Designer'
        }, {
            name: 'Darrell Steward',
            image: member2,
            job: 'Digital Product Designer'
        }, {
            name: 'Jane Cooper',
            image: member3,
            job: 'UI/UX Designer'
        }
    ]
    return (
        <>
            <Navbar />
            <div className=" flex flex-col mx-3 items-center justify-center">
                <section className="lg:w-[1000px] mt-[70px] md:mt-[90px]  sm:flex gap-2 sm:h-[280px] md:h-[550px] lg:h-[440px] sm:items-center">
                    <div >
                        <h1 className="font-bold text-[16px] sm:text-[32px] md:text-[20px] mb-1">Tentang Naraicoder</h1>
                        <p className="text-sm sm:text-[20px] md:text-[16px] lg:text-[18px] sm:leading-8">Narai Coder adalah komunitas non-profit bagi pegiat dan pembelajar Teknologi Informasi di Provinsi Kalimantan Tengah dengan visi menjadi wadah pengembangan minat dan bakat TI di Kalimantan Tengah. NaraiCoder dibentuk sebagai wadah berkumpul dan berbagi wawasan para programmer/developer serta digital enthusiast di wilayah Kalimantan Tengah, juga berupaya untuk mengembangkan future tech talent di wilayah Kalteng dan sekitarnya. </p>
                    </div>
                    <Image alt="#" className="hidden md:flex" src={ImgAboutHero} width={500} height={250} />
                </section>

                <section className="w-full my-3">
                    <h1 className="font-bold text-[16px] sm:text-[32px] md:text-[20px] mb-1">Member</h1>
                    <div className="lg:w-[1000px] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:justify-between justify-around">
                        {
                            datas.map((data, key) => (
                                <div key={key} className="h-[240px] sm:h-[280px]  lg:h-[290px] items-center border border-[#E9EAF0]  shadow-sm flex flex-col">
                                    <Image alt="#" src={data.image} className="flex sm:hidden" width={150} height={150} />
                                    <Image alt="#" src={data.image} width={200} height={200} className="hidden sm:flex" />
                                    <div className="flex flex-col justify-center items-center gap-1 my-2">
                                        <p className="font-semibold text-center">{data.name}</p>
                                        <p className="text-placeholder text-center">{data.job}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </section>
            </div>
        </>
    )
}
export default about