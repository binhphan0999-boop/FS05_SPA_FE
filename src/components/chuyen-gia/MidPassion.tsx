'use client'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function SwiperSlider() {
    return (
        <div className='flex justify-center mt-[20px]'>
            <div className='max-w-[1400px] px-[10px]'>
                <div className='flex cg-ktsr-block'>
                    <div className='mb-[30px] mr-[30px] div-margin'><img src="/images/image_61.jpg" alt="" /></div>
                    <div className='mb-[30px]'><img src="/images/image_62.jpg" alt="" /></div>
                </div>

                <p className='text-[16px] font-[500] text-[#7a7a7a] mb-[30px]'>Tại spa của chúng tôi, chúng tôi coi trọng việc xây dựng một đội ngũ chuyên gia vững chắc và đồng lòng. Những thành viên trong đội ngũ của chúng tôi đều có trình độ chuyên môn cao và kinh nghiệm thực tiễn đáng kể, đảm bảo rằng bạn sẽ được phục vụ bởi những người có kỹ năng và sự hiểu biết sâu rộng về các phương pháp chăm sóc spa.</p>
                <p className='text-[16px] font-[500] text-[#7a7a7a]'>Chúng tôi luôn đặt mục tiêu đào tạo và phát triển đội ngũ của mình để cung cấp cho bạn những liệu pháp và liệu trình tốt nhất. Đội ngũ chuyên gia của chúng tôi không ngừng nỗ lực để nắm bắt những xu hướng mới nhất trong ngành spa và áp dụng những phương pháp tiên tiến và hiệu quả nhất để mang lại sự thư giãn và tái tạo cho bạn.</p>
            </div>
        </div>
    )
}