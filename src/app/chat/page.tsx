// "use client";

// import axios from "axios";
// import { useState } from "react";

// export default function ChatPage() {
//   const [message, setMessage] = useState("");
//   const [messages, setMessages] = useState<any[]>([]);
//   const [loading, setLoading] = useState(false);

//   const handleSend = async () => {
//     if (!message.trim()) return;

//     const userMessage = {
//       role: "user",
//       text: message,
//     };

//     setMessages((prev) => [...prev, userMessage]);

//     const currentMessage = message;
//     setMessage("");
//     setLoading(true);

//     try {
//       const res = await axios.post(
//         "http://localhost:8000/api/chat/ask",
//         {
//           message: currentMessage,
//         }
//       );

//       setMessages((prev) => [
//         ...prev,
//         {
//           role: "ai",
//           text: res.data.data,
//         },
//       ]);
//     } catch (error) {
//       setMessages((prev) => [
//         ...prev,
//         {
//           role: "ai",
//           text: "Có lỗi xảy ra.",
//         },
//       ]);
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="max-w-2xl mx-auto p-5">
//       <h1 className="text-2xl font-bold mb-5">
//         AI Spa Assistant
//       </h1>

//       <div className="border rounded-lg h-[500px] overflow-y-auto p-4 mb-4">
//         {messages.map((item, index) => (
//           <div
//             key={index}
//             className={`mb-3 flex ${
//               item.role === "user"
//                 ? "justify-end"
//                 : "justify-start"
//             }`}
//           >
//             <div
//               className={`p-3 rounded-lg max-w-[80%] ${
//                 item.role === "user"
//                   ? "bg-blue-500 text-white"
//                   : "bg-gray-200"
//               }`}
//             >
//               {item.text}
//             </div>
//           </div>
//         ))}

//         {loading && (
//           <p>AI đang trả lời...</p>
//         )}
//       </div>

//       <div className="flex gap-2">
//         <input
//           className="border rounded p-3 flex-1"
//           value={message}
//           onChange={(e) =>
//             setMessage(e.target.value)
//           }
//           placeholder="Hỏi về da, skincare..."
//         />

//         <button
//           onClick={handleSend}
//           className="bg-black text-white px-5 rounded"
//         >
//           Gửi
//         </button>
//       </div>
//     </div>
//   );
// }

"use client";

import axios from "axios";
import { useState, KeyboardEvent } from "react";

type Message = {
  role: "user" | "ai";
  text: string;
};

