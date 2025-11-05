'use client';

import { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ChatBot } from './ChatBot';

export function ChatButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        size="lg"
        className={`
          fixed bottom-6 right-6 z-50 
          w-14 h-14 rounded-full shadow-lg hover:shadow-xl
          bg-primary/30 backdrop-blur-sm hover:bg-primary text-primary hover:text-white
          transition-all duration-300 ease-in-out
          transform hover:scale-105
          border-2 border-primary
          ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}
        `}
        aria-label="Open chat"
      >
        <MessageSquare className="w-6 h-6 animate-pulse" />
      </Button>

      <ChatBot 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
      />
    </>
  );
}