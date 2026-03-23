import Icon from '../ui/Icon';

const roles = [
    {
        department: "Engineering",
        positions: [
            { title: "Senior Rust Engineer", location: "Remote, Global", type: "Full-time" },
            { title: "Frontend Developer (React)", location: "Remote, US/EU", type: "Full-time" },
            { title: "Site Reliability Engineer", location: "Remote, Global", type: "Full-time" }
        ]
    },
    {
        department: "Product & Design",
        positions: [
            { title: "Product Designer", location: "Remote, Global", type: "Full-time" },
            { title: "Product Manager - Core Infrastructure", location: "Remote, Global", type: "Full-time" }
        ]
    },
    {
        department: "Customer Success",
        positions: [
            { title: "Technical Support Engineer", location: "Remote, APAC", type: "Full-time" },
            { title: "Solutions Architect", location: "Remote, US/EU", type: "Full-time" }
        ]
    }
];

export default function CareersRoles() {
    return (
        <section id="open-roles" className="py-24 bg-dark-800 border-t border-dark-700">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-text-primary mb-4">Open Roles</h2>
                    <p className="text-lg text-text-secondary">
                        Find your next opportunity below. Don't see a perfect match? Send us your resume anyway!
                    </p>
                </div>

                <div className="space-y-12">
                    {roles.map((dept, idx) => (
                        <div key={idx}>
                            <h3 className="text-2xl font-semibold text-text-primary mb-6 border-b border-dark-700 pb-3">
                                {dept.department}
                            </h3>
                            <div className="space-y-4">
                                {dept.positions.map((pos, pIdx) => (
                                    <a
                                        href="#apply"
                                        key={pIdx}
                                        className="block p-6 rounded-xl bg-dark-900 border border-dark-700 hover:border-accent/60 hover:-translate-y-1 transition-all duration-300 group shadow-lg shadow-black/20 hover:shadow-accent/10"
                                    >
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                            <div>
                                                <h4 className="text-xl font-medium text-text-primary group-hover:text-accent transition-colors mb-2">
                                                    {pos.title}
                                                </h4>
                                                <div className="flex items-center gap-4 text-sm text-text-muted">
                                                    <span className="flex items-center gap-1.5 group-hover:text-text-secondary transition-colors">
                                                        <Icon name="map-pin" size={16} />
                                                        {pos.location}
                                                    </span>
                                                    <span className="flex items-center gap-1.5 group-hover:text-text-secondary transition-colors">
                                                        <Icon name="clock" size={16} />
                                                        {pos.type}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="text-accent font-medium text-sm flex items-center gap-2 border border-accent/20 bg-accent/5 px-4 py-2 rounded-lg group-hover:bg-accent group-hover:text-white transition-all duration-300">
                                                Apply now 
                                                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                                            </div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
