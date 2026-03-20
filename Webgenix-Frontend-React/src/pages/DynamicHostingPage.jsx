import React, { useEffect } from 'react';
import ServiceHero from '../components/services/dynamic-hosting/ServiceHero';
import FeaturesList from '../components/services/dynamic-hosting/FeaturesList';
import ArchitectureMap from '../components/services/dynamic-hosting/ArchitectureMap';
import TechStackSection from '../components/services/dynamic-hosting/TechStackSection';
import TrustSection from '../components/sections/TrustSection';
import ConversionFooter from '../components/sections/ConversionFooter';

export default function DynamicHostingPage() {
    // Scroll to top on load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen bg-dark-900">
            <ServiceHero />
            <FeaturesList />
            <ArchitectureMap />
            <TechStackSection />

            {/* Standard Global Components */}
            <TrustSection />
            <ConversionFooter />
        </main>
    );
}
