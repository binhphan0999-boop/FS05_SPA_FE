// "use client";

// import Image from "next/image";
// import { useRouter } from "next/navigation";

// import {
//     useAppDispatch,
//     useAppSelector,
// } from "@/store/hooks";

// import {
//     selectUser,
// } from "@/store/slices/auth/auth.selector";

// import {
//     logoutThunk,
// } from "@/store/slices/auth/auth.thunk";

// export default function ProfilePage() {
//     const router = useRouter();

//     const dispatch =
//         useAppDispatch();

//     const user =
//         useAppSelector(
//             selectUser
//         );

//     const handleLogout =
//         async () => {
//             try {
//                 await dispatch(
//                     logoutThunk()
//                 ).unwrap();

//                 router.push("/");
//             } catch (error) {
//                 console.error(error);
//             }
//         };

//     if (!user) {
//         return (
//             <div className="min-h-screen flex items-center justify-center">
//                 <div className="text-center">
//                     <h2 className="text-2xl font-bold text-[#232b31] mb-3">
//                         Bạn chưa đăng nhập
//                     </h2>

//                     <button
//                         onClick={() =>
//                             router.push(
//                                 "/dang-nhap"
//                             )
//                         }
//                         className="
//                             px-6
//                             h-[48px]
//                             rounded-2xl
//                             text-white
//                             font-semibold
//                         "
//                         style={{
//                             background:
//                                 "linear-gradient(135deg, #9a563a 0%, #c08b65 100%)",
//                         }}
//                     >
//                         Đăng nhập ngay
//                     </button>
//                 </div>
//             </div>
//         );
//     }

//     const fullName = [
//         user.lastName,
//         user.middleName,
//         user.firstName,
//     ]
//         .filter(Boolean)
//         .join(" ");

//     return (
//         <div
//             className="
//                 min-h-screen
//                 px-5
//                 py-10
//                 relative
//                 overflow-hidden
//             "
//             style={{
//                 background:
//                     "linear-gradient(135deg, #f8f1eb 0%, #f3e7df 40%, #ead7cc 100%)",
//             }}
//         >
//             {/* Background Blur */}
//             <div className="absolute top-[-120px] left-[-120px] w-[300px] h-[300px] rounded-full bg-[#9a563a]/10 blur-[100px]" />

//             <div className="absolute bottom-[-100px] right-[-100px] w-[280px] h-[280px] rounded-full bg-[#c08b65]/10 blur-[100px]" />

//             <div className="max-w-7xl mx-auto grid lg:grid-cols-[350px_1fr] gap-8 relative z-10">

//                 {/* SIDEBAR */}
//                 <div
//                     className="
//                         rounded-[35px]
//                         overflow-hidden
//                         p-8
//                     "
//                     style={{
//                         background:
//                             "rgba(255,255,255,0.72)",
//                         backdropFilter:
//                             "blur(20px)",
//                         border:
//                             "1px solid rgba(154,86,58,0.15)",
//                         boxShadow:
//                             "0 20px 80px rgba(154,86,58,0.12)",
//                     }}
//                 >
//                     <div className="flex flex-col items-center text-center">

//                         {/* Avatar */}
//                         <div
//                             className="
//                                 relative
//                                 w-[140px]
//                                 h-[140px]
//                                 rounded-full
//                                 overflow-hidden
//                                 border-[5px]
//                                 border-[#9a563a]/20
//                                 shadow-xl
//                             "
//                         >
//                             <Image
//                                 src={
//                                     user.avatarUrl ||
//                                     "/images/avatar-default.png"
//                                 }
//                                 alt="avatar"
//                                 fill
//                                 className="object-cover"
//                             />
//                         </div>

//                         <h2 className="text-[28px] font-bold text-[#232b31] mt-5">
//                             {fullName}
//                         </h2>

//                         <p className="text-[#777] text-sm mt-1">
//                             {user.email}
//                         </p>

//                         <div className="w-20 h-[3px] bg-[#9a563a] rounded-full my-5" />

//                         {/* Actions */}
//                         <div className="w-full space-y-4">

