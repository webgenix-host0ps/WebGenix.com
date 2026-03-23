import Icon from '../ui/Icon';

const metrics = [
    { title: "Core API", uptime: "99.99%", status: "Operational", icon: "activity" },
    { title: "Dashboard & Control Panel", uptime: "100%", status: "Operational", icon: "layout" },
    { title: "Global CDN Edge", uptime: "99.98%", status: "Operational", icon: "globe" },
    { title: "Database Clusters (US-East)", uptime: "100%", status: "Operational", icon: "database" },
    { title: "Database Clusters (EU-West)", uptime: "99.99%", status: "Operational", icon: "database" },
    { title: "Object Storage & Backups", uptime: "100%", status: "Operational", icon: "hard-drive" }
];

export default function UptimeMetrics() {
    // Generate 60 mock blocks for the 60-day history bar
    const generateHistoryBlocks = () => {
        return Array.from({ length: 60 }).map((_, i) => (
            <div 
                key={i} 
                className="flex-1 h-8 rounded-sm bg-success hover:opacity-80 transition-opacity cursor-pointer group relative"
            >
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-dark-700 text-xs font-medium text-text-primary rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10 shadow-lg shadow-black/30 border border-dark-600">
                    No downtime recorded
                    {/* Arrow tip for the tooltip */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-solid border-t-dark-700 border-t-4 border-x-transparent border-x-4 border-b-0"></div>
                </div>
            </div>
        ));
    };

    return (
        <section className="py-20 lg:py-24 bg-dark-900 border-b border-dark-800">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
                <div className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-dark-800 pb-6">
                    <div>
                        <h2 className="text-2xl lg:text-3xl font-semibold text-text-primary mb-2">Service Uptime</h2>
                        <p className="text-text-secondary text-sm">Trailing 60 days history</p>
                    </div>
                    <div className="flex items-center gap-6 text-sm">
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-success shadow-[0_0_10px_rgba(34,197,94,0.5)]"></span>
                            <span className="text-text-primary">Operational</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-warning shadow-[0_0_10px_rgba(234,179,8,0.5)]"></span>
                            <span className="text-text-primary">Degraded</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-error shadow-[0_0_10px_rgba(239,68,68,0.5)]"></span>
                            <span className="text-text-primary">Outage</span>
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    {metrics.map((metric, idx) => (
                        <div key={idx} className="bg-dark-800 rounded-2xl p-6 lg:p-8 border border-dark-700 shadow-xl shadow-black/20 hover:border-dark-600 transition-colors">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-dark-900 border border-dark-600 flex items-center justify-center">
                                        <Icon name={metric.icon} size={20} className="text-text-secondary" />
                                    </div>
                                    <h3 className="text-xl font-medium text-text-primary">{metric.title}</h3>
                                </div>
                                <div className="flex flex-row-reverse sm:flex-row items-center gap-4 justify-between sm:justify-start">
                                    <span className="text-text-secondary text-sm font-medium hidden sm:block">{metric.uptime} uptime</span>
                                    <span className="flex items-center gap-2 text-success text-sm font-medium bg-success/10 px-4 py-1.5 rounded-full border border-success/20">
                                        <span className="w-1.5 h-1.5 rounded-full bg-success"></span>
                                        {metric.status}
                                    </span>
                                </div>
                            </div>

                            {/* History Bar Grid */}
                            <div className="flex gap-[2px] w-full">
                                {generateHistoryBlocks()}
                            </div>
                            <div className="flex items-center justify-between mt-3 text-sm text-text-muted font-medium">
                                <span>60 days ago</span>
                                <span className="sm:hidden">{metric.uptime}</span>
                                <span>Today</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
