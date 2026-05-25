'use client'

import { useEffect, useState } from 'react';
import serviceApiService from '../../services/dich-vu/service.service';
import type { Service } from '../../types/service.type';

export default function ServiceList() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    serviceApiService.getServices()
      .then(setServices)
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-[80px]">
        <p className="text-[18px] text-[#9a563a]">Đang tải dịch vụ...</p>
      </div>
    );
  }

  if (error || services.length === 0) return null;

  return (
    <div className="py-[70px] px-[15px]">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-[50px]">
          <p className="text-[#9a563a] text-[16px] font-[500] uppercase tracking-widest mb-[10px]">Dịch vụ của chúng tôi</p>
          <h2 className="text-[36px] font-[600] leading-[1.2]">Các gói dịch vụ spa</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="overflow-hidden h-[250px]">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                />
              </div>
              <div className="p-[25px]">
                <span className="text-[13px] text-[#9a563a] font-[500] uppercase tracking-wider">
                  {service.category}
                </span>
                <h3 className="text-[22px] font-[600] mt-[8px] mb-[10px] leading-[1.3]">
                  {service.name}
                </h3>
                <p className="text-[14px] text-[#555555] leading-[1.6] mb-[15px] line-clamp-3">
                  {service.description}
                </p>
                <div className="flex items-center justify-between mb-[20px]">
                  <span className="text-[20px] font-[700] text-[#9a563a]">{service.price}</span>
                  <span className="text-[14px] text-[#888888] flex items-center gap-[6px]">
                    <i className="fa fa-clock-o" aria-hidden="true"></i>
                    {service.duration}
                  </span>
                </div>
                <a href="/dat-hen" className="btn-1 w-full block text-center">
                  <span className="button-label py-[18px] text-[13px]">ĐẶT LỊCH NGAY</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
