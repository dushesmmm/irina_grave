import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Pr = () => {
    const router = useRouter();
    const [slug, setSlug] = useState(null);

    useEffect(() => {
        if (router.query.slug) {
            setSlug(router.query.slug);
        }
    }, [router.query.slug]);

    return (
        <div>
            <h1>это страница с проектом</h1>
            <p>проект # : {slug}</p>
        </div>
    );
};

export default Pr;
