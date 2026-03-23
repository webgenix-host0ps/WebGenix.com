/**
 * Header Component
 *
 * Clean, minimal navigation with react-router-dom Links.
 *
 * Design decisions:
 * - Logo on left, auth on right (standard pattern)
 * - One CTA in header (secondary style)
 * - Mobile: hamburger menu (no complex dropdowns)
 * - Sticky on scroll with subtle backdrop blur
 */

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CTAButton from '../ui/CTAButton';
import Icon from '../ui/Icon';
import logo from '../../assets/logo.png';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navigate = useNavigate();

    const navLinks = [
        { name: 'Services', href: '/#services' },
        { name: 'How It Works', href: '/#how-it-works' },
        { name: 'About', href: '/#about' },
    ];

    return (
        <header className="
      fixed top-0 left-0 right-0 z-50
      bg-dark-900/80 backdrop-blur-lg
      border-b border-dark-700/50
    ">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <img src={logo} alt="Webgenix" className="h-8 w-auto" />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="
                  text-sm text-text-secondary
                  hover:text-text-primary
                  transition-colors
                "
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    {/* Desktop Auth */}
                    <div className="hidden md:flex items-center gap-4">
                        <Link
                            to="/login"
                            className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                        >
                            Log in
                        </Link>
                        <CTAButton
                            variant="secondary"
                            size="small"
                            onClick={() => navigate('/signup')}
                        >
                            Sign up
                        </CTAButton>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-text-secondary hover:text-text-primary"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <Icon name={mobileMenuOpen ? 'x' : 'menu'} size={24} />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-dark-800 border-t border-dark-700">
                    <div className="px-6 py-4 space-y-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="block text-text-secondary hover:text-text-primary py-2"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className="pt-4 border-t border-dark-700 space-y-3">
                            <Link
                                to="/login"
                                className="block text-text-secondary hover:text-text-primary py-2"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Log in
                            </Link>
                            <CTAButton
                                variant="primary"
                                className="w-full"
                                onClick={() => { navigate('/signup'); setMobileMenuOpen(false); }}
                            >
                                Sign up
                            </CTAButton>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
