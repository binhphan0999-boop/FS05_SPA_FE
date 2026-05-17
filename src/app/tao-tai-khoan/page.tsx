'use client';

import { useState } from 'react';
import { useRouter } from "next/navigation";

export default function RegisterPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        middleName: '',
        password: '',
        avatarUrl: '' // Required by backend API spec, but not a UI field
    });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({ type: '', text: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage({ type: '', text: '' }); // Clear previous messages

        try {
            const response = await fetch('http://localhost:8000/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok && result.success) { // Check response.ok for HTTP status codes
                setMessage({ type: 'success', text: 'Đăng ký thành công! Đang chuyển hướng...' });
                setTimeout(() => {
                    router.push('/dang-nhap');
                }, 2000);
            } else {
                // Use backend message if available, otherwise a generic error
                setMessage({ type: 'error', text: result.message || 'Đăng ký thất bại. Vui lòng thử lại.' });
            }
        } catch (error) {
            console.error('Registration error:', error);
            setMessage({ type: 'error', text: 'Có lỗi xảy ra. Vui lòng thử lại.' });
        } finally {
            setLoading(false);
        }
    };

    return (
    <div
        className="min-h-screen flex items-center justify-center px-[20px] py-[30px] relative overflow-hidden"
        style={{
            background:
                "linear-gradient(135deg, #f8f1eb 0%, #f3e7df 40%, #e9d4c8 100%)",
        }}
    >
        {/* Background Blur */}
        <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] bg-[#c89b7b]/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-100px] right-[-100px] w-[320px] h-[320px] bg-[#9a563a]/20 rounded-full blur-[100px]" />

        {/* Card */}
        <div
            className="relative z-10 w-full max-w-[700px] rounded-[35px] overflow-hidden"
            style={{
                background: "rgba(255,255,255,0.75)",
                backdropFilter: "blur(20px)",
                boxShadow:
                    "0 20px 80px rgba(154,86,58,0.15)",
                border: "1px solid rgba(154,86,58,0.15)",
                padding: "20px",
            }}
        >
            {/* Header */}
            <div className="px-10 pt-10 pb-[20px] text-center">
                <div className="flex justify-center mb-[10px]">
                    <img
                        src="/images/logo_m.png"
                        alt="MONA Spa"
                        className="w-[130px] object-contain"
                    />
                </div>

                <p className="uppercase tracking-[5px] text-[#9a563a] text-xs font-semibold pb-[20px]">
                    Luxury Spa Experience
                </p>

                <h2 className="text-[38px] font-bold text-[#232b31] mt-2 pb-[10px]">
                    Tạo tài khoản
                </h2>

                <div className="w-20 h-[3px] bg-[#9a563a] mx-auto mt-3 rounded-full mb-[20px]" />

                <p className="mt-4 text-[#777] text-sm leading-6">
                    Chào mừng bạn đến với
                    <span className="font-semibold text-[#9a563a]">
                        {" "}MONA Spa
                    </span>
                    <br />
                    Tạo tài khoản để tận hưởng trải nghiệm thư giãn đẳng cấp.
                </p>
            </div>

            {/* Form */}
            <form
                className="px-10 pb-10 pt-4"
                onSubmit={handleSubmit}
            >
                {/* Name Row */}
                <div className="grid md:grid-cols-2 gap-[15px] mb-[10px]">
                    {/* Họ */}
                    <div>
                        <label
                            htmlFor="lastName"
                            className="block text-sm font-semibold text-[#232b31] mb-2"
                        >
                            Họ
                        </label>

                        <input
                            id="lastName"
                            name="lastName"
                            type="text"
                            required
                            placeholder="Nhập họ..."
                            value={formData.lastName}
                            onChange={handleChange}
                            className="
                                w-full
                                h-[50px]
                                rounded-2xl
                                border
                                border-[#e5d3c8]
                                bg-white/70
                                px-[18px]
                                outline-none
                                transition-all
                                duration-300
                                text-[#232b31]
                                placeholder:text-[#aaa]
                                focus:border-[#9a563a]
                                focus:ring-4
                                focus:ring-[#9a563a]/10
                            "
                        />
                    </div>

                    {/* Tên đệm */}
                    <div>
                        <label
                            htmlFor="middleName"
                            className="block text-sm font-semibold text-[#232b31] mb-2"
                        >
                            Tên đệm
                        </label>

                        <input
                            id="middleName"
                            name="middleName"
                            type="text"
                            placeholder="Nhập tên đệm..."
                            value={formData.middleName}
                            onChange={handleChange}
                            className="
                                w-full
                                h-[50px]
                                rounded-2xl
                                border
                                border-[#e5d3c8]
                                bg-white/70
                                px-[18px]
                                outline-none
                                transition-all
                                duration-300
                                text-[#232b31]
                                placeholder:text-[#aaa]
                                focus:border-[#9a563a]
                                focus:ring-4
                                focus:ring-[#9a563a]/10
                            "
                        />
                    </div>
                </div>

                {/* First Name */}
                <div className="mb-[15px]">
                    <label
                        htmlFor="firstName"
                        className="block text-sm font-semibold text-[#232b31] mb-2"
                    >
                        Tên
                    </label>

                    <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        placeholder="Nhập tên..."
                        value={formData.firstName}
                        onChange={handleChange}
                        className="
                            w-full
                            h-[50px]
                            rounded-2xl
                            border
                            border-[#e5d3c8]
                            bg-white/70
                            px-[18px]
                            outline-none
                            transition-all
                            duration-300
                            text-[#232b31]
                            placeholder:text-[#aaa]
                            focus:border-[#9a563a]
                            focus:ring-4
                            focus:ring-[#9a563a]/10
                        "
                    />
                </div>

                {/* Email */}
                <div className="mb-[15px]">
                    <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-[#232b31] mb-2"
                    >
                        Email
                    </label>

                    <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        placeholder="email@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="
                            w-full
                            h-[50px]
                            rounded-2xl
                            border
                            border-[#e5d3c8]
                            bg-white/70
                            px-[18px]
                            outline-none
                            transition-all
                            duration-300
                            text-[#232b31]
                            placeholder:text-[#aaa]
                            focus:border-[#9a563a]
                            focus:ring-4
                            focus:ring-[#9a563a]/10
                        "
                    />
                </div>

                {/* Password */}
                <div className="mb-[20px]">
                    <label
                        htmlFor="password"
                        className="block text-sm font-semibold text-[#232b31] mb-2"
                    >
                        Mật khẩu
                    </label>

                    <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="new-password"
                        required
                        placeholder="••••••••"
                        value={formData.password}
                        onChange={handleChange}
                        className="
                            w-full
                            h-[50px]
                            rounded-2xl
                            border
                            border-[#e5d3c8]
                            bg-white/70
                            px-[18px]
                            outline-none
                            transition-all
                            duration-300
                            text-[#232b31]
                            placeholder:text-[#aaa]
                            focus:border-[#9a563a]
                            focus:ring-4
                            focus:ring-[#9a563a]/10
                        "
                    />
                </div>

                {/* Message */}
                {message.text && (
                    <div
                        className={`mb-5 rounded-2xl px-4 py-3 text-sm font-medium text-center ${
                            message.type === "success"
                                ? "bg-green-100 text-green-700 border border-green-200"
                                : "bg-red-100 text-red-700 border border-red-200"
                        }`}
                    >
                        {message.text}
                    </div>
                )}

                {/* Register button */}
                <button
                    type="submit"
                    disabled={loading}
                    className="
                        mb-[10px]
                        w-full
                        h-[52px]
                        rounded-2xl
                        text-white
                        font-semibold
                        text-[15px]
                        uppercase
                        tracking-[2px]
                        transition-all
                        duration-300
                        hover:scale-[1.02]
                        active:scale-[0.98]
                        disabled:opacity-50
                        disabled:cursor-not-allowed
                    "
                    style={{
                        background:
                            "linear-gradient(135deg, #9a563a 0%, #c08b65 100%)",
                        boxShadow:
                            "0 15px 30px rgba(154,86,58,0.25)",
                    }}
                >
                    {loading
                        ? "Đang tạo tài khoản..."
                        : "Tạo tài khoản"}
                </button>

                {/* Divider */}
                <div className="flex items-center my-7">
                    <div className="flex-1 border-t border-[#e4d6cf]" />
                    <span className="px-4 text-[#999] text-sm">
                        hoặc
                    </span>
                    <div className="flex-1 border-t border-[#e4d6cf]" />
                </div>

                {/* Login */}
                <div className="text-center">
                    <span className="text-[#777] text-sm">
                        Đã có tài khoản?
                    </span>

                    <button
                        type="button"
                        onClick={() =>
                            router.push("/dang-nhap")
                        }
                        className="
                            ml-[5px]
                            text-[#9a563a]
                            font-bold
                            hover:text-[#7e452c]
                            transition-colors
                        "
                    >
                        Đăng nhập ngay
                    </button>
                </div>
            </form>
        </div>
    </div>
);
}


