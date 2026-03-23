import { useEffect } from 'react';
import CareersHero from '../components/careers/CareersHero';
import CareersValues from '../components/careers/CareersValues';
import CareersRoles from '../components/careers/CareersRoles';
import ConversionFooter from '../components/sections/ConversionFooter';

export default function CareersPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main>
            <CareersHero />
            <CareersValues />
            <CareersRoles />
            <ConversionFooter />
        </main>
    );
}
