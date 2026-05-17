"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CircleOne from "./circleOne";

const testimonials = [
    {
        name: "Linh Linh",
        title: "Khách hàng",
        message:
            "Da của tôi cảm thấy sảng khoái và mịn màng sau liệu trình. Tôi chắc chắn sẽ quay lại và khuyên bạn bè của tôi thử nghiệm dịch vụ spa tại đây.",
    },
    {
        name: "Mai Anh",
        title: "Khách hàng",
        message:
            "Mặt nạ dưỡng da sau đó đã làm da của tôi trở nên sáng hơn và mềm mịn hơn. Không chỉ vậy, không gian spa cũng rất sang trọng và tạo cảm giác thư thái. Tôi rất hài lòng với trải nghiệm của mình và sẽ quay lại lần sau.",
    },
    {
        name: "Bạch Ngân",
        title: "Khách hàng",
        message:
            "Không gian spa được thiết kế rất đẹp, mang đến một không gian yên tĩnh và thư thái. Tôi rất hài lòng với dịch vụ và sẽ quay lại lần sau.",
    },
];

export default function SwiperSlider() {
    const [index, setIndex] = useState(0);

    const handleNext = () => setIndex((prev) => (prev + 1) % testimonials.length);
    const handlePrev = () =>
        setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    return (
        <div>
            <div className=" text-center relative overflow-hidden  w-full min-h-[785px] md:h-[685px] bg-cover bg-center py-[100px]" style={{ backgroundImage: "url('/images/image_51.jpg')" }}>
                <p className="text-[#9a563a] tracking-[0.22em] uppercase font-medium mb-2 pb-[18px]">
                    Chăm sóc khách hàng
                </p>
                <h2 className="text-[48px] md:text-4xl font-bold text-gray-800">
                    Khách hàng đánh giá
                </h2>

                <div className="w-[120px] h-[120px] rounded-full bg-[#ffffff] mx-auto flex items-center justify-center text-white text-xl font-bold relative top-[60px] z-10">
                    <div className='c-img'><CircleOne image='/images/image_16.png' /></div>
                </div>

                <div className="px-[10px]">
                    <div className="relative max-w-[1200px] min-h-[340px] mx-auto bg-white shadow-xl rounded-lg px-[80px] pb-[50px] pt-[100px]">
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={handlePrev}>
                            <ChevronLeft className="w-6 h-6 text-gray-600 hover:text-rose-400 transition" />
                        </div>

                        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={handleNext}>
                            <ChevronRight className="w-6 h-6 text-gray-600 hover:text-rose-400 transition" />
                        </div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 0 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                {/* <div className="w-[120px] h-[120px] rounded-full bg-[#ffffff] mx-auto flex items-center justify-center text-white text-xl font-bold relative top-[-65px]">
                                <div className='c-img'><CircleOne image='/images/image_16.png' /></div>
                            </div> */}
                                <p className="text-[#555555] font-[500] text-lg leading-relaxed mb-6 text-[22px] tracking-[0.03em] leading-[35px]">
                                    {testimonials[index].message}
                                </p>
                                {/* <div className="text-rose-500 mb-2">
                                {[...Array(testimonials.length)].map((_, i) => (
                                    <span
                                        key={i}
                                        className={`inline-block w-2 h-2 mx-1 rounded-full transition-all duration-300 ${i === index ? "bg-rose-500 scale-125" : "bg-rose-200"
                                            }`}
                                    />
                                ))}
                            </div> */}
                                <div className='arrow-shape text-center mt-[20px]'>
                                    {[1, 2, 3, 4, 5].map(m => <i
                                        className='inline-block w-[14px] h-[14px] bg-[#9a563a] mr-[4px] opacity-100 transition-all duration-[400ms] ease-in-out'
                                        style={{
                                            clipPath: 'polygon(0 100%, 50% 0, 100% 100%, 50% 55%)',
                                        }}
                                    ></i>)}
                                    {/* <i className='arrow'></i>
                                <i className='arrow'></i>
                                <i className='arrow'></i>
                                <i className='arrow'></i> */}
                                </div>
                                <p className="text-lg font-semibold text-gray-900 mt-[5px]">
                                    {testimonials[index].name}
                                </p>
                                <p className="text-sm text-gray-800">{testimonials[index].title}</p>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    )
}