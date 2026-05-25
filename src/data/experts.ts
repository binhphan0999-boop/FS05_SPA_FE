export interface Expert {
    id: number;
    image: string;
    name: string;
    role: string;
    experience: string;
    phone: string;
    email: string;
    bio: string[];
    skills: { label: string; percent: number }[];
    awards: string[];
    social: { facebook?: string; instagram?: string; twitter?: string };
}

const experts: Expert[] = [
    {
        id: 1,
        image: "/images/image_34.jpg",
        name: "Emely Jonson",
        role: "Manicure Expert",
        experience: "8 năm kinh nghiệm",
        phone: "+84 901 234 567",
        email: "emely@luxespa.vn",
        bio: [
            "Emely Jonson là chuyên gia làm móng hàng đầu với hơn 8 năm kinh nghiệm trong lĩnh vực chăm sóc móng tay và nghệ thuật nail. Với bàn tay khéo léo và con mắt thẩm mỹ tinh tế, Emely đã tạo ra hàng ngàn bộ móng đẹp cho các khách hàng trên khắp cả nước.",
            "Được đào tạo tại các học viện uy tín trong và ngoài nước, Emely không ngừng cập nhật những xu hướng nail mới nhất từ Milan, Paris và Seoul để mang đến cho khách hàng những thiết kế độc đáo và hiện đại nhất. Tại Luxe Spa, Emely luôn đặt sự hài lòng của khách hàng lên hàng đầu.",
        ],
        skills: [
            { label: "Manicure & Pedicure", percent: 98 },
            { label: "Nail Art Design", percent: 92 },
            { label: "Gel & Acrylic Nails", percent: 90 },
            { label: "Nail Care Treatment", percent: 95 },
        ],
        awards: [
            "Top Nail Artist 2022 – Hiệp hội Làm đẹp Việt Nam",
            "Chứng chỉ Nail Expert – Seoul Beauty Academy 2020",
            "Giải Nhất cuộc thi Nail Art toàn quốc 2021",
        ],
        social: {
            facebook: "#",
            instagram: "#",
            twitter: "#",
        },
    },
    {
        id: 2,
        image: "/images/image_35.png",
        name: "Arika Murray",
        role: "Beautician",
        experience: "10 năm kinh nghiệm",
        phone: "+84 912 345 678",
        email: "arika@luxespa.vn",
        bio: [
            "Arika Murray là chuyên gia trang điểm và làm đẹp với hơn 10 năm kinh nghiệm trong ngành thẩm mỹ. Cô nổi tiếng với khả năng phân tích kỹ lưỡng từng loại da và đề xuất liệu trình phù hợp nhất để giúp khách hàng đạt được vẻ đẹp tự nhiên, rạng rỡ.",
            "Arika đã từng làm việc cho các studio phim, show diễn thời trang và các sự kiện lớn. Với kiến thức sâu rộng về các sản phẩm chăm sóc da cao cấp và kỹ thuật trang điểm chuyên nghiệp, cô mang đến cho mỗi khách hàng trải nghiệm làm đẹp tuyệt vời và kết quả vượt mong đợi.",
        ],
        skills: [
            { label: "Trang điểm chuyên nghiệp", percent: 96 },
            { label: "Chăm sóc da mặt", percent: 93 },
            { label: "Điều trị da", percent: 90 },
            { label: "Tư vấn làm đẹp", percent: 88 },
        ],
        awards: [
            "Best Beautician – Vietnam Beauty Awards 2023",
            "Chứng chỉ Skincare Expert – Paris Beauty School 2019",
            "Top 10 Chuyên gia Làm đẹp xuất sắc nhất 2022",
        ],
        social: {
            facebook: "#",
            instagram: "#",
            twitter: "#",
        },
    },
    {
        id: 3,
        image: "/images/image_36.png",
        name: "Lola Jonson",
        role: "Spa Specialist",
        experience: "7 năm kinh nghiệm",
        phone: "+84 923 456 789",
        email: "lola@luxespa.vn",
        bio: [
            "Lola Jonson là chuyên gia spa với hơn 7 năm kinh nghiệm trong các liệu trình chăm sóc sức khỏe và thư giãn toàn thân. Cô chuyên về các liệu pháp spa cao cấp kết hợp giữa y học cổ truyền phương Đông và các kỹ thuật hiện đại từ châu Âu.",
            "Với tình yêu nghề và sự tận tâm, Lola luôn tạo ra không gian thư giãn hoàn hảo cho mỗi khách hàng. Cô hiểu rằng mỗi người có nhu cầu khác nhau, vì vậy cô luôn cá nhân hóa từng liệu trình để đảm bảo hiệu quả tối ưu và trải nghiệm thoải mái nhất.",
        ],
        skills: [
            { label: "Facial Treatment", percent: 94 },
            { label: "Aromatherapy", percent: 91 },
            { label: "Body Scrub & Wrap", percent: 89 },
            { label: "Hot Stone Therapy", percent: 93 },
        ],
        awards: [
            "Spa Specialist of the Year 2023 – Luxe Spa Group",
            "Chứng chỉ Aromatherapy – Thai Spa Academy 2018",
            "Giải thưởng Chăm sóc Toàn diện – Hội Spa Việt Nam 2022",
        ],
        social: {
            facebook: "#",
            instagram: "#",
            twitter: "#",
        },
    },
    {
        id: 4,
        image: "/images/image_37.png",
        name: "Rose Marian",
        role: "Massage Expert",
        experience: "9 năm kinh nghiệm",
        phone: "+84 934 567 890",
        email: "rose@luxespa.vn",
        bio: [
            "Rose Marian là chuyên gia massage đã được đào tạo chuyên sâu tại Thái Lan và Bali với hơn 9 năm kinh nghiệm. Cô thành thạo nhiều kỹ thuật massage từ cổ điển đến hiện đại, bao gồm Swedish massage, deep tissue, hot stone và các phương pháp chữa lành bằng năng lượng.",
            "Rose tin rằng massage không chỉ là liệu pháp thư giãn thể chất mà còn là hành trình chữa lành tâm hồn. Với đôi tay khéo léo và cảm giác nhạy bén, cô có khả năng nhận biết và giải tỏa những vùng căng thẳng trên cơ thể, giúp khách hàng cảm thấy tràn đầy năng lượng sau mỗi buổi trị liệu.",
        ],
        skills: [
            { label: "Swedish Massage", percent: 97 },
            { label: "Deep Tissue Massage", percent: 93 },
            { label: "Hot Stone Therapy", percent: 91 },
            { label: "Aromatherapy Massage", percent: 89 },
        ],
        awards: [
            "Best Massage Therapist – Asia Spa Awards 2023",
            "Chứng chỉ Master Massage – Bali Healing School 2017",
            "Top Therapist – Hội Massage Chuyên nghiệp Việt Nam 2021",
        ],
        social: {
            facebook: "#",
            instagram: "#",
            twitter: "#",
        },
    },
];

export default experts;
