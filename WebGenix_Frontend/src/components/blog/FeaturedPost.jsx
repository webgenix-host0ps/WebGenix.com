import { Link } from 'react-router-dom';
import { blogPosts } from '../../data/blog';

export default function FeaturedPost() {
    const featured = blogPosts[0]; // Just use the first one as featured for now

    return (
        <section className="py-12 lg:py-16">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <Link to={`/blog/${featured.slug}`} className="group block">
                    <div className="grid lg:grid-cols-2 gap-8 items-center bg-dark-800 rounded-3xl p-6 lg:p-8 border border-dark-700 hover:border-accent/50 transition-all duration-500 shadow-xl shadow-black/20 hover:shadow-accent/10 hover:-translate-y-1">
                        
                        {/* Image Side */}
                        <div className="relative aspect-[16/10] lg:aspect-auto lg:h-[400px] overflow-hidden rounded-2xl">
                            <img 
                                src={featured.image} 
                                alt={featured.title}
                                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent lg:hidden" />
                            <div className="absolute top-4 left-4">
                                <span className="bg-accent/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider shadow-lg">
                                    Featured
                                </span>
                            </div>
                        </div>

                        {/* Content Side */}
                        <div className="flex flex-col justify-center max-w-xl">
                            <div className="flex items-center gap-3 text-sm font-medium mb-4">
                                <span className="text-accent">{featured.category}</span>
                                <span className="w-1 h-1 rounded-full bg-dark-500" />
                                <span className="text-text-muted">{featured.readTime}</span>
                            </div>
                            
                            <h2 className="text-3xl lg:text-4xl font-semibold text-text-primary mb-4 group-hover:text-accent transition-colors duration-300">
                                {featured.title}
                            </h2>
                            
                            <p className="text-lg text-text-secondary leading-relaxed mb-8">
                                {featured.excerpt}
                            </p>

                            <div className="flex items-center gap-4 mt-auto">
                                <div className="w-10 h-10 rounded-full bg-dark-600 flex items-center justify-center font-bold text-text-primary border border-dark-500">
                                    {featured.author.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="text-sm font-medium text-text-primary">{featured.author}</h4>
                                    <p className="text-xs text-text-muted">{featured.date}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </Link>
            </div>
        </section>
    );
}
