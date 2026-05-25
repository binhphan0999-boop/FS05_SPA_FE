'use client';

import { useParams } from 'next/navigation';
import experts from '../../../data/experts';
import TopTitle from '../../../components/gioi-thieu/TopTitle';
import ExpertDetail from '../../../components/chuyen-gia/ExpertDetail';

export default function ExpertDetailPage() {
    const params = useParams();
    const id = Number(params?.id);
    const expert = experts.find((e) => e.id === id);

    if (!expert) {
        return (
            <>
                <TopTitle title="Chuyên gia" />
                <div className="flex justify-center items-center py-32 text-xl text-gray-500">
                    Không tìm thấy thông tin chuyên gia.
                </div>
            </>
        );
    }

    return (
        <>
            <TopTitle title="Thông tin chuyên gia" />
            <ExpertDetail expert={expert} />
        </>
    );
}
