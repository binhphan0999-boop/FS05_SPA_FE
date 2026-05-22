"use client";

import { useEffect, useState } from 'react';
import { useParams } from "next/navigation";
import newsService from '../../services/tin-tuc/news.service';
import type { News } from '../../types/news.type';

import '../../styles/tin-tuc/news.css';

export default function NewsDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const [news, setNews] = useState<News | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;

    const fetchNews = async () => {
      try {
        setLoading(true);
        const data = await newsService.getNewsBySlug(slug);
        setNews(data);
      } catch (err) {
        console.error(err);
        setError('Không thể tải bài viết');
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [slug]);

  if (loading) {
    return <div style={{ textAlign: 'center', marginTop: '50px' }}>Đang tải...</div>;
  }

  if (error || !news) {
    return <div style={{ textAlign: 'center', marginTop: '50px', color: 'red' }}>{error || 'Không tìm thấy bài viết'}</div>;
  }

  return (
    <>
      <div className="news-detail-container">
        <div className="news-detail">
          <div className="news-detail-header">
            <h1 className="news-title-large">{news.title}</h1>
            <div className="news-meta">
              <span><i className="fa fa-user"></i> {news.comments[0]?.userName || 'Admin'}</span>
              <span><i className="fa fa-calendar"></i> {new Date(news.createdAt).toLocaleDateString('vi-VN')}</span>
              <span><i className="fa fa-comments"></i> {news.comments.length} Bình luận</span>
            </div>
          </div>

          <img
            src={news.thumbnail}
            alt={news.title}
            className="news-detail-image"
          />

          <div className="news-full-content">
            {news.content}
          </div>
        </div>
      </div>
    </>
  );
}