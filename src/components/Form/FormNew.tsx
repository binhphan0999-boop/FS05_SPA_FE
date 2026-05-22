"use client";
import React, { useState } from "react";
import { Button, Form, Input, Space, Upload, UploadFile } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import ButtonBack from "@/components/Form/ButtonBack";
import { useRouter } from "next/navigation";
import type { UploadChangeParam } from "antd/es/upload";
import type { RcFile } from "antd/es/upload/interface";

import '../../styles/san-pham/shop.css';

type ShirtFormValues = {
    name: string;
    description: string;
    desc1: string;
    desc2: string;
    desc3: string;
};

interface FormNewProps {
    form?: any;
    onFinish?: any;
    normFile?: any;
    handleUploadChange?: any;
    handleRemoveImage?: any;
    formCol?: any
}

export default function FormNew({
    form,
    onFinish,
    normFile,
    handleUploadChange,
    handleRemoveImage,
    formCol
}: FormNewProps) {
    const router = useRouter();
    // const [form] = Form.useForm<ShirtFormValues>();

    const handleFormItem = (value: any) => {
        switch (value.type) {

            case "text": {
                return <Form.Item
                    name={value.name}
                    label={value.label}
                    rules={[{ required: value.rules && value.rules.required, message: value.rules && value.rules.message }]}
                >
                    <Input placeholder={value.placeholder || ""} />
                </Form.Item>
            }

            case "image": {
                return (
                    <div key={value.key}>
                        <Form.Item
                            name={value.name}
                            label={value.label}
                            valuePropName="fileList"
                            getValueFromEvent={normFile}
                        >
                            <Upload
                                listType="picture"
                                beforeUpload={() => false}
                                onChange={handleUploadChange(
                                    value.setFileList,
                                    value.fileList
                                )}
                                fileList={
                                    value.fileList
                                        ? [
                                            {
                                                uid: "-1",
                                                name: value.fileList.split("/").pop() || "",
                                                status: "done",
                                                url: value.fileList,
                                            },
                                        ]
                                        : []
                                }
                                onRemove={() =>
                                    handleRemoveImage(value.fileList, value.setFileList)
                                }
                                maxCount={1}
                            >
                                <Button icon={<UploadOutlined />}>
                                    Click để tải ảnh lên
                                </Button>
                            </Upload>
                        </Form.Item>
                    </div>
                );
            }

            default: {
                return <div></div>
            }
        }
    }

    return (
        <>
            {/* Banner tương tự trang Sản phẩm */}
            <div
                className="banner"
                style={{
                    backgroundImage: "url('/images/image_48.jpg')",
                }}
            >
                <div className="banner-content">
                    <h1>THÊM MỚI</h1>
                    <div className="breadcrumb">
                        <span onClick={() => router.push('/')} style={{cursor: 'pointer'}}>Trang chủ</span>
                        <span>›</span>
                        <span>Quản lý nội dung</span>
                    </div>
                </div>
            </div>

            {/* Wrapper nội dung với style lơ lửng đè lên banner */}
            <div className="content">
                <div className="p-4" style={{ maxWidth: '1200px', margin: '0 auto', backgroundColor: '#fff', borderRadius: '15px', boxShadow: '0 10px 40px rgba(0,0,0,0.05)', marginTop: '-80px', position: 'relative', zIndex: 10 }}>
                    <ButtonBack />

                    <Form
                        form={form}
                        name="validateOnly"
                        layout="vertical"
                        onFinish={onFinish}
                        autoComplete="off"
                        style={{ marginTop: '20px' }}
                    >
                        {formCol.map((m: any) => {
                            return handleFormItem(m)
                        })}
                        <Form.Item style={{ display: "flex", justifyContent: "center", marginTop: '2rem' }}>
                            <Space size="large">
                                <Button type="primary" htmlType="submit" size="large" style={{ minWidth: '150px' }}>
                                    <i className="fa fa-plus" aria-hidden="true" style={{marginRight: '8px'}}></i> Thêm mới
                                </Button>
                                <Button htmlType="reset" size="large" style={{ minWidth: '150px' }}>
                                    <i className="fa fa-refresh" aria-hidden="true" style={{marginRight: '8px'}}></i> Làm mới
                                </Button>
                            </Space>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </>
    );
}
