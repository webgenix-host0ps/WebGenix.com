import { useState } from 'react';
import { Link } from 'react-router-dom';
import CTAButton from '../ui/CTAButton';
import Icon from '../ui/Icon';
import logo from '../../assets/logo.png';
import keycloak from '../../auth/keycloak';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const isLoggedIn = keycloak.authenticated;
    const username = keycloak.tokenParsed?.preferred_username;

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

                        {!isLoggedIn ? (
                            <>
                                <button
                                    className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                                    onClick={() => keycloak.login({  redirectUri: window.location.origin + "/dashboard"})}>
                                    Log in
                                </button>

                                <CTAButton
                                    variant="secondary"
                                    size="small"
                                    onClick={() => keycloak.register()}
                                >
                                    Sign up
                                </CTAButton>
                            </>
                        ) : (
                            <>
                                <span className="text-sm text-text-primary">
                                    {username}
                                </span>

                                <CTAButton
                                    variant="secondary"
                                    size="small"
                                    onClick={() => keycloak.logout()}
                                >
                                    Logout
                                </CTAButton>
                            </>
                        )}

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

                            {!isLoggedIn ? (
                                <>
                                    <button
                                        className="block text-text-secondary hover:text-text-primary py-2"
                                        onClick={() => {
                                            keycloak.login();
                                            setMobileMenuOpen(false);
                                        }}
                                    >
                                        Log in
                                    </button>

                                    <CTAButton
                                        variant="primary"
                                        className="w-full"
                                        onClick={() => {
                                            keycloak.register();
                                            setMobileMenuOpen(false);
                                        }}
                                    >
                                        Sign up
                                    </CTAButton>
                                </>
                            ) : (
                                <>
                                    <div className="text-text-primary py-2">
                                        {username}
                                    </div>

                                    <CTAButton
                                        variant="primary"
                                        className="w-full"
                                        onClick={() => {
                                            keycloak.logout();
                                            setMobileMenuOpen(false);
                                        }}
                                    >
                                        Logout
                                    </CTAButton>
                                </>
                            )}

                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}