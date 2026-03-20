import { useState } from 'react';
import { Link } from 'react-router-dom';

const EyeIcon = ({ open }) => open ? (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
        <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
) : (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
    </svg>
);

export default function SignupForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirm: '',
        terms: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Auth logic goes here
    };

    const passwordStrength = () => {
        const p = formData.password;
        if (!p) return null;
        if (p.length < 6) return { label: 'Weak', color: 'bg-red-500', width: 'w-1/4' };
        if (p.length < 10) return { label: 'Fair', color: 'bg-warning', width: 'w-2/4' };
        if (!/[A-Z]/.test(p) || !/[0-9]/.test(p)) return { label: 'Good', color: 'bg-accent', width: 'w-3/4' };
        return { label: 'Strong', color: 'bg-success', width: 'w-full' };
    };

    const strength = passwordStrength();

    const inputClass = `
        w-full px-4 py-3 rounded-lg text-sm
        bg-dark-700/80 border border-dark-600
        text-text-primary placeholder-text-muted
        focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent
        transition-all duration-200
    `;

    return (
        <main className="min-h-screen flex items-center justify-center pt-16 pb-10 px-4 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-900 to-dark-800" />
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `radial-gradient(circle at 80% 20%, #3b82f6 0%, transparent 50%),
                                      radial-gradient(circle at 20% 80%, #1d4ed8 0%, transparent 50%)`,
                }}
            />

            {/* Card */}
            <div className="relative z-10 w-full max-w-md">
                {/* Logo */}
                <div className="text-center mb-8">
                    <Link to="/" className="inline-flex items-center gap-2 mb-6">
                        <div className="w-9 h-9 rounded-xl bg-accent flex items-center justify-center shadow-lg shadow-accent/30">
                            <span className="text-white font-bold text-base">H</span>
                        </div>
                        <span className="text-xl font-semibold text-text-primary">HostPlatform</span>
                    </Link>
                    <h1 className="text-2xl font-semibold text-text-primary mb-2">Create your account</h1>
                    <p className="text-text-secondary text-sm">Start deploying in under 5 minutes. No credit card or UPI required.</p>
                </div>

                {/* Form Card */}
                <div className="
                    bg-dark-800/60 backdrop-blur-xl
                    border border-dark-600/60
                    rounded-2xl p-8
                    shadow-2xl shadow-black/40
                ">
                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* GitHub SSO — shown first on signup to reduce friction */}
                        <button
                            type="button"
                            className="
                                w-full py-3 px-6 rounded-lg
                                bg-dark-700/80 hover:bg-dark-600
                                border border-dark-600 hover:border-dark-500
                                text-text-primary font-medium text-sm
                                flex items-center justify-center gap-3
                                transition-all duration-200
                                active:scale-[0.98]
                            "
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.267 1.98-.402 3-.405 1.02.003 2.04.138 3 .405 2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                            </svg>
                            Continue with GitHub
                        </button>

                        {/* Divider */}
                        <div className="relative flex items-center gap-4">
                            <div className="flex-1 h-px bg-dark-600" />
                            <span className="text-xs text-text-muted">or fill in your details</span>
                            <div className="flex-1 h-px bg-dark-600" />
                        </div>

                        {/* Full Name */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">
                                Full name
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                autoComplete="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Jane Smith"
                                className={inputClass}
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">
                                Email address
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="you@example.com"
                                className={inputClass}
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-text-secondary mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    id="password"
                                    name="password"
                                    type={showPassword ? 'text' : 'password'}
                                    autoComplete="new-password"
                                    required
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="At least 8 characters"
                                    className={`${inputClass} pr-11`}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(v => !v)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-secondary transition-colors p-1"
                                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                                >
                                    <EyeIcon open={showPassword} />
                                </button>
                            </div>
                            {/* Password strength bar */}
                            {strength && (
                                <div className="mt-2">
                                    <div className="h-1 w-full bg-dark-600 rounded-full overflow-hidden">
                                        <div className={`h-full rounded-full transition-all duration-300 ${strength.color} ${strength.width}`} />
                                    </div>
                                    <p className="text-xs text-text-muted mt-1">{strength.label} password</p>
                                </div>
                            )}
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <label htmlFor="confirm" className="block text-sm font-medium text-text-secondary mb-2">
                                Confirm password
                            </label>
                            <div className="relative">
                                <input
                                    id="confirm"
                                    name="confirm"
                                    type={showConfirm ? 'text' : 'password'}
                                    autoComplete="new-password"
                                    required
                                    value={formData.confirm}
                                    onChange={handleChange}
                                    placeholder="••••••••"
                                    className={`${inputClass} pr-11 ${formData.confirm && formData.password !== formData.confirm
                                        ? 'border-red-500/70 focus:border-red-500 focus:ring-red-500'
                                        : formData.confirm && formData.password === formData.confirm
                                            ? 'border-success/70'
                                            : ''
                                        }`}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirm(v => !v)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-secondary transition-colors p-1"
                                    aria-label={showConfirm ? 'Hide confirm password' : 'Show confirm password'}
                                >
                                    <EyeIcon open={showConfirm} />
                                </button>
                            </div>
                            {formData.confirm && formData.password !== formData.confirm && (
                                <p className="text-xs text-red-400 mt-1">Passwords don't match</p>
                            )}
                        </div>

                        {/* Terms */}
                        <div className="flex items-start gap-3">
                            <input
                                id="terms"
                                name="terms"
                                type="checkbox"
                                required
                                checked={formData.terms}
                                onChange={handleChange}
                                className="mt-0.5 w-4 h-4 rounded border-dark-600 bg-dark-700 accent-accent cursor-pointer flex-shrink-0"
                            />
                            <label htmlFor="terms" className="text-sm text-text-secondary cursor-pointer select-none leading-relaxed">
                                I agree to the{' '}
                                <a href="#" className="text-accent hover:text-accent-hover transition-colors">Terms of Service</a>
                                {' '}and{' '}
                                <a href="#" className="text-accent hover:text-accent-hover transition-colors">Privacy Policy</a>
                            </label>
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="
                                w-full py-3 px-6 rounded-lg
                                bg-accent hover:bg-accent-hover
                                text-white font-medium text-sm
                                shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/35
                                transition-all duration-200
                                focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-dark-900
                                active:scale-[0.98]
                            "
                        >
                            Create account
                        </button>
                    </form>
                </div>

                {/* Footer */}
                <p className="text-center mt-6 text-sm text-text-secondary">
                    Already have an account?{' '}
                    <Link to="/login" className="text-accent hover:text-accent-hover font-medium transition-colors">
                        Log in
                    </Link>
                </p>
            </div>
        </main>
    );
}
