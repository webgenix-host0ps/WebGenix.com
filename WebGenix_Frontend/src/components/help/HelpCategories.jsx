import Icon from '../ui/Icon';

const categories = [
    {
        title: "Getting Started",
        description: "Everything you need to set up your first server or site.",
        icon: "rocket",
        articleCount: 12
    },
    {
        title: "Account & Billing",
        description: "Manage your invoices, payment methods, and profile.",
        icon: "credit-card",
        articleCount: 8
    },
    {
        title: "Domains & DNS",
        description: "Transfer domains, manage DNS records, and set up SSL.",
        icon: "globe",
        articleCount: 15
    },
    {
        title: "Server Configuration",
        description: "Advanced guides on setting up Nginx, Apache, and nodes.",
        icon: "server",
        articleCount: 24
    },
    {
        title: "Database Management",
        description: "Connect to MySQL, PostgreSQL, or restore a backup.",
        icon: "database",
        articleCount: 10
    },
    {
        title: "Security & Permissions",
        description: "Learn about firewall rules, SSH keys, and user access.",
        icon: "shield",
        articleCount: 14
    }
];

export default function HelpCategories() {
    return (
        <section className="py-20 lg:py-24 bg-dark-900 border-b border-dark-800">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl font-semibold text-text-primary mb-4">Browse by Topic</h2>
                    <p className="text-lg text-text-secondary">
                        Find step-by-step guides and detailed documentation for every feature.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((cat, idx) => (
                        <a href="#category" key={idx} className="group p-6 rounded-2xl bg-dark-800 border border-dark-700 hover:border-accent/40 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-black/20 hover:shadow-accent/10 flex flex-col h-full">
                            <div className="flex items-start justify-between mb-4">
                                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center border border-accent/20 group-hover:bg-accent/20 transition-colors">
                                    <Icon name={cat.icon} size={24} className="text-accent group-hover:scale-110 transition-transform duration-300" />
                                </div>
                                <span className="text-xs font-medium bg-dark-700 text-text-muted px-2.5 py-1 rounded-full border border-dark-600">
                                    {cat.articleCount} articles
                                </span>
                            </div>
                            <h3 className="text-xl font-medium text-text-primary mb-2 group-hover:text-accent transition-colors">{cat.title}</h3>
                            <p className="text-text-secondary text-sm leading-relaxed mb-4 flex-grow">{cat.description}</p>
                            <div className="flex items-center gap-1.5 text-accent text-sm font-medium opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                View Articles <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
