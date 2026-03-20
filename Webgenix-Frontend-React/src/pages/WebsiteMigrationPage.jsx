import React, { useEffect } from 'react';
import ServiceHero from '../components/services/website-migration/ServiceHero';
import FeaturesList from '../components/services/website-migration/FeaturesList';
import MigrationProcessSection from '../components/services/website-migration/MigrationProcessSection';
import SupportedPlatformsSection from '../components/services/website-migration/SupportedPlatformsSection';
import TrustSection from '../components/sections/TrustSection';
import ConversionFooter from '../components/sections/ConversionFooter';

export default function WebsiteMigrationPage() {
    // Scroll to top on load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen bg-dark-900">
            <ServiceHero />
            <FeaturesList />
            <MigrationProcessSection />
            <SupportedPlatformsSection />

            {/* Standard Global Components */}
            <TrustSection />
            <ConversionFooter />
        </main>
    );
}
