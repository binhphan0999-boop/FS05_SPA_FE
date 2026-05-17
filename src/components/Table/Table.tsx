"use client";

import { useEffect, useState } from "react";
import { Pagination, Popconfirm, Empty } from "antd";

// Kiểu cho 1 cột table
interface ColumnType {
    key: string;
    name: string;
    column: string;
    type: string;
}

// Kiểu cho pagination
interface PaginationType {
    currentPage: number;
    pageSize: number;
    total: number;
}

// Kiểu cho 1 dòng dữ liệu (bạn có thể mở rộng thêm field nếu cần)
interface DataItemType {
    id: number | string;
    [key: string]: any; // Cho phép dữ liệu linh hoạt
}

// Props cho component
interface TableNewProps {
    data: DataItemType[];
    columnTable: ColumnType[];
    pagination: PaginationType;
    handleDelete: (item: DataItemType) => void;
    setRowTable: (rows: DataItemType[]) => void;
    handleUpdate: (id: number | string) => void;
}

export default function TableNew({
    data,
    columnTable,
    pagination,
    handleDelete,
    setRowTable,
    handleUpdate,
}: TableNewProps) {
    const styles: { [key: string]: React.CSSProperties } = {
        container: { width: '100%', position: 'relative', fontFamily: 'Arial, sans-serif', color: '#333' },
        paginationContainer: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2px' },
        paginationInfo: { paddingTop: "7px", fontSize: '16px', color: '#555' },
        pagination: { marginTop: '9px', marginBottom: "6px" },
        tableContainer: { width: '100%', overflow: 'auto', position: 'relative', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' },
        tableWrapper: { minWidth: '800px', position: 'relative', maxHeight: 'calc(100vh - 165px)', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' },
        table: { width: '100%', borderCollapse: 'collapse', tableLayout: 'fixed' },
        tableHeader: { fontFamily: "serif", fontSize: "18px", padding: '12px', border: '0.5px solid #a0a0a0', textAlign: 'center', fontWeight: 'bold', color: '#fff', backgroundColor: '#1B4F72', textTransform: "uppercase" },
        tableCell: { padding: '0px 12px', border: '0.5px solid #a0a0a0', textAlign: 'center', color: "#111" },
        buttonContainer: { display: 'flex', justifyContent: 'center', gap: '10px' },
        button: { width: '32px', height: '32px', borderRadius: '50%', color: '#fff', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background-color 0.3s, transform 0.3s', outline: 'none' },
        buttonUpdate: { backgroundColor: '#1200d4' },
        buttonDelete: { backgroundColor: '#A93226' },
        fixedColumn: { position: 'sticky' as const, right: '-1.5px', zIndex: 1, backgroundColor: '#1B4F72' },
        sttCell: { width: '60px', padding: '12px', border: '0.5px solid #a0a0a0', textAlign: 'center' },
        ttCell: { width: '150px', padding: '12px', border: '0.5px solid #a0a0a0', textAlign: 'center', textTransform: "uppercase" },
        tableCellOdd: { backgroundColor: "#fff" },
        tableCellEven: { backgroundColor: "#c0d9e9" },
        checkbox: { width: "16px", height: "16px" },
    };

    const [stt, setStt] = useState<number>(0);
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [isIOS, setIsIOS] = useState<boolean>(false);
    const [selectedIds, setSelectedIds] = useState<DataItemType[]>([]);

    const currentItems = data;

    useEffect(() => {
        const userAgent = navigator.userAgent || navigator.vendor;
        if (/android/i.test(userAgent)) {
            setIsMobile(true);
        } else if (/iPad|iPhone|iPod/.test(userAgent)) {
            setIsIOS(true);
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    }, []);

    useEffect(() => {
        return () => {
            window.speechSynthesis.cancel();
        };
    }, []);

    const handlePageChange = (page: number) => {
        // Handle page change here nếu cần
    };

    const toggleSelectAll = () => {
        if (selectedIds.length === currentItems.length) {
            setSelectedIds([]);
            setRowTable([]);
        } else {
            setSelectedIds(currentItems);
            setRowTable(currentItems);
        }
    };

    const toggleSelect = (item: DataItemType) => {
        if (selectedIds.some(m => m.id === item.id)) {
            const updated = selectedIds.filter(selected => selected.id !== item.id);
            setSelectedIds(updated);
            setRowTable(updated);
        } else {
            const updated = [...selectedIds, item];
            setSelectedIds(updated);
            setRowTable(updated);
        }
    };

    const cancel = (e?: React.MouseEvent<HTMLElement>) => {
        // cancel confirm
    };

    const handleText = (m: ColumnType, value: DataItemType) => {
        switch (m.type) {
            case "text":
                return (
                    <div style={{ flex: '1' }}>
                        <p style={{
                            margin: '5px 0',
                            fontSize: "18px",
                            display: '-webkit-box',
                            WebkitBoxOrient: 'vertical',
                            WebkitLineClamp: 2,
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            fontWeight: "bold",
                            fontFamily: "'Roboto', sans-serif",
                        }}>
                            {value[m.name]}
                        </p>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div style={styles.container}>
            <div style={{ ...styles.paginationContainer, justifyContent: isMobile ? "end" : "space-between" }}>
                {!isMobile && (
                    <div style={styles.paginationInfo}>
                        <div style={{
                            border: "1px solid #1B4F72",
                            borderRadius: "4px",
                            display: "flex",
                            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.15)",
                            background: "linear-gradient(135deg, #EAECEE, #F7F9F9)",
                            overflow: "hidden",
                            transition: "transform 0.3s ease-in-out",
                            cursor: "pointer",
                            marginBottom: "5px"
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.02)"}
                            onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1.0)"}
                        >
                            <div style={{
                                padding: "4px 10px",
                                fontSize: "14px",
                                borderRight: "1px solid #1B4F72",
                                textTransform: "uppercase",
                                fontFamily: "'Times New Roman', serif",
                                fontWeight: "600",
                                color: "#fff",
                                backgroundColor: "#1B4F72",
                            }}>
                                Hiển thị
                            </div>
                            <div style={{
                                padding: "4px 10px",
                                fontSize: "14px",
                                borderRight: "1px solid #1B4F72",
                                textTransform: "uppercase",
                                fontFamily: "'Times New Roman', serif",
                                fontWeight: "600",
                                color: "#1B4F72",
                            }}>
                                {pagination?.total > 0 ? 1 : 0}-{pagination?.pageSize}
                            </div>
                            <div style={{
                                padding: "4px 10px",
                                fontSize: "14px",
                                textTransform: "uppercase",
                                fontFamily: "'Times New Roman', serif",
                                fontWeight: "600",
                                color: "#1B4F72",
                            }}>
                                {pagination?.total}
                            </div>
                        </div>
                    </div>
                )}
                <Pagination
                    current={pagination?.currentPage ?? 1}
                    pageSize={pagination?.pageSize ?? 0}
                    total={pagination?.total ?? 0}
                    onChange={handlePageChange}
                    style={styles.pagination}
                />
            </div>

            <div style={styles.tableContainer}>
                <div style={styles.tableWrapper}>
                    <table style={styles.table}>
                        <thead style={{ position: 'sticky', top: "-1.5px", zIndex: 2 }}>
                            <tr>
                                <th style={{ ...styles.tableHeader, ...styles.sttCell }}>
                                    <input
                                        type="checkbox"
                                        onChange={toggleSelectAll}
                                        checked={selectedIds.length === currentItems.length && currentItems.length > 0}
                                        style={styles.checkbox}
                                    />
                                </th>
                                <th style={{ ...styles.tableHeader, ...styles.sttCell }}>STT</th>
                                {columnTable.map((m) => (
                                    <th key={m.key} style={styles.tableHeader}>{m.column}</th>
                                ))}
                                <th style={{ ...styles.tableHeader, ...styles.fixedColumn, ...styles.ttCell }}>Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentItems.map((item, index) => (
                                <tr key={item.id} style={index % 2 === 0 ? styles.tableCellEven : styles.tableCellOdd}>
                                    <td style={styles.tableCell}>
                                        <input
                                            type="checkbox"
                                            checked={selectedIds.some(m => m.id === item.id)}
                                            onChange={() => toggleSelect(item)}
                                            style={styles.checkbox}
                                        />
                                    </td>
                                    <td style={{ ...styles.sttCell, ...styles.tableCell }}>{stt + index + 1}</td>
                                    {columnTable.map(m => (
                                        <td key={m.key} style={styles.tableCell}>
                                            <div>{handleText(m, item)}</div>
                                        </td>
                                    ))}
                                    <td style={{ ...styles.tableCell, ...styles.fixedColumn }}>
                                        <div style={styles.buttonContainer}>
                                            <button
                                                onClick={() => handleUpdate(item.id)}
                                                style={{ ...styles.button, ...styles.buttonUpdate }}
                                                title="Cập nhật"
                                                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgb(49 29 255)')}
                                                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#1200d4')}
                                            >
                                                <i className="fa fa-pencil" aria-hidden="true"></i>
                                            </button>
                                            <Popconfirm
                                                title="Bạn chắc muốn xóa không?"
                                                onConfirm={() => handleDelete(item)}
                                                onCancel={cancel}
                                                okText="Đồng ý"
                                                cancelText="Hủy"
                                            >
                                                <button
                                                    style={{ ...styles.button, ...styles.buttonDelete }}
                                                    title="Xóa"
                                                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#E74C3C')}
                                                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#A93226')}
                                                >
                                                    <i className="fa fa-trash" aria-hidden="true"></i>
                                                </button>
                                            </Popconfirm>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {data.length === 0 && <Empty />}
                </div>
            </div>
        </div>
    );
}
