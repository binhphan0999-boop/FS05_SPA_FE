'use client';

import { useRouter } from 'next/navigation';
import experts, { Expert } from '../../data/experts';

interface Props {
    expert: Expert;
}

export default function ExpertDetail({ expert }: Props) {
    const router = useRouter();
    const others = experts.filter((e) => e.id !== expert.id);

    return (
        <div className="expert-detail-page">
            {/* ── Main info ── */}
            <section className="expert-main-section">
                <div className="expert-main-inner">
                    {/* Photo */}
                    <div className="expert-photo-wrap">
                        <img src={expert.image} alt={expert.name} className="expert-photo" />
                        {/* Social links */}
                        <div className="expert-social">
                            {expert.social.facebook && (
                                <a href={expert.social.facebook} className="social-btn" aria-label="Facebook">
                                    <i className="fa fa-facebook"></i>
                                </a>
                            )}
                            {expert.social.instagram && (
                                <a href={expert.social.instagram} className="social-btn" aria-label="Instagram">
                                    <i className="fa fa-instagram"></i>
                                </a>
                            )}
                            {expert.social.twitter && (
                                <a href={expert.social.twitter} className="social-btn" aria-label="Twitter">
                                    <i className="fa fa-twitter"></i>
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Info */}
                    <div className="expert-info-wrap">
                        <span className="expert-role-label">{expert.role}</span>
                        <h1 className="expert-name">{expert.name}</h1>
                        <div className="expert-divider"></div>

                        {/* Bio */}
                        {expert.bio.map((para, i) => (
                            <p key={i} className="expert-bio">{para}</p>
                        ))}

                        {/* Contact */}
                        <div className="expert-contact">
                            <div className="contact-item">
                                <i className="fa fa-phone"></i>
                                <span>{expert.phone}</span>
                            </div>
                            <div className="contact-item">
                                <i className="fa fa-envelope"></i>
                                <span>{expert.email}</span>
                            </div>
                            <div className="contact-item">
                                <i className="fa fa-star"></i>
                                <span>{expert.experience}</span>
                            </div>
                        </div>

                        {/* CTA */}
                        <button
                            className="expert-booking-btn"
                            onClick={() => router.push('/dat-hen')}
                        >
                            Đặt lịch ngay
                        </button>
                    </div>
                </div>
            </section>

            {/* ── Skills & Awards ── */}
            <section className="expert-skills-section">
                <div className="expert-skills-inner">
                    {/* Skills */}
                    <div className="expert-skills-col">
                        <span className="section-label">Kỹ năng chuyên môn</span>
                        <h2 className="section-title">Chuyên sâu & Thành thạo</h2>
                        <div className="skills-list">
                            {expert.skills.map((skill, i) => (
                                <div key={i} className="skill-item">
                                    <div className="skill-header">
                                        <span className="skill-label">{skill.label}</span>
                                        <span className="skill-percent">{skill.percent}%</span>
                                    </div>
                                    <div className="skill-bar-bg">
                                        <div
                                            className="skill-bar-fill"
                                            style={{ width: `${skill.percent}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Awards */}
                    <div className="expert-awards-col">
                        <span className="section-label">Thành tích & Chứng chỉ</span>
                        <h2 className="section-title">Giải thưởng & Bằng cấp</h2>
                        <ul className="awards-list">
                            {expert.awards.map((award, i) => (
                                <li key={i} className="award-item">
                                    <i className="fa fa-trophy award-icon"></i>
                                    <span>{award}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="awards-img-wrap">
                            <img src="/images/image_61.jpg" alt="award" className="awards-img" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Other experts ── */}
            <section className="expert-others-section">
                <div className="expert-others-inner">
                    <span className="section-label">Đội ngũ chuyên gia</span>
                    <h2 className="section-title">Chuyên gia khác</h2>
                    <div className="others-grid">
                        {others.map((e) => (
                            <div
                                key={e.id}
                                className="other-card"
                                onClick={() => router.push(`/chuyen-gia/${e.id}`)}
                            >
                                <div className="other-card-img-wrap">
                                    <img src={e.image} alt={e.name} className="other-card-img" />
                                    <div className="other-card-overlay">
                                        <span>Xem chi tiết</span>
                                    </div>
                                </div>
                                <div className="other-card-info">
                                    <h3>{e.name}</h3>
                                    <span>{e.role}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
