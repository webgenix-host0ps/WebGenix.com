const sections = [
    {
        title: "Getting Started",
        links: [
            { name: "Introduction", href: "#intro", active: true },
            { name: "Quick Start", href: "#quickstart", active: false },
            { name: "Global Infrastructure", href: "#global-infrastructure", active: false }
        ]
    },
    {
        title: "Core Concepts",
        links: [
            { name: "Deployments", href: "#deployments", active: false },
            { name: "Environments", href: "#environments", active: false },
            { name: "Custom Domains", href: "#custom-domains", active: false }
        ]
    },
    {
        title: "API Reference",
        links: [
            { name: "Authentication", href: "#auth", active: false },
            { name: "Endpoints", href: "#endpoints", active: false },
            { name: "Rate Limits", href: "#rate-limits", active: false }
        ]
    }
];

export default function DocsSidebar() {
    return (
        <aside className="w-64 flex-shrink-0 hidden lg:block sticky top-28 h-[calc(100vh-8rem)] overflow-y-auto pr-6 pb-10 
            scrollbar-thin scrollbar-thumb-dark-700 scrollbar-track-dark-900 hover:scrollbar-thumb-dark-600">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-6">Documentation</h3>
            <nav className="space-y-8">
                {sections.map((section, idx) => (
                    <div key={idx}>
                        <h4 className="font-semibold text-text-primary mb-3 text-sm">{section.title}</h4>
                        <ul className="space-y-2 border-l border-dark-700/50 ml-2">
                            {section.links.map((link, lIdx) => (
                                <li key={lIdx}>
                                    <a 
                                        href={link.href}
                                        className={`block pl-4 py-1.5 text-sm transition-colors border-l-2 -ml-[1px] ${
                                            link.active 
                                                ? 'border-accent text-accent font-medium' 
                                                : 'border-transparent text-text-secondary hover:text-text-primary hover:border-dark-500'
                                        }`}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </nav>
        </aside>
    );
}
