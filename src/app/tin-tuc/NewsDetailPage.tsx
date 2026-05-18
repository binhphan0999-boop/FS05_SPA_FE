"use client";

import { useParams } from "next/navigation"
import { newsData } from "./data"

import '../../styles/tin-tuc/news.css';

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
    <>
      <div className="news-detail-container">
        <div className="news-detail">
          <div className="news-detail-header">
            <h1 className="news-title-large">{news.title}</h1>
            <div className="news-meta">
              <span><i className="fa fa-user"></i> {news.author}</span>
              <span><i className="fa fa-calendar"></i> {news.createdAt}</span>
              <span><i className="fa fa-comments"></i> {(news as any).commentCount || 0} Bình luận</span>
            </div>
          </div>

          <img
            src={news.image}
            alt={news.title}
            className="news-detail-image"
          />

          <div className="news-full-content">
            {news.content}
          </div>
        </div>
      </div>
    </>
  )
}