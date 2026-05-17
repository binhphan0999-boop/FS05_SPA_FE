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
        <div className='mid-take-care-of'>
            <div className='div-b-image'>
                <div className='image-c'><img src="/images/image_39.png" alt="" /></div>
                <div className='container-t-c-o'>
                    <div className='title'>
                        <span>Chăm sóc tận tâm, hoàn hảo</span>
                        <h2>Dịch vụ chăm sóc</h2>
                    </div>
                    <div className='container-content'>
                        <div className='content'>
                            <div className='tco-table'>
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
                            </div>

                            <div className='tco-table'>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}