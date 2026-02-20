import Chatbot from '../components/Chatbot';

function ChatbotPage() {
  return (
    <div className="chatbot-page">
      <div className="chatbot-page-container">
        <h1>Chat with Our Assistant</h1>
        <p className="chatbot-page-subtitle">Ask me anything about our menu!</p>
        <div className="chatbot-page-window">
          <Chatbot />
        </div>
      </div>
    </div>
  );
}

export default ChatbotPage;