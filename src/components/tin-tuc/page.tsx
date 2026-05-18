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
    <div className="news-detail-container" style={{ padding: '60px 20px', maxWidth: '900px', margin: '0 auto' }}>
      <div className="news-detail">
        <img
          src={news.image}
          alt={news.title}
          style={{ width: '100%', maxHeight: '500px', objectFit: 'cover', borderRadius: '12px', marginBottom: '30px' }}
        />

        <h1 style={{ fontSize: '3rem', color: '#14213d', marginBottom: '20px' }}>{news.title}</h1>
        <p style={{ color: '#888', marginBottom: '30px', fontSize: '1rem' }}>Ngày đăng: {news.createdAt} | Tác giả: {news.author}</p>

        <div className="news-content" style={{ lineHeight: '2', fontSize: '1.2rem', color: '#333' }}>{news.content}</div>
      </div>
    </div>
  )
}
