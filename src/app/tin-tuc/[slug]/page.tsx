"use client";

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { message } from 'antd';
import newsService from '../../../services/tin-tuc/news.service';
import type { News } from '../../../types/news.type';

import '../../../styles/tin-tuc/news.css';

export default function NewsDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug as string;

  const [messageApi, contextHolder] = message.useMessage();

  const [news, setNews] = useState<News | null>(null);
  const [loading, setLoading] = useState(true);
  const [latestNews, setLatestNews] = useState<News[]>([]);
  const [commentContent, setCommentContent] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const fetchNewsDetail = async (silent = false) => {
    try {
      if (!silent) setLoading(true);
      // Lấy toàn bộ tin tức và tìm bài viết có slug tương ứng
      const allNews = await newsService.getNews();
      const detail = allNews.find((n: News) => n.slug === slug);
      setNews(detail || null);
      // Lấy 5 bài viết mới nhất cho sidebar
      setLatestNews(allNews.slice(0, 5));
    } catch (err) {
      console.error("Lỗi khi tải chi tiết tin tức:", err);
    } finally {
      if (!silent) setLoading(false);
    }
  };

  useEffect(() => {
    if (slug) fetchNewsDetail();
  }, [slug]);

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentContent.trim() || !news) return;

    setSubmitting(true);
    try {
      const newComment = {
        content: commentContent.trim(),
        userName: "Khách hàng",
        userEmail: "khachhang@example.com", // BE yêu cầu email, tạm thời để mặc định nếu chưa có input
        slug: slug, // BE dùng slug để xác định bài viết thay vì newsId
      };

      console.log("Đang gửi bình luận:", newComment);

      // Kết nối với POST ở BE thực tế
      const response = await fetch(`http://localhost:8000/api/v1/comments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newComment),
      });

      if (!response.ok) {
        // Đọc nội dung lỗi từ server để debug
        const errorBody = await response.text();
        console.error("Server Error Response:", {
          status: response.status,
          statusText: response.statusText,
          body: errorBody
        });
        
        throw new Error(`Server trả về lỗi: ${response.status} - ${response.statusText}`);
      }

      // Cập nhật lại UI
      setCommentContent('');
      setSubmitted(true); // Quan trọng: Phải gọi trước hoặc song song với fetchNewsDetail
      await fetchNewsDetail(true); // Cập nhật dữ liệu ngầm, không hiện loading
      messageApi.success('Cảm ơn bạn đã để lại bình luận!');
    } catch (error) {
      console.error("Lỗi khi gửi bình luận:", error);
      messageApi.error(error instanceof Error ? error.message : 'Có lỗi xảy ra khi gửi bình luận. Vui lòng thử lại.');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return <div className="content"><p className="text-center py-20">Đang tải nội dung...</p></div>;
  if (!news) return <div className="content"><p className="text-center py-20">Không tìm thấy bài viết này.</p></div>;

  return (
    <>
      {contextHolder}
      {/* Banner đồng bộ */}
      <div className="banner" style={{ backgroundImage: "url('/images/image_48.jpg')" }}>
        <div className="banner-content">
          <h1>TIN TỨC</h1>
          <div className="breadcrumb">
            <span onClick={() => router.push('/')} style={{cursor: 'pointer'}}>Trang chủ</span>
            <span>›</span>
            <span onClick={() => router.push('/tin-tuc')} style={{cursor: 'pointer'}}>Tin tức</span>
            <span>›</span>
            <span>Chi tiết bài viết</span>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="news-content-wrapper">
          {/* Nội dung bài viết bên trái */}
          <article className="news-detail-container" style={{ flex: 7 }}>
            <div className="news-detail-image">
              <img src={news.thumbnail} alt={news.title} style={{ width: '100%', borderRadius: '20px', marginBottom: '30px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
            </div>

            <div className="news-card-meta" style={{ marginBottom: '20px', justifyContent: 'flex-start' }}>
              <span><i className="fa fa-user"></i> {news.comments[0]?.userName || 'Admin'}</span>
              <span><i className="fa fa-calendar"></i> {new Date(news.createdAt).toLocaleDateString('vi-VN')}</span>
              <span><i className="fa fa-comments"></i> {news.comments.length} Bình luận</span>
            </div>

            <h1 style={{ fontSize: '2.5rem', color: '#14213d', marginBottom: '25px', lineHeight: '1.2', fontWeight: 800 }}>
              {news.title}
            </h1>

            <div className="news-full-content">
              {news.content}
            </div>

            {/* Phần bình luận */}
            <section className="news-comments-section">
              <h3>Bình luận ({news.comments.length})</h3>
              
              <div className="comments-list">
                {news.comments.length > 0 ? (
                  news.comments.map((comment: any, index: number) => (
                    <div key={index} className="comment-item">
                      <div className="comment-avatar">
                        <i className="fa fa-user-circle"></i>
                      </div>
                      <div className="comment-body">
                        <div className="comment-header">
                          <span className="comment-author">{comment.userName}</span>
                          <span className="comment-date">{new Date(news.createdAt).toLocaleDateString('vi-VN')}</span>
                        </div>
                        <p className="comment-text">{comment.content || "Bài viết rất bổ ích, cảm ơn tác giả!"}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="no-comments">Chưa có bình luận nào. Hãy là người đầu tiên bình luận!</p>
                )}
              </div>

              {/* Form bình luận */}
              <div className="comment-form-container">
                {submitted ? (
                  <div className="comment-thanks">
                    <i className="fa fa-check-circle" style={{ fontSize: '50px', color: '#28a745', marginBottom: '15px' }}></i>
                    <h3>Cảm ơn bạn đã phản hồi!</h3>
                    <p>Ý kiến của bạn đã được gửi thành công và sẽ hiển thị trong danh sách.</p>
                    <button className="cta-btn" onClick={() => setSubmitted(false)} style={{ marginTop: '10px' }}>
                      VIẾT THÊM BÌNH LUẬN
                    </button>
                  </div>
                ) : (
                  <>
                    <h3>Để lại phản hồi</h3>
                    <form className="comment-form" onSubmit={handleCommentSubmit}>
                      <textarea 
                        placeholder="Viết bình luận của bạn tại đây..." 
                        rows={5} 
                        required
                        value={commentContent}
                        onChange={(e) => setCommentContent(e.target.value)}
                        disabled={submitting}
                      ></textarea>
                      <button type="submit" className="cta-btn" disabled={submitting}>
                        {submitting ? 'ĐANG GỬI...' : 'GỬI BÌNH LUẬN'}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </section>
          </article>

          {/* Sidebar bên phải */}
          <aside className="news-sidebar">
            <div className="sidebar-widget">
              <h3>BÀI VIẾT MỚI NHẤT</h3>
              <ul className="sidebar-categories">
                {latestNews.map((item) => ( // Lấy 5 bài viết mới nhất
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