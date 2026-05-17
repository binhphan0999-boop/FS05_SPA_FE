'use client'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { useRouter } from "next/navigation";

export default function SwiperSlider() {
    const router = useRouter();
    return (
        <div className='mid-advise'>
            <div className='div-content'>
                <div className='div-c'>
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

                            <div onClick={() => router.push("/chuyen-gia")} className="circle-dashed"><div className="arrow">→</div></div>

                        </div>
                    </div>

                    <div className='title'><h2>Nhận tư vấn miễn phí</h2></div>

                    <div>
                        <div>
                            <button className='btn-1' onClick={() => router.push("/lien-he")}>
                                <span className='button-label'>Đăng ký</span>
                            </button>
                            <button className='btn'>
                                <span className='icon-right'><i className="fa fa-headphones" aria-hidden="true"></i></span> <span className='button-label'>Gọi ngay</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}