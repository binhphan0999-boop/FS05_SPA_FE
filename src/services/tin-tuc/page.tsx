"use client";

import { useParams } from "next/navigation"
import { newsData } from "../data"

export default function NewsDetailPage() {
  const params = useParams()
  const id = params?.id

  const news = newsData.find(
    (item) => item.id === Number(id)
  )

  if (!news) {
    return <h1 style={{ textAlign: 'center', marginTop: '50px' }}>Không tìm thấy bài viết</h1>
  }

  return (
    <div className="news-detail-container" style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <div className="news-detail">
        <img
          src={news.image}
          alt={news.title}
          style={{ width: '100%', maxHeight: '500px', objectFit: 'cover', borderRadius: '8px' }}
        />

        <h1 style={{ marginTop: '24px', fontSize: '2.5rem' }}>{news.title}</h1>

        <p style={{ color: '#666', marginBottom: '20px' }}>Ngày đăng: {news.createdAt} | Tác giả: {news.author}</p>

        <div className="news-content" style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>{news.content}</div>
      </div>
    </div>
  )
}