'use client'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'


export default function SwiperSlider() {
    return (
        <div className='d-h-mid-advise'>
            <div>
                <div className='py-[50px] flex justify-center mx-[10px]'>
                    <div className="flex container-div-advise">
                        <div className='flex justify-center mb-[20px]' >
                            <div className="max-w-[560px] bg-white px-[50px] py-[60px] ">
                                <h2 className=" text-[40px] font-bold mb-[10px] leading-[1.2]">Đặt lịch hẹn</h2>
                                <p className="text-[18px] text-[#9a563a] mb-[18px] font-[500]">Khuyến mãi 10% khi đặt trước</p>

                                <form className="space-y-4">
                                    <input
                                        type="text"
                                        placeholder="HỌ TÊN*"
                                        className=" w-[100%] h-[70px] px-[25px] py-[20px] mb-[15px] bg-[#fde6d8] text-[#6f6c6c] text-[14px] font-[500] placeholder-[#6f6c6c] focus:outline-none focus:ring-rose-300 transition"
                                    />

                                    <input
                                        type="email"
                                        placeholder="ĐỊA CHỈ EMAIL*"
                                        className="w-[100%] h-[70px] px-[25px] py-[20px] mb-[15px] bg-[#fde6d8] text-[#6f6c6c] text-[14px] font-[500] placeholder-[#6f6c6c] focus:outline-none focus:ring-rose-300 transition"
                                    />

                                    <input
                                        type="date"
                                        className=" w-[100%] h-[70px] px-[25px] py-[20px] mb-[15px] bg-[#fde6d8] text-[#6f6c6c] text-[14px] font-[500] placeholder-[#6f6c6c] focus:outline-none focus:ring-rose-300 transition"
                                    />

                                    <select
                                        className=" w-[100%] h-[70px] px-[25px] py-[20px] mb-[15px] bg-[#fde6d8] text-[#6f6c6c] text-[14px] font-[500] placeholder-[#6f6c6c] focus:outline-none focus:ring-rose-300 transition"
                                    >
                                        <option>Thời gian</option>
                                        <option>9:00 AM</option>
                                        <option>10:00 AM</option>
                                        <option>2:00 PM</option>
                                        <option>4:00 PM</option>
                                    </select>

                                    {/* <button
                                
                                    type="submit"
                                    className="w-full py-3 mt-4 bg-[#9C4F2C] text-white rounded-sm hover:bg-[#7f3f21] transition"
                                >
                                    ĐẶT LỊCH NGAY
                                </button> */}

                                    <button className='btn-1 w-[100%]'>
                                        <span className='button-label py-[30px]'>ĐẶT LỊCH NGAY</span>
                                    </button>
                                </form>
                            </div>
                        </div>

                        <div className='ml-[60px] max-w-[742px] div-margin-g'>
                            <h2 className='text-[40px] leading-[1.2em] font-[500] mb-[20px]'>Nhận tư vấn sức khỏe từ chuyên gia</h2>
                            <p className='mb-[18px] text-[#555555] leading-[1.63] font-[500]'>Chúng tôi hiểu rằng cuộc sống hiện đại đầy áp lực và căng thẳng, và việc giữ gìn sức khỏe và tinh thần trở nên vô cùng quan trọng. Spa của chúng tôi được thiết kế nhằm mang lại không chỉ sự thư giãn mà còn cả sự phục hồi và cân bằng cho cơ thể và tâm hồn của bạn. Với môi trường yên tĩnh, âm thanh dịu nhẹ và không gian thư giãn, chúng tôi tạo ra một bầu không khí lý tưởng để bạn có thể thả lỏng và giải tỏa căng thẳng.</p>
                            <div className='flex mb-[30px] div-i-block'>
                                <div className='flex'><i className="fa fa-envelope-o mr-[15px] text-[20px] text-[#9a563a] mt-[5px]" aria-hidden="true"></i> <span className='font-[500] text-[20px] hover:text[#9a563a]'>info@themona.global</span></div>
                                <div className='flex ml-[30px] div-margin-i'><i className="fa fa-phone mr-[15px] text-[20px] text-[#9a563a] mt-[7px]" aria-hidden="true"></i><span className='font-[500] text-[20px] hover:text[#9a563a]'>(+84) 0313-728-397</span></div>
                            </div>
                            <div className='flex w-[100%] div-image'>
                                <img src="/images/image_63.jpg" alt="" className='mr-[30px] w-[100%]' />
                                <img src="/images/image_64.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    )
}