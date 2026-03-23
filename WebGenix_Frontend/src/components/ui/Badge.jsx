/**
 * Badge Component
 * 
 * Variants:
 * - ai: Blue background for AI-powered features
 * - popular: Subtle green for high-demand services
 * - comingSoon: Muted yellow for upcoming features
 * 
 * Psychology: Badges provide quick scanning cues without
 * creating fake urgency. Each serves an informational purpose.
 */

const badgeStyles = {
    ai: 'bg-accent/20 text-accent border-accent/30',
    popular: 'bg-success/10 text-success border-success/30',
    comingSoon: 'bg-warning/10 text-warning/80 border-warning/20',
};

const badgeLabels = {
    ai: 'AI',
    popular: 'Popular',
    comingSoon: 'Coming Soon',
};

export default function Badge({ variant = 'popular' }) {
    return (
        <span
            className={`
        inline-flex items-center
        px-2 py-0.5
        text-xs font-medium
        rounded-full
        border
        ${badgeStyles[variant] || badgeStyles.popular}
      `}
        >
            {badgeLabels[variant] || variant}
        </span>
    );
}
