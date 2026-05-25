
'use client';

import TopTitle from "../../components/gioi-thieu/TopTitle";
import MidImage from "../../components/spa-thu-gian/MidImage";
import ServiceList from "../../components/spa-thu-gian/ServiceList";


export default function HomePage() {
    return (
        <>
            <div>
                <div><TopTitle title="Spa thư giãn" /></div>
                <div><ServiceList /></div>
                <div><MidImage /></div>
            </div>
        </>
    );
}
