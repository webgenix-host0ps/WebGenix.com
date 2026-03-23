import React, { useEffect } from 'react';
import ServiceHero from '../components/services/static-hosting/ServiceHero';
import FeaturesList from '../components/services/static-hosting/FeaturesList';
import FrameworksSection from '../components/services/static-hosting/FrameworksSection';
import PerformanceSection from '../components/services/static-hosting/PerformanceSection';
import DeployWorkflow from '../components/services/static-hosting/DeployWorkflow';
import TrustSection from '../components/sections/TrustSection';
import ConversionFooter from '../components/sections/ConversionFooter';

export default function StaticHostingPage() {
    // Scroll to top on load since this is a new page navigation
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen bg-dark-900">
            <ServiceHero />
            <FeaturesList />
            <FrameworksSection />
            <DeployWorkflow />
            <PerformanceSection />

            {/* Reuse existing components for consistency across the site */}
            <TrustSection />
            <ConversionFooter />
        </main>
    );
}
