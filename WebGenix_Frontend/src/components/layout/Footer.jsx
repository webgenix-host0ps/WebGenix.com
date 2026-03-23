/**
 * Footer Component
 * 
 * Minimal footer with essential links and final CTA.
 * 
 * Structure:
 * - Link columns for navigation
 * - Bottom bar with copyright
 * 
 * Psychology: Consistent with header styling.
 * No surprises, no clutter.
 */

import logo from '../../assets/logo.png';

export default function Footer() {
    const footerLinks = [
        {
            title: 'Products',
            links: [
                /* { name: 'Hosting', href: '#services' }, */
                /* { name: 'Domains', href: '#services' }, */
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
        <footer className="bg-dark-800 border-t border-dark-700">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
                {/* Links Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
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
                                            className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-dark-700 flex flex-col md:flex-row items-center justify-between gap-4">
                    {/* Logo */}
                    <div className="flex items-center gap-4">
                        <img src={logo} alt="Webgenix" className="h-6 w-auto opacity-70" />
                        <span className="text-sm text-text-muted">
                            © {new Date().getFullYear()} Webgenix. All rights reserved.
                        </span>
                    </div>

                    {/* Social Links (placeholder) */}
                    <div className="flex items-center gap-4">
                        <span className="text-xs text-text-muted">
                            Built with trust in mind
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
