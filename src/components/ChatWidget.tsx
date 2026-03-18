import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import MessageCircle from 'lucide-react/dist/esm/icons/message-circle';
import X from 'lucide-react/dist/esm/icons/x';
import Send from 'lucide-react/dist/esm/icons/send';
import Loader2 from 'lucide-react/dist/esm/icons/loader-2';

// Types for our chat functionality
export interface Message {
    id: string;
    text: string;
    sender: 'user' | 'bot';
    timestamp: Date;
}

export interface ChatWidgetProps {
    /** The name of the bot displayed in the header */
    botName?: string;
    /** The initial greeting message from the bot */
    initialMessage?: string;
    /** Primary brand color for the chat bubble and user messages */
    primaryColor?: string;
    /** Background color for the chat window header */
    headerColor?: string;
    /** A function to simulate or connect to a real backend API */
    onSendMessage?: (message: string, history: Message[]) => Promise<string>;
}

export default function ChatWidget({
    botName = "RC & Sons Support",
    initialMessage = "Hi there! How can we help with your next painting project?",
    primaryColor = "#d4af37", // Matches brand-accent
    headerColor = "#1a1a1a", // Matches brand-ink
    onSendMessage,
}: ChatWidgetProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            text: initialMessage,
            sender: 'bot',
            timestamp: new Date(),
        }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to bottom when messages update
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    // Default mock API function if none is provided
    const simulateBotResponse = async (userMessage: string, history: Message[]): Promise<string> => {
        const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
        const bookingLink = localStorage.getItem('chatbot_bookingLink') || '/contact';
        const webhookUrl = localStorage.getItem('chatbot_webhookUrl');

        if (apiKey) {
            try {
                const systemPrompt = `You are a helpful customer support assistant for RC & Sons Painting, a family-owned residential painting company based in New Castle, DE. You specialize in interior and exterior painting, cabinet refinishing, deck staining, and power washing. 

                YOUR PRIMARY GOAL: Provide brief, helpful information, then smoothly guide them toward booking a consultation.
                
                CONVERSATION FLOW:
                1. First, warmly ask what service or help they are looking for if they haven't specified.
                2. Provide brief, encouraging information about their request.
                3. ALWAYS ask a clear call-to-action like "Would you like to schedule a consultation?" or "Can we set up a time to look at the project?"
                4. If they say yes to scheduling/booking, guide them to use this link: ${bookingLink}. Do NOT make up fake links.
                
                Keep formatting simple and conversational. Be warm and professional.`;

                const apiMessages = [
                    { role: 'system', content: systemPrompt },
                    ...history.map(msg => ({
                        role: msg.sender === 'user' ? 'user' : 'assistant',
                        content: msg.text
                    })),
                    { role: 'user', content: userMessage }
                ];

                const response = await fetch('https://api.openai.com/v1/chat/completions', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${apiKey}`
                    },
                    body: JSON.stringify({
                        model: 'gpt-4o-mini',
                        messages: apiMessages,
                        temperature: 0.7,
                        max_tokens: 150
                    })
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch response from OpenAI');
                }

                const data = await response.json();
                return data.choices[0].message.content;
            } catch (error) {
                console.error("OpenAI Error:", error);
                // Fallback to mock logic if error occurs
            }
        }

        return new Promise((resolve) => {
            setTimeout(() => {
                const lowerQuery = userMessage.toLowerCase();
                if (lowerQuery.includes('quote') || lowerQuery.includes('estimate') || lowerQuery.includes('price')) {
                    resolve("We offer free estimates! To give you an accurate quote, we'd need to know a bit more about the project scope. Feel free to call us at (302) 367-6455 or fill out the form on our Contact page.");
                } else if (lowerQuery.includes('service') || lowerQuery.includes('do you paint')) {
                    resolve("We specialize in residential painting, both interior and exterior, as well as cabinet refinishing, deck staining, and power washing. Is there a specific project you have in mind?");
                } else if (lowerQuery.includes('area') || lowerQuery.includes('location') || lowerQuery.includes('where')) {
                    resolve("We are based in New Castle, DE and proudly serve the surrounding areas. If you're unsure if you fall in our service radius, just give us a call!");
                } else {
                    resolve("Thanks for reaching out! To give you the best answer, it's usually easiest to chat over the phone. You can reach us at (302) 367-6455.");
                }
            }, 1500); // Simulate 1.5s network/typing delay
        });
    };

    const handleSendMessage = async (e?: React.FormEvent) => {
        e?.preventDefault();
        if (!inputValue.trim()) return;

        const newUserMessage: Message = {
            id: Date.now().toString(),
            text: inputValue.trim(),
            sender: 'user',
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, newUserMessage]);
        setInputValue('');
        setIsTyping(true);

        try {
            // Use the provided mock API or the default one
            const fetchResponse = onSendMessage || simulateBotResponse;
            const responseText = await fetchResponse(newUserMessage.text, messages);

            const botMessage: Message = {
                id: (Date.now() + 1).toString(),
                text: responseText,
                sender: 'bot',
                timestamp: new Date(),
            };

            setMessages((prev) => [...prev, botMessage]);
        } catch (error) {
            const errorMessage: Message = {
                id: (Date.now() + 1).toString(),
                text: "I'm sorry, I'm having trouble connecting to the server right now. Please try again later.",
                sender: 'bot',
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, errorMessage]);
        } finally {
            setIsTyping(false);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 font-sans">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95, transition: { duration: 0.2 } }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className="absolute bottom-20 right-0 w-[350px] sm:w-[380px] h-[500px] max-h-[80vh] bg-white shadow-2xl rounded-2xl overflow-hidden flex flex-col border border-gray-100"
                    >
                        {/* Header */}
                        <div
                            className="flex justify-between items-center p-4 text-white"
                            style={{ backgroundColor: headerColor }}
                        >
                            <div>
                                <h3 className="font-playball text-xl">{botName}</h3>
                                <p className="text-xs text-white/70 flex items-center gap-1 font-light tracking-wider uppercase">
                                    <span className="w-2 h-2 rounded-full bg-green-400 inline-block animate-pulse"></span>
                                    Online
                                </p>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-1 hover:bg-white/10 rounded-full transition-colors"
                                aria-label="Close Chat"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Message Area */}
                        <div className="flex-1 overflow-y-auto p-4 bg-gray-50 flex flex-col gap-4">
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} w-full`}
                                >
                                    <div
                                        className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm font-light leading-relaxed ${msg.sender === 'user'
                                            ? 'text-white rounded-br-none shadow-sm'
                                            : 'bg-white text-gray-800 rounded-bl-none shadow-sm border border-gray-100'
                                            }`}
                                        style={{ backgroundColor: msg.sender === 'user' ? primaryColor : undefined }}
                                    >
                                        {msg.text}
                                    </div>
                                </div>
                            ))}

                            {/* Typing Indicator */}
                            {isTyping && (
                                <div className="flex justify-start w-full">
                                    <div className="bg-white rounded-2xl rounded-bl-none px-4 py-4 shadow-sm border border-gray-100 flex gap-1">
                                        <motion.div
                                            className="w-1.5 h-1.5 rounded-full bg-gray-400"
                                            animate={{ y: [0, -5, 0] }}
                                            transition={{ repeat: Infinity, duration: 0.6, delay: 0 }}
                                        />
                                        <motion.div
                                            className="w-1.5 h-1.5 rounded-full bg-gray-400"
                                            animate={{ y: [0, -5, 0] }}
                                            transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }}
                                        />
                                        <motion.div
                                            className="w-1.5 h-1.5 rounded-full bg-gray-400"
                                            animate={{ y: [0, -5, 0] }}
                                            transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }}
                                        />
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Form */}
                        <form
                            onSubmit={handleSendMessage}
                            className="p-3 bg-white border-t border-gray-100 flex gap-2 items-center"
                        >
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder="Type your message..."
                                disabled={isTyping}
                                className="flex-1 bg-gray-50 border border-gray-200 rounded-full px-4 py-2.5 text-sm focus:outline-none focus:border-gray-300 transition-colors font-light disabled:opacity-50"
                            />
                            <button
                                type="submit"
                                disabled={!inputValue.trim() || isTyping}
                                className="p-2.5 rounded-full text-white flex items-center justify-center transition-opacity disabled:opacity-50 shadow-md flex-shrink-0"
                                style={{ backgroundColor: primaryColor }}
                                aria-label="Send Message"
                            >
                                {isTyping ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} className="translate-x-[1px] translate-y-[1px]" />}
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Toggle Button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg text-white"
                style={{ backgroundColor: primaryColor }}
                aria-label="Toggle Chat"
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div
                            key="close"
                            initial={{ opacity: 0, rotate: -90 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            exit={{ opacity: 0, rotate: 90 }}
                            transition={{ duration: 0.15 }}
                        >
                            <X size={24} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="open"
                            initial={{ opacity: 0, rotate: 90 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            exit={{ opacity: 0, rotate: -90 }}
                            transition={{ duration: 0.15 }}
                        >
                            <MessageCircle size={28} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>
        </div>
    );
}
