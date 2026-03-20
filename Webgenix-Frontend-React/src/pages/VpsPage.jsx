import React, { useEffect } from 'react';
import ServiceHero from '../components/services/vps/ServiceHero';
import SpecsSection from '../components/services/vps/SpecsSection';
import PricingSection from '../components/services/vps/PricingSection';
import FeaturesList from '../components/services/vps/FeaturesList';
import TrustSection from '../components/sections/TrustSection';
import ConversionFooter from '../components/sections/ConversionFooter';

export default function VpsPage() {
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
