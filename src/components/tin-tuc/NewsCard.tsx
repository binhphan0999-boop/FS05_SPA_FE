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
      <img
        src={news.image}
        alt={news.title}
      />

      <div className="news-content">
        <h2>{news.title}</h2>

        <p>{news.description}</p>

        <Link href={`/tin-tuc/${news.id}`}>
          Đọc thêm
        </Link>
      </div>
    </div>
  )
}