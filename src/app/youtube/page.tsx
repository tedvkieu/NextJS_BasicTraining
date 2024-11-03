'use client';

import { useRouter } from 'next/navigation';
import { Button } from 'react-bootstrap';
const Youtube = () => {
    const router = useRouter();
    const handleButton = () => {
        router.push('/');
    };

    return (
        <div className="red">
            Youtube page
            <div>
                <Button variant="primary">Tevkieu</Button>
                <button onClick={() => handleButton()}>Button backhome</button>
            </div>
        </div>
    );
};

export default Youtube;
