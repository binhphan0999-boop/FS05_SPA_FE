'use client'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import axios from 'axios';
import { useEffect, useState } from 'react';
import serviceApiService from '../../services/dich-vu/service.service';
import type { Service } from '../../types/service.type';
import bookingService from './booking.service';

export default function SwiperSlider() {
    const [formData, setFormData] = useState({
        customerName: '',
        customerPhone: '',
        appointmentDate: '', // YYYY-MM-DD format
        startTime: '09:00', // Default to a reasonable start time
        endTime: '10:00',   // Default to a reasonable end time
        serviceId: '',
        note: '',
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const parseTimeToMinutes = (time: string): number | null => {
        const [hours, minutes] = time.split(':').map(Number);
        if (isNaN(hours) || isNaN(minutes)) return null;
        return hours * 60 + minutes;
    };

    const validateForm = () => {
        const newErrors: Record<string, string> = {};
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Reset time for date comparison

        if (!formData.customerName.trim()) newErrors.customerName = 'Họ tên không được để trống.';
        if (!formData.customerPhone.trim()) {
            newErrors.customerPhone = 'Số điện thoại không được để trống.';
        } else if (!/^0[35789]\d{8}$/.test(formData.customerPhone)) {
            newErrors.customerPhone = 'Số điện thoại không đúng định dạng (ví dụ: 0901234567).';
        }
        if (!formData.appointmentDate) {
            newErrors.appointmentDate = 'Ngày hẹn không được để trống.';
        } else {
            const selectedDate = new Date(formData.appointmentDate);
            selectedDate.setHours(0, 0, 0, 0); // Reset time for comparison
            if (selectedDate < today) {
                newErrors.appointmentDate = 'Không thể đặt lịch cho những ngày trong quá khứ.';
            }
        }
        if (!formData.startTime) newErrors.startTime = 'Giờ bắt đầu không được để trống.';
        if (!formData.endTime) newErrors.endTime = 'Giờ kết thúc không được để trống.';
        
        if (formData.startTime && formData.endTime) {
            const startMins = parseTimeToMinutes(formData.startTime);
            const endMins = parseTimeToMinutes(formData.endTime);
            
            if (startMins === null || endMins === null) {
                newErrors.time = 'Định dạng thời gian không hợp lệ.';
            } else if (endMins <= startMins) {
                newErrors.endTime = 'Giờ kết thúc phải sau giờ bắt đầu.';
            } else if (endMins - startMins < 15) {
                newErrors.time = 'Thời gian dịch vụ tối thiểu là 15 phút.';
            }

            // Spa operating hours validation
            const spaStartMins = parseTimeToMinutes('08:00');
            const spaEndMins = parseTimeToMinutes('22:00');
            if (startMins !== null && endMins !== null && spaStartMins !== null && spaEndMins !== null) {
                if (startMins < spaStartMins || endMins > spaEndMins) {
                    newErrors.time = `Spa chỉ hoạt động từ 08:00 đến 22:00.`;
                }
            }

            // Same day validation: must book at least 30 mins in advance
            const todayStr = new Date().toISOString().slice(0, 10);
            if (formData.appointmentDate === todayStr) {
                const now = new Date();
                const currentMinutes = now.getHours() * 60 + now.getMinutes();
                if (startMins !== null && startMins < currentMinutes + 30) {
                    newErrors.startTime = 'Vui lòng đặt lịch trước ít nhất 30 phút so với thời điểm hiện tại.';
                }
            }
        }
        if (!formData.serviceId) newErrors.serviceId = 'Vui lòng chọn dịch vụ.';
        setErrors(newErrors); return Object.keys(newErrors).length === 0;
    };

    const [services, setServices] = useState<Service[]>([]);

    useEffect(() => {
        serviceApiService.getServices()
            .then(setServices)
            .catch(() => {});
    }, []);

    useEffect(() => {
        const today = new Date();
        const yyyy = today.getFullYear();
        const mm = String(today.getMonth() + 1).padStart(2, '0'); // Months start at 0!
        const dd = String(today.getDate()).padStart(2, '0');
        setFormData(prev => ({ ...prev, appointmentDate: `${yyyy}-${mm}-${dd}` }));
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setErrors(prev => ({ ...prev, [name]: '' })); // Clear error when input changes
        if (name === 'startTime' || name === 'endTime') {
            setErrors(prev => ({ ...prev, time: '' })); // Clear general time error
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSuccessMessage(null);
        setErrorMessage(null);

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        try {
            const data = await bookingService.createBooking(formData);
            setSuccessMessage(data.message || 'Đặt lịch thành công!');
            setFormData({ customerName: '', customerPhone: '', appointmentDate: new Date().toISOString().slice(0, 10), startTime: '09:00', endTime: '10:00', serviceId: '', note: '', });
            setErrors({});
        } catch (error: any) {
            setErrorMessage(error.response?.data?.message || 'Có lỗi xảy ra khi đặt lịch. Vui lòng thử lại.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className='d-h-mid-advise'>
            <div>
                <div className='py-[50px] flex justify-center mx-[10px]'>
                    <div className="flex container-div-advise">
                        <div className='flex justify-center mb-[20px]' >
                            <div className="max-w-[560px] bg-white px-[50px] py-[60px] ">
                                <h2 className=" text-[40px] font-bold mb-[10px] leading-[1.2]">Đặt lịch hẹn</h2>
                                <p className="text-[18px] text-[#9a563a] mb-[18px] font-[500]">Khuyến mãi 10% khi đặt trước</p>

                                <form className="space-y-4" onSubmit={handleSubmit}>
                                    <input
                                        type="text"
                                        name="customerName"
                                        placeholder="HỌ TÊN*"
                                        className=" w-[100%] h-[70px] px-[25px] py-[20px] mb-[15px] bg-[#fde6d8] text-[#6f6c6c] text-[14px] font-[500] placeholder-[#6f6c6c] focus:outline-none focus:ring-rose-300 transition"
                                        value={formData.customerName}
                                        onChange={handleChange}
                                        disabled={isSubmitting}
                                    />
                                    {errors.customerName && <p className="text-red-500 text-sm -mt-3 mb-2">{errors.customerName}</p>}
                                    <input
                                        type="tel"
                                        name="customerPhone"
                                        placeholder="SỐ ĐIỆN THOẠ*"
                                        className="w-[100%] h-[70px] px-[25px] py-[20px] mb-[15px] bg-[#fde6d8] text-[#6f6c6c] text-[14px] font-[500] placeholder-[#6f6c6c] focus:outline-none focus:ring-rose-300 transition"
                                        value={formData.customerPhone}
                                        onChange={handleChange}
                                        disabled={isSubmitting}
                                    />
                                    {errors.customerPhone && <p className="text-red-500 text-sm -mt-3 mb-2">{errors.customerPhone}</p>}
                                    <input
                                        type="date"
                                        name="appointmentDate"
                                        className=" w-[100%] h-[70px] px-[25px] py-[20px] mb-[15px] bg-[#fde6d8] text-[#6f6c6c] text-[14px] font-[500] placeholder-[#6f6c6c] focus:outline-none focus:ring-rose-300 transition"
                                        value={formData.appointmentDate}
                                        onChange={handleChange}
                                        min={new Date().toISOString().split('T')[0]} // Prevent selecting past dates
                                        disabled={isSubmitting}
                                    />
                                    {errors.appointmentDate && <p className="text-red-500 text-sm -mt-3 mb-2">{errors.appointmentDate}</p>}
                                    <div className="flex gap-4 mb-[15px]">
                                        <input
                                            type="time"
                                            name="startTime"
                                            className="flex-1 h-[70px] px-[25px] py-[20px] bg-[#fde6d8] text-[#6f6c6c] text-[14px] font-[500] placeholder-[#6f6c6c] focus:outline-none focus:ring-rose-300 transition"
                                            value={formData.startTime}
                                            onChange={handleChange}
                                            disabled={isSubmitting}
                                        />
                                        <input
                                            type="time"
                                            name="endTime"
                                            className="flex-1 h-[70px] px-[25px] py-[20px] bg-[#fde6d8] text-[#6f6c6c] text-[14px] font-[500] placeholder-[#6f6c6c] focus:outline-none focus:ring-rose-300 transition"
                                            value={formData.endTime}
                                            onChange={handleChange}
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                    {(errors.startTime || errors.endTime || errors.time) && <p className="text-red-500 text-sm -mt-3 mb-2">{errors.startTime || errors.endTime || errors.time}</p>}
                                    <select
                                        name="serviceId"
                                        className=" w-[100%] h-[70px] px-[25px] py-[20px] mb-[15px] bg-[#fde6d8] text-[#6f6c6c] text-[14px] font-[500] placeholder-[#6f6c6c] focus:outline-none focus:ring-rose-300 transition"
                                        value={formData.serviceId}
                                        onChange={handleChange}
                                        disabled={isSubmitting}
                                    >
                                        <option value="">Chọn dịch vụ</option>
                                        {services.map((s) => (
                                            <option key={s.id} value={s.id}>
                                                {s.name} — {s.price} ({s.duration} phút)
                                            </option>
                                        ))}
                                    </select>
                                    {errors.serviceId && <p className="text-red-500 text-sm -mt-3 mb-2">{errors.serviceId}</p>}
                                    <textarea
                                        name="note"
                                        placeholder="GHI CHÚ (Tùy chọn)"
                                        className="w-[100%] h-[100px] px-[25px] py-[20px] mb-[15px] bg-[#fde6d8] text-[#6f6c6c] text-[14px] font-[500] placeholder-[#6f6c6c] focus:outline-none focus:ring-rose-300 transition resize-y"
                                        value={formData.note}
                                        onChange={handleChange}
                                        disabled={isSubmitting}
                                    ></textarea>

                                    {successMessage && <p className="text-green-600 text-center mt-4">{successMessage}</p>}
                                    {errorMessage && <p className="text-red-600 text-center mt-4">{errorMessage}</p>}

                                    <button type="submit" className='btn-1 w-[100%]' disabled={isSubmitting}>
                                        <span className='button-label py-[30px]'>{isSubmitting ? 'ĐANG ĐẶT LỊCH...' : 'ĐẶT LỊCH NGAY'}</span>
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