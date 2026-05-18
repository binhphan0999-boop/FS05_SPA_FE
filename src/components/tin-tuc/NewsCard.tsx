"use client";
import Link from "next/link";
import type { News } from "../../types/news";

interface Props {
  news: News
}

export default function NewsCard({
  news,
}: Props) {
  return (
    <div className="news-card">
      <div className="news-card-image">
        <img src={news.image} alt={news.title} />
      </div>

      <div className="news-card-info">
        <div className="news-card-meta">
          <span><i className="fa fa-user"></i> {news.author}</span>
          <span><i className="fa fa-calendar"></i> {news.createdAt}</span>
          <span><i className="fa fa-comments"></i> {(news as any).commentCount || 0} Bình luận</span>
        </div>

        <h2 className="news-card-title">{news.title}</h2>

        <p className="news-card-desc">{news.description}</p>

        <Link href={`/tin-tuc/${news.id}`} className="news-card-link">
          ĐỌC THÊM <i className="fa fa-arrow-right"></i>
        </Link>
      </div>
    </div>
  )
}