"use client";

import { useEffect, useState } from 'react';
import NewsCard from '../../components/tin-tuc/NewsCard';
import newsService from '../../services/tin-tuc/news.service';
import type { News } from '../../types/news.type';

import '../../styles/tin-tuc/news.css';

export default function NewsPage() {
  const [newsData, setNewsData] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const data = await newsService.getNews();
        setNewsData(data);
      } catch (err) {
        console.error(err);
        setError('Không thể tải danh sách tin tức');
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return (
      <div className="news-page-container">
        <p style={{ textAlign: 'center', padding: '50px' }}>Đang tải...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="news-page-container">
        <p style={{ textAlign: 'center', padding: '50px', color: 'red' }}>{error}</p>
      </div>
    );
  }

  return (
    <div className="news-page-container">
      <h1 className="news-page-title">
        TIN TỨC & SỰ KIỆN
      </h1>

      <div className="news-grid">
        {newsData.map((news) => (
          <NewsCard
            key={news.id}
            news={news}
          />
        ))}
      </div>
    </div>
  );
}