import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { blogPosts } from '../data/blog';
import Icon from '../components/ui/Icon';
import ConversionFooter from '../components/sections/ConversionFooter';

export default function BlogPostPage() {
    const { id } = useParams();

    // Use slug as identifier
    const post = blogPosts.find(p => p.slug === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!post) {
        return <Navigate to="/blog" replace />;
    }

    return (
        <main className="min-h-screen bg-dark-900 pt-32 pb-16 lg:pt-40">
            <article className="max-w-4xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <header className="mb-12 text-center">
                    <div className="flex items-center justify-center gap-3 text-sm font-medium mb-6">
                        <Link to="/blog" className="text-text-muted hover:text-accent transition-colors flex items-center gap-1.5 px-3 py-1 rounded-full bg-dark-800 border border-dark-700 hover:border-accent/50">
                            <Icon name="arrow-left" size={14} /> Back to Blog
                        </Link>
                        <span className="w-1.5 h-1.5 rounded-full bg-dark-500 mx-1" />
                        <span className="text-accent uppercase tracking-wider">{post.category}</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-dark-500 mx-1" />
                        <span className="text-text-muted">{post.readTime}</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl font-semibold text-text-primary leading-tight mb-8">
                        {post.title}
                    </h1>

                    <div className="flex items-center justify-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-dark-600 flex items-center justify-center font-bold text-lg text-text-primary border border-dark-500">
                            {post.author.charAt(0)}
                        </div>
                        <div className="text-left">
                            <h4 className="text-base font-medium text-text-primary">{post.author}</h4>
                            <p className="text-sm text-text-muted">{post.date}</p>
                        </div>
                    </div>
                </header>

                {/* Cover Image */}
                <div className="w-full aspect-[21/9] rounded-3xl overflow-hidden mb-16 shadow-2xl shadow-black/40 border border-dark-700 relative">
                    <div className="absolute inset-0 bg-dark-900/10 pointer-events-none mix-blend-overlay" />
                    <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Content Body */}
                <div className="prose prose-invert prose-lg max-w-3xl mx-auto
                    prose-headings:text-text-primary prose-headings:font-semibold
                    prose-p:text-text-secondary prose-p:leading-relaxed prose-p:mb-8
                    prose-a:text-accent hover:prose-a:text-accent-hover
                    prose-blockquote:border-l-4 prose-blockquote:border-accent prose-blockquote:pl-6 prose-blockquote:py-2 prose-blockquote:my-10 prose-blockquote:italic prose-blockquote:text-xl prose-blockquote:text-text-primary prose-blockquote:bg-dark-800/30 prose-blockquote:-ml-6 prose-blockquote:rounded-r-lg
                    marker:text-accent
                ">
                    <p className="text-xl">
                        {post.excerpt}
                    </p>
                    <p>
                        In the fast-paced world of web infrastructure, staying ahead of the curve is crucial. At Webgenix, we constantly evaluate and adopt technologies that provide tangible benefits to our platform's reliability and performance. This post explores the strategic decisions and technical hurdles we overcame to achieve our latest milestones.
                    </p>
                    <h2>The Shift in Paradigm</h2>
                    <p>
                        Traditional computing models are shifting towards a more decentralized and agile methodology. By embracing modern engineering practices, we've minimized latency and maximized throughput. This section dives into the core architectural changes we implemented, focusing on modularity, efficient state management, and robust deployment pipelines.
                    </p>

                    <blockquote>
                        "The best infrastructure is the one you never have to think about. It scales seamlessly, reacts to spikes instantly, and heals itself automatically."
                    </blockquote>

                    <h2>Looking Forward</h2>
                    <p>
                        As we continue to grow, our focus remains on delivering unparalleled value to our users. The technologies we explore today will form the foundation of tomorrow's internet. We're excited to share this journey with our community and invite you to join us in building a faster, more resilient web.
                    </p>
                </div>
            </article>

            {/* Share / Tags footer */}
            <div className="max-w-3xl mx-auto px-6 lg:px-8 mt-16 pt-8 border-t border-dark-800">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-dark-800 text-text-muted text-sm rounded-full border border-dark-700 font-medium">Infrastructure</span>
                        <span className="px-3 py-1 bg-dark-800 text-text-muted text-sm rounded-full border border-dark-700 font-medium">Engineering</span>
                        <span className="px-3 py-1 bg-dark-800 text-text-muted text-sm rounded-full border border-dark-700 font-medium">Webgenix</span>
                    </div>
                    <div className="text-sm font-medium text-text-primary flex items-center gap-3 bg-dark-800/50 px-4 py-2 rounded-xl border border-dark-700">
                        Share this: 
                        <button aria-label="Share" className="w-8 h-8 rounded-full bg-dark-700 flex items-center justify-center text-text-muted hover:text-accent hover:bg-accent/10 transition-colors">
                            <Icon name="message-circle" size={16} />
                        </button>
                    </div>
                </div>
            </div>

            <div className="mt-24">
                <ConversionFooter />
            </div>
        </main>
    );
}
