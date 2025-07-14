import { useEffect } from 'react';
import '@n8n/chat/style.css';
import './ChatBot.css';
import { createChat } from '@n8n/chat'; // Make sure you use this below

export const ChatBot = () => {
    useEffect(() => {
        createChat({
            webhookUrl: 'https://n8n-hty8.onrender.com/webhook/7832148a-25c0-40ce-904a-f0b23d98e269/chat',
            target: '#jeevan-chat',
            showWelcomeScreen: false,
            i18n: {
                en: {
                    title: "Hello! I'm Jeevan 👋",
                    subtitle: 'Your friendly companion! ✨',
                    inputPlaceholder: 'Ask me anything...'
                }
            },
            initialMessages: ['Hi there! 👋', 'My name is Jeevan. How can I assist you today?']
        });
    }, []);

    return (
        <div>
            <div id="jeevan-chat"></div>
        </div>
    );
};

export default ChatBot;