import React from 'react';
import CTAButton from '../../ui/CTAButton';

const tlds = [
    { name: '.com', price: '₹799', oldPrice: '₹1,199', popular: true, group: 'Business' },
    { name: '.net', price: '₹999', oldPrice: '₹1,349', popular: false, group: 'Technical' },
    { name: '.org', price: '₹949', oldPrice: '₹1,249', popular: true, group: 'Organizations' },
    { name: '.io', price: '₹3,299', oldPrice: '₹3,999', popular: true, group: 'Startups' },
    { name: '.co', price: '₹1,999', oldPrice: '₹2,399', popular: false, group: 'Business' },
    { name: '.ai', price: '₹5,599', oldPrice: '₹7,299', popular: true, group: 'Tech & AI' },
    { name: '.store', price: '₹399', oldPrice: '₹3,999', popular: false, group: 'Commerce' },
    { name: '.dev', price: '₹1,199', oldPrice: '₹1,599', popular: false, group: 'Developers' },
];

export default function TldPricingSection() {
    return (
        <section className="py-24 bg-dark-800 border-t border-dark-700">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Pricing that makes sense
                    </h2>
                    <p className="text-text-secondary">
                        No hidden renewal fees. We believe in transparent, flat-rate pricing for the lifetime of your domain name.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {tlds.map((tld, index) => (
                        <div
                            key={index}
                            className="relative p-6 rounded-2xl bg-dark-900 border border-dark-700 hover:border-purple-500/50 transition-colors group flex flex-col pt-8"
                        >
                            {tld.popular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-[10px] font-bold tracking-widest uppercase rounded-full shadow-lg">
                                    Popular
                                </div>
                            )}

                            <div className="text-xs font-medium text-text-muted mb-2">{tld.group}</div>
                            <div className="text-4xl font-bold text-white tracking-tight mb-4 group-hover:text-purple-400 transition-colors">
                                {tld.name}
                            </div>

                            <div className="mt-auto mb-6 flex items-baseline gap-2">
                                <span className="text-2xl font-bold text-white">{tld.price}</span>
                                <span className="text-sm font-medium text-text-muted line-through">{tld.oldPrice}</span>
                                <span className="text-sm text-text-secondary ml-1">/yr</span>
                            </div>

                            <CTAButton variant="secondary" className="w-full justify-center group-hover:border-purple-500/50 group-hover:text-purple-400 transition-colors">
                                Register {tld.name}
                            </CTAButton>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center text-sm text-text-muted">
                    Prices shown are for the first year of registration. Renewals are billed at standard rates. <br className="hidden sm:block" />
                    ICANN fees of $0.18/yr applied at checkout.
                </div>

            </div>
        </section>
    );
}
