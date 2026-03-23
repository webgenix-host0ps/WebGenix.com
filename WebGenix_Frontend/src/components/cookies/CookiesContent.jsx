const tableOfContents = [
    { id: "what-are-cookies", title: "1. What Are Cookies" },
    { id: "how-we-use-cookies", title: "2. How We Use Cookies" },
    { id: "types-of-cookies", title: "3. Types of Cookies" },
    { id: "third-party-cookies", title: "4. Third-Party Cookies" },
    { id: "managing-cookies", title: "5. Managing Cookies" },
    { id: "changes-to-policy", title: "6. Changes to Policy" }
];

export default function CookiesContent() {
    return (
        <section className="py-16 lg:py-24 bg-dark-900 border-b border-dark-800">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
                
                {/* Main Content Area */}
                <div className="flex-1 min-w-0 max-w-3xl prose prose-invert prose-lg 
                    prose-headings:text-text-primary prose-headings:font-semibold
                    prose-p:text-text-secondary prose-p:leading-relaxed
                    prose-a:text-accent hover:prose-a:text-accent-hover
                    prose-li:text-text-secondary marker:text-dark-600
                ">
                    <p className="lead text-xl text-text-primary mb-10">
                        This Cookie Policy explains how Webgenix ("we", "us", and "our") uses cookies and similar technologies 
                        to recognize you when you visit our website and use our application services. It explains what these technologies are 
                        and why we use them, as well as your rights to control our use of them.
                    </p>

                    <h2 id="what-are-cookies" className="scroll-mt-32">1. What Are Cookies</h2>
                    <p>
                        Cookies are small data files that are placed on your computer or mobile device when you visit a website. 
                        Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, 
                        as well as to provide reporting information. 
                    </p>
                    <p>
                        Cookies set by the website owner (in this case, Webgenix) are called "first-party cookies". 
                        Cookies set by parties other than the website owner are called "third-party cookies".
                    </p>

                    <h2 id="how-we-use-cookies" className="scroll-mt-32">2. How We Use Cookies</h2>
                    <p>
                        We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons 
                        in order for our Websites to operate, and we refer to these as "essential" or "strictly necessary" cookies. 
                        Other cookies also enable us to track and target the interests of our users to enhance the experience on our Website 
                        and subscription services.
                    </p>

                    <h2 id="types-of-cookies" className="scroll-mt-32">3. Types of Cookies</h2>
                    <p>The specific types of first and third-party cookies served through our Website are detailed below:</p>
                    <ul>
                        <li>
                            <strong className="text-text-primary">Strictly Necessary Cookies:</strong> These cookies are essential to provide you with services 
                            available through our Website and to use some of its features, such as access to secure areas. 
                        </li>
                        <li>
                            <strong className="text-text-primary">Performance and Functionality Cookies:</strong> These cookies are used to enhance the performance 
                            and functionality of our Website but are non-essential to their use. However, without these cookies, 
                            certain functionality may become unavailable.
                        </li>
                        <li>
                            <strong className="text-text-primary">Analytics and Customization Cookies:</strong> These cookies collect information that is used either 
                            in aggregate form to help us understand how our Website is being used or how effective our marketing campaigns are.
                        </li>
                    </ul>

                    <h2 id="third-party-cookies" className="scroll-mt-32">4. Third-Party Cookies</h2>
                    <p>
                        In some special cases, we also use cookies provided by trusted third parties. For example, this site uses 
                        Google Analytics which is one of the most widespread and trusted analytics solutions on the web for helping us 
                        to understand how you use the site and ways that we can improve your experience.
                    </p>

                    <h2 id="managing-cookies" className="scroll-mt-32">5. Managing Cookies</h2>
                    <p>
                        You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by 
                        setting your preferences in your browser settings. As the means by which you can refuse cookies through your 
                        web browser controls vary from browser-to-browser, you should visit your browser's help menu for more information.
                    </p>

                    <h2 id="changes-to-policy" className="scroll-mt-32">6. Changes to Policy</h2>
                    <p>
                        We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we 
                        use or for other operational, legal or regulatory reasons. Please therefore re-visit this Cookie Policy 
                        regularly to stay informed about our use of cookies and related technologies.
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
