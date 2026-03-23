import Icon from '../ui/Icon';

const popularArticles = [
    { title: "How to point your domain to a Webgenix VPS", category: "Domains & DNS" },
    { title: "Resetting your root password", category: "Security & Permissions" },
    { title: "Understanding your billing cycle and invoices", category: "Account & Billing" },
    { title: "Configuring a custom firewall profile", category: "Security & Permissions" },
    { title: "Migrating from shared hosting to a VPS", category: "Getting Started" },
    { title: "Fixing '502 Bad Gateway' Nginx errors", category: "Server Configuration" }
];

export default function PopularArticles() {
    return (
        <section className="py-20 lg:py-24 bg-dark-900">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-3xl font-semibold text-text-primary mb-4">Popular Articles</h2>
                    <p className="text-lg text-text-secondary">
                        The most frequently read solutions from our community.
                    </p>
                </div>

                <div className="bg-dark-800 border border-dark-700 rounded-3xl overflow-hidden shadow-2xl shadow-black/20">
                    {popularArticles.map((article, idx) => (
                        <a 
                            href="#article" 
                            key={idx}
                            className={`flex items-center justify-between p-6 group hover:bg-dark-700/50 transition-colors ${
                                idx !== popularArticles.length - 1 ? 'border-b border-dark-700' : ''
                            }`}
                        >
                            <div className="flex items-center gap-4">
                                <div className="hidden sm:flex w-10 h-10 rounded-full bg-dark-900 border border-dark-700 items-center justify-center text-text-muted group-hover:text-accent group-hover:border-accent/30 transition-colors">
                                    <Icon name="file-text" size={18} />
                                </div>
                                <div>
                                    <h4 className="text-base font-medium text-text-primary group-hover:text-accent transition-colors mb-1">
                                        {article.title}
                                    </h4>
                                    <span className="text-xs text-text-muted">
                                        in {article.category}
                                    </span>
                                </div>
                            </div>
                            <Icon name="arrow-right" size={20} className="text-text-muted opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-accent transition-all duration-300" />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
