'use client';

import { useRouter } from 'next/navigation';

const Facebook = () => {
    const router = useRouter();
    const handleButton = () => {
        router.push('/');
    };

    return (
        <div>
            Facebook
            <div onClick={() => handleButton()}>Button backhome</div>
        </div>
    );
};

export default Facebook;
