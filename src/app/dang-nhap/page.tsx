"use client";

import {
  useState,
} from "react";

import {
  useRouter,
} from "next/navigation";

import {
  useAppDispatch,
  useAppSelector,
} from "@/store/hooks";

import {
  loginThunk,
} from "@/store/slices/auth/auth.thunk";

export default function LoginPage() {
  const router =
    useRouter();

  const dispatch =
    useAppDispatch();

  const {
    loading,
  } =
    useAppSelector(
      (state) =>
        state.auth,
    );

  const [
    formData,
    setFormData,
  ] = useState({
    email: "",
    password: "",
  });

  const [
    message,
    setMessage,
  ] = useState({
    type: "",
    text: "",
  });

  const handleChange = (
    e:
      React.ChangeEvent<HTMLInputElement>,
  ) => {
    setFormData(
      (
        prev,
      ) => ({
        ...prev,

        [
          e.target
            .name
        ]:
          e.target
            .value,
      }),
    );
  };

  const handleSubmit =
    async (
      e:
        React.FormEvent,
    ) => {
      e.preventDefault();

      setMessage({
        type: "",
        text: "",
      });

      const result =
        await dispatch(
          loginThunk(
            {
              email:
                formData.email,

              password:
                formData.password,
            },
          ),
        );

      /**
       * SUCCESS
       */
      if (
        loginThunk.fulfilled.match(
          result,
        )
      ) {
        console.log(
          "Login successful:",
          result.payload,
        );

        setMessage({
          type:
            "success",

          text:
            "Đăng nhập thành công!",
        });

        setTimeout(
          () => {
            router.push(
              "/",
            );
          },
          1000,
        );

        return;
      }

      /**
       * ERROR
       */
      setMessage({
        type: "error",

        text:
          (
            result.payload as any
          )
            ?.message ||
          "Sai email hoặc mật khẩu.",
      });
    };
    return (
        <div
            className="min-h-screen flex items-center justify-center px-[20px] py-[20px] relative overflow-hidden"
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
                className="relative z-10 w-full max-w-lg rounded-[35px] overflow-hidden"
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
                        Đăng nhập
                    </h2>

                    <div className="w-20 h-[3px] bg-[#9a563a] mx-auto mt-3 rounded-full mb-[20px]" />

                    <p className="mt-4 text-[#777] text-sm leading-6 ">
                        Chào mừng bạn quay trở lại với
                        <span className="font-semibold text-[#9a563a]">
                            {" "}MONA Spa
                        </span>
                        <br />
                        Hãy đăng nhập để trải nghiệm dịch vụ thư giãn đẳng cấp.
                    </p>
                </div>

                {/* Form */}
                <form
                    className="px-10 pb-10 pt-4"
                    onSubmit={handleSubmit}
                >
                    {/* Email */}
                    <div className="mb-5 mb-[10px]">
                        <label className="block text-sm font-semibold text-[#232b31] mb-2">
                            Email
                        </label>

                        <input
                            id="email"
                            name="email"
                            type="email"
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
                            px-[5px]
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
                    <div className="mb-5 mb-[20px]">
                        <label className="block text-sm font-semibold text-[#232b31] mb-2">
                            Mật khẩu
                        </label>

                        <input
                            id="password"
                            name="password"
                            type="password"
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
                            px-[5px]
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
                            className={`mb-5 rounded-2xl px-4 py-3 text-sm font-medium text-center ${message.type === "success"
                                ? "bg-green-100 text-green-700 border border-green-200"
                                : "bg-red-100 text-red-700 border border-red-200"
                                }`}
                        >
                            {message.text}
                        </div>
                    )}

                    {/* Forgot password */}
                    <div className="flex justify-end mb-[10px]">
                        <button
                            type="button"
                            className="text-sm text-[#9a563a] hover:underline"
                        >
                            Quên mật khẩu?
                        </button>
                    </div>

                    {/* Login button */}
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
                            ? "Đang đăng nhập..."
                            : "Đăng nhập"}
                    </button>

                    {/* Divider */}
                    <div className="flex items-center my-7">
                        <div className="flex-1 border-t border-[#e4d6cf]" />
                        <span className="px-4 text-[#999] text-sm">
                            hoặc
                        </span>
                        <div className="flex-1 border-t border-[#e4d6cf]" />
                    </div>

                    {/* Register */}
                    <div className="text-center">
                        <span className="text-[#777] text-sm">
                            Chưa có tài khoản?
                        </span>

                        <button
                            type="button"
                            onClick={() =>
                                router.push("/tao-tai-khoan")
                            }
                            className="
                            ml-[5px]
                            text-[#9a563a]
                            font-bold
                            hover:text-[#7e452c]
                            transition-colors
                        "
                        >
                            Đăng ký ngay
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}