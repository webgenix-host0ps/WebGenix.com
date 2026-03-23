import { useState } from 'react';
import CTAButton from '../ui/CTAButton';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: 'General Inquiry',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call processing delay
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
        }, 1500);
    };

    if (isSubmitted) {
        return (
            <div className="bg-dark-800 rounded-3xl p-8 lg:p-12 border border-dark-700 text-center shadow-2xl shadow-black/20 h-full flex flex-col items-center justify-center min-h-[500px]">
                <div className="w-20 h-20 rounded-full bg-success/10 flex items-center justify-center mb-6 border border-success/20 shadow-[0_0_30px_rgba(34,197,94,0.15)]">
                    <svg className="w-10 h-10 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h3 className="text-2xl lg:text-3xl font-semibold text-text-primary mb-3">Message Sent!</h3>
                <p className="text-lg text-text-secondary max-w-sm mx-auto mb-8">
                    Thanks for reaching out. A member of our team receives every message and will get back to you shortly.
                </p>
                <CTAButton variant="secondary" onClick={() => setIsSubmitted(false)}>
                    Send Another Message
                </CTAButton>
            </div>
        );
    }

    return (
        <div className="bg-dark-800 rounded-3xl p-8 lg:p-10 border border-dark-700 shadow-2xl shadow-black/20 relative overflow-hidden">
            {/* Ambient corner glow inside the form */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-[60px] pointer-events-none" />

            <h3 className="text-2xl font-semibold text-text-primary mb-8 relative z-10">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-text-secondary mb-2">
                            Full Name
                        </label>
                        <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            className="w-full px-4 py-3 bg-dark-900 border border-dark-700 rounded-xl text-text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder-text-muted"
                            placeholder="John Doe"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-text-secondary mb-2">
                            Email Address
                        </label>
                        <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            className="w-full px-4 py-3 bg-dark-900 border border-dark-700 rounded-xl text-text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder-text-muted"
                            placeholder="john@example.com"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-text-secondary mb-2">
                        Subject
                    </label>
                    <select
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        className="w-full px-4 py-3 bg-dark-900 border border-dark-700 rounded-xl text-text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all appearance-none"
                        style={{ backgroundSize: '1em 1em', backgroundPosition: 'right 1rem center', backgroundRepeat: 'no-repeat', backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")` }}
                    >
                        <option>General Inquiry</option>
                        <option>Sales & Enterprise</option>
                        <option>Technical Support</option>
                        <option>Billing Question</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium text-text-secondary mb-2">
                        Message
                    </label>
                    <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full px-4 py-3 bg-dark-900 border border-dark-700 rounded-xl text-text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder-text-muted resize-none"
                        placeholder="How can we help you today?"
                    />
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 rounded-xl flex items-center justify-center font-medium transition-all duration-300 mt-2 ${
                        isSubmitting 
                            ? 'bg-accent/50 text-white/70 cursor-not-allowed'
                            : 'bg-accent hover:bg-accent-hover text-white shadow-lg shadow-accent/20 hover:shadow-accent/40 hover:-translate-y-0.5'
                    }`}
                >
                    {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                        'Send Message'
                    )}
                </button>
            </form>
        </div>
    );
}
