import { useState } from 'react';
import Chatbot from './Chatbot';

function UtilityToolbox() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleToolbox = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="utility-toolbox">
      {isExpanded && (
        <div className="toolbox-window">
          <div className="toolbox-header">
            <h3>Chat Assistant</h3>
            <button 
              className="toolbox-close" 
              onClick={toggleToolbox}
              aria-label="Close"
            >
              ×
            </button>
          </div>
          <div className="toolbox-content">
            <Chatbot />
          </div>
        </div>
      )}
      
      <button 
        className="toolbox-button" 
        onClick={toggleToolbox}
        aria-label="Toggle chat"
      >
        <span className="toolbox-icon">💬</span>
      </button>
    </div>
  );
}

export default UtilityToolbox;