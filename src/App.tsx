// App.tsx
import { useEffect } from 'react';
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';

export const Chatbot = () => {
	useEffect(() => {
		createChat({
			webhookUrl: 'https://jeeva9942.app.n8n.cloud/webhook/69081c65-ffbe-4a6a-999c-fcd2c3420cfb/chat'
		});
	}, []);

	return (<div></div>);
};
export default Chatbot;