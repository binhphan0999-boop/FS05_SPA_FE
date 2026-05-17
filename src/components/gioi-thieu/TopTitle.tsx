'use client'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

type SwiperSliderProps = {
    title: string
}
export default function SwiperSlider({ title }: SwiperSliderProps) {
    return (
        <div className="relative w-full h-[485px] md:h-[485px] bg-cover bg-center flex items-center" style={{ backgroundImage: "url('/images/image_48.jpg')" }}>
            {/* <div className="absolute"></div> */}
            <div className='w-[50%] mx-auto '>
                <div className="text-[#0E1D34] px-4">
                    <h1 className="text-[60px] md:text-5xl font-bold mb-[15px] uppercase">{title}</h1>
                    <p className="text-sm md:text-base tracking-wide">
                        <span className="text-[#555555] hover:text-[#9a563a] cursor-pointer tracking-[0.08em] text-[14px]">TRANG CHỦ</span> &nbsp;»&nbsp; <span className="font-semibold tracking-[0.08em] text-[14px] uppercase">{title}</span>
                    </p>
                </div>
            </div>
        </div>
    )
}