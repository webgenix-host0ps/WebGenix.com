import { Link } from 'react-router-dom';
import { blogPosts } from '../../data/blog';

export default function BlogGrid() {
    // Skip the first one since it's used as the featured post
    const posts = blogPosts.slice(1);

    return (
        <section className="py-12 lg:py-16 border-t border-dark-800 bg-dark-900">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between mb-10">
                    <h2 className="text-2xl font-semibold text-text-primary">Latest Articles</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <Link to={`/blog/${post.slug}`} key={post.id} className="group flex flex-col items-start justify-start bg-dark-800 border border-dark-700 rounded-2xl overflow-hidden hover:border-accent/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300">
                            
                            {/* Card Image */}
                            <div className="w-full aspect-[16/10] overflow-hidden">
                                <img 
                                    src={post.image} 
                                    alt={post.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            {/* Card Body */}
                            <div className="p-6 flex flex-col flex-1 w-full">
                                <div className="flex items-center gap-2 text-xs font-semibold mb-3">
                                    <span className="text-accent uppercase tracking-wider">{post.category}</span>
                                    <span className="w-1 h-1 rounded-full bg-dark-500" />
                                    <span className="text-text-muted">{post.readTime}</span>
                                </div>
                                
                                <h3 className="text-xl font-semibold text-text-primary mb-3 group-hover:text-accent transition-colors duration-300 line-clamp-2">
                                    {post.title}
                                </h3>
                                
                                <p className="text-sm text-text-secondary line-clamp-3 mb-6 flex-1">
                                    {post.excerpt}
                                </p>

                                <div className="flex items-center gap-3 mt-auto pt-4 border-t border-dark-700/50">
                                    <div className="w-8 h-8 rounded-full bg-dark-600 flex items-center justify-center font-bold text-sm text-text-primary border border-dark-500">
                                        {post.author.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-medium text-text-primary">{post.author}</h4>
                                        <p className="text-xs text-text-muted">{post.date}</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
