'use client';
import { useEffect } from 'react';

const id = 'Events-dark-mode';
export default function Theme() {
    useEffect(() => {
        document.body.classList.toggle('dark-mode', localStorage.getItem(id) !== 'true');

        const setCSS = () => {
            const doc = document.documentElement;
            doc.style.setProperty('--vh', `${window.innerHeight}px`);
            document.body.classList.toggle('hover', !('ontouchstart' in doc || navigator.maxTouchPoints > 0));
        };

        const query = window.matchMedia('(min-width: 991px)');
        window.addEventListener('resize', setCSS);
        query.addEventListener('change', setCSS);
        setCSS();

        return () => {
            window.removeEventListener('resize', setCSS);
            query.removeEventListener('change', setCSS);
        };
    }, []);

    return (
        <input
            id={id}
            type="checkbox"
            className="hidden"
            onChange={() => {
                const dark = !document.body.classList.contains('dark-mode');
                localStorage.setItem(id, dark.toString());
                document.body.classList.toggle('dark-mode', dark);
            }}
        />
    );
}