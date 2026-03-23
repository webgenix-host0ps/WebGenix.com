import { useEffect } from 'react';
import CookiesHero from '../components/cookies/CookiesHero';
import CookiesContent from '../components/cookies/CookiesContent';
import ConversionFooter from '../components/sections/ConversionFooter';

export default function CookiesPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen bg-dark-900 relative">
            <CookiesHero />
            <CookiesContent />
            <ConversionFooter />
        </main>
    );
}
