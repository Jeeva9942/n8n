import { useEffect, useState } from 'react';
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';
import './NexAIChatbot.css'; // Custom CSS for enhanced UI

export const Apptsx = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Initialize NexAI chatbot
    const chat = createChat({
      webhookUrl: 'https://jeeva9942.app.n8n.cloud/webhook/69081c65-ffbe-4a6a-999c-fcd2c3420cfb/chat',
      theme: theme, // Pass dynamic theme
      initialMessages: [
        {
          role: 'assistant',
          content: 'Hello! I’m NexAI, your friendly assistant. How can I help you today?',
        },
      ],
      options: {
        position: 'bottom-right',
        size: 'medium',
        zIndex: 1000,
      },
    });

    // Cleanup on component unmount
    return () => {
      chat.destroy();
    };
  }, [theme]);

  // Toggle chatbot visibility
  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  // Toggle theme between light and dark
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="nexai-chatbot-container">
      {/* Floating Chat Button */}
      <button
        className={`chat-toggle-button ${isChatOpen ? 'open' : ''}`}
        onClick={toggleChat}
        aria-label={isChatOpen ? 'Close NexAI Chat' : 'Open NexAI Chat'}
      >
        {isChatOpen ? '✕' : '💬'}
      </button>

      {/* Theme Toggle Button */}
      <button
        className="theme-toggle-button"
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
      >
        {theme === 'light' ? '🌙' : '☀️'}
      </button>

      {/* Chatbot Container */}
      <div className={`chatbot-wrapper ${isChatOpen ? 'visible' : 'hidden'}`}>
        <div id="nexai-chat" className="chatbot-content" />
      </div>
    </div>
  );
};

export default Apptsx;