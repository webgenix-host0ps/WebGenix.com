import React, { useEffect } from 'react';
import ServiceHero from '../components/services/email-marketing/ServiceHero';
import CampaignBuilderSection from '../components/services/email-marketing/CampaignBuilderSection';
import AnalyticsSection from '../components/services/email-marketing/AnalyticsSection';
import FeaturesList from '../components/services/email-marketing/FeaturesList';
import TrustSection from '../components/sections/TrustSection';
import ConversionFooter from '../components/sections/ConversionFooter';

export default function EmailMarketingPage() {
    // Scroll to top on load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen bg-dark-900">
            <ServiceHero />
            <CampaignBuilderSection />
            <AnalyticsSection />
            <FeaturesList />

            {/* Standard Global Components */}
            <TrustSection />
            <ConversionFooter />
        </main>
    );
}
