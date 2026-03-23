import { useEffect } from 'react';
import PrivacyHero from '../components/privacy/PrivacyHero';
import PrivacyContent from '../components/privacy/PrivacyContent';
import ConversionFooter from '../components/sections/ConversionFooter';

export default function PrivacyPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen bg-dark-900">
            <PrivacyHero />
            <PrivacyContent />
            <ConversionFooter />
        </main>
    );
}
