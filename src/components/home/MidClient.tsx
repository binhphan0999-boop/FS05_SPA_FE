'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const data = [
    {
        image: "/images/image_29.png",
        name: "Bạch Ngân"
    },
    {
        image: "/images/image_32.png",
        name: "Thùy Linh"
    },
    {
        image: "/images/image_31.png",
        name: "Như Nguyệt"
    },
    {
        image: "/images/image_32.png",
        name: "Hạ Ninh"
    },
    {
        image: "/images/image_30.png",
        name: "Tố Như"
    }
]

export default function SwiperSlider() {
    return (
        <div className='mid-client'>
            <div className='title-client'>
                <span>Chăm sóc khách hàng</span>
                <h2>Khách hàng đánh giá</h2>
            </div>
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
                            870: { slidesPerView: 2 },
                            1090: { slidesPerView: 3 },
                            1360: { slidesPerView: 3 },
                        }}
                    >
                        {data.map((card, i) => (
                            <SwiperSlide key={i}>
                                <div className="card">

                                    <div className="card-contentt">
                                        <div className='div-author'>
                                            <img src={card.image} alt="" />
                                        </div>
                                        <div className='div-p'>
                                            <i className='fa fa-quote-right'></i>
                                        </div>
                                        <div className='c-infor'>
                                            <div className='rating'>
                                                <i className='fa fa-star'></i>
                                                <i className='fa fa-star'></i>
                                                <i className='fa fa-star'></i>
                                                <i className='fa fa-star'></i>
                                                <i className='fa fa-star'></i>
                                            </div>
                                            <div className='div-content'>
                                                <p>Da của tôi cảm thấy sảng khoái và mịn màng sau liệu trình. Tôi chắc chắn sẽ quay lại và khuyên bạn bè của tôi thử nghiệm dịch vụ spa tại đây</p>
                                            </div>
                                            <div className='div-name'>
                                                <h3>{card.name}</h3>
                                            </div>
                                            <div className='div-client'><span>Khách hàng</span></div>
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