//                             <button
//                                 onClick={() =>
//                                     router.push(
//                                         "/ho-so/chinh-sua"
//                                     )
//                                 }
//                                 className="
//                                     w-full
//                                     h-[52px]
//                                     rounded-2xl
//                                     font-semibold
//                                     transition-all
//                                     duration-300
//                                     hover:scale-[1.02]
//                                 "
//                                 style={{
//                                     background:
//                                         "linear-gradient(135deg, #9a563a 0%, #c08b65 100%)",
//                                     color: "#fff",
//                                     boxShadow:
//                                         "0 12px 25px rgba(154,86,58,0.2)",
//                                 }}
//                             >
//                                 Chỉnh sửa hồ sơ
//                             </button>

//                             <button
//                                 onClick={() =>
//                                     router.push(
//                                         "/doi-mat-khau"
//                                     )
//                                 }
//                                 className="
//                                     w-full
//                                     h-[52px]
//                                     rounded-2xl
//                                     border
//                                     border-[#9a563a]/20
//                                     bg-white
//                                     text-[#9a563a]
//                                     font-semibold
//                                     transition-all
//                                     duration-300
//                                     hover:bg-[#f7efea]
//                                 "
//                             >
//                                 Đổi mật khẩu
//                             </button>

//                             <button
//                                 onClick={
//                                     handleLogout
//                                 }
//                                 className="
//                                     w-full
//                                     h-[52px]
//                                     rounded-2xl
//                                     border
//                                     border-red-200
//                                     bg-red-50
//                                     text-red-600
//                                     font-semibold
//                                     transition-all
//                                     duration-300
//                                     hover:bg-red-100
//                                 "
//                             >
//                                 Đăng xuất
//                             </button>
//                         </div>
//                     </div>
//                 </div>

//                 {/* CONTENT */}
//                 <div className="space-y-8">

//                     {/* Personal Info */}
//                     <div
//                         className="
//                             rounded-[35px]
//                             p-8
//                         "
//                         style={{
//                             background:
//                                 "rgba(255,255,255,0.72)",
//                             backdropFilter:
//                                 "blur(20px)",
//                             border:
//                                 "1px solid rgba(154,86,58,0.15)",
//                             boxShadow:
//                                 "0 20px 80px rgba(154,86,58,0.12)",
//                         }}
//                     >
//                         <h3 className="text-[30px] font-bold text-[#232b31] mb-8">
//                             Hồ sơ cá nhân
//                         </h3>

//                         <div className="grid md:grid-cols-2 gap-6">

//                             <InfoItem
//                                 label="Họ và tên"
//                                 value={fullName}
//                             />

//                             <InfoItem
//                                 label="Email"
//                                 value={user.email}
//                             />

//                             <InfoItem
//                                 label="Số điện thoại"
//                                 value={
//                                     // user.phoneNumber ||
//                                     "Chưa cập nhật"
//                                 }
//                             />

//                             <InfoItem
//                                 label="Địa chỉ"
//                                 value={
//                                     // user.address ||
//                                     "Chưa cập nhật"
//                                 }
//                             />

//                             <InfoItem
//                                 label="Giới tính"
//                                 value={
//                                     // user.gender ||
//                                     "Chưa cập nhật"
//                                 }
//                             />
//                         </div>
//                     </div>

//                     {/* Booking */}
//                     <div
//                         className="
//                             rounded-[35px]
//                             p-8
//                         "
//                         style={{
//                             background:
//                                 "rgba(255,255,255,0.72)",
//                             backdropFilter:
//                                 "blur(20px)",
//                             border:
//                                 "1px solid rgba(154,86,58,0.15)",
//                             boxShadow:
//                                 "0 20px 80px rgba(154,86,58,0.12)",
//                         }}
//                     >
//                         <h3 className="text-[28px] font-bold text-[#232b31] mb-6">
//                             Lịch hẹn gần đây
//                         </h3>

