import React, { useEffect } from 'react';
import ServiceHero from '../components/services/website-builder/ServiceHero';
import FeaturesList from '../components/services/website-builder/FeaturesList';
import AIFeatureSection from '../components/services/website-builder/AIFeatureSection';
import TemplatesSection from '../components/services/website-builder/TemplatesSection';
import TrustSection from '../components/sections/TrustSection';
import ConversionFooter from '../components/sections/ConversionFooter';

export default function WebsiteBuilderPage() {
    // Scroll to top on load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen bg-dark-900">
            <ServiceHero />
            <FeaturesList />
            <AIFeatureSection />
            <TemplatesSection />

            {/* Standard Global Components */}
            <TrustSection />
            <ConversionFooter />
        </main>
    );
}
