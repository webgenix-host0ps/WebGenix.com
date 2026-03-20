import HeroSection from '../components/sections/HeroSection';
import ServicesSection from '../components/services/ServicesSection';
import HowItWorks from '../components/sections/HowItWorks';
import TrustSection from '../components/sections/TrustSection';
import ConversionFooter from '../components/sections/ConversionFooter';

export default function HomePage() {
    return (
        <main>
            <HeroSection />
            <ServicesSection />
            <HowItWorks />
            <TrustSection />
            <ConversionFooter />
        </main>
    );
}
