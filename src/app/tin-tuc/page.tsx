import NewsCard from '../../components/tin-tuc/NewsCard';
import { newsData } from "./data"

import '../../styles/san-pham//shop.css';

export default function NewsPage() {
  return (
    <div className="news-page-container" style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '2.5rem', color: '#14213d' }}>
        TIN TỨC & SỰ KIỆN
      </h1>

      <div className="news-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '30px' }}>
        {newsData.map((news) => (
          <NewsCard
            key={news.id}
            news={news}
          />
        ))}
      </div>
    </div>
  )
}