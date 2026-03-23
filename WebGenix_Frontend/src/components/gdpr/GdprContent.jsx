const tableOfContents = [
    { id: "introduction", title: "1. Introduction" },
    { id: "data-processing", title: "2. Data Processing" },
    { id: "lawful-basis", title: "3. Lawful Basis" },
    { id: "your-rights", title: "4. Your Rights under GDPR" },
    { id: "dpa", title: "5. Data Processing Agreement" },
    { id: "data-retention", title: "6. Data Retention" },
    { id: "contact-dpo", title: "7. Contact our DPO" }
];

export default function GdprContent() {
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
                        At Webgenix, we are fully committed to compliance with the General Data Protection Regulation (GDPR). 
                        This document outlines our technical and organizational measures to ensure your data, and your users' data, 
                        remains private, secure, and under your control.
                    </p>

                    <h2 id="introduction" className="scroll-mt-32">1. Introduction</h2>
                    <p>
                        The General Data Protection Regulation (EU) 2016/679 ("GDPR") is a regulation in EU law on data protection and 
                        privacy in the European Union and the European Economic Area. It also addresses the transfer of personal data 
                        outside the EU and EEA areas.
                    </p>

                    <h2 id="data-processing" className="scroll-mt-32">2. Data Processing</h2>
                    <p>
                        When you use Webgenix to host your applications, you are considered the "Data Controller" and Webgenix is the 
                        "Data Processor". We process data solely on your behalf and in accordance with your instructions as dictated 
                        by your interaction with our APIs and dashboards. We do not mine your data for advertising purposes.
                    </p>

                    <h2 id="lawful-basis" className="scroll-mt-32">3. Lawful Basis</h2>
                    <p>
                        We process your personal data under the following lawful bases:
                    </p>
                    <ul>
                        <li><strong className="text-text-primary">Contractual Necessity:</strong> To provide our cloud hosting services according to our Terms of Service.</li>
                        <li><strong className="text-text-primary">Legitimate Interests:</strong> To improve our infrastructure, maintain security, and prevent fraud.</li>
                        <li><strong className="text-text-primary">Legal Obligation:</strong> To comply with applicable financial and tax laws.</li>
                        <li><strong className="text-text-primary">Consent:</strong> When you voluntarily subscribe to our marketing communications.</li>
                    </ul>

                    <h2 id="your-rights" className="scroll-mt-32">4. Your Rights under GDPR</h2>
                    <p>
                        Under the GDPR, European residents possess specific rights regarding their personal data:
                    </p>
                    <ul>
                        <li><strong className="text-text-primary">The right to access:</strong> You have the right to request copies of your personal data.</li>
                        <li><strong className="text-text-primary">The right to rectification:</strong> You have the right to request that we correct any information you believe is inaccurate.</li>
                        <li><strong className="text-text-primary">The right to erasure:</strong> You have the right to request that we erase your personal data, under certain conditions.</li>
                        <li><strong className="text-text-primary">The right to restrict processing:</strong> You have the right to request that we restrict the processing of your personal data.</li>
                        <li><strong className="text-text-primary">The right to automated decision making:</strong> You have the right not to be subject to a decision based solely on automated processing.</li>
                        <li><strong className="text-text-primary">The right to data portability:</strong> You have the right to request that we transfer the data that we have collected to another organization.</li>
                    </ul>

                    <h2 id="dpa" className="scroll-mt-32">5. Data Processing Agreement (DPA)</h2>
                    <p>
                        We offer a standard Data Processing Agreement (DPA) that incorporates the Standard Contractual Clauses (SCCs) 
                        approved by the European Commission. This DPA is available to all customers directly from your account dashboard 
                        under the "Legal & Compliance" tab. Executing this document ensures you are compliant when storing EU citizen data 
                        on our servers.
                    </p>

                    <h2 id="data-retention" className="scroll-mt-32">6. Data Retention</h2>
                    <p>
                        We will retain your Personal Information only for as long as is necessary for the purposes set out in this GDPR 
                        Compliance policy and our Privacy Policy. We will retain and use your information to the extent necessary to comply 
                        with our legal obligations, resolve disputes, and enforce our policies. Upon account deletion, server snapshots 
                        and backups are destroyed within 30 days.
                    </p>

                    <h2 id="contact-dpo" className="scroll-mt-32">7. Contact our DPO</h2>
                    <p>
                        If you have questions regarding our GDPR compliance, or wish to invoke your data rights, please contact our 
                        Data Protection Officer (DPO) at:
                    </p>
                    <p>
                        <strong className="text-text-primary">Data Protection Officer</strong><br/>
                        Webgenix Inc.<br/>
                        123 Innovation Drive<br/>
                        San Francisco, CA 94105<br/>
                        <a href="mailto:dpo@webgenix.com">dpo@webgenix.com</a>
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
