
'use client';

import TopTitle from "../../components/gioi-thieu/TopTitle";
import TopHello from "../../components/gioi-thieu/TopHello";
import MidClient from "../../components/gioi-thieu/MidClient";
import MidTitle from '../../components/home/MidTitle';
import MidTeam from "../../components/home/MidTeam";


export default function HomePage() {


    return (

        <>
            <div>
                <div><TopTitle title="giới thiệu" /></div>
                <div><TopHello /></div>
                <div><MidClient /></div>
                <div>
                    <MidTitle label={"Tin tức & blog"} title={"Tin tức nổi bật"} />
                </div>
                <div><MidTeam /></div>
            </div>
        </>

    );
}
