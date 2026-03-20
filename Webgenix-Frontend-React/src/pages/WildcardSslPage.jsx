import React, { useEffect } from 'react';
import ServiceHero from '../components/services/wildcard-ssl/ServiceHero';
import PricingSection from '../components/services/wildcard-ssl/PricingSection';
import FeaturesList from '../components/services/wildcard-ssl/FeaturesList';
import UseCasesSection from '../components/services/wildcard-ssl/UseCasesSection';
import TrustSection from '../components/sections/TrustSection';
import ConversionFooter from '../components/sections/ConversionFooter';

export default function WildcardSslPage() {
    // Scroll to top on load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen bg-dark-900">
            <ServiceHero />
            <UseCasesSection />
            <FeaturesList />
            <PricingSection />

            {/* Standard Global Components */}
            <TrustSection />
            <ConversionFooter />
        </main>
    );
}
