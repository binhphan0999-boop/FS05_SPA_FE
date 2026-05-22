"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import NewsCard from '../../components/tin-tuc/NewsCard';
import newsService from '../../services/tin-tuc/news.service';
import type { News } from '../../types/news.type';

import '../../styles/tin-tuc/news.css';

export default function NewsPage() {
  const [newsData, setNewsData] = useState<News[]>([]);
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

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

  const filteredNews = newsData.filter(news => 
    (news as any).title?.toLowerCase().includes(searchTerm.toLowerCase()) || 
    (news as any).desc?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* Banner hình ảnh Header */}
      <div
        className="banner"
        style={{
          backgroundImage: "url('/images/image_48.jpg')",
        }}
      >
        <div className="banner-content">
          <h1>TIN TỨC</h1>
          <div className="breadcrumb">
            <span onClick={() => router.push('/')} style={{cursor: 'pointer'}}>Trang chủ</span>
            <span>›</span>
            <span>Tin tức & Sự kiện</span>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="news-content-wrapper">
          <div className="news-grid">
            {filteredNews.map((news) => (
              <NewsCard
                key={news.id}
                news={news}
              />
            ))}
          </div>

          <aside className="news-sidebar">
            <div className="sidebar-widget">
              <h3>TÌM KIẾM</h3>
              <div className="sidebar-search">
                <input 
                  type="text" 
                  placeholder="Tìm tin tức..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <i className="fa fa-search"></i>
              </div>
            </div>

            <div className="sidebar-widget">
              <h3>BÀI VIẾT MỚI NHẤT</h3>
              <ul className="sidebar-categories">
                {newsData.slice(0, 5).map((item) => ( // Lấy 5 bài viết mới nhất
                  <li key={item.id}>
                    <a 
                      onClick={() => router.push(`/tin-tuc/${item.slug}`)}
                      className="sidebar-news-item"
                    >
                      <img src={item.thumbnail} alt={item.title} className="sidebar-news-thumbnail" />
                      <div className="sidebar-news-info">
                        <span className="sidebar-news-title">{item.title}</span>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}