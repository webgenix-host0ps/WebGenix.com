import React, { useEffect } from 'react';
import ServiceHero from '../components/services/bare-metal/ServiceHero';
import SpecsSection from '../components/services/bare-metal/SpecsSection';
import NetworkingSection from '../components/services/bare-metal/NetworkingSection';
import PricingSection from '../components/services/bare-metal/PricingSection';
import TrustSection from '../components/sections/TrustSection';
import ConversionFooter from '../components/sections/ConversionFooter';

export default function BareMetalPage() {
    // Scroll to top on load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen bg-dark-900">
            <ServiceHero />
            <SpecsSection />
            <NetworkingSection />
            <PricingSection />

            {/* Standard Global Components */}
            <TrustSection />
            <ConversionFooter />
        </main>
    );
}
