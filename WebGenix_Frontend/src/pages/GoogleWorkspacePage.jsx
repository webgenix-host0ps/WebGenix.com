import React, { useEffect } from 'react';
import ServiceHero from '../components/services/google-workspace/ServiceHero';
import PricingSection from '../components/services/google-workspace/PricingSection';
import FeaturesList from '../components/services/google-workspace/FeaturesList';
import WhyChooseUsSection from '../components/services/google-workspace/WhyChooseUsSection';
import TrustSection from '../components/sections/TrustSection';
import ConversionFooter from '../components/sections/ConversionFooter';

export default function GoogleWorkspacePage() {
    // Scroll to top on load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen bg-dark-900">
            <ServiceHero />
            <FeaturesList />
            <PricingSection />
            <WhyChooseUsSection />

            {/* Standard Global Components */}
            <TrustSection />
            <ConversionFooter />
        </main>
    );
}
