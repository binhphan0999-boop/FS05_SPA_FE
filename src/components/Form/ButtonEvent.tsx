"use client";

import { useState } from "react";
import { Modal } from "antd";
import { ExclamationCircleFilled } from "@ant-design/icons";

// Định nghĩa props type
interface ButtonEventProps {
  handleCreate: () => void;
  rowTable: any[]; // Nếu biết rõ kiểu dữ liệu của rowTable thì nên thay any[] bằng kiểu cụ thể hơn
  handleDelete: (rows: any[]) => void;
  showModalSearch: () => void;
}

export default function ButtonEvent({
  handleCreate,
  rowTable,
  handleDelete,
  showModalSearch,
}: ButtonEventProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    handleDelete(rowTable);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Modal
        title={
          <div>
            <ExclamationCircleFilled
              style={{ color: "#faad14", fontSize: "16px", marginRight: "5px" }}
            />{" "}
            Xác nhận
          </div>
        }
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Đồng ý"
        cancelText="Hủy"
        width={415}
      >
        <p>Bạn chắc chắn muốn xóa</p>
      </Modal>

      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        {/* Button Thêm */}
        <button
          style={{
            marginRight: "10px",
            backgroundColor: "#1B4F72",
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
          onClick={handleCreate}
        >
          <i className="fa fa-plus" aria-hidden="true"></i>
        </button>

        {/* Button Xóa */}
        <button
          style={{
            marginRight: "10px",
            backgroundColor: "#A93226",
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
            opacity: rowTable.length > 0 ? "1" : "0.5",
          }}
          disabled={rowTable.length > 0 ? false : true}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = rowTable.length > 0 ? "0.9" : "0.5";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = rowTable.length > 0 ? "1" : "0.5";
          }}
          onClick={showModal}
        >
          <i className="fa fa-trash-o" aria-hidden="true"></i>
        </button>

        {/* Button Tìm kiếm */}
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
          onClick={showModalSearch}
        >
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
}
