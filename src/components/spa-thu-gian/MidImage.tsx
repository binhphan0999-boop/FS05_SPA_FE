'use client'

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
];

type SwiperSliderProps = {
    title: string
}
export default function SwiperSlider() {
    return (
        <div className='flex justify-center my-[70px]'>
            {/* <div>
                <div className="flex">
                    <div>
                        <div className="flex">
                            <div className="mr-[30px] mb-[30px] overflow-hidden">
                                <img
                                    src="/images/image_53.jpg"
                                    alt=""
                                    className="transition-transform duration-300 ease-in-out hover:scale-110"
                                />
                            </div>
                            <div className="mr-[30px] mb-[30px] overflow-hidden">
                                <img
                                    src="/images/image_54.jpg"
                                    alt=""
                                    className="transition-transform duration-300 ease-in-out hover:scale-110"
                                />
                            </div>
                        </div>
                        <div className="mr-[30px] mb-[30px] overflow-hidden">
                            <img
                                src="/images/image_55.jpg"
                                alt=""
                                className="transition-transform duration-300 ease-in-out hover:scale-110"
                            />
                        </div>
                    </div>
                    <div className="overflow-hidden h-[836px]">
                        <img
                            src="/images/image_56.jpg"
                            alt=""
                            className="transition-transform duration-300 ease-in-out hover:scale-110"
                        />
                    </div>
                </div>
                <div className='flex'>
                    <div className="overflow-hidden mr-[30px] h-[836px]">
                        <img
                            src="/images/image_57.jpg"
                            alt=""
                            className="transition-transform duration-300 ease-in-out hover:scale-110"
                        />
                    </div>


                    <div>
                        <div className="mr-[30px] mb-[30px] overflow-hidden">
                            <img
                                src="/images/image_58.jpg"
                                alt=""
                                className="transition-transform duration-300 ease-in-out hover:scale-110"
                            />
                        </div>
                        <div className="flex">
                            <div className="mr-[30px] mb-[30px] overflow-hidden">
                                <img
                                    src="/images/image_59.jpg"
                                    alt=""
                                    className="transition-transform duration-300 ease-in-out hover:scale-110"
                                />
                            </div>
                            <div className="mr-[30px] mb-[30px] overflow-hidden">
                                <img
                                    src="/images/image_60.jpg"
                                    alt=""
                                    className="transition-transform duration-300 ease-in-out hover:scale-110"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div> */}


            <div>
                <div className="flex r-image-block">
                    <div>
                        <div className="flex r-image-block">
                            <div className="m-[15px] overflow-hidden">
                                <img
                                    src="/images/image_53.jpg"
                                    alt=""
                                    className="transition-transform duration-300 ease-in-out hover:scale-110"
                                />
                            </div>
                            <div className="m-[15px] overflow-hidden">
                                <img
                                    src="/images/image_54.jpg"
                                    alt=""
                                    className="transition-transform duration-300 ease-in-out hover:scale-110"
                                />
                            </div>
                        </div>
                        <div className="m-[15px] overflow-hidden r-image-size">
                            <img
                                src="/images/image_55.jpg"
                                alt=""
                                className="transition-transform duration-300 ease-in-out hover:scale-110"
                            />
                        </div>
                    </div>
                    <div className="overflow-hidden m-[15px]">
                        <img
                            src="/images/image_56.jpg"
                            alt=""
                            className="transition-transform duration-300 ease-in-out hover:scale-110"
                        />
                    </div>
                </div>
                <div className='flex r-image-block'>
                    <div className="overflow-hidden m-[15px]">
                        <img
                            src="/images/image_57.jpg"
                            alt=""
                            className="transition-transform duration-300 ease-in-out hover:scale-110"
                        />
                    </div>


                    <div>
                        <div className="m-[15px] overflow-hidden r-image-size">
                            <img
                                src="/images/image_58.jpg"
                                alt=""
                                className="transition-transform duration-300 ease-in-out hover:scale-110"
                            />
                        </div>
                        <div className="flex r-image-block">
                            <div className="m-[15px] overflow-hidden">
                                <img
                                    src="/images/image_59.jpg"
                                    alt=""
                                    className="transition-transform duration-300 ease-in-out hover:scale-110"
                                />
                            </div>
                            <div className="m-[15px] overflow-hidden">
                                <img
                                    src="/images/image_60.jpg"
                                    alt=""
                                    className="transition-transform duration-300 ease-in-out hover:scale-110"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}