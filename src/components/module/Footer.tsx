'use client'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const linkShare = [
    {
        class: "e-font-icon-svg e-fab-facebook-f",
        d: "M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z",
        viewBox: "0 0 320 512"
    },
    {
        class: "e-font-icon-svg e-fab-twitter",
        d: "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z",
        viewBox: "0 0 512 512"
    },
    {
        class: "e-font-icon-svg e-fab-instagram",
        d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z",
        viewBox: "0 0 448 512"
    },
    {
        class: "e-font-icon-svg e-fab-linkedin-in",
        d: "M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z",
        viewBox: "0 0 448 512"
    }
];


const imona = [
    {
        icon: "fa fa-map-marker",
        title: "1063/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM"
    },
    {
        icon: "fa fa-phone",
        title: "(+84) 0313-728-397"
    },
    {
        icon: "fa fa-envelope",
        title: "info@themona.global"
    }
]

const linkHome = [
    {
        icon: "fa fa-angle-right",
        title: "Dịch vụ"
    },
    {
        icon: "fa fa-angle-right",
        title: "Giới thiệu"
    },
    {
        icon: "fa fa-angle-right",
        title: "Bảng giá"
    },
    {
        icon: "fa fa-angle-right",
        title: "Liên hệ"
    },
    {
        icon: "fa fa-angle-right",
        title: "Tin tức"
    },
]

