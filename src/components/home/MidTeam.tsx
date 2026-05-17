'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { useRouter } from "next/navigation";

const data = [
    {
        image: "/images/image_34.jpg",
        name: "Emely Jonson",
        span: "manicure expart"
    },
    {
        image: "/images/image_35.png",
        name: "Arika Murray",
        span: "beautician"
    },
    {
        image: "/images/image_36.png",
        name: "Lola Jonson",
        span: "spa specialist"
    },
    {
        image: "/images/image_37.png",
        name: "Rose Marian",
        span: "massage expert"
    },
    {
        image: "/images/image_35.png",
        name: "Arika Murray",
        span: "beautician"
    },
    {
        image: "/images/image_36.png",
        name: "Lola Jonson",
        span: "spa specialist"
    },
]

export default function SwiperSlider() {
    const router = useRouter();
    return (
        <div className='mid-team'>
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
                            1360: { slidesPerView: 4 },

                        }}
                    >
                        {data.map((card, i) => (
                            <SwiperSlide key={i}>
                                <div className="card" onClick={() => router.push("/thong-tin-doi-ngu/1")}>

                                    <div className="card-contentt">
                                        <div className='div-author'>
                                            <img src={card.image} alt="" />
                                            <div className="light-effect"></div>

                                        </div>
                                        <div className='div-p'>
                                            <h3>{card.name}</h3>
                                            <span>{card.span}</span>
                                        </div>
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