export default function ChatPage() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "ai",
      text: "Xin chào ✨ Tôi là chuyên gia AI Spa. Hãy hỏi tôi về chăm sóc da, mụn, skincare, điều trị da hoặc sức khỏe làn da của bạn.",
    },
  ]);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!message.trim() || loading) return;

    const currentMessage = message.trim();

    const userMessage: Message = {
      role: "user",
      text: currentMessage,
    };

    setMessages((prev) => [
      ...prev,
      userMessage,
    ]);

    setMessage("");
    setLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:8000/api/chat/ask",
        {
          message: currentMessage,
        }
      );

      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text:
            res.data.data ||
            "Tôi chưa có câu trả lời phù hợp.",
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: "Hiện tại hệ thống AI đang bận. Vui lòng thử lại sau.",
        },
      ]);
    }

    setLoading(false);
  };

  const handleKeyDown = (
    e: KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <>
      <div className="spa-chat-page">
        <div className="spa-overlay" />

        <div className="spa-chat-container">
          {/* Header */}
          <div className="spa-header">
            <div>
              <span className="spa-badge">
                Luxury AI Assistant
              </span>

              <h1>
                AI Spa Consultant
              </h1>

              <p>
                Tư vấn chăm sóc da,
                skincare & sức khỏe
                làn da chuyên nghiệp
              </p>
            </div>

            <div className="online-status">
              <span className="dot" />
              Online
            </div>
          </div>

          {/* Chat */}
          <div className="chat-box">
            {messages.map(
              (item, index) => (
                <div
                  key={index}
                  className={`message-row ${
                    item.role ===
                    "user"
                      ? "user"
                      : "ai"
                  }`}
                >
                  <div
                    className={`message-bubble ${
                      item.role ===
                      "user"
                        ? "user-bubble"
                        : "ai-bubble"
                    }`}
                  >
                    {item.text}
                  </div>
                </div>
              )
            )}

            {loading && (
              <div className="message-row ai">
                <div className="message-bubble ai-bubble typing">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="chat-input-wrapper">
            <input
              value={message}
              onChange={(e) =>
                setMessage(
                  e.target.value
                )
              }
              onKeyDown={
                handleKeyDown
              }
              placeholder="Ví dụ: Da dầu có nên dùng Niacinamide?"
            />

            <button
              onClick={
                handleSend
              }
              disabled={
                loading
              }
            >
              {loading
                ? "Đang gửi..."
                : "Gửi"}
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .spa-chat-page {
          min-height: 100vh;
          background: linear-gradient(
            135deg,
            #050505 0%,
            #151515 40%,
            #27211c 100%
          );
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0px;
        }

        .spa-overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle at top right,
            rgba(
              212,
              175,
              55,
              0.12
            ),
            transparent 30%
          );
        }

        .spa-chat-container {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1000px;
          height: 76vh;
          border-radius: 35px;
          overflow: hidden;
          backdrop-filter: blur(
            30px
          );
          background: rgba(
            255,
            255,
            255,
            0.06
          );
          border: 1px solid
            rgba(
              255,
              255,
              255,
              0.12
            );
          box-shadow:
            0 20px 80px
              rgba(
                0,
                0,
                0,
                0.5
              ),
            inset 0 1px 0
              rgba(
                255,
                255,
                255,
                0.08
              );
          display: flex;
          flex-direction: column;
        }

        .spa-header {
          padding: 32px;
          border-bottom: 1px
            solid
            rgba(
              255,
              255,
              255,
              0.08
            );
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .spa-badge {
          display: inline-block;
          background: linear-gradient(
            to right,
            #d4af37,
            #f8e7a1
          );
          color: #000;
          font-weight: 700;
          padding: 8px 16px;
          border-radius: 999px;
          margin-bottom: 16px;
          font-size: 13px;
        }

        .spa-header h1 {
          color: white;
          font-size: 42px;
          margin: 0;
          font-weight: 700;
        }

        .spa-header p {
          color: rgba(
            255,
            255,
            255,
            0.65
          );
          margin-top: 8px;
        }

        .online-status {
          color: white;
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 600;
        }

        .dot {
          width: 10px;
          height: 10px;
          background: #28c76f;
          border-radius: 999px;
          box-shadow: 0 0 12px
            #28c76f;
        }

        .chat-box {
          flex: 1;
          overflow-y: auto;
          padding: 30px;
        }

        .message-row {
          display: flex;
          margin-bottom: 22px;
        }

        .message-row.user {
          justify-content: flex-end;
        }

        .message-row.ai {
          justify-content: flex-start;
        }

        .message-bubble {
          max-width: 75%;
          padding: 18px 22px;
          border-radius: 26px;
          line-height: 1.7;
          font-size: 15px;
          animation: fadeIn
            0.25s ease;
        }

        .user-bubble {
          background: linear-gradient(
            135deg,
            #d4af37,
            #b9912f
          );
          color: #111;
          font-weight: 500;
          border-bottom-right-radius: 8px;
        }

        .ai-bubble {
          background: rgba(
            255,
            255,
            255,
            0.08
          );
          color: white;
          border: 1px solid
            rgba(
              255,
              255,
              255,
              0.1
            );
          border-bottom-left-radius: 8px;
        }

        .chat-input-wrapper {
          padding: 25px;
          display: flex;
          gap: 14px;
          border-top: 1px solid
            rgba(
              255,
              255,
              255,
              0.08
            );
          background: rgba(
            0,
            0,
            0,
            0.25
          );
        }

        .chat-input-wrapper
          input {
          flex: 1;
          border: none;
          outline: none;
          border-radius: 18px;
          padding: 18px 22px;
          background: rgba(
            255,
            255,
            255,
            0.08
          );
          color: white;
          font-size: 15px;
        }

        .chat-input-wrapper
          input::placeholder {
          color: rgba(
            255,
            255,
            255,
            0.45
          );
        }

        .chat-input-wrapper
          button {
          border: none;
          padding: 0 34px;
          border-radius: 18px;
          cursor: pointer;
          background: linear-gradient(
            to right,
            #d4af37,
            #f3d57d
          );
          font-weight: 700;
          color: #111;
          transition: 0.3s;
        }

        .chat-input-wrapper
          button:hover {
          transform: translateY(
            -2px
          );
        }

        .typing {
          display: flex;
          gap: 6px;
          align-items: center;
        }

        .typing span {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: #fff;
          animation: bounce
            1.3s infinite;
        }

        .typing span:nth-child(
            2
          ) {
          animation-delay: 0.2s;
        }

        .typing span:nth-child(
            3
          ) {
          animation-delay: 0.4s;
        }

        @keyframes bounce {
          0%,
          80%,
          100% {
            transform: scale(
              0.8
            );
            opacity: 0.5;
          }
          40% {
            transform: scale(
              1.2
            );
            opacity: 1;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(
              10px
            );
          }
          to {
            opacity: 1;
            transform: translateY(
              0
            );
          }
        }

        @media (max-width: 768px) {
          .spa-header h1 {
            font-size: 30px;
          }

          .message-bubble {
            max-width: 90%;
          }

          .spa-chat-container {
            height: 95vh;
          }
        }
      `}</style>
    </>
  );
}