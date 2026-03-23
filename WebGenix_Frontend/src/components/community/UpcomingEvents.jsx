import Icon from '../ui/Icon';

const events = [
    {
        title: "Developer Townhall: Q2 Roadmap",
        date: "Apr 15, 2026",
        time: "10:00 AM PST",
        type: "YouTube Live",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Office Hours: Next.js & Serverless",
        date: "Apr 22, 2026",
        time: "1:00 PM PST",
        type: "Discord Audio",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Scaling Postgres on Webgenix",
        date: "May 05, 2026",
        time: "9:00 AM PST",
        type: "Masterclass",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800"
    }
];

export default function UpcomingEvents() {
    return (
        <section className="py-20 lg:py-24 bg-dark-900">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl font-semibold text-text-primary mb-4">Upcoming Events</h2>
                    <p className="text-lg text-text-secondary">
                        Learn from our engineers and community leaders in interactive sessions.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {events.map((event, idx) => (
                        <div key={idx} className="group rounded-3xl bg-dark-800 border border-dark-700 overflow-hidden hover:border-dark-500 transition-all duration-300 shadow-xl shadow-black/20 hover:-translate-y-1">
                            <div className="relative h-48 overflow-hidden bg-dark-900">
                                <div className="absolute inset-0 bg-dark-900/20 group-hover:bg-transparent transition-colors z-10" />
                                <img 
                                    src={event.image} 
                                    alt={event.title} 
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                                    loading="lazy"
                                />
                                <div className="absolute top-4 left-4 z-20">
                                    <span className="inline-flex items-center px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest bg-dark-900/90 text-text-primary backdrop-blur-md border border-dark-600 uppercase shadow-lg">
                                        {event.type}
                                    </span>
                                </div>
                            </div>
                            
                            <div className="p-6 lg:p-8 flex flex-col h-[calc(100%-12rem)]">
                                <h3 className="text-xl font-medium text-text-primary mb-6 group-hover:text-accent transition-colors leading-snug">
                                    {event.title}
                                </h3>
                                
                                <div className="space-y-4 mb-8 flex-grow">
                                    <div className="flex items-center gap-3 text-text-secondary text-sm font-medium">
                                        <div className="w-8 h-8 rounded-full bg-dark-900 border border-dark-700 flex items-center justify-center">
                                            <Icon name="calendar" size={14} className="text-accent" />
                                        </div>
                                        {event.date}
                                    </div>
                                    <div className="flex items-center gap-3 text-text-secondary text-sm font-medium">
                                        <div className="w-8 h-8 rounded-full bg-dark-900 border border-dark-700 flex items-center justify-center">
                                            <Icon name="clock" size={14} className="text-accent" />
                                        </div>
                                        {event.time}
                                    </div>
                                </div>
                                
                                <button className="w-full py-3.5 px-4 bg-dark-700 hover:bg-dark-600 text-text-primary font-medium rounded-xl transition-colors border border-dark-600 hover:border-dark-500 shadow-sm text-sm">
                                    Save your spot
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
