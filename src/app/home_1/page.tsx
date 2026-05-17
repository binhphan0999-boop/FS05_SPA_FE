
'use client';

// import FacialCare from './FacialCare';
// import MidTitle from '../../components/module/MidTitle';
// import MidSlider from "../../components/module/MidSlider";
// import MidEx from "../../components/module/MidEx";
// import MidSliderOne from "../../components/module/MidSliderOne";
// import MidClient from "../../components/module/MidClient";
// import MidTeam from "../../components/module/MidTeam";
// import MidTCO from "../../components/module/MidTCO";
// import MidNews from "../../components/module/MidNews";
// import MidAdvise from "../../components/module/MidAdvise";

import FacialCareSection from '@/components/home/FacialCareSection';
import MidTitle from '@/components/home/MidTitle';
import MidSlider from "@/components/home/MidSlider";
import MidEx from "@/components/home/MidEx";
import MidSliderOne from "@/components/home/MidSliderOne";
import MidClient from "@/components/home/MidClient";
import MidTeam from "@/components/home/MidTeam";
import MidTCO from "@/components/home/MidTCO";
import MidNews from "@/components/home/MidNews";
import MidAdvise from "@/components/home/MidAdvise";

export default function HomePage() {

    return (
        <>
            <div>

                {/* <div>
                    <Carousel />
                </div> */}
                <div>
                    {/* <FacialCare /> */}
                    <FacialCareSection />
                </div>

                <div>
                    <MidTitle label={"Chăm sóc toàn thân"} title={"Dịch vụ Spa thư giãn"} />
                </div>

                <div>
                    <div>
                        <MidSlider />
                    </div>
                </div>

                <div>
                    <MidTitle label={"dịch vụ chuyên nghiệp"} title={"Khám phá dịch vụ spa"} />
                </div>

                <div style={{}}><MidEx /></div>
                <div><MidSliderOne /></div>
                <div><MidClient /></div>
                <div>
                    <MidTitle label={"Chuyên gia làm đẹp"} title={"Đội ngũ chuyên nghiệp"} />
                </div>
                <div><MidTeam /></div>
                <div><MidTCO /></div>
                <div>
                    <MidTitle label={"Tin tức & blog"} title={"Tin tức nổi bật"} />
                </div>
                <div><MidNews /></div>
                <div><MidAdvise /></div>
            </div>
        </>

    );
}
