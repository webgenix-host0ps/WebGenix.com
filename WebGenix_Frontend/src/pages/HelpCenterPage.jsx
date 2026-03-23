import { useEffect } from 'react';
import HelpHero from '../components/help/HelpHero';
import HelpCategories from '../components/help/HelpCategories';
import PopularArticles from '../components/help/PopularArticles';
import HelpContact from '../components/help/HelpContact';
import ConversionFooter from '../components/sections/ConversionFooter';

export default function HelpCenterPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen bg-dark-900">
            <HelpHero />
            <HelpCategories />
            <PopularArticles />
            <HelpContact />
            <ConversionFooter />
        </main>
    );
}
