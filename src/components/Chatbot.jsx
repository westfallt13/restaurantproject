import { useState, useEffect, useRef } from 'react';
import { sendChatMessage } from '../services/AIService';
import { fetchMenuItems } from '../services/MenuService';

function Chatbot() {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Welcome to The Golden Plate! I\'m your personal waiter assistant. How can I help you explore our menu today?'
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [menuItems, setMenuItems] = useState([]);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const loadMenu = async () => {
      const items = await fetchMenuItems();
      setMenuItems(items);
    };
    loadMenu();
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!input.trim() || loading) return;

    const userMessage = input.trim();
    setInput('');

    const updatedMessages = [
      ...messages,
      { role: 'user', content: userMessage }
    ];
    setMessages(updatedMessages);
    setLoading(true);

    const conversationHistory = updatedMessages.slice(1);
    const aiResponse = await sendChatMessage(conversationHistory, menuItems);

    setMessages([
      ...updatedMessages,
      { role: 'assistant', content: aiResponse.response }
    ]);
    
    setLoading(false);
  };

  return (
    <div className="chatbot">
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div 
            key={index} 
            className={`chat-message ${message.role === 'user' ? 'user-message' : 'assistant-message'}`}
          >
            <div className="message-bubble">
              {message.content}
            </div>
          </div>
        ))}
        {loading && (
          <div className="chat-message assistant-message">
            <div className="message-bubble loading">
              <span className="typing-indicator">●</span>
              <span className="typing-indicator">●</span>
              <span className="typing-indicator">●</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSubmit} className="chat-input-form">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me about our menu..."
          className="chat-input"
          disabled={loading}
        />
        <button 
          type="submit" 
          className="chat-send-button"
          disabled={loading || !input.trim()}
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default Chatbot;