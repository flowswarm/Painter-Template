import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion } from 'motion/react';
import Lock from 'lucide-react/dist/esm/icons/lock';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AdminLogin() {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login, isAuthenticated } = useAuth();
    const navigate = useNavigate();

    // Redirect if already logged in
    React.useEffect(() => {
        if (isAuthenticated) {
            navigate('/admin/settings');
        }
    }, [isAuthenticated, navigate]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        const success = login(password);
        if (success) {
            navigate('/admin/settings');
        } else {
            setError('Incorrect password. Please try again.');
            setPassword('');
        }
    };

    return (
        <>
            <Header />
            <div className="min-h-screen pt-40 pb-24 px-6 flex flex-col items-center justify-center bg-gray-50">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full max-w-md bg-white shadow-xl p-8"
                >
                    <div className="flex flex-col items-center mb-8">
                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                            <Lock className="text-brand-accent h-6 w-6" />
                        </div>
                        <h1 className="text-2xl font-playball text-brand-ink">Admin Portal</h1>
                        <p className="text-brand-ink/60 text-sm mt-2 font-light text-center">Enter master password to access settings.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label htmlFor="password" className="text-[10px] uppercase tracking-widest font-bold text-brand-ink/60">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                className={`w-full border-b py-3 text-brand-ink focus:outline-none transition-colors bg-transparent ${error ? 'border-red-500' : 'border-brand-ink/20 focus:border-brand-accent'
                                    }`}
                                autoFocus
                            />
                            {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-brand-ink text-white py-4 text-xs uppercase tracking-widest font-bold hover:bg-brand-accent transition-colors"
                        >
                            Authenticate
                        </button>
                    </form>
                </motion.div>
            </div>
            <Footer />
        </>
    );
}
