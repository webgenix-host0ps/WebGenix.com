import logo from '../../assets/logo.png';

export default function Footer() {
    const footerLinks = [
        {
            title: 'Products',
            links: [
                { name: 'SSL Certificates', href: '#services' },
                { name: 'Email', href: '#services' },
            ],
        },
        {
            title: 'Company',
            links: [
                { name: 'About', href: '/#about' },
                { name: 'Careers', href: '/careers' },
                { name: 'Blog', href: '/blog' },
                { name: 'Contact', href: '/contact' },
            ],
        },
        {
            title: 'Support',
            links: [
                { name: 'Help Center', href: '/help' },
                { name: 'Documentation', href: '/docs' },
                { name: 'Status', href: '/status' },
                { name: 'Community', href: '/community' },
            ],
        },
        {
            title: 'Legal',
            links: [
                { name: 'Privacy Policy', href: '/privacy' },
                { name: 'Terms of Service', href: '/terms' },
                { name: 'Cookies', href: '/cookies' },
                { name: 'GDPR', href: '/gdpr' },
            ],
        },
    ];

    return (
        <footer className="bg-dark-800 border-t border-dark-700 relative">

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900/40 to-transparent pointer-events-none"></div>

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16">

                {/* Links */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
                    {footerLinks.map((group) => (
                        <div key={group.title}>
                            <h4 className="text-sm font-semibold text-text-primary mb-4">
                                {group.title}
                            </h4>

                            <ul className="space-y-3">
                                {group.links.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.href}
                                            className="
                                            text-sm text-text-secondary
                                            hover:text-text-primary
                                            transition-all duration-200
                                            hover:translate-x-1
                                            inline-block
                                            "
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom */}
                <div className="pt-8 border-t border-dark-700 flex flex-col md:flex-row items-center justify-between gap-4">

                    <div className="flex items-center gap-4">
                        <img src={logo} alt="Webgenix" className="h-6 w-auto opacity-70" />
                        <span className="text-sm text-text-muted">
                            © {new Date().getFullYear()} Webgenix. All rights reserved.
                        </span>
                    </div>

                    <div className="text-xs text-text-muted">
                        Built with trust in mind
                    </div>

                </div>
            </div>
        </footer>
    );
}