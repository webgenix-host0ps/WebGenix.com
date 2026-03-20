import React, { useState, useEffect } from 'react';
import CTAButton from '../../ui/CTAButton';
import Icon from '../../ui/Icon';

export default function ServiceHero() {
    const [searchValue, setSearchValue] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    const [searchResult, setSearchResult] = useState(null);

    // Simulate search typing effect on mount to draw attention
    useEffect(() => {
        let text = 'myawesomeidea';
        let currentIndex = 0;
        let timeoutId;

        const typeChar = () => {
            if (currentIndex < text.length) {
                setSearchValue(prev => prev + text[currentIndex]);
                currentIndex++;
                timeoutId = setTimeout(typeChar, 100);
            }
        };

        // Start typing after a brief delay
        const initialDelay = setTimeout(typeChar, 1000);

        return () => {
            clearTimeout(timeoutId);
            clearTimeout(initialDelay);
        };
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        if (!searchValue) return;

        setIsSearching(true);
        setSearchResult(null);

        // Simulate API call delay
        setTimeout(() => {
            setIsSearching(false);
            setSearchResult({
                available: true,
                domain: `${searchValue}.com`,
                price: '₹799/yr'
            });
        }, 1500);
    };

    return (
        <section className="relative pt-32 pb-20 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-dark-900">
                {/* Purple/Pink gradient to represent creativity and uniqueness */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-purple-600/10 blur-[150px] rounded-full poiter-events-none" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,#000_70%,transparent_100%)]" />
            </div>

            <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center z-10">

                <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
                    Find the perfect <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                        domain name
                    </span>
                </h1>

                <p className="text-lg text-text-secondary mb-12 max-w-2xl mx-auto">
                    Your idea deserves a great name. Search over 500 domain extensions to find your exact match, complete with free privacy protection and 24/7 support.
                </p>

                {/* Search Bar Interactive Mockup */}
                <div className="max-w-3xl mx-auto relative mb-8">
                    <form
                        onSubmit={handleSearch}
                        className="relative flex items-center p-2 rounded-2xl bg-dark-800 border-2 border-dark-700 hover:border-purple-500/50 focus-within:border-purple-500 focus-within:ring-4 focus-within:ring-purple-500/20 transition-all shadow-2xl"
                    >
                        <div className="pl-4 pr-2 text-text-muted">
                            <Icon name="search" size={24} />
                        </div>
                        <input
                            type="text"
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                            placeholder="Find your perfect domain..."
                            className="flex-1 bg-transparent border-none text-xl text-white placeholder:text-text-muted focus:outline-none focus:ring-0 px-2 py-4 font-medium"
                        />
                        {/* Fake TLD Dropdown visually integrated into input */}
                        <div className="hidden sm:flex items-center gap-1 pr-4 pl-4 border-l border-dark-700 text-white font-medium cursor-pointer hover:text-purple-400 transition-colors">
                            .com <Icon name="chevron-down" size={16} className="text-text-muted" />
                        </div>
                        <button
                            type="submit"
                            disabled={isSearching}
                            className={`px-8 py-4 rounded-xl font-bold tracking-wide transition-all ${isSearching ? 'bg-dark-700 text-text-muted cursor-wait' : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40'}`}
                        >
                            {isSearching ? (
                                <span className="flex items-center gap-2">
                                    <Icon name="loader" className="animate-spin" size={20} /> Searching...
                                </span>
                            ) : 'Search'}
                        </button>
                    </form>

                    {/* Fun Search Result Simulation */}
                    <div className={`absolute top-full left-0 right-0 mt-4 transition-all duration-500 ${searchResult ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
                        {searchResult && (
                            <div className="bg-dark-800 border border-emerald-500/30 rounded-2xl p-6 shadow-[0_10px_40px_rgba(16,185,129,0.1)]">
                                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                                            <Icon name="check" size={24} />
                                        </div>
                                        <div className="text-left">
                                            <div className="text-xl font-bold text-white mb-1">{searchResult.domain}</div>
                                            <div className="text-sm text-emerald-400 font-medium tracking-wide uppercase">Available!</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <div className="text-2xl font-bold text-white">{searchResult.price}</div>
                                        <CTAButton variant="primary" className="!bg-emerald-500 hover:!bg-emerald-400 !text-white !border-none">
                                            Add to Cart
                                        </CTAButton>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Popular TLDs quick bar */}
                <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm font-medium transition-opacity duration-300" style={{ opacity: searchResult ? 0 : 1 }}>
                    <div className="flex flex-col items-center">
                        <span className="text-white text-lg font-bold">.com</span>
                        <span className="text-purple-400">$9.99</span>
                    </div>
                    <div className="w-px h-8 bg-dark-700 hidden sm:block" />
                    <div className="flex flex-col items-center">
                        <span className="text-white text-lg font-bold">.io</span>
                        <span className="text-purple-400">$39.99</span>
                    </div>
                    <div className="w-px h-8 bg-dark-700 hidden sm:block" />
                    <div className="flex flex-col items-center">
                        <span className="text-white text-lg font-bold">.dev</span>
                        <span className="text-purple-400">$14.99</span>
                    </div>
                    <div className="w-px h-8 bg-dark-700 hidden sm:block" />
                    <div className="flex flex-col items-center">
                        <span className="text-white text-lg font-bold">.ai</span>
                        <span className="text-purple-400">$69.99</span>
                    </div>
                </div>

            </div>
        </section>
    );
}
