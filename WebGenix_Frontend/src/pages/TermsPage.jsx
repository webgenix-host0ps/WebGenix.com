import { useEffect } from 'react';
import TermsHero from '../components/terms/TermsHero';
import TermsContent from '../components/terms/TermsContent';
import ConversionFooter from '../components/sections/ConversionFooter';

export default function TermsPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen bg-dark-900 relative">
            <TermsHero />
            <TermsContent />
            <ConversionFooter />
        </main>
    );
}
