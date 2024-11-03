'use client';

import { useRouter } from 'next/navigation';

const Facebook = () => {
    const router = useRouter();
    const handleButton = () => {
        router.push('/');
    };

    return (
        <div className="red">
            Facebook page
            <button onClick={() => handleButton()}>Button backhome</button>
        </div>
    );
};

export default Facebook;
