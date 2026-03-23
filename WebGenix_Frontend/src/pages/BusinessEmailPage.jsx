import React, { useEffect } from 'react';
import ServiceHero from '../components/services/business-email/ServiceHero';
import PricingSection from '../components/services/business-email/PricingSection';
import FeaturesList from '../components/services/business-email/FeaturesList';
import IntegrationSection from '../components/services/business-email/IntegrationSection';
import TrustSection from '../components/sections/TrustSection';
import ConversionFooter from '../components/sections/ConversionFooter';

export default function BusinessEmailPage() {
    // Scroll to top on load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen bg-dark-900">
            <ServiceHero />
            <PricingSection />
            <IntegrationSection />
            <FeaturesList />

            {/* Standard Global Components */}
            <TrustSection />
            <ConversionFooter />
        </main>
    );
}
