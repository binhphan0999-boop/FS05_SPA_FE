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
        <div className='l-h-mid-adress mx-[20px]'>
            <div className='flex justify-center mx-[20px]'>
                <div className='mt-[70px] flex mid-contact-block'>
                    <div className='max-w-[750px] mr-[60px] mb-[20px] mid-contact-margin'>
                        <span className='uppercase text-[#9a563a] tracking-[0.22em] font-[500]'>Sẵn sàng lắng nghe</span>
                        <h1 className='mt-[10px] text-[48px] leading-[1.2] mb-[15px]'>GIẢI ĐÁP <span className='text-[#9a563a]'>THẮC MẮC</span></h1>
                        <p className='leading-[1.63] text-[#555555] font-[500] max-w-[500px] mb-[60px]'>Hãy sử dụng các thông tin liên lạc dưới đây hoặc điền vào biểu mẫu liên hệ để liên hệ với chúng tôi. Chúng tôi cam kết sẽ phản hồi lại bạn trong thời gian sớm nhất.</p>
                        <div>
                            <div>
                                <div className="max-w-[610px] bg-white px-[50px] py-[60px] flex justify-center">
                                    {/* <h2 className=" text-[40px] font-bold mb-[10px] leading-[1.2]">Đặt lịch hẹn</h2>
                                    <p className="text-[18px] text-[#9a563a] mb-[18px] font-[500]">Khuyến mãi 10% khi đặt trước</p> */}

                                    <form className="space-y-4">
                                        <input
                                            type="text"
                                            placeholder="HỌ TÊN*"
                                            className=" w-[100%] h-[70px] px-[25px] py-[20px] mb-[15px] bg-[#fde6d8] text-[#6f6c6c] text-[14px] font-[500] placeholder-[#6f6c6c] focus:outline-none focus:ring-rose-300 transition"
                                        />

                                        <input
                                            type="email"
                                            placeholder="ĐỊA CHỈ EMAIL*"
                                            className=" w-[100%] h-[70px] px-[25px] py-[20px] mb-[15px] bg-[#fde6d8] text-[#6f6c6c] text-[14px] font-[500] placeholder-[#6f6c6c] focus:outline-none focus:ring-rose-300 transition"
                                        />

                                        <input
                                            type="text"
                                            placeholder="TIÊU ĐỀ*"
                                            className=" w-[100%] h-[70px] px-[25px] py-[20px] mb-[15px] bg-[#fde6d8] text-[#6f6c6c] text-[14px] font-[500] placeholder-[#6f6c6c] focus:outline-none focus:ring-rose-300 transition"
                                        />

                                        <textarea
                                            placeholder="NỘI DUNG"
                                            className="w-[100%] h-[140px] px-[25px] py-[20px] mb-[15px] bg-[#fde6d8] text-[#6f6c6c] text-[14px] font-[500] placeholder-[#6f6c6c] focus:outline-none focus:ring-rose-300 transition"
                                        />

                                        <button className='btn-1 w-[100%] w-[100%]'>
                                            <span className='button-label py-[30px]'>LIÊN HỆ</span>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="min-h-screen bg-[#faf6f2] max-w-[600px]">
                            <div className=" mx-auto">
                                <div className="w-[600px] h-[410px]">
                                    <iframe
                                        src="https://www.google.com/maps?q=1073/23%20C%C3%A1ch%20M%E1%BA%A1ng%20Th%C3%A1ng%208,%20P.7,%20T%C3%A2n%20B%C3%ACnh,%20TP.HCM&output=embed"
                                        width="100%"
                                        height="100%"
                                        // className="rounded-lg"
                                        // allowFullScreen=""
                                        loading="lazy"
                                    ></iframe>
                                </div>

                                <div className="text-sm text-gray-700">
                                    <div className='flex py-[30px] border-b border-[#e9e0db]'>
                                        <span className="font-bold uppercase tracking-[0.18em] mb-1 text-[14px] font-[500]">Địa chỉ:</span>
                                        <p className="font-bold text-[16px] text-[#555555] font-[500] ml-[10px]">1063/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM</p>
                                    </div>



                                    <div className='flex py-[30px] border-b border-[#e9e0db]'>
                                        <span className="font-bold uppercase tracking-[0.18em] mb-1 text-[14px] font-[500]">Hoạt động:</span>
                                        <p className="font-bold text-[16px] text-[#555555] font-[500] ml-[10px] tracking-[0.18em]">09:00 - 18:00</p>
                                    </div>

                                    <div className='flex py-[30px]'>
                                        <span className="font-bold uppercase tracking-[0.18em] mb-1 text-[14px] font-[500] mt-[10px]">Liên hệ:</span>
                                        <p className="font-bold text-[30px] text-[#121f38] font-[500] ml-[10px]">(+84) 0313-728-397</p>
                                    </div>

                                    {/* <p className="font-bold uppercase tracking-wide mt-4 mb-1">Hoạt động:</p>
                                    <p>09:00 - 18:00</p>

                                    <p className="font-bold uppercase tracking-wide mt-4 mb-1">Liên hệ:</p>
                                    <p className="text-blue-700 text-xl font-semibold">
                                        (+84) 0313-728-397
                                    </p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}