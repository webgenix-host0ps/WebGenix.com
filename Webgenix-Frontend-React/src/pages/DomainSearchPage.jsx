import React, { useEffect } from 'react';
import ServiceHero from '../components/services/domain-search/ServiceHero';
import TldPricingSection from '../components/services/domain-search/TldPricingSection';
import FeaturesList from '../components/services/domain-search/FeaturesList';
import DomainFAQSection from '../components/services/domain-search/DomainFAQSection';
import TrustSection from '../components/sections/TrustSection';
import ConversionFooter from '../components/sections/ConversionFooter';

export default function DomainSearchPage() {
    // Scroll to top on load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen bg-dark-900">
            <ServiceHero />
            <TldPricingSection />
            <FeaturesList />
            <DomainFAQSection />

            {/* Standard Global Components */}
            <TrustSection />
            <ConversionFooter />
        </main>
    );
}
