'use client'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import CircleOne from "./circleOne";

export default function SwiperSlider() {
    return (
        <div>
            <div className='mid-ex'>
                <div className='container-c'>
                    <div className='content-1'>
                        <div className='c-font'>
                            <h3>1. Tư vấn</h3>
                            <p>Nhân viên kinh nghiệm sẽ lắng nghe nhu cầu của bạn và đưa ra lời khuyên chuyên môn.</p>
                        </div>
                        <div className='c-img'><CircleOne image='/images/image_16.png' /></div>
                    </div>
                    <div className='content-1'>
                        <div className='c-font'>
                            <h3>2. Chăm sóc da</h3>
                            <p>Sử dụng sản phẩm chất lượng cao và kỹ thuật tiên tiến để tái tạo và cung cấp dưỡng chất cho làn da.</p>
                        </div>
                        <div className='c-img'><CircleOne image='/images/image_18.png' /></div>
                    </div>
                    <div className='content-1'>
                        <div className='c-font c-remove-margin'>
                            <h3>3. Massa thư giãn</h3>
                            <p>Kỹ thuật massage chuyên nghiệp và không gian yên tĩnh để giải tỏa căng thẳng và thư giãn.</p>
                        </div>
                        <div className='c-img'><CircleOne image='/images/image_19.png' /></div>
                    </div>
                </div>
                <div className='img-cor'> <img src="/images/image_17.png" alt="Avatar" /></div>

                <div className='container-c'>
                    <div className='content-2'>
                        <div className='c-img'><CircleOne image='/images/image_20.png' /></div>
                        <div className='c-font'>
                            <h3>4. Xông hơi thảo dược</h3>
                            <p>Xông hơi độc đáo để cân bằng năng lượng làm sạch cơ thể và cải thiện sức khỏe tổng thể.</p>
                        </div>

                    </div>
                    <div className='content-2'>
                        <div className='c-img'><CircleOne image='/images/image_21.png' /></div>
                        <div className='c-font'>
                            <h3>5. Chăm sóc toàn thân</h3>
                            <p>Làm móng tay và móng chân chuyên nghiệp để có đôi bàn tay và chân mềm mịn.</p>
                        </div>

                    </div>
                    <div className='content-2'>
                        <div className='c-img'><CircleOne image='/images/image_22.png' /></div>
                        <div className='c-font c-remove-margin'>
                            <h3>6. Phục hồi cơ thể</h3>
                            <p>Kích thích tuần hoàn và cải thiện sức khỏe tổng thể thông qua các liệu pháp tái tạo và phục hồi cơ thể.</p>
                        </div>

                    </div>
                </div>
            </div>

            <div className='mid-ex-1'>
                <div className='container-c pt-[50px] '>
                    <div className='content-1 mb-[50px] ex-padding'>
                        <div className='c-img'><CircleOne image='/images/image_16.png' /></div>
                        <div className='c-font text-center px-[10px]'>
                            <h3 className='text-[26px] my-[10px] hover:text-[#9a563a] cursor-pointer duration-300 ease-in-out'>1. Tư vấn</h3>
                            <p className='text-[#555555] leading-[1.63]'>Nhân viên kinh nghiệm sẽ lắng nghe nhu cầu của bạn và đưa ra lời khuyên chuyên môn.</p>
                        </div>
                    </div>

                    <div className='content-1  mb-[50px]'>
                        <div className='c-img'><CircleOne image='/images/image_18.png' /></div>
                        <div className='c-font text-center px-[10px]'>
                            <h3 className='text-[26px] my-[10px] hover:text-[#9a563a] cursor-pointer duration-300 ease-in-out'>2. Chăm sóc da</h3>
                            <p className='text-[#555555] leading-[1.63]'>Sử dụng sản phẩm chất lượng cao và kỹ thuật tiên tiến để tái tạo và cung cấp dưỡng chất cho làn da.</p>
                        </div>
                    </div>

                    <div className='content-1  mb-[50px]'>
                        <div className='c-img'><CircleOne image='/images/image_19.png' /></div>
                        <div className='c-font c-remove-margin text-center px-[10px]'>
                            <h3 className='text-[26px] my-[10px] hover:text-[#9a563a] cursor-pointer duration-300 ease-in-out'>3. Massa thư giãn</h3>
                            <p className='text-[#555555] leading-[1.63]'>Kỹ thuật massage chuyên nghiệp và không gian yên tĩnh để giải tỏa căng thẳng và thư giãn.</p>
                        </div>
                    </div>
                </div>

                <div className='container-c  pt-[50px]'>
                    <div className='content-2 mb-[50px]'>
                        <div className='c-img'><CircleOne image='/images/image_20.png' /></div>
                        <div className='c-font text-center px-[10px]'>
                            <h3 className='text-[26px] my-[10px] hover:text-[#9a563a] cursor-pointer duration-300 ease-in-out'>4. Xông hơi thảo dược</h3>
                            <p className='text-[#555555] leading-[1.63]'>Xông hơi độc đáo để cân bằng năng lượng làm sạch cơ thể và cải thiện sức khỏe tổng thể.</p>
                        </div>

                    </div>
                    <div className='content-2 mb-[50px]'>
                        <div className='c-img'><CircleOne image='/images/image_21.png' /></div>
                        <div className='c-font text-center px-[10px]'>
                            <h3 className='text-[26px] my-[10px] hover:text-[#9a563a] cursor-pointer duration-300 ease-in-out'>5. Chăm sóc toàn thân</h3>
                            <p className='text-[#555555] leading-[1.63]'>Làm móng tay và móng chân chuyên nghiệp để có đôi bàn tay và chân mềm mịn.</p>
                        </div>

                    </div>
                    <div className='content-2 mb-[50px]'>
                        <div className='c-img'><CircleOne image='/images/image_22.png' /></div>
                        <div className='c-font c-remove-margin text-center px-[10px]'>
                            <h3 className='text-[26px] my-[10px] hover:text-[#9a563a] cursor-pointer duration-300 ease-in-out'>6. Phục hồi cơ thể</h3>
                            <p className='text-[#555555] leading-[1.63]'>Kích thích tuần hoàn và cải thiện sức khỏe tổng thể thông qua các liệu pháp tái tạo và phục hồi cơ thể.</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}