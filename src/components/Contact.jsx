import React, { useState } from 'react';
import { Send } from 'lucide-react';

export default function Contact() {
    
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);

    return (
        <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20">
            <div id="contact-content" className="w-full max-w-7xl">
                <div className="grid md:grid-cols-2 gap-20">
                    <h2 className="text-5xl md:text-8xl font-display font-medium tracking-tighter mb-8 uppercase leading-[0.85]">
                        Let's <br /><span className="italic">Connect</span>
                    </h2>

                    <form className="space-y-12" action="https://formsubmit.co/miranda.casan97@gmail.com" method="POST">
                        <input type="hidden" value="false" />

                        <div className="group relative">
                            <label className="text-[10px] uppercase font-bold tracking-[0.3em]  transition-colors">
                                Your Name
                            </label>
                            <input
                                type="text"
                                required
                                className="w-full bg-transparent border-b border-border-dark py-6 outline-none transition-colors text-lg font-light"
                                placeholder="Name"
                            />
                        </div>
            
                        <div className="group relative">
                            <label className="text-[10px] uppercase font-bold tracking-[0.3em] transition-colors">
                                Your Email
                            </label>
                            <input
                                type="email"
                                required
                                className="w-full bg-transparent border-b py-6 outline-none transition-colors text-lg font-light"
                                placeholder="example@email.com"
                            />
                        </div>
            
                        <div className="group relative">
                            <label className="text-[10px] uppercase font-bold tracking-[0.3em] transition-colors">
                                Message
                            </label>
                            <textarea
                                required
                                rows={4}
                                className="w-full bg-transparent border-b py-6 outline-none transition-colors resize-none text-lg font-light"
                                placeholder="Type your message here..."
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full group py-8 rounded-full text-xs font-bold uppercase tracking-[0.4em] overflow-hidden relative flex items-center justify-center space-x-3 hover:scale-[1.01] active:scale-[0.99] transition-all bg-[var(--theme-dark-text,var(--theme-light-text))] text-[var(--theme-dark-background,var(--theme-light-background))]"
                        >
                            <span className="relative z-10">{isSubmitting ? 'Sending...' : success ? 'Sent Successfully' : 'Send Message'}</span>
                            {!isSubmitting && !success && <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}