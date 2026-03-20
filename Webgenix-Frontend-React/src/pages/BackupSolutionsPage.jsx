import React, { useEffect } from 'react';
import ServiceHero from '../components/services/backup-server/ServiceHero';
import RecoverySection from '../components/services/backup-server/RecoverySection';
import PricingSection from '../components/services/backup-server/PricingSection';
import FeaturesList from '../components/services/backup-server/FeaturesList';
import TrustSection from '../components/sections/TrustSection';
import ConversionFooter from '../components/sections/ConversionFooter';

export default function BackupSolutionsPage() {
    // Scroll to top on load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen bg-dark-900">
            <ServiceHero />
            <RecoverySection />
            <PricingSection />
            <FeaturesList />

            {/* Standard Global Components */}
            <TrustSection />
            <ConversionFooter />
        </main>
    );
}
