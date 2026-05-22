import axios from "axios";

import type { News, BackendNews } from "../../types/news.type";

const API_BASE_URL = "http://localhost:8000/api/v1";

/**
 * Transform backend data -> frontend data
 */
const transformNews = (backendNews: BackendNews): News => ({
  id: backendNews.id,
  title: backendNews.title,
  slug: backendNews.slug,
  thumbnail: backendNews.thumbnail,
  summary: backendNews.summary,
  content: backendNews.content,

  createdAt: backendNews.createdAt,

  comments:
    backendNews.comments?.map((comment) => ({
      id: comment.id,
      content: comment.content,
      userName: comment.userName,
      userEmail: comment.userEmail,
      createdAt: comment.createdAt,
    })) || [],
});

const newsService = {
  /**
   * GET ALL NEWS
   */
  getNews: async (): Promise<News[]> => {
    try {
      const response = await axios.get<{
        data: BackendNews[];
      }>(`${API_BASE_URL}/news`);

      return response.data.data.map(transformNews);
    } catch (error) {
      console.error("Lỗi khi lấy danh sách tin tức:", error);
      throw error;
    }
  },

  /**
   * GET NEWS DETAIL BY SLUG
   */
  getNewsBySlug: async (slug: string): Promise<News> => {
    try {
      const response = await axios.get<{
        data: BackendNews;
      }>(`${API_BASE_URL}/news/${slug}`);

      return transformNews(response.data.data);
    } catch (error) {
      console.error("Lỗi khi lấy chi tiết tin tức:", error);
      throw error;
    }
  },
};

export default newsService;