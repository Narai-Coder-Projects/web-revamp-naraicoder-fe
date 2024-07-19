'use client'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';
import { ImgSignIn } from '../../../../../public/images';

interface IProps {
    datas: string[] 
}
const SliderEvent = (props: IProps) => {
    const { datas } = props
    return (
        <>
            {
                datas?.length === 0 ? (
                    <div className='flex w-[40px] h-[40px] items-center justify-center'>
                        <Image className='hidden md:flex' width={150} height={150} src={datas[0]} alt='#' />
                        <Image className='flex md:hidden' width={40} height={40} src={datas[0]} alt='#' />
                    </div>
                ) : (
                    <div className="relative">
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={50}
                            slidesPerView={1}
                            navigation={{
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                            }}
                            pagination={{ clickable: true }}
                            scrollbar={{ draggable: true }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                        >
                            {
                                datas?.map((data, key) => {
                                    return (
                                        <SwiperSlide key={key}>
                                            <div className='flex items-center justify-center'>
                                                <Image src={data} alt='#' />
                                            </div>
                                        </SwiperSlide>
                                    );
                                })
                            }
                        </Swiper>
                        {/* Custom navigation buttons */}
                        <div className="swiper-button-prev custom-prev bg-gradient-to-r from-[#2A5675] to-blue-500 rounded-full p-8 ">

                        </div>
                        <div className="swiper-button-next custom-next bg-gradient-to-r from-[#2A5675] to-blue-500 rounded-full p-8 ">
                        </div>
                    </div>
                )
            }

        </>
    );
}

export default SliderEvent;
