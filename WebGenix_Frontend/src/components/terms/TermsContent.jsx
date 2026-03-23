const tableOfContents = [
    { id: "acceptance-of-terms", title: "1. Acceptance of Terms" },
    { id: "description-of-service", title: "2. Description of Service" },
    { id: "user-conduct", title: "3. User Conduct" },
    { id: "payments-and-billing", title: "4. Payments and Billing" },
    { id: "intellectual-property", title: "5. Intellectual Property" },
    { id: "termination", title: "6. Termination" },
    { id: "limitation-of-liability", title: "7. Limitation of Liability" }
];

export default function TermsContent() {
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
                        These Terms of Service ("Terms", "Terms of Service") govern your relationship with Webgenix
                        (the "Service") operated by Webgenix Inc. ("us", "we", or "our"). Please read these Terms
                        of Service carefully before using our website and cloud infrastructure services.
                    </p>

                    <h2 id="acceptance-of-terms" className="scroll-mt-32">1. Acceptance of Terms</h2>
                    <p>
                        Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. 
                        These Terms apply to all visitors, users and others who access or use the Service.
                        By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of 
                        the terms then you may not access the Service.
                    </p>

                    <h2 id="description-of-service" className="scroll-mt-32">2. Description of Service</h2>
                    <p>
                        Webgenix provides cloud hosting, server deployment, and infrastructure routing services. We reserve the right 
                        to modify, suspend, or discontinue the Service (or any part or content thereof) at any time with or without 
                        notice to you, and we will not be liable to you or to any third party should we exercise such rights.
                    </p>

                    <h2 id="user-conduct" className="scroll-mt-32">3. User Conduct</h2>
                    <p>
                        You agree to use the Service only for lawful purposes. You agree not to take any action that might compromise 
                        the security of the Service, render the Service inaccessible to others, or otherwise cause damage to the 
                        Service or its content. You agree not to:
                    </p>
                    <ul>
                        <li>Host, distribute, or link to child exploitation material or illegal content.</li>
                        <li>Engage in cryptocurrency mining or automated network abuse (e.g., botnets, DDoS attacks).</li>
                        <li>Attempt to reverse engineer, decompile, or hack the Service infrastructure.</li>
                        <li>Violate the intellectual property rights of others.</li>
                    </ul>

                    <h2 id="payments-and-billing" className="scroll-mt-32">4. Payments and Billing</h2>
                    <p>
                        You agree to pay all fees or charges to your Account in accordance with the fees, charges, and billing terms 
                        in effect at the time a fee or charge is due and payable. We reserve the right to change our prices at any time, 
                        with notice provided to the email attached to your account.
                    </p>
                    <p>
                        If your payment method fails, we may immediately suspend your access to the Service until your account is brought current.
                    </p>

                    <h2 id="intellectual-property" className="scroll-mt-32">5. Intellectual Property</h2>
                    <p>
                        The Service and its original content, features, code, and functionality are and will remain the exclusive property of 
                        Webgenix Inc. and its licensors. The Service is protected by copyright, trademark, and other laws of both the 
                        United States and foreign countries.
                    </p>

                    <h2 id="termination" className="scroll-mt-32">6. Termination</h2>
                    <p>
                        We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, 
                        including without limitation if you breach the Terms. Upon termination, your right to use the Service will 
                        immediately cease.
                    </p>

                    <h2 id="limitation-of-liability" className="scroll-mt-32">7. Limitation of Liability</h2>
                    <p>
                        In no event shall Webgenix, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for 
                        any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, 
                        data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access 
                        or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from 
                        the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on 
                        warranty, contract, tort (including negligence) or any other legal theory.
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
