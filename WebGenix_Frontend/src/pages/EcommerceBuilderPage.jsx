import React, { useEffect } from 'react';
import ServiceHero from '../components/services/ecommerce-builder/ServiceHero';
import FeaturesList from '../components/services/ecommerce-builder/FeaturesList';
import StoreManagementSection from '../components/services/ecommerce-builder/StoreManagementSection';
import IntegrationsSection from '../components/services/ecommerce-builder/IntegrationsSection';
import TrustSection from '../components/sections/TrustSection';
import ConversionFooter from '../components/sections/ConversionFooter';

export default function EcommerceBuilderPage() {
    // Scroll to top on load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen bg-dark-900">
            <ServiceHero />
            <FeaturesList />
            <StoreManagementSection />
            <IntegrationsSection />

            {/* Standard Global Components */}
            <TrustSection />
            <ConversionFooter />
        </main>
    );
}
