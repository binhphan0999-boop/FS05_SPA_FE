"use client";
import Link from "next/link";
import type { News } from "../../types/news.type";

interface Props {
  news: News
}

export default function NewsCard({
  news,
}: Props) {
  return (
    <div className="news-card">
      <div className="news-card-image">
        <img src={news.thumbnail} alt={news.title} />
      </div>

      <div className="news-card-info">
        <div className="news-card-meta">
          <span><i className="fa fa-user"></i> {news.comments[0]?.userName || 'Admin'}</span>
          <span><i className="fa fa-calendar"></i> {new Date(news.createdAt).toLocaleDateString('vi-VN')}</span>
          <span><i className="fa fa-comments"></i> {news.comments.length} Bình luận</span>
        </div>

        <h2 className="news-card-title">{news.title}</h2>

        <p className="news-card-desc">{news.summary || news.content.substring(0, 150)}...</p>

        <Link href={`/tin-tuc/${news.slug}`} className="news-card-link">
          ĐỌC THÊM <i className="fa fa-arrow-right"></i>
        </Link>
      </div>
    </div>
  )
}