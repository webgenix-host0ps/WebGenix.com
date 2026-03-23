/**
 * CTAButton Component
 * 
 * The primary call-to-action button. Only ONE should appear
 * above the fold to reduce decision paralysis.
 * 
 * Variants:
 * - primary: Solid accent color (main CTA)
 * - secondary: Subtle border (navigation links)
 * 
 * Psychology: Large touch target, clear contrast, no competing colors.
 * The button should feel inevitable, not pushy.
 */

import { Link } from 'react-router-dom';

export default function CTAButton({
    children,
    variant = 'primary',
    size = 'default',
    className = '',
    to,
    ...props
}) {
    const baseStyles = `
    inline-flex items-center justify-center
    font-medium rounded-lg
    transition-all duration-200
    focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-dark-900
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

    const variants = {
        primary: `
      bg-accent hover:bg-accent-hover
      text-white
      shadow-lg shadow-accent/20
      hover:shadow-xl hover:shadow-accent/30
    `,
        secondary: `
      bg-transparent
      text-text-primary
      border border-dark-600
      hover:bg-dark-700 hover:border-dark-500
    `,
    };

    const sizes = {
        default: 'px-6 py-3 text-base',
        large: 'px-8 py-4 text-lg',
        small: 'px-4 py-2 text-sm',
    };

    const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    if (to) {
        return (
            <Link to={to} className={combinedClassName} {...props}>
                {children}
            </Link>
        );
    }

    return (
        <button
            className={combinedClassName}
            {...props}
        >
            {children}
        </button>
    );
}
