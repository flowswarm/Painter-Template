import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useAuth } from '../context/AuthContext';
import Save from 'lucide-react/dist/esm/icons/save';
import LinkIcon from 'lucide-react/dist/esm/icons/link';
import Calendar from 'lucide-react/dist/esm/icons/calendar';
import LogOut from 'lucide-react/dist/esm/icons/log-out';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AdminSettings() {
    const { logout } = useAuth();
    const [bookingLink, setBookingLink] = useState('');
    const [webhookUrl, setWebhookUrl] = useState('');
    const [isSaved, setIsSaved] = useState(false);

    // Load existing settings on mount
    useEffect(() => {
        const savedBooking = localStorage.getItem('chatbot_bookingLink');
        const savedWebhook = localStorage.getItem('chatbot_webhookUrl');

        if (savedBooking) setBookingLink(savedBooking);
        if (savedWebhook) setWebhookUrl(savedWebhook);
    }, []);

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        localStorage.setItem('chatbot_bookingLink', bookingLink);
        localStorage.setItem('chatbot_webhookUrl', webhookUrl);

        setIsSaved(true);
        setTimeout(() => setIsSaved(false), 3000);
    };

    return (
        <>
            <Header />
            <div className="min-h-screen pt-40 pb-24 px-6 md:px-12 bg-gray-50">
                <div className="max-w-[1000px] mx-auto">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-brand-accent text-sm font-bold tracking-widest uppercase mb-2 block"
                            >
                                Dashboard
                            </motion.span>
                            <motion.h1
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.1 }}
                                className="text-4xl md:text-5xl font-playball text-brand-ink"
                            >
                                Chatbot Configuration
                            </motion.h1>
                        </div>

                        <button
                            onClick={logout}
                            className="flex items-center gap-2 text-sm text-brand-ink/60 hover:text-red-500 transition-colors"
                            aria-label="Log Out"
                        >
                            <LogOut size={18} />
                            <span className="hidden sm:inline">Log Out</span>
                        </button>
                    </div>

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white p-8 shadow-xl"
                    >
                        <div className="mb-8 border-b border-gray-100 pb-8">
                            <h2 className="text-xl font-normal mb-2">Integrations</h2>
                            <p className="text-brand-ink/60 text-sm font-light">
                                Configure where the AI Chatbot should send users to book consultations or where it should log conversation data.
                            </p>
                        </div>

                        <form onSubmit={handleSave} className="space-y-8">
                            {/* Booking Link */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-2">
                                    <Calendar className="text-brand-accent" size={20} />
                                    <label htmlFor="bookingLink" className="text-sm font-bold uppercase tracking-widest">
                                        Calendar Booking URL
                                    </label>
                                </div>
                                <p className="text-xs text-brand-ink/50 font-light">
                                    If provided, the Chatbot will give this link to users actively requesting to schedule an estimate (e.g., Calendly, Acuity).
                                </p>
                                <input
                                    id="bookingLink"
                                    type="url"
                                    value={bookingLink}
                                    onChange={(e) => setBookingLink(e.target.value)}
                                    placeholder="https://calendly.com/your-business"
                                    className="w-full border border-gray-200 px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors bg-gray-50 text-sm"
                                />
                            </div>

                            {/* Webhook URL */}
                            <div className="space-y-4 pt-4 border-t border-gray-100">
                                <div className="flex items-center gap-2">
                                    <LinkIcon className="text-brand-accent" size={20} />
                                    <label htmlFor="webhookUrl" className="text-sm font-bold uppercase tracking-widest">
                                        Google Sheets Webhook URL
                                    </label>
                                </div>
                                <p className="text-xs text-brand-ink/50 font-light">
                                    Use Zapier or Make.com to generate a Webhook URL that connects to your Google Sheet. The Chatbot will automatically ping this URL with lead information if configured.
                                </p>
                                <input
                                    id="webhookUrl"
                                    type="url"
                                    value={webhookUrl}
                                    onChange={(e) => setWebhookUrl(e.target.value)}
                                    placeholder="https://hooks.zapier.com/hooks/catch/..."
                                    className="w-full border border-gray-200 px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors bg-gray-50 text-sm"
                                />
                            </div>

                            <div className="pt-8 border-t border-gray-100 flex items-center justify-between">
                                <p className="text-xs text-green-600 font-bold tracking-widest uppercase transition-opacity">
                                    {isSaved ? 'Settings Saved Successfully!' : ''}
                                </p>
                                <button
                                    type="submit"
                                    className="bg-brand-ink text-white px-8 py-4 text-xs uppercase tracking-widest font-bold hover:bg-brand-accent transition-colors flex items-center gap-2"
                                >
                                    <Save size={16} />
                                    Save Settings
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
            <Footer />
        </>
    );
}
