'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const data = [
    {
        image: "/images/image_23.png"
    },
    {
        image: "/images/image_24.png"
    },
    {
        image: "/images/image_25.png"
    },
    {
        image: "/images/image_26.png"
    },
    {
        image: "/images/image_27.png"
    },
    {
        image: "/images/image_28.png"
    },
    {
        image: "/images/image_23.png"
    }
]

export default function SwiperSlider() {
    return (
        <div className='mid-slider-one-one'>
            <div className="containerone swiper">
                <div className="wrapper">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        // spaceBetween={0}
                        loop={true}
                        // autoplay={{
                        //     delay: 5000,
                        //     disableOnInteraction: false,
                        //     pauseOnMouseEnter: true,
                        // }}
                        pagination={{ clickable: true, dynamicBullets: true }}
                        navigation
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            768: { slidesPerView: 4 },
                            1024: { slidesPerView: 6 },
                        }}
                    >
                        {data.map((card, i) => (
                            <SwiperSlide key={i}>
                                <div className="card">
                                    <div className="card-image">
                                        <img src={card.image} alt="..." className="card-img" />
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