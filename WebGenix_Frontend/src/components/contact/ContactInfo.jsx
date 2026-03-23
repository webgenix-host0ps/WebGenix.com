import Icon from '../ui/Icon';

const contactMethods = [
    {
        title: "Sales & Enterprise",
        description: "Looking for a custom plan tailored to your team's needs?",
        email: "sales@webgenix.com",
        icon: "briefcase"
    },
    {
        title: "Technical Support",
        description: "Need help configuring your VPS or resolving an issue?",
        email: "support@webgenix.com",
        icon: "headphones"
    },
    {
        title: "Press & Media",
        description: "Want to feature Webgenix in your next story?",
        email: "press@webgenix.com",
        icon: "message-circle"
    }
];

export default function ContactInfo() {
    return (
        <div className="space-y-8 h-full flex flex-col justify-center">
            <div className="mb-8">
                <h2 className="text-3xl lg:text-4xl font-semibold text-text-primary mb-4">Get in touch</h2>
                <p className="text-lg text-text-secondary">
                    Fill out the form to the right, or reach out directly to one of our dedicated teams below.
                </p>
            </div>

            <div className="grid gap-6">
                {contactMethods.map((method, idx) => (
                    <div key={idx} className="flex gap-5 p-6 rounded-2xl bg-dark-800 border border-dark-700 hover:border-accent/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20 group transition-all duration-300">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-dark-900 flex items-center justify-center border border-dark-700 group-hover:border-accent/50 group-hover:bg-accent/10 transition-colors">
                            <Icon name={method.icon} size={24} className="text-text-primary group-hover:text-accent group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <div>
                            <h3 className="text-lg font-medium text-text-primary mb-1">{method.title}</h3>
                            <p className="text-sm text-text-secondary mb-3 leading-relaxed">{method.description}</p>
                            <a href={`mailto:${method.email}`} className="text-accent hover:text-accent-hover text-sm font-medium flex items-center gap-1.5 transition-colors group/link">
                                {method.email}
                                <span className="transform group-hover/link:translate-x-1 transition-transform">→</span>
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-8 p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                    <Icon name="map-pin" size={20} className="text-text-muted" />
                    <h3 className="text-base font-medium text-text-primary">Global Headquarters</h3>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed pl-8">
                    123 Innovation Drive<br />
                    Tech District, Suite 400<br />
                    San Francisco, CA 94105
                </p>
            </div>
        </div>
    );
}
