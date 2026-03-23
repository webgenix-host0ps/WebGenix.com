import { useEffect } from 'react';
import GdprHero from '../components/gdpr/GdprHero';
import GdprContent from '../components/gdpr/GdprContent';
import ConversionFooter from '../components/sections/ConversionFooter';

export default function GdprPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen bg-dark-900 relative">
            <GdprHero />
            <GdprContent />
            <ConversionFooter />
        </main>
    );
}
