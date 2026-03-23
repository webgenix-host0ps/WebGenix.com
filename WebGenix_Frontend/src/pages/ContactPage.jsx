import { useEffect } from 'react';
import ContactHero from '../components/contact/ContactHero';
import ContactInfo from '../components/contact/ContactInfo';
import ContactForm from '../components/contact/ContactForm';
import ConversionFooter from '../components/sections/ConversionFooter';

export default function ContactPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen bg-dark-900">
            <ContactHero />
            
            <section className="py-20 lg:py-24 relative overflow-hidden border-b border-dark-800">
                <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                        <ContactInfo />
                        <ContactForm />
                    </div>
                </div>
            </section>

            <ConversionFooter />
        </main>
    );
}
