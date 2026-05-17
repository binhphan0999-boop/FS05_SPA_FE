'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { motion } from 'framer-motion'
import './Carousel.scss' // import file scss riêng

const slides = [
    {
        id: 1,
        title: 'Khám phá dịch vụ tuyệt vời',
        description: 'Chúng tôi mang đến trải nghiệm cao cấp cho khách hàng.',
        image: '/banner1.jpg',
    },
    {
        id: 2,
        title: 'Chăm sóc khách hàng tận tâm',
        description: 'Đặt lịch ngay để được phục vụ tốt nhất.',
        image: '/banner2.jpg',
    },
    {
        id: 3,
        title: 'Ưu đãi hấp dẫn tháng này',
        description: 'Đừng bỏ lỡ cơ hội đặt lịch và nhận khuyến mãi.',
        image: '/banner3.jpg',
    },
]

export default function Carousel() {
    return (
        <div>
            <div className="carousel-container">
                <Swiper
                    modules={[Autoplay, Pagination, Navigation]}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    navigation
                    loop
                    className="swiper-container"
                >
                    {slides.map((slide) => (
                        <SwiperSlide key={slide.id}>
                            <div
                                className="slide"
                                style={{ backgroundImage: `url(${slide.image})` }}
                            >
                                <div className="overlay">
                                    <div className="content">
                                        <motion.h1
                                            initial={{ x: -100, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ duration: 1 }}
                                            className="title"
                                        >
                                            {slide.title}
                                        </motion.h1>
                                        <motion.p
                                            initial={{ x: 100, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ duration: 1, delay: 0.3 }}
                                            className="description"
                                        >
                                            {slide.description}
                                        </motion.p>
                                        <motion.button
                                            initial={{ y: 50, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ duration: 1, delay: 0.6 }}
                                            className="btn"
                                        >
                                            Đặt lịch ngay
                                        </motion.button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div>
                <div><img src="/"></img></div>
            </div>
        </div>
    )
}
