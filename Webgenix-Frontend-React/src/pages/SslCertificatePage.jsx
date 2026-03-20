import React, { useEffect } from 'react';
import ServiceHero from '../components/services/ssl-certificate/ServiceHero';
import ValidationLevelsSection from '../components/services/ssl-certificate/ValidationLevelsSection';
import FeaturesList from '../components/services/ssl-certificate/FeaturesList';
import HowItWorksSection from '../components/services/ssl-certificate/HowItWorksSection';
import TrustSection from '../components/sections/TrustSection';
import ConversionFooter from '../components/sections/ConversionFooter';

export default function SslCertificatePage() {
    // Scroll to top on load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen bg-dark-900">
            <ServiceHero />
            <ValidationLevelsSection />
            <FeaturesList />
            <HowItWorksSection />

            {/* Standard Global Components */}
            <TrustSection />
            <ConversionFooter />
        </main>
    );
}