//                         <div className="text-[#777]">
//                             Chưa có lịch hẹn nào.
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// function InfoItem({
//     label,
//     value,
// }: {
//     label: string;
//     value?: string | null;
// }) {
//     return (
//         <div
//             className="
//                 rounded-3xl
//                 p-5
//                 bg-white/70
//                 border
//                 border-[#eaded7]
//             "
//         >
//             <p className="text-sm text-[#9b9b9b] mb-2">
//                 {label}
//             </p>

//             <h4 className="text-[18px] font-semibold text-[#232b31]">
//                 {value || "-"}
//             </h4>
//         </div>
//     );
// }

"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

// import "./profile.scss";

import {
    useAppDispatch,
    useAppSelector,
} from "@/store/hooks";

import {
    selectUser,
} from "@/store/slices/auth/auth.selector";

import {
    logoutThunk,
} from "@/store/slices/auth/auth.thunk";

export default function ProfilePage() {
    const router = useRouter();

    const dispatch =
        useAppDispatch();

    const user =
        useAppSelector(
            selectUser
        );

    const handleLogout =
        async () => {
            try {
                await dispatch(
                    logoutThunk()
                ).unwrap();

                router.push("/");
            } catch (error) {
                console.error(
                    error
                );
            }
        };

    if (!user) {
        return (
            <div className="notLoginWrapper">
                <div className="notLoginCard">
                    <h2>
                        Bạn chưa đăng nhập
                    </h2>

                    <button
                        onClick={() =>
                            router.push(
                                "/dang-nhap"
                            )
                        }
                    >
                        Đăng nhập ngay
                    </button>
                </div>
            </div>
        );
    }

    const fullName = [
        user.lastName,
        user.middleName,
        user.firstName,
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <div className="profile-container">
            <div className="profilePage">
                {/* Background Blur */}
                <div className="blurTop" />

                <div className="blurBottom" />

                <div className="container">
                    {/* Sidebar */}
                    <aside className="sidebar">
                        <div className="avatarWrapper">
                            <Image
                                src={
                                    user.avatarUrl ||
                                    "/images/avatar-default.png"
                                }
                                alt="Avatar"
                                fill
                                className="avatar"
                            />
                        </div>

                        <h2 className="name">
                            {fullName}
                        </h2>

                        <p className="email">
                            {user.email}
                        </p>

                        <div className="divider" />

                        <div className="actionGroup">
                            <button
                                className="primaryBtn"
                                onClick={() =>
                                    router.push(
                                        "/ho-so/chinh-sua"
                                    )
                                }
                            >
                                Chỉnh sửa hồ sơ
                            </button>

                            <button
                                className="secondaryBtn"
                                onClick={() =>
                                    router.push(
                                        "/doi-mat-khau"
                                    )
                                }
                            >
                                Đổi mật khẩu
                            </button>

                            <button
                                className="logoutBtn"
                                onClick={
                                    handleLogout
                                }
                            >
                                Đăng xuất
                            </button>
                        </div>
                    </aside>

                    {/* Content */}
                    <section className="content">
                        <div className="card">
                            <h3 className="title">
                                Hồ sơ cá nhân
                            </h3>

                            <div className="infoGrid">
                                <InfoItem
                                    label="Họ và tên"
                                    value={
                                        fullName
                                    }
                                />

                                <InfoItem
                                    label="Email"
                                    value={
                                        user.email
                                    }
                                />

                                <InfoItem
                                    label="Số điện thoại"
                                    value="Chưa cập nhật"
                                />

                                <InfoItem
                                    label="Địa chỉ"
                                    value="Chưa cập nhật"
                                />

                                <InfoItem
                                    label="Giới tính"
                                    value="Chưa cập nhật"
                                />
                            </div>
                        </div>

                        <div className="card">
                            <h3 className="title">
                                Lịch hẹn gần đây
                            </h3>

                            <div className="emptyBooking">
                                Chưa có lịch hẹn nào.
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

function InfoItem({
    label,
    value,
}: {
    label: string;
    value?: string | null;
}) {
    return (
        <div className="infoCard">
            <p className="infoLabel">
                {label}
            </p>

            <h4 className="infoValue">
                {value || "-"}
            </h4>
        </div>
    );
}