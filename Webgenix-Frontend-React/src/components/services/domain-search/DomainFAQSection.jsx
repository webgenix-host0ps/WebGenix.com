import React, { useState } from 'react';
import Icon from '../../ui/Icon';

const faqs = [
    {
        question: "How long does domain registration take?",
        answer: "Domain registration is nearly instantaneous. Once your payment clears, the domain is assigned to your account and immediately begins resolving across global DNS servers. Depending on the TLD, full global propagation usually takes under 15 minutes."
    },
    {
        question: "What exactly is WHOIS Domain Privacy?",
        answer: "When you register a domain, international rules require your name, address, phone number, and email to be listed in a public database called WHOIS. Our Domain Privacy service replaces your personal details with ours, protecting you from spam, telemarketers, and identity theft. We include this free for life."
    },
    {
        question: "Can I transfer my domain elsewhere later?",
        answer: "Absolutely. You own your domain name. As long as the domain has been registered with us for more than 60 days (an ICANN restriction applied to all registrars), you can unlock it and transfer it to any other registrar at any time without penalty."
    },
    {
        question: "Do you charge extra for subdomains or DNS management?",
        answer: "No. You can create unlimited subdomains (like blog.yoursite.com or shop.yoursite.com) and manage all your DNS records directly from our dashboard at no additional cost."
    }
];

export default function DomainFAQSection() {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="py-24 bg-dark-800 border-t border-dark-700">
            <div className="max-w-3xl mx-auto px-6 lg:px-8">

                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-text-secondary">
                        Everything you need to know about domain registration, privacy, and management.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`rounded-2xl border transition-all duration-300 overflow-hidden ${openIndex === index
                                    ? 'bg-dark-900 border-purple-500/30 shadow-[0_5px_15px_rgba(168,85,247,0.05)]'
                                    : 'bg-dark-900/50 border-dark-700 hover:border-dark-600'
                                }`}
                        >
                            <button
                                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                                onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                            >
                                <span className={`font-semibold pr-4 transition-colors ${openIndex === index ? 'text-white' : 'text-text-secondary'}`}>
                                    {faq.question}
                                </span>
                                <span className={`transition-transform duration-300 flex-shrink-0 text-text-muted ${openIndex === index ? 'rotate-180 text-purple-400' : ''}`}>
                                    <Icon name="chevron-down" size={20} />
                                </span>
                            </button>

                            <div
                                className={`px-6 transition-all duration-300 ease-in-out ${openIndex === index
                                        ? 'max-h-60 pb-5 opacity-100'
                                        : 'max-h-0 pb-0 opacity-0'
                                    }`}
                            >
                                <p className="text-text-secondary text-sm leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
