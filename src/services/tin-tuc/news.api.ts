import axios from "axios";

export const getNews = async () => {
    const res = await axios.get(
        "http://localhost:5000/news"
    );

    return res.data;
};