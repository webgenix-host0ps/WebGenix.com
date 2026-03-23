import { useEffect } from 'react';
import BlogHero from '../components/blog/BlogHero';
import FeaturedPost from '../components/blog/FeaturedPost';
import BlogGrid from '../components/blog/BlogGrid';
import ConversionFooter from '../components/sections/ConversionFooter';

export default function BlogPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen bg-dark-900">
            <BlogHero />
            <FeaturedPost />
            <BlogGrid />
            <ConversionFooter />
        </main>
    );
}
