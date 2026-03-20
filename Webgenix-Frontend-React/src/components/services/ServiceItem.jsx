import { Link } from 'react-router-dom';
import Icon from '../ui/Icon';
import Badge from '../ui/Badge';

export default function ServiceItem({
    id,
    name,
    description,
    icon,
    badge,
    comingSoon = false
}) {
    const isComingSoon = badge === 'comingSoon' || comingSoon;

    // Determine the route destination based on the data 'id' field
    const destinationPath = id === 'static-hosting' ? '/services/static-site-hosting' :
        id === 'dynamic-hosting' ? '/services/dynamic-site-hosting' :
            id === 'website-builder' ? '/services/website-builder' :
                id === 'ecommerce-builder' ? '/services/ecommerce-builder' :
                    id === 'website-migration' ? '/services/website-migration' :
                        id === 'domain-search' ? '/services/domain-search' :
                            id === 'domain-transfer' ? '/services/domain-transfer' :
                                id === 'business-email' ? '/services/business-email' :
                                    id === 'email-marketing' ? '/services/email-marketing' :
                                        id === 'google-workspace' ? '/services/google-workspace' :
                                            id === 'ssl-standard' ? '/services/ssl-certificates' :
                                                id === 'wildcard-ssl' ? '/services/wildcard-ssl' :
                                                    id === 'rapidssl' ? '/services/rapidssl' :
                                                        id === 'bare-metal' ? '/services/bare-metal' :
                                                            id === 'backup-server' ? '/services/backup-server' :
                                                                id === 'vps' ? '/services/vps' :
                                                                    id === 'shared-hosting' ? '/services/shared-hosting' : '/';

    const Wrapper = isComingSoon ? 'div' : Link;

    return (
        <Wrapper
            to={!isComingSoon ? destinationPath : undefined}
            className={`
        group
        relative
        flex items-start gap-4
        p-4 rounded-xl
        cursor-default
        transition-all duration-300 ease-in-out
        ${isComingSoon
                    ? 'opacity-50'
                    : 'hover:bg-dark-700/50 hover:shadow-lg cursor-pointer'
                }
      `}
            tabIndex={!isComingSoon ? 0 : -1}
            aria-label={!isComingSoon ? `${name}: ${description}` : undefined}
        >
            {/* Tooltip Popup on Hover */}
            {!isComingSoon && (
                <div className="
                    absolute z-[60]
                    left-1/2 -translate-x-1/2
                    bottom-[calc(100%-0.5rem)]
                    w-[calc(100%+2rem)] min-w-[240px] max-w-[320px]
                    p-4 rounded-xl
                    bg-[#1a1a1a]/95 backdrop-blur-md shadow-2xl border border-white/10
                    opacity-0 invisible
                    group-hover:opacity-100 group-hover:visible
                    group-focus:opacity-100 group-focus:visible
                    transition-all duration-300 ease-in-out
                    translate-y-2 group-hover:-translate-y-1 group-focus:-translate-y-1
                    pointer-events-none
                ">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="text-accent flex-shrink-0">
                            <Icon name={icon} size={16} />
                        </span>
                        <h4 className="text-base font-semibold text-text-primary whitespace-normal leading-tight">
                            {name}
                        </h4>
                        {badge && (
                            <div className="flex-shrink-0">
                                <Badge variant={badge} />
                            </div>
                        )}
                    </div>
                    <p className="text-sm text-text-secondary leading-relaxed whitespace-normal break-words">
                        {description}
                    </p>

                    {/* Tooltip Arrow pointing down */}
                    <div className="
                        absolute -bottom-1.5 left-1/2 -translate-x-1/2
                        w-3 h-3
                        bg-[#1a1a1a] border-b border-r border-white/10
                        rotate-45
                    "></div>
                </div>
            )}

            {/* Icon */}
            <div className={`
        flex-shrink-0
        p-2.5 rounded-lg
        bg-dark-700
        text-text-secondary
        group-hover:text-accent
        transition-colors duration-200
        ${isComingSoon ? 'group-hover:text-text-secondary' : ''}
      `}>
                <Icon name={icon} size={20} />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0 mt-0.5">
                <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-base font-semibold text-text-primary truncate">
                        {name}
                    </h4>
                    {badge && <Badge variant={badge} />}
                </div>
                <p className="text-sm text-text-secondary line-clamp-2">
                    {description}
                </p>
            </div>
        </Wrapper>
    );
}
