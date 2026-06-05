
'use client';

import TopTitle from "../../components/gioi-thieu/TopTitle";
import MidAdress from "../../components/lien-he/MidAdress"


export default function HomePage() {

    return (

        <>
            <div className='bg-[#faf6f2]'>
                <div><TopTitle title="Liên hệ" /></div>
                <div ><MidAdress /></div>
            </div>
        </>

    );
}

