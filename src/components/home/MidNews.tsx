'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { useRouter } from "next/navigation";
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const data = [
    {
        image: "/images/image_44.jpg",
        name: "Rose Marian",
        span: "allgemein",
        title: "The purpose of lorem ipsum",
    },
    {
        image: "/images/image_43.jpg",
        name: "Lola Jonson",
        span: "beauty",
        title: "From its medieval origins",
    },
    {
        image: "/images/image_41.jpg",
        name: "Emely Jonson",
        span: "beauty",
        title: "health by or through water",
    },
    {
        image: "/images/image_42.jpg",
        name: "Arika Murray",
        span: "allgemein",
        title: "Lorem ipsum is placeholder",
    },
];

export default function SwiperSlider() {
    const router = useRouter();
    return (
        <div className='mid-news'>
            <div className="containerone swiper">
                <div className="wrapper">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={0}
                        loop={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        pagination={{ clickable: true, dynamicBullets: true }}
                        navigation
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                    >
                        {data.map((card, i) => (
                            <SwiperSlide key={i}>
                                <div className="card">

                                    <div className="card-contentt">
                                        <div className='div-author'>
                                            <img src={card.image} alt="" onClick={() => router.push(`/tin-tuc/xem-them/${i + 1}`)} />
                                            <div className="light-effect"></div>

                                        </div>
                                        <div className='div-p cursor-default'>
                                            <h3 className='cursor-pointer' onClick={() => router.push(`/tin-tuc/xem-them/${i + 1}`)}>{card.title}</h3>
                                            <p className='cursor-default'>We think your skin should look and refshed matter Nourish your outer inner beauty with our</p>
                                        </div>
                                        <div className='span-year cursor-default'><p>BY Monamedia / 16 Tháng Ba, 2023</p></div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}