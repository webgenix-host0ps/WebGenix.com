import Icon from '../ui/Icon';

const discussions = [
    {
        title: "How to perfectly cache GraphQL request responses at the edge natively?",
        category: "Q&A",
        author: { name: "Sarah Chen", initial: "S", color: "bg-blue-500" },
        replies: 24,
        time: "2 hours ago",
        active: true
    },
    {
        title: "Feedback wanted: New deployment UI dashboard changes",
        category: "Feedback",
        author: { name: "Alex Rover", initial: "A", color: "bg-purple-500" },
        replies: 112,
        time: "5 hours ago",
        active: true
    },
    {
        title: "Showcase: Built a real-time collaborative editor on Webgenix",
        category: "Showcase",
        author: { name: "Mike T.", initial: "M", color: "bg-emerald-500" },
        replies: 8,
        time: "1 day ago",
        active: false
    },
    {
        title: "Best practices for setting up Postgres read replicas?",
        category: "Database",
        author: { name: "Elena V.", initial: "E", color: "bg-orange-500" },
        replies: 31,
        time: "2 days ago",
        active: false
    },
    {
        title: "Webgenix CLI v2.4 Release Notes & Discussion",
        category: "Announcements",
        author: { name: "Webgenix Team", initial: "W", color: "bg-accent" },
        replies: 89,
        time: "3 days ago",
        active: false
    }
];

export default function DiscussionBoard() {
    return (
        <section className="py-20 lg:py-24 bg-dark-900 border-b border-dark-800 relative z-10">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-6 border-b border-dark-800 gap-4">
                    <div>
                        <h2 className="text-2xl lg:text-3xl font-semibold text-text-primary mb-2">Active Discussions</h2>
                        <p className="text-text-secondary text-sm">Join the conversation happening right now in our forums.</p>
                    </div>
                    <button className="hidden sm:flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover transition-colors">
                        View Full Forum <span aria-hidden="true">&rarr;</span>
                    </button>
                </div>

                <div className="space-y-4">
                    {discussions.map((topic, idx) => (
                        <a 
                            key={idx}
                            href="#discussion"
                            className="block bg-dark-800 border border-dark-700 hover:border-dark-500 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20 group"
                        >
                            <div className="flex items-start gap-4 sm:gap-6">
                                <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-medium shadow-inner text-lg ${topic.author.color}`}>
                                    {topic.author.initial}
                                </div>
                                
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-lg sm:text-xl font-medium text-text-primary mb-3 group-hover:text-accent transition-colors line-clamp-2 leading-snug">
                                        {topic.title}
                                    </h3>
                                    
                                    <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm">
                                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-dark-900 border border-dark-600 text-text-secondary">
                                            {topic.category}
                                        </span>
                                        <span className="text-text-muted flex items-center gap-1.5 font-medium">
                                            <Icon name="user" size={14} />
                                            {topic.author.name}
                                        </span>
                                        <span className="text-text-muted flex items-center gap-1.5 font-medium">
                                            <Icon name="clock" size={14} />
                                            {topic.time}
                                        </span>
                                    </div>
                                </div>

                                <div className="hidden sm:flex flex-shrink-0 flex-col items-center justify-center gap-1 bg-dark-900 border border-dark-700 w-16 h-16 rounded-2xl group-hover:bg-dark-800 transition-colors">
                                    <Icon name="message-circle" size={18} className={topic.active ? 'text-accent' : 'text-text-muted'} />
                                    <span className={`text-xs font-bold ${topic.active ? 'text-text-primary' : 'text-text-muted'}`}>
                                        {topic.replies}
                                    </span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
                
                <div className="mt-8 text-center sm:hidden">
                    <button className="text-sm font-medium text-accent hover:text-accent-hover transition-colors">
                        View all discussions &rarr;
                    </button>
                </div>
            </div>
        </section>
    );
}
