import React, { useEffect } from 'react';
import ServiceHero from '../components/services/rapidssl/ServiceHero';
import SpeedFactsSection from '../components/services/rapidssl/SpeedFactsSection';
import PricingSection from '../components/services/rapidssl/PricingSection';
import FeaturesList from '../components/services/rapidssl/FeaturesList';
import TrustSection from '../components/sections/TrustSection';
import ConversionFooter from '../components/sections/ConversionFooter';

export default function RapidSslPage() {
    // Scroll to top on load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen bg-dark-900">
            <ServiceHero />
            <SpeedFactsSection />
            <PricingSection />
            <FeaturesList />

            {/* Standard Global Components */}
            <TrustSection />
            <ConversionFooter />
        </main>
    );
}
