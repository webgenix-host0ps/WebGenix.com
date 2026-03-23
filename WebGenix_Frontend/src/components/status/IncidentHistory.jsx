const incidents = [
    {
        date: "March 12, 2026",
        title: "Elevated Error Rates on US-East Load Balancers",
        status: "Resolved",
        updates: [
            { time: "14:45 UTC", text: "The issue has been completely resolved and all traffic is routing normally. We are investigating the root cause internally." },
            { time: "14:15 UTC", text: "We have isolated the problem to a specific availability zone and have rerouted traffic. Error rates are returning to normal." },
            { time: "13:58 UTC", text: "We are actively investigating reports of elevated 502 Bad Gateway errors affecting some customers mapped to US-East Load Balancers." }
        ]
    },
    {
        date: "February 28, 2026",
        title: "Dashboard Latency",
        status: "Resolved",
        updates: [
            { time: "09:30 UTC", text: "Database query performance has been optimized. Dashboard load times have returned to normal parameters." },
            { time: "09:05 UTC", text: "We are investigating intermittent slowness when loading large billing history tables within the user dashboard." }
        ]
    }
];

export default function IncidentHistory() {
    return (
        <section className="py-20 lg:py-24 bg-dark-900 border-b border-dark-800">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
                <div className="mb-12 border-b border-dark-800 pb-6">
                    <h2 className="text-2xl lg:text-3xl font-semibold text-text-primary mb-2">Past Incidents</h2>
                    <p className="text-text-secondary text-sm">Chronological log of platform interruptions and notes.</p>
                </div>

                <div className="space-y-16">
                    {/* Mock a perfect month first */}
                    <div className="relative">
                        <h3 className="text-xl font-semibold text-text-primary mb-4">March 18, 2026</h3>
                        <p className="text-text-muted">No incidents reported down.</p>
                        <div className="my-10 h-px bg-dark-800 w-full" />
                    </div>

                    {incidents.map((incident, idx) => (
                        <div key={idx} className="relative">
                            <h3 className="text-xl font-semibold text-text-primary mb-6">{incident.date}</h3>
                            
                            <div className="bg-dark-800 rounded-3xl p-6 lg:p-10 border border-dark-700 shadow-xl shadow-black/20">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 border-b border-dark-700 pb-6 gap-4">
                                    <h4 className="text-2xl font-medium text-text-primary leading-snug">{incident.title}</h4>
                                    <span className="text-text-muted text-sm font-medium bg-dark-700 px-4 py-1.5 rounded-full whitespace-nowrap self-start sm:self-auto">
                                        {incident.status}
                                    </span>
                                </div>

                                {/* Vertical Timeline inside card */}
                                <div className="space-y-8 relative before:absolute before:inset-0 before:left-3 before:h-full before:w-0.5 before:bg-dark-600">
                                    {incident.updates.map((update, uIdx) => (
                                        <div key={uIdx} className="relative pl-10 flex flex-col gap-2">
                                            {/* Timeline dot */}
                                            <div className="absolute left-1.5 top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-dark-500 border-2 border-dark-800" />
                                            
                                            <div className="text-sm font-semibold text-text-primary/90">{update.time}</div>
                                            <div className="text-text-secondary leading-relaxed text-[15px]">{update.text}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
