'use client'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { useEffect, useRef, useState } from 'react';


const images = ['/images/image_49.jpg', '/images/image_50.jpg', '/images/image_49.jpg'];
export default function SwiperSlider() {

    const [current, setCurrent] = useState(0);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

    useEffect(() => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(nextSlide, 4000);
        return () => clearTimeout(timeoutRef.current!);
    }, [current]);

    const linkHome = [
        {
            icon: "fa fa-angle-right",
            title: "Feature Support"
        },
        {
            icon: "fa fa-angle-right",
            title: "Expeort Care"
        },
        {
            icon: "fa fa-angle-right",
            title: "Brand Product"
        },
        {
            icon: "fa fa-angle-right",
            title: "Quite Enviorment"
        },
        {
            icon: "fa fa-angle-right",
            title: "Outstanding Look"
        },
        {
            icon: "fa fa-angle-right",
            title: "Pupular Service"
        },
    ]

    const itemFooter = [
        {
            icon: "fa fa-angle-right",
            title: "Relax Mind"
        },
        {
            icon: "fa fa-angle-right",
            title: "Face Oil Massage"
        },
        {
            icon: "fa fa-angle-right",
            title: "Body Massage"
        },
        {
            icon: "fa fa-angle-right",
            title: "Black Massage"
        },
        {
            icon: "fa fa-angle-right",
            title: "Outstanding Support"
        },
        {
            icon: "fa fa-angle-right",
            title: "Happy Customers"
        },
    ]
    return (
        <div className='in-top-hello max-w-[1300px] mx-auto px-[10px]'>
            <div className='flex justify-between mt-[80px] mb-[25px] top-hello-ct'>
                <div className='mt-[10px]'>
                    <span className='text-[16px] uppercase text-[#9a563a] mb-[18px] tracking-[0.22em]'>Chào mừng</span>
                    <h2 className='text-[48px]'>Làn da nên luôn tươi tắn và khỏe mạnh</h2>
                </div>
                <div>
                    <div className="experience-box">
                        <div className="circle">
                            <svg className="circle-text" viewBox="0 0 200 200">
                                <defs>
                                    <path
                                        id="textcircle"
                                        d="M 100, 100
                 m -75, 0
                 a 75,75 0 1,1 150,0
                 a 75,75 0 1,1 -150,0"
                                    />
                                </defs>
                                <text fill="#ffffff" fontSize="10" fontWeight="bold">
                                    <textPath style={{ fontSize: "22px", letterSpacing: "2.5px" }} href="#textcircle" startOffset="0%">
                                        how to make your makeup last all day
                                    </textPath>
                                </text>
                            </svg>

                            <div className="circle-dashed"><div className="arrow">→</div></div>

                        </div>
                    </div>
                </div>
            </div>

            <div>

                <div className="relative overflow-hidden w-full shadow-xl">
                    <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${current * 100}%)` }}>
                        {images.map((img, idx) => (
                            <div key={idx} className="min-w-full h-full">
                                <img src={img} alt={`slide-${idx}`} className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 -translate-y-1/2"
                    >
                        {/* <ChevronLeft className="w-6 h-6 text-gray-700 hover:bg-[#9a563a]" /> */}
                        <i className="fa fa-arrow-circle-o-left hover:text-[#9a563a] text-[30px] text-[#fff] transition duration-300 ease-in-out" aria-hidden="true"></i>
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2"
                    >
                        {/* <ChevronRight className="w-6 h-6 text-gray-700" /> */}
                        <i className="fa fa-arrow-circle-o-right hover:text-[#9a563a] text-[30px] text-[#fff] transition duration-300 ease-in-out" aria-hidden="true"></i>

                    </button>

                    {/* Indicators */}
                    {/* <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                        {images.map((_, idx) => (
                            <div
                                key={idx}
                                onClick={() => setCurrent(idx)}
                                className={`w-3 h-3 rounded-full cursor-pointer transition-all ${idx === current ? 'bg-white' : 'bg-white/50'
                                    }`}
                            />
                        ))}
                    </div> */}
                </div>

                <p className='text-[#555555] leading-[1.63] text-[20px] font-[500] pt-[30px]'>Chúng tôi nghĩ rằng da của bạn nên trông tươi tắn và sảng khoái. Nuôi dưỡng sắc đẹp bên trong và bên ngoài của bạn với những thành phần thiết yếu của chúng tôi.</p>
            </div>

            <div className='flex m-[auto] mt-[50px] mb-[50px] justify-between ex-mona'>
                <div className='max-w-[450px]'>
                    <h5 className=' font-["Roboto", Sans-serif] text-[36px] font-bold uppercase'>KHÁM PHÁ DỊCH VỤ</h5>
                    <h5 className=' font-["Roboto", Sans-serif] text-[36px] font-bold uppercase pb-[10px] text-[#9a563a]'>Mona Media</h5>
                    {/* <div className='w-[70px] border-b-2 border-[#9a563a] mb-[30px]'></div> */}
                    <div>
                        <p className='text-[#7a7a7a] font-[500] text-[18px]'>Tại đây, chúng tôi cung cấp các dịch vụ spa đa dạng, từ tẩy tế bào chết, mát-xa thư giãn đến mặt nạ dưỡng da toàn diện. Với sự kết hợp tuyệt vời giữa kỹ thuật chuyên nghiệp và sản phẩm chất lượng, chúng tôi cam kết đem đến cho bạn làn da mềm mịn, tươi trẻ và tinh thần thư thái.</p>
                    </div>

                    {/* <div>
                        <h2 className='text-[30px] text-[#ffffff]'>Hoạt động</h2>
                        <span className='text-[18px] text-[#A3A2A2]'>Thứ 2 đến thứ 6:</span><span className='text-[20px] text-[#ffffff] fond-bold pl-[10px]'>09:00 - 18:00</span>
                    </div> */}
                </div>

                <div className='max-w-[325px]'>
                    <h5 className=' text-[28px] font-bold pb-[10px]'>Sản phẩm làm đẹp</h5>
                    {/* <div className='w-[70px] border-b-2 border-[#9a563a] mb-[30px]'></div> */}
                    <div>
                        <ul>
                            {
                                linkHome.map(m => {
                                    return <li className='pb-[14px]'>
                                        <a href="" className='flex no-underline hover:no-underline'>
                                            <span className=' text-[18px] text-[#7a7a7a] transition-all duration-300 ease-in-out no-underline hover:text-[#9a563a]'>{m.title}</span>
                                        </a>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                </div>

                <div className='max-w-[325px]'>
                    <h5 className=' text-[28px] font-bold pb-[10px]'>Ưu đãi đa dạng</h5>
                    {/* <div className='w-[70px] border-b-2 border-[#9a563a] mb-[30px]'></div> */}
                    <div>
                        <ul>
                            {
                                itemFooter.map(m => {
                                    return <li className='pb-[14px]'>
                                        <a href="" className='flex no-underline hover:no-underline'>
                                            <span className='text-[18px] text-[#7a7a7a] transition-all duration-300 ease-in-out no-underline hover:text-[#9a563a]'>{m.title}</span>
                                        </a>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}