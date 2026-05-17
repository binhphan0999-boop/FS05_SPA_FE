'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const data = [
    {
        image: "/images/image_11.jpg"
    },
    {
        image: "/images/image_12.jpg"
    },
    {
        image: "/images/image_13.jpg"
    },
    {
        image: "/images/image_14.jpg"
    },
    {
        image: "/images/image_15.jpg"
    }
]

export default function SwiperSlider() {
    return (
        <div className='mid-slider-one'>
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