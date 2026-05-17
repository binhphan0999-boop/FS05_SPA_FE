'use client'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import HomePosition from '../../components/home_position';
import { useRouter } from "next/navigation";

const slides = [
    {
        id: 1,
        label: "Spa & Beauty Center",
        title_1: 'Chăm sóc',
        title_2: 'toàn diện cơ thể',
        description: 'Với sự kết hợp hoàn hảo giữa yêu thương và chăm sóc, chúng tôi cam kết mang đến cho bạn trải nghiệm spa vượt trội tại thành phố của bạn.',
        image: '/images/carousel_1.jpg',
    },
    {

        id: 2,
        label: "Spa & Beauty Center",
        title_1: 'Spa thư giãn',
        title_2: 'Và phục hồi',
        description: 'Tất cả những điều bạn cần để tận hưởng một trải nghiệm spa tuyệt vời đều có tại Spa chúng tôi.',
        image: '/images/carousel_2.jpg',
    },
    {
        id: 3,
        label: "Spa & Beauty Center",
        title_1: 'Liệu pháp spa',
        title_2: 'chuyên nghiệp',
        description: 'Chúng tôi mong muốn mang đến cho bạn trải nghiệm tuyệt vời nhất, nơi mà bạn có thể thư giãn, phục hồi và tận hưởng cuộc sống toàn diện nhất.',
        image: '/images/carousel_3.jpg',
    },
]

export default function Carousel() {
    const router = useRouter();

    return (
        <div className="home-container-products">
            <div className="home-hightlight">
                <p>Chăm sóc da mặt</p>
                <h2>Điều trị da mặt & toàn thân</h2>
                <div><img src="/images/image_h.png" alt="" /></div>
            </div>

            <div
                className='module-boxs-one'
            >
                <div>
                    <div
                        className="module-boxs-one__boxs"
                    >
                        {slides.map((m, index) => (
                            <div
                                key={index}
                                className='module-boxs-one__boxs-box'
                                style={{
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = "scale(1.01)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = "scale(1)";
                                }}
                            >
                                <div
                                    className='module-boxs-one__boxs-box-container'
                                >

                                    <div className='container-outer'>
                                        <div className="outer-rotating-ring">
                                            <div className="inner-image-container">
                                                <img src="/images/image_f.png" alt="Avatar" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='arrow-shape'>
                                        <i className='arrow'></i>
                                        <i className='arrow'></i>
                                        <i className='arrow'></i>
                                        <i className='arrow'></i>
                                    </div>

                                    <div className='title'>
                                        <h3>Điều trị ánh sáng LED hiện đại</h3>
                                    </div>
                                    <div className='description'>
                                        <p>Sử dụng ánh sáng LED tiên tiến để kích thích sản xuất collogen, làm mờ nếp nhăn, giảm mụn và làm sạch sáng da</p>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* <div className='space-mockup'>
                <div className='curb-path'></div>
            </div> */}


            <div className='container-feature-t-full'>
                <div className='container-feature-t'>
                    <div className='feature-center'>
                        <div className='feature-container-full'>
                            <div className="feature-container">
                                <div className="floating image-box">
                                    <img src="/images/image_l.png" alt="Feature" style={{ width: "190px" }} />
                                </div>

                                <div className="image-main">
                                    <img src="/images/image_8.jpg" alt="Feature" />
                                </div>

                                <div className="floating-font text-box">
                                    <span className="rotated-text">feature</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='feature-container-all'>
                        <div className='feature-container-full_1'>
                            <div className='image-main_1'><img src="images/image_8.jpg" alt="" /></div>
                            <div className='feature-container-v'>
                                {/* <img className='image_left-l' src="/images/image_l.png" alt="" /> */}
                                <div className="floating image-box">
                                    <img src="/images/image_l.png" alt="Feature" style={{ width: "190px" }} />
                                </div>
                                <div className="floating-font text-box">
                                    <span className="rotated-text">feature</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='e-container-full'>
                        <div className='e-container-span'>
                            <span className='e-span'>Kinh nghiệm chăm sóc da</span>
                            <div className='div-span'><span className='y-span'>25 năm</span></div>
                        </div>

                        <div>
                            <h2 className='x-h'>Khám phá <span className='n-span'>mới</span></h2>
                        </div>

                        <div className='c-content'>
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

                                    <div
                                        onClick={() => router.push("/chuyen-gia")}
                                        className="circle-dashed"
                                    ><div className="arrow">→</div></div>

                                </div>

                                <div className="text">
                                    <p>
                                        Chúng tôi đến cho bạn một trải nghiệm thư giãn tuyệt vời và chăm sóc toàn diện
                                        cho cơ thể và tâm hồn.
                                    </p>
                                </div>


                            </div>

                            <div className='t-s-contnent'>
                                <p>Với dịch vụ spa chất lượng cao và nhân viên chuyên nghiệp, chúng tôi cam kết mang đến cho bạn những giây phút thư thái và đắm chìm trong không gian yên bình.</p>
                            </div>

                            <div>
                                <div className='p-tr_1'><p>Dịch vụ chất lượng cao và hiện đại nhất</p></div>
                                <div className='p-tr_2'><p>Spa chuyên nghiệp, thoải mái và sang trọng</p></div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <HomePosition />
                    </div>

                </div>

            </div>

        </div >
    )
}

