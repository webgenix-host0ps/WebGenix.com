import React, { useEffect } from 'react';
import ServiceHero from '../components/services/domain-transfer/ServiceHero';
import TransferProcessSection from '../components/services/domain-transfer/TransferProcessSection';
import TransferPricingSection from '../components/services/domain-transfer/TransferPricingSection';
import FeaturesList from '../components/services/domain-transfer/FeaturesList';
import TrustSection from '../components/sections/TrustSection';
import ConversionFooter from '../components/sections/ConversionFooter';

export default function DomainTransferPage() {
    // Scroll to top on load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen bg-dark-900">
            <ServiceHero />
            <TransferProcessSection />
            <TransferPricingSection />
            <FeaturesList />

            {/* Standard Global Components */}
            <TrustSection />
            <ConversionFooter />
        </main>
    );
}
