'use client';

import { useState, useRef, useEffect } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send, Bot, User } from 'lucide-react';
import { TypingIndicator } from '@/components/TypingIndicator';

interface Message {
    role: 'user' | 'assistant';
    content: string;
}

interface ChatBotProps {
    isOpen: boolean;
    onClose: () => void;
}

export function ChatBot({ isOpen, onClose }: ChatBotProps) {
    const [messages, setMessages] = useState<Message[]>([
        {
            role: 'assistant',
            content: 'Hello! I\'m Fridahva Assistant. How can I help you learn about our virtual assistant services today?'
        }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const sendMessage = async () => {
        if (!inputValue.trim() || isLoading) return;

        const userMessage: Message = {
            role: 'user',
            content: inputValue.trim()
        };

        setMessages(prev => [...prev, userMessage]);
        setInputValue('');
        setIsLoading(true);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    messages: [...messages, userMessage]
                }),
            });

            const data = await response.json();

            if (response.ok) {
                const assistantMessage: Message = {
                    role: 'assistant',
                    content: data.reply
                };
                setMessages(prev => [...prev, assistantMessage]);
            } else {
                throw new Error(data.error || 'Something went wrong');
            }
        } catch (error) {
            const errorMessage: Message = {
                role: 'assistant',
                content: 'Something went wrong — please try again shortly.'
            };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    return (
        <Sheet open={isOpen} onOpenChange={onClose}>
            <SheetContent
                side="right"
                className="w-full sm:w-96 flex flex-col h-full bg-gradient-to-br from-background to-secondary border-l-2 border-[#fff8e7] font-serif p-2"
            >
                <SheetHeader className="border-b border-gold/20 pb-4">
                    <SheetTitle className="text-maroon flex items-center gap-2">
                        <Bot className="w-5 h-5 text-primary" />
                        Fridahva Assistant
                    </SheetTitle>
                </SheetHeader>

                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto py-4 space-y-4">
                    {messages.map((message, index) => (
                        <div
                            key={index}
                            className={`flex items-start gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'
                                }`}
                        >
                            {message.role === 'assistant' && (
                                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                    <Bot className="w-4 h-4 text-primary" />
                                </div>
                            )}

                            <div
                                className={`max-w-[80%] p-3 rounded-lg shadow-sm ${message.role === 'user'
                                        ? 'bg-maroon text-cream ml-auto'
                                        : 'bg-white text-maroon border border-gold/20'
                                    }`}
                            >
                                <p className="text-sm leading-relaxed whitespace-pre-wrap">
                                    {message.content}
                                </p>
                            </div>

                            {message.role === 'user' && (
                                <div className="w-8 h-8 rounded-full bg-maroon/10 flex items-center justify-center flex-shrink-0">
                                    <User className="w-4 h-4 text-maroon" />
                                </div>
                            )}
                        </div>
                    ))}

                    <TypingIndicator isVisible={isLoading} />

                    <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="border-t border-gold/20 p-4">
                    <div className="flex gap-2">
                        <Input
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="Ask about our VA services..."
                            disabled={isLoading}
                            className="flex-1 border-primary/30 focus:border-primary bg-white text-maroon placeholder:text-maroon/60"
                        />
                        <Button
                            onClick={sendMessage}
                            disabled={!inputValue.trim() || isLoading}
                            size="icon"
                            className="bg-primary/30 border border-primary hover:bg-primary text-white shadow-md hover:shadow-lg transition-all duration-200"
                        >
                            <Send className="w-4 h-4 text-primary" />
                        </Button>
                    </div>
                    <p className="text-xs text-maroon/60 mt-2 text-center">
                        Ask me about FridahVA services, pricing, or how to get started.
                    </p>
                </div>
            </SheetContent>
        </Sheet>
    );
}