"use client";

import React from "react";
import { Button, Form, Input, Space, Modal } from "antd";
import { useRouter } from "next/navigation";

// Định nghĩa props type
interface ShirtSearchProps {
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
  onFinishSearch: (values: { name: string }) => void;
}

export default function ShirtSearch({
  isModalOpen,
  setIsModalOpen,
  onFinishSearch,
}: ShirtSearchProps) {
  const router = useRouter();
  const [form] = Form.useForm();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="p-4">
      <Modal
        title="Tìm kiếm"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
      >
        <Form
          form={form}
          name="validateOnly"
          layout="vertical"
          onFinish={onFinishSearch}
          autoComplete="off"
        >
          <Form.Item
            name="name"
            label="Tên áo sơ mi"
            rules={[{ required: true, message: "Vui lòng nhập tên áo sơ mi!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item style={{ display: "flex", justifyContent: "flex-end" }}>
            <Space>
              <Button type="primary" htmlType="submit">
                Tìm kiếm
              </Button>
              <Button htmlType="reset" onClick={() => form.resetFields()}>
                Reset
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