const itemFooter = [
    {
        icon: "fa fa-angle-right",
        title: "SKINCARE"
    },
    {
        icon: "fa fa-angle-right",
        title: "MAKEUP"
    },
    {
        icon: "fa fa-angle-right",
        title: "FRAGRANCE"
    },
    {
        icon: "fa fa-angle-right",
        title: "HAIRCARE"
    },
    {
        icon: "fa fa-angle-right",
        title: "BATH & BODY"
    },
]
export default function SwiperSlider() {
    //filter dùng đê lọc, trả về một mảng các phần tử thỏa mãn điều kiện
    const filter_numbers = [1, 2, 3, 4, 5, 6];
    const filterArrays = filter_numbers.filter(f => f % 2 === 0);
    console.log("filterArrays: ", filterArrays);//[2,4,6]

    //every dùng để kiểm tra các phần tử trong mảng có thỏa mãn điều kiện không
    const every_numbers = [1, 2, 3, 4, 5];
    const everyValue = every_numbers.every(e => e > 0);
    console.log("everyValue: ", everyValue);//true

    //find dùng để tìm phần tử đầu tiên thỏa mãn điều kiện
    const find_numbers = [1, 3, 5, 6, 8];
    const findValue = find_numbers.find(num => num % 2 === 0);
    console.log("findValue: ", findValue);//6

    //findIndex dùng để biết vị trí của phần tử trong mảng theo điều kiện.
    const findIndex_numbers = [1, 3, 5, 6, 8];
    const firstEvenIndex = findIndex_numbers.findIndex(f => f % 2 === 0);
    console.log("firstEvenIndex: ", firstEvenIndex); // 3;

    //indexOf() dùng để lấy vị trí của phần tử trong mảng
    const fruits = ["apple", "banana", "orange", "banana"];
    console.log(fruits.indexOf("banana")); // 1

    //slice() dùng để lấy một phần của mảng 
    const slice_fruits = ["apple", "banana", "orange", "mango"];
    const someFruits = slice_fruits.slice(1, 3);
    console.log(someFruits); // ["banana", "orange"]
    console.log(slice_fruits);     // ["apple", "banana", "orange", "mango"]  -> mảng gốc không thay đổi

    //some() dùng điều kiện chỉ một phần tử thỏa mãn
    const numbers = [1, 2, 3, -4, 5];
    const hasNegative = numbers.some(num => num < 0);
    console.log(hasNegative); // true

    //splice() dùng để xóa một hoặc nhiều phần tử, thêm phần tử và thay thế phần tử


    // console.log(evenNumbers); // [2, 4, 6]
    return (
        <div>
            <div>

            </div>
            <div className='bg-[#232b31] footer-spa'>
                <div className='flex footer-share'>
                    <div className='px-[15px] py-[40px] border-b border-r border-[#9a563a] w-[35%] flex justify-center items-center footer-share-item'>
                        <ul className='flex'>
                            {
                                linkShare.map((m, index) => {
                                    return <li key={index} className='flex justify-center text-center items-start pt-0 pr-[8px] pb-0 pl-0 relative'>
                                        <a href="" className='flex justify-start text-left'>
                                            <div className='
                                        w-[55px] h-[55px] border border-[1px] border-[#BEBEBE] hover:border-[#9a563a]
                                         rounded-[59px] flex justify-center items-center
                                         transition-all duration-300 ease-in-out
                                         '
                                            >
                                                <svg
                                                    aria-hidden="true"
                                                    className={`${m.class} h-[18px]`}
                                                    viewBox={m.viewBox}
                                                    xmlns='http://www.w3.org/2000/svg'
                                                >
                                                    <path
                                                        className='fill-[#BEBEBE]'
                                                        d={m.d}></path>
                                                </svg>

                                            </div>
                                        </a>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                    <div className='border-b border-r border-[#9a563a] py-[50px] w-[30%] footer-share-item'>
                        <div className='flex justify-center items-center'>
                            <img src="/images/image_46.png" alt="" className='max-w-[270px] text-[#fff]' />
                        </div>
                    </div>
                    <div className='border-b border-[#9a563a] w-[35%] enter-input flex justify-center items-center footer-share-item'>
                        <div>
                            <h3 className='text-[18px] uppercase mb-[19px] text-[#ffffff] font-bold '>Bản tin mới nhất</h3>
                            <div>
                                <span className='text-[#ffffff]'><input className='text-[#ffffff] border-b border-[#9a563a] mb-[15px]' type="text" placeholder='Nhập email...' /></span>
                                <button className='btn-1'>
                                    <span className='button-label'>Đăng ký</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mx-auto flex justify-center'>
                    <div className='flex m-[auto] mt-[100px] mb-[100px] introduce-flex'>
                        <div className='flex introduce-item'>
                            <div className='max-w-[325px] mr-[80px] introduce-margin mb-[20px]'>
                                <h5 className='text-[#FFFFFF] font-["Roboto", Sans-serif] text-[24px] font-bold uppercase pb-[10px]'>giới thiệu Về MONA</h5>
                                <div className='w-[70px] border-b-2 border-[#9a563a] mb-[30px]'></div>
                                <div>
                                    <ul>
                                        {
                                            imona.map((m, index) => {
                                                return <li key={index} className='pb-[14px]'>
                                                    <a href="" className='flex no-underline hover:no-underline'>
                                                        <div><i className={`${m.icon} text-[#9a563a] text-[18px]`} aria-hidden="true"></i></div><span className='pl-[10px] text-[16px] font-bold text-[#A3A2A2] transition-all duration-300 ease-in-out no-underline hover:text-[#9a563a]'>{m.title}</span>
                                                    </a>
                                                </li>
                                            })
                                        }
                                    </ul>
                                </div>

                                <div>
                                    <h2 className='text-[30px] text-[#ffffff]'>Hoạt động</h2>
                                    <span className='text-[18px] text-[#A3A2A2]'>Thứ 2 đến thứ 6:</span><span className='text-[20px] text-[#ffffff] fond-bold pl-[10px]'>09:00 - 18:00</span>
                                </div>
                            </div>

                            <div className='max-w-[325px] mr-[80px] introduce-margin'>
                                <h5 className='text-[#FFFFFF] font-["Roboto", Sans-serif] text-[24px] font-bold uppercase pb-[10px]'>Liên kết</h5>
                                <div className='w-[70px] border-b-2 border-[#9a563a] mb-[30px]'></div>
                                <div>
                                    <ul>
                                        {
                                            linkHome.map((m, index) => {
                                                return <li key={index} className='pb-[14px]'>
                                                    <a href="" className='flex no-underline hover:no-underline'>
                                                        <div><i className={`${m.icon} text-[#9a563a] text-[18px]`} aria-hidden="true"></i></div><span className='pl-[10px] text-[16px] text-[#A3A2A2] transition-all duration-300 ease-in-out no-underline hover:text-[#9a563a]'>{m.title}</span>
                                                    </a>
                                                </li>
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className='flex introduce-item'>
                            <div className='max-w-[325px] mr-[80px] introduce-margin'>
                                <h5 className='text-[#FFFFFF] font-["Roboto", Sans-serif] text-[24px] font-bold uppercase pb-[10px]'>Danh mục</h5>
                                <div className='w-[70px] border-b-2 border-[#9a563a] mb-[30px]'></div>
                                <div>
                                    <ul>
                                        {
                                            itemFooter.map((m, index) => {
                                                return <li key={index}  className='pb-[14px]'>
                                                    <a href="" className='flex no-underline hover:no-underline'>
                                                        <div><i className={`${m.icon} text-[#9a563a] text-[18px]`} aria-hidden="true"></i></div><span className='pl-[10px] text-[16px] text-[#A3A2A2] transition-all duration-300 ease-in-out no-underline hover:text-[#9a563a]'>{m.title}</span>
                                                    </a>
                                                </li>
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>

                            <div className='max-w-[322px]'>
                                <h5 className='text-[#FFFFFF] font-["Roboto", Sans-serif] text-[24px] font-bold uppercase pb-[10px]'>Tin tức</h5>
                                <div className='w-[70px] border-b-2 border-[#9a563a] mb-[30px]'></div>
                                <div className='flex mb-[20px]'>
                                    <div className="w-[80px] h-[80px] overflow-hidden mr-[15px]">
                                        <img
                                            src="/images/image_44.jpg"
                                            alt=""
                                            className="w-[80px] h-[80px] transition-transform duration-300 ease-in-out hover:scale-120"
                                        />
                                    </div>
                                    <div className='flex items-center'>
                                        <div>
                                            <h4 className='font-bold text-[#ffffff] capitalize pb-[5px] text-[18px] leading-[26px] cursor-pointer hover:text-[#9a563a] transition-all duration-300 ease-in-out'>health by or through water</h4>
                                            <div className='flex'><div ><i className={`fa fa-calendar text-[#9a563a] text-[16px]`} aria-hidden="true"></i></div><span className='pl-[10px] text-[14px] font-bold text-[#A3A2A2] transition-all duration-300 ease-in-out no-underline hover:text-[#9a563a] uppercase mt-[2px] cursor-pointer'>16 Tháng Ba 2023</span></div>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex'>
                                    <div className="w-[80px] h-[80px] overflow-hidden mr-[15px]">
                                        <img
                                            src="/images/image_42.jpg"
                                            alt=""
                                            className="w-[80px] h-[80px] transition-transform duration-300 ease-in-out hover:scale-120"
                                        />
                                    </div>
                                    <div className='flex items-center'>
                                        <div>
                                            <h4 className='font-bold text-[#ffffff] capitalize pb-[5px] text-[18px] leading-[26px] cursor-pointer hover:text-[#9a563a] transition-all duration-300 ease-in-out'>health by or through water</h4>
                                            <div className='flex'><div ><i className={`fa fa-calendar text-[#9a563a] text-[16px]`} aria-hidden="true"></i></div><span className='pl-[10px] text-[14px] font-bold text-[#A3A2A2] transition-all duration-300 ease-in-out no-underline hover:text-[#9a563a] uppercase mt-[2px] cursor-pointer'>16 Tháng Ba 2023</span></div>
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