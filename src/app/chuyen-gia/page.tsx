
'use client';

import TopTitle from "../../components/gioi-thieu/TopTitle";
import MidTitle from '../../components/home/MidTitle';
import MidTeam from "../../components/home/MidTeam";
import MidPassion from "../../components/chuyen-gia/MidPassion";


export default function HomePage() {


    return (

        <>
            <div className='bg-[rgba(253,235,224,0.36)]'>
                <div><TopTitle title="Chuyên gia" /></div>
                <div>
                    <MidTitle label={"Tận tâm và đam mê"} title={"Kiến thức sâu rộng"} />
                </div>
                <div><MidPassion /></div>
                <div>
                    <MidTitle label={"Chuyên gia làm đẹp"} title={"Đội ngũ chuyên nghiệp"} />
                </div>
                <div><MidTeam /></div>
            </div>
        </>

    );
}
