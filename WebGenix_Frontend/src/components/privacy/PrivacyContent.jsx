const tableOfContents = [
    { id: "information-collection", title: "1. Information Collection" },
    { id: "use-of-data", title: "2. Use of Data" },
    { id: "data-security", title: "3. Data Security" },
    { id: "third-party-services", title: "4. Third-Party Services" },
    { id: "user-rights", title: "5. Your Rights" },
    { id: "contact-us", title: "6. Contact Us" }
];

export default function PrivacyContent() {
    return (
        <section className="py-16 lg:py-24 bg-dark-900">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
                
                {/* Main Content Area */}
                <div className="flex-1 min-w-0 max-w-3xl prose prose-invert prose-lg 
                    prose-headings:text-text-primary prose-headings:font-semibold
                    prose-p:text-text-secondary prose-p:leading-relaxed
                    prose-a:text-accent hover:prose-a:text-accent-hover
                    prose-li:text-text-secondary marker:text-dark-600
                ">
                    <p className="lead text-xl text-text-primary mb-10">
                        At Webgenix, we take your privacy seriously. This Privacy Policy explains how we collect, use,
                        disclose, and safeguard your information when you visit our website and use our cloud hosting services. 
                        Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, 
                        please do not access the site.
                    </p>

                    <h2 id="information-collection" className="scroll-mt-32">1. Information Collection</h2>
                    <p>
                        We may collect information about you in a variety of ways. The information we may collect on the Site includes:
                    </p>
                    <h3>Personal Data</h3>
                    <p>
                        Personally identifiable information, such as your name, shipping address, email address, and telephone number, 
                        and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us 
                        when you register with the Site or when you choose to participate in various activities related to the Site.
                    </p>
                    <h3>Derivative Data</h3>
                    <p>
                        Information our servers automatically collect when you access the Site, such as your IP address, your browser type, 
                        your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.
                    </p>

                    <h2 id="use-of-data" className="scroll-mt-32">2. Use of Data</h2>
                    <p>
                        Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. 
                        Specifically, we may use information collected about you via the Site to:
                    </p>
                    <ul>
                        <li>Create and manage your account.</li>
                        <li>Deliver targeted advertising, coupons, newsletters, and other information regarding promotions.</li>
                        <li>Email you regarding your account or order.</li>
                        <li>Fulfill and manage purchases, orders, payments, and other transactions related to the Site.</li>
                        <li>Increase the efficiency and operation of the Site.</li>
                        <li>Monitor and analyze usage and trends to improve your experience.</li>
                    </ul>

                    <h2 id="data-security" className="scroll-mt-32">3. Data Security</h2>
                    <p>
                        We use administrative, technical, and physical security measures to help protect your personal information. 
                        While we have taken reasonable steps to secure the personal information you provide to us, please be aware that 
                        despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be 
                        guaranteed against any interception or other type of misuse.
                    </p>

                    <h2 id="third-party-services" className="scroll-mt-32">4. Third-Party Services</h2>
                    <p>
                        The Site may contain links to third-party websites and applications of interest, including advertisements and 
                        external services, that are not affiliated with us. Once you have used these links to leave the Site, any 
                        information you provide to these third parties is not covered by this Privacy Policy, and we cannot guarantee 
                        the safety and privacy of your information.
                    </p>

                    <h2 id="user-rights" className="scroll-mt-32">5. Your Rights</h2>
                    <p>
                        If you are a resident in the European Economic Area (EEA) or California (CCPA), you have certain data protection rights. 
                        Webgenix aims to take reasonable steps to allow you to correct, amend, delete, or limit the use of your Personal Data.
                    </p>
                    <p>
                        If you wish to be informed what Personal Data we hold about you and if you want it to be removed from our systems, 
                        please contact us.
                    </p>

                    <h2 id="contact-us" className="scroll-mt-32">6. Contact Us</h2>
                    <p>
                        If you have questions or comments about this Privacy Policy, please contact us at:
                    </p>
                    <p>
                        <strong className="text-text-primary">Webgenix Support</strong><br/>
                        123 Innovation Drive<br/>
                        San Francisco, CA 94105<br/>
                        <a href="mailto:privacy@webgenix.com">privacy@webgenix.com</a>
                    </p>
                </div>

                {/* Right / Sticky Sidebar Table of Contents */}
                <div className="hidden lg:block w-72 flex-shrink-0">
                    <div className="sticky top-32 bg-dark-800/50 backdrop-blur-sm border border-dark-700/50 rounded-2xl p-6 shadow-xl shadow-black/10">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-text-primary mb-6">Contents</h3>
                        <nav className="space-y-4">
                            {tableOfContents.map((item) => (
                                <a 
                                    key={item.id} 
                                    href={`#${item.id}`}
                                    className="block text-sm font-medium text-text-secondary hover:text-accent transition-colors"
                                >
                                    {item.title}
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>

            </div>
        </section>
    );
}
