// "use client";

// import { useState } from "react";
// import axios from "axios";
// import { useRouter } from "next/navigation";

// export default function RegisterPage() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const router = useRouter();

//   const handleRegister = async () => {
//     try {
//       await axios.post("http://localhost:5001/api/auth/register", {
//         email,
//         password,
//       });
//       alert("Đăng ký thành công!");
//       router.push("/login");
//     } catch (err: any) {
//       alert("Lỗi: " + err.response?.data?.error || "Có lỗi xảy ra");
//     }
//   };

//   return (
//     <div className="p-8 max-w-md mx-auto">
//       <h1 className="text-2xl mb-4">Đăng ký</h1>
//       <input
//         className="w-full p-2 border mb-2"
//         placeholder="Email"
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         className="w-full p-2 border mb-2"
//         type="password"
//         placeholder="Password"
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button className="bg-blue-500 text-white px-4 py-2" onClick={handleRegister}>
//         Đăng ký
//       </button>
//     </div>
//   );
// }
