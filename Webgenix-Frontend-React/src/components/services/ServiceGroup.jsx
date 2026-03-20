/**
 * ServiceGroup Component
 * 
 * A column of services within a category.
 * 
 * Layout: Vertical stack with consistent spacing
 * Header: Uppercase, letter-spaced, subtle color
 * 
 * Psychology: Clear category labels allow users to
 * quickly navigate to their area of interest without
 * reading every item. The column structure mimics
 * familiar navigation patterns.
 */

import ServiceItem from './ServiceItem';

export default function ServiceGroup({ title, services }) {
    return (
        <div className="flex flex-col">
            {/* Category Header */}
            <h3 className="
        px-3 mb-4
        text-sm font-semibold
        uppercase tracking-widest
        text-text-muted
      ">
                {title}
            </h3>

            {/* Services List */}
            <div className="space-y-1">
                {services.map((service) => (
                    <ServiceItem key={service.id} {...service} />
                ))}
            </div>
        </div>
    );
}
