import { useEffect } from 'react';
import CommunityHero from '../components/community/CommunityHero';
import DiscussionBoard from '../components/community/DiscussionBoard';
import UpcomingEvents from '../components/community/UpcomingEvents';
import ConversionFooter from '../components/sections/ConversionFooter';

export default function CommunityPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen bg-dark-900">
            <CommunityHero />
            <DiscussionBoard />
            <UpcomingEvents />
            <ConversionFooter />
        </main>
    );
}
