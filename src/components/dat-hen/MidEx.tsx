'use client'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const csdm = [
    {
        title: "Sóng siêu âm nạ thảo dược",
        price: "150k/50p",
        desc: "Kỹ thuật sóng siêu âm kết hợp với các thành phần thảo dược tự nhiên"
    },

    {
        title: "Sóng RF nạ thảo dược",
        price: "200k/50p",
        desc: "Áp dụng sóng RF cùng với các loại thảo dược"
    },

    {
        title: "Tiêu giảm thâm bọng mắt",
        price: "1500k/50p",
        desc: "Phương pháp giảm thâm bọng mắt độc đáo"
    },

    {
        title: "Xóa nhăn, chống lão hóa",
        price: "1500k/50p",
        desc: "Giúp loại bỏ nếp nhăn và ngăn ngừa quá trình lão hóa da"
    },

];

const cstt = [
    {
        title: "Rửa sạch mặt",
        price: "100k",
        desc: "Làm sạch da kỹ lưỡng giúp loại bỏ bụi bẩn và tạp chất"
    },

    {
        title: "Tẩy tết bào chết",
        price: "300k",
        desc: "Loại bỏ tế bào chết trên da, giúp da trở nên tươi mới"
    },

    {
        title: "Massage mặt",
        price: "400k",
        desc: "Giúp thư giãn cơ mặt, kích thích tuần hoàn máu"
    },

    {
        title: "Trị mụn và làm sáng da",
        price: "600k",
        desc: "Giúp điều trị mụn hiệu quả và làm sáng da"
    },

];

///
const csb = [
    {
        title: "Massage Full Body Đá Nóng Thụy Điển",
        price: "300k",
        desc: "Massage độc đáo kết hợp với đá nóng Thụy Điển"
    },

    {
        title: "Massage full body sáp nến",
        price: "290k",
        desc: "Massage sáp nến thơm ngát giúp thư giãn và làm dịu cơ thể"
    },

    {
        title: "Tẩy tế bào chết body",
        price: "400k",
        desc: "Loại bỏ tế bào chết trên cơ thể, giúp da sáng mịn và tươi mới"
    },

    {
        title: "Massage cổ vai gáy chuyên sâu",
        price: "399k",
        desc: "Massage chuyên sâu giúp giảm đau và căng thẳng"
    },

    {
        title: "Massage trị liệu đau nhức",
        price: "300k",
        desc: "Massage đặc biệt nhằm giảm đau và khôi phục cơ thể"
    },

];

const cst = [
    {
        title: "Đắp mặt nạ giấy",
        price: "40k",
        desc: null
    },

    {
        title: "Đắp mặt nạ thiên nhiên",
        price: "30k",
        desc: null
    },

    {
        title: "Mặt nạ đất",
        price: "10k",
        desc: null
    },

    {
        title: "Tẩy tế bào chết da đầu",
        price: "60k",
        desc: null
    },

    {
        title: "Thêm đá nóng",
        price: "20k",
        desc: null
    },
    {
        title: "Giác hơi đắp thuốc",
        price: "239k",
        desc: null
    },

]

