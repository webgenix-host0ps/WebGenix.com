import { useEffect } from 'react';
import DocsSidebar from '../components/docs/DocsSidebar';
import DocsContent from '../components/docs/DocsContent';
import ConversionFooter from '../components/sections/ConversionFooter';
import Icon from '../components/ui/Icon';

export default function DocsPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen bg-dark-900 pt-24 pb-16 lg:pt-32">
            
            {/* Mobile Sidebar Toggle (mock behavior visual) */}
            <div className="lg:hidden px-6 mb-6 font-medium">
                <button className="flex items-center gap-2 bg-dark-800 border border-dark-700 text-text-primary px-4 py-2 rounded-xl text-sm font-medium hover:bg-dark-700 transition-colors shadow-md">
                    <Icon name="menu" size={16} />
                    Documentation Menu
                </button>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-start gap-8 relative">
                <DocsSidebar />
                <DocsContent />
            </div>

            <div className="mt-24">
                <ConversionFooter />
            </div>
        </main>
    );
}
