import React from 'react';
import CTAButton from '../../ui/CTAButton';

const transferPrices = [
    { tld: '.com', price: '₹799', renewsAt: '₹1,199/yr' },
    { tld: '.net', price: '₹949', renewsAt: '₹1,349/yr' },
    { tld: '.org', price: '₹849', renewsAt: '₹1,249/yr' },
    { tld: '.io', price: '₹2,899', renewsAt: '₹3,999/yr' },
    { tld: '.co', price: '₹1,899', renewsAt: '₹2,399/yr' },
];

export default function TransferPricingSection() {
    return (
        <section className="py-24 bg-dark-900 overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Left text */}
                    <div className="flex-1 text-center lg:text-left">
                        <h2 className="text-3xl font-bold text-white mb-6">
                            Transfer pricing that includes <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">+1 year free</span>
                        </h2>
                        <p className="text-text-secondary leading-relaxed mb-8">
                            When you transfer a domain to us, the transfer fee automatically covers an additional year of registration added to your domain's current expiration date. You don't lose any time you've already paid for elsewhere.
                        </p>

                        <ul className="space-y-4 mb-8 text-left max-w-md mx-auto lg:mx-0">
                            <li className="flex items-start gap-3">
                                <div className="mt-1 w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">✓</div>
                                <span className="text-white text-sm">Keep your remaining registration time</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="mt-1 w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">✓</div>
                                <span className="text-white text-sm">Add +1 full year automatically</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="mt-1 w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">✓</div>
                                <span className="text-white text-sm">Free WHOIS Privacy protection forever</span>
                            </li>
                        </ul>

                        <CTAButton variant="secondary" className="hidden lg:inline-flex">
                            View All TLD Prices
                        </CTAButton>
                    </div>

                    {/* Right Pricing Table Mockup */}
                    <div className="flex-1 w-full max-w-lg">
                        <div className="bg-dark-800 rounded-2xl border border-dark-700 shadow-xl overflow-hidden">
                            <div className="grid grid-cols-3 bg-dark-900 border-b border-dark-700 p-4 text-xs font-semibold uppercase tracking-wider text-text-muted">
                                <div>Extension</div>
                                <div className="text-right pr-4">Transfer Fee</div>
                                <div className="text-right bg-blue-500/10 text-blue-400 rounded px-2 py-1 -my-1 -mx-2 mr-2">Renews At</div>
                            </div>

                            <div className="divide-y divide-dark-700">
                                {transferPrices.map((item, index) => (
                                    <div key={index} className="grid grid-cols-3 p-4 items-center hover:bg-dark-700/50 transition-colors">
                                        <div className="font-bold text-white text-lg">{item.tld}</div>
                                        <div className="text-right pr-4 font-semibold text-white">{item.price}</div>
                                        <div className="text-right text-text-secondary text-sm">{item.renewsAt}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
