import Icon from '../ui/Icon';

const values = [
    {
        title: "Remote First, Always",
        description: "Work from anywhere. We care about what you build, not when you clock in.",
        icon: "globe"
    },
    {
        title: "Ownership & Autonomy",
        description: "You're trusted from day one. Take the lead on projects and impact millions of requests.",
        icon: "shield"
    },
    {
        title: "Continuous Learning",
        description: "Yearly learning budget, weekly workshops, and a culture that celebrates curiosity.",
        icon: "book"
    },
    {
        title: "Transparent Communication",
        description: "Radical candor and open discussions. Best ideas win, regardless of title.",
        icon: "message-circle"
    },
    {
        title: "Healthy Work-Life",
        description: "Unlimited PTO (minimum 20 days) and respect for deep work hours.",
        icon: "heart"
    },
    {
        title: "Competitive Compensation",
        description: "Top-market equity and salary, along with premium health benefits.",
        icon: "trending-up"
    }
];

export default function CareersValues() {
    return (
        <section id="values" className="py-24 bg-dark-900">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-text-primary mb-4">Why Webgenix?</h2>
                    <p className="text-lg text-text-secondary">
                        We don't just build great infrastructure, we build a great place to work.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {values.map((value, idx) => (
                        <div key={idx} className="group p-8 rounded-2xl bg-dark-800 border border-dark-700 hover:border-accent/40 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-black/20 hover:shadow-accent/10">
                            <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 border border-accent/20 group-hover:bg-accent/20 transition-colors">
                                <Icon name={value.icon} size={28} className="text-accent group-hover:scale-110 transition-transform duration-300" />
                            </div>
                            <h3 className="text-xl font-medium text-text-primary mb-3">{value.title}</h3>
                            <p className="text-text-secondary leading-relaxed">{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
