import NewsCard from '../../components/tin-tuc/NewsCard';
import { newsData } from "./data"

import '../../styles/tin-tuc/news.css';

export default function NewsPage() {
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
  )
}