import { useEffect } from 'react';
import StatusHero from '../components/status/StatusHero';
import UptimeMetrics from '../components/status/UptimeMetrics';
import IncidentHistory from '../components/status/IncidentHistory';
import ConversionFooter from '../components/sections/ConversionFooter';

export default function StatusPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen bg-dark-900">
            <StatusHero />
            <UptimeMetrics />
            <IncidentHistory />
            
            <div className="py-16 text-center text-sm text-text-muted">
                <p>Status records automatically updated every 60 seconds.</p>
            </div>
            
            <ConversionFooter />
        </main>
    );
}
