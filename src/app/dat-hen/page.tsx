
'use client';

import TopTitle from "../../components/gioi-thieu/TopTitle";
import MidAdvise from "../../components/dat-hen/advise";
import MidEx from "../../components/dat-hen/MidEx";

export default function HomePage() {


    return (

        <>
            <div className='bg-[rgba(253,235,224,0.36)]'>
                <div><TopTitle title="đặt hẹn" /></div>
                <div><MidAdvise /></div>
                <div><MidEx /></div>
                {/* <div><MidClient /></div> */}
            </div>
        </>

    );
}
