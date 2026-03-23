import React, { useEffect } from 'react';
import ServiceHero from '../components/services/shared-hosting/ServiceHero';
import SpecsSection from '../components/services/shared-hosting/SpecsSection';
import PricingSection from '../components/services/shared-hosting/PricingSection';
import FeaturesList from '../components/services/shared-hosting/FeaturesList';
import TrustSection from '../components/sections/TrustSection';
import ConversionFooter from '../components/sections/ConversionFooter';

export default function SharedHostingPage() {
    // Scroll to top on load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen bg-dark-900">
            <ServiceHero />
            <SpecsSection />
            <PricingSection />
            <FeaturesList />

            {/* Standard Global Components */}
            <TrustSection />
            <ConversionFooter />
        </main>
    );
}
