'use client'

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
type SwiperSliderProps = {
    image: string
}
export default function SwiperSlider({ image }: SwiperSliderProps) {
    return (
        <div>
            <div className='home-circle-one'>
                <div className='container-outer'>
                    <div className="outer-rotating-ring">
                        <div className="inner-image-container">
                            <img src={image} alt="Avatar"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}