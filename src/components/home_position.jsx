
'use client';

import { useEffect, useState } from 'react';
import { getToken, removeToken } from '@/utils/auth';
import { useRouter } from 'next/navigation';
import { Button, Modal, Form, Input, message, Rate } from 'antd';
import axios from 'axios';


export default function HomePage() {


    return (

        <>
            <div className='home-position-1'>
                <img src="/images/image_9.png" alt="Feature" />
            </div>

            <div className='home-position-2'>
                <img src="/images/image_10.png" alt="Feature" />
            </div>
        </>

    );
}
