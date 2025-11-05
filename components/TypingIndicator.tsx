'use client';

import { Bot } from 'lucide-react';

interface TypingIndicatorProps {
    isVisible: boolean;
}

export function TypingIndicator({ isVisible }: TypingIndicatorProps) {
    if (!isVisible) return null;

    return (
        <div className={`flex items-start gap-3 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Bot className="w-4 h-4 text-primary" />
            </div>
            <div className="bg-white text-maroon border border-gold/20 p-3 rounded-lg shadow-sm">
                <div className="flex items-center gap-1">
                    <div 
                        className="w-2 h-2 bg-primary rounded-full animate-bounce"
                        style={{ animationDelay: '0s' }}
                    />
                    <div 
                        className="w-2 h-2 bg-primary rounded-full animate-bounce"
                        style={{ animationDelay: '0.2s' }}
                    />
                    <div 
                        className="w-2 h-2 bg-primary rounded-full animate-bounce"
                        style={{ animationDelay: '0.4s' }}
                    />
                </div>
            </div>
        </div>
    );
}