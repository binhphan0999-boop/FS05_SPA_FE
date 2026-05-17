"use client";

import { useRouter } from "next/navigation";

// Định nghĩa kiểu props
interface ButtonBackProps {
    handleCreate?: () => void; // Mặc dù không được dùng, vẫn khai báo nếu được truyền vào
}

export default function ButtonBack({ handleCreate }: ButtonBackProps) {
    const router = useRouter();

    return (
        <div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button
                    style={{
                        marginRight: "10px",
                        backgroundColor: "#28A745",
                        color: "#fff",
                        border: "none",
                        padding: "10px",
                        fontSize: "14px",
                        fontWeight: "bold",
                        borderRadius: "50%",
                        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        outline: "none",
                        fontFamily: "serif",
                        textTransform: "uppercase",
                        lineHeight: "1",
                        width: "35px",
                        height: "35px",
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.opacity = "0.9";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.opacity = "1";
                    }}
                    onClick={() => router.back()}
                >
                    <i className="fa fa-undo" aria-hidden="true"></i>
                </button>
            </div>
        </div>
    );
}
