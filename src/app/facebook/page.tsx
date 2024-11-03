'use client';

import { useRouter } from 'next/navigation';
import { Button } from 'react-bootstrap';
const Facebook = () => {
    const router = useRouter();
    const handleButton = () => {
        router.push('/');
    };

    return (
        <div className="red">
            Facebook page
            <div>
                <Button variant="primary">Tevkieu</Button>
                <button onClick={() => handleButton()}>Button backhome</button>
            </div>
        </div>
    );
};

export default Facebook;
