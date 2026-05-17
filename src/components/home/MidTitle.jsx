
'use client';

export default function HomePage({ label, title }) {
    return (

        <>
            <div className="home-hightlight-title">
                <p>{label}</p>
                <h2>{title}</h2>
                <div><img src="/images/image_h.png" alt="" /></div>
            </div>
        </>

    );
}