export default function SwiperSlider() {
    return (
        <div className='d-h-mid-ex'>
            <div className='div-b-image flex justify-center'>
                {/* <div className='image-c'><img src="/images/image_39.png" alt="" /></div> */}
                <div className='container-t-c-o'>
                    <div className='title'>
                        <div className='ex-span-block'>
                            <span className='text-[#ffffff]'>Kinh nghiệm dịch vụ</span>
                            <span className='bg-[#9a563a] py-[6px] px-[20px] stracking-[0.22em] uppercase text-[#ffffff] ml-[20px]'>25 năm</span>
                        </div>
                        <h2>Dịch vụ chăm sóc</h2>
                    </div>
                    <div className='content'>
                        <div className='flex div-ex-dr mb-[10px]'>
                            <div className='table-1'>
                                <div>
                                    <div className='table-title'>
                                        <span>Chăm sóc làn da chống lão hóa</span>
                                        <h2>Chăm sóc da mặt</h2>
                                        <div className='div-img'>
                                            <img src="/images/image_40.png" alt="" />
                                        </div>
                                    </div>

                                    <div className='table-c'>
                                        <ul>
                                            {
                                                csdm.map(m => {
                                                    return <li>
                                                        <div>
                                                            <div className='c-price'>
                                                                <span className='c'>{m.title}</span>
                                                                <span className='p'></span>
                                                                <span className='price'>{m.price}</span>
                                                            </div>
                                                            <p>{m.desc}</p>
                                                        </div>
                                                    </li>
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>

                                <div style={{ marginTop: "20px" }}>
                                    <div className='table-title'>
                                        <span>Chăm sóc làn da chống lão hóa</span>
                                        <h2>Chăm sóc da mặt</h2>
                                        <div className='div-img'>
                                            <img src="/images/image_40.png" alt="" />
                                        </div>
                                    </div>

                                    <div className='table-c'>
                                        <ul>
                                            {
                                                cstt.map(m => {
                                                    return <li>
                                                        <div>
                                                            <div className='c-price'>
                                                                <span className='c'>{m.title}</span>
                                                                <span className='p'></span>
                                                                <span className='price'>{m.price}</span>
                                                            </div>
                                                            <p>{m.desc}</p>
                                                        </div>
                                                    </li>
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>


                            <div className='table-1'>
                                <div>
                                    <div className='table-title'>
                                        <span>Chăm sóc làn da chống lão hóa</span>
                                        <h2>Chăm sóc da mặt</h2>
                                        <div className='div-img'>
                                            <img src="/images/image_40.png" alt="" />
                                        </div>
                                    </div>

                                    <div className='table-c'>
                                        <ul>
                                            {
                                                csb.map(m => {
                                                    return <li>
                                                        <div>
                                                            <div className='c-price'>
                                                                <span className='c'>{m.title}</span>
                                                                <span className='p'></span>
                                                                <span className='price'>{m.price}</span>
                                                            </div>
                                                            <p>{m.desc}</p>
                                                        </div>
                                                    </li>
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>

                                <div style={{ marginTop: "20px" }}>
                                    <div className='table-title'>
                                        <span>Chuyên gia chăm sóc</span>
                                        <h2>MASSAGE BODY</h2>
                                        <div className='div-img'>
                                            <img src="/images/image_40.png" alt="" />
                                        </div>
                                    </div>

                                    <div className='table-c'>
                                        <ul>
                                            {
                                                cst.map(m => {
                                                    return <li>
                                                        <div>
                                                            <div className='c-price'>
                                                                <span className='c'>{m.title}</span>
                                                                <span className='p'></span>
                                                                <span className='price'>{m.price}</span>
                                                            </div>
                                                            <p>{m.desc}</p>
                                                        </div>
                                                    </li>
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='ml-[50px] flex items-center justify-center'>
                            <div className='max-w-[430px] py-[50px] px-[50px] mb-[30px] relative'>
                                <div className='fill-[#ffffff] absolute left-[0] bottom-[0] w-[100%] shape-line'>
                                    {/* <svg className='fill-[none] transform [transform:rotateX(180deg)]' viewBox='0 0 442 357'> */}
                                    <svg className='fill-[none]' viewBox='0 0 442 357'>
                                        <path className='shape-line fill-[#ffffff] absolute left-[0] bottom-[0] w-[100%]' d='M220.6 3C339.98 3 437.1 100.12 437.1 219.5V351.99H440.1V219.5C440.1 160.87 417.27 105.75 375.81 64.29C334.35 22.83 279.23 0 220.6 0C161.97 0 106.85 22.83 65.39 64.29C28.67 101.01 6.57 148.46 2 199.56H5.02C15.12 89.5 107.94 3 220.6 3Z'>

                                        </path>
                                        <path className='fill-[#ffffff]' d='M7 198.5C7 200.433 5.433 202 3.5 202C1.567 202 0 200.433 0 198.5C0 196.567 1.567 195 3.5 195C5.433 195 7 196.567 7 198.5Z'></path>
                                        <path className='fill-[#ffffff]' d='M442 353.5C442 355.433 440.433 357 438.5 357C436.567 357 435 355.433 435 353.5C435 351.567 436.567 350 438.5 350C440.433 350 442 351.567 442 353.5Z'></path>
                                    </svg>

                                </div>

                                {/* <div className="relative"> */}
                                <div className="text-shape absolute top-[26px] left-[0] right-[0] text-[36px] text-center">
                                    <svg viewBox="0 0 408 579" className='transform -scale-x-100 relative left-[18px]'>
                                        {/* <defs> */}
                                        <path
                                            id="iamgebox-shape2"
                                            d="M0 204C0 91.3339 91.3339 0 204 0V0C316.666 0 408 91.3339 408 204V316.879V375C408 487.666 316.666 579 204 579V579C91.3339 579 0 487.666 0 375V204Z"
                                        ></path>
                                        {/* </defs> */}
                                        <text className='fill-[#ffffff] font-[600]'>
                                            <textPath href="#iamgebox-shape2" startOffset="810" className=''>
                                                SẢN PHẨM ƯU ĐÃI NỔI BẬT
                                            </textPath>
                                        </text>
                                    </svg>
                                </div>
                                {/* </div> */}

                                <div className='bg-[#ffffff] rounded-[99999px] text-center pt-[35px] pb-[38px] relative'>
                                    <img className='px-[50px] pb-[40px]' src="/images/image_67.png" alt="" />
                                    <p className='text-[24px] uppercase mb-[8px] leading-[1] font-[500]'>FACE VITAMIN</p>
                                    <p className='text-[20px] text-[#9a563a] leading-[1] font-[500]'>220,000₫</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}