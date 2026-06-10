import React, { useState, useEffect, useRef } from 'react';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Greetings! I am the Lead AI Consultant for LicenseXpertIndia. How can I assist you with your business registration, licensing, or compliance needs today?", sender: 'ai' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = { text: input, sender: 'user' };
    setMessages(prev => [...prev, userMsg]);
    setInput('');

    // Simple AI response logic (mimicking main.js)
    setTimeout(() => {
      let aiResponse = "I can assist with Licenses, Insurance, and Compliance. Which category does your inquiry fall into?";
      if (input.toLowerCase().includes('license')) {
        aiResponse = "I see you're interested in Business Licenses. To provide accurate guidance, could you please specify your business type and your State?";
      }
      setMessages(prev => [...prev, { text: aiResponse, sender: 'ai' }]);
    }, 1000);
  };

  // Expose toggleChat to window for the Wizard component
  useEffect(() => {
    window.toggleChat = () => setIsOpen(prev => !prev);
  }, []);

  return (
    <>
      <div id="chat-widget" className={isOpen ? 'active' : ''}>
        <div className="chat-header">
          <h3>Expert Assistant</h3>
          <button onClick={() => setIsOpen(false)} style={{ background: 'transparent', border: 'none', color: 'white', cursor: 'pointer' }}>✕</button>
        </div>
        <div className="chat-messages" id="chat-messages">
          {messages.map((msg, idx) => (
            <div key={idx} className={`message message-${msg.sender} animate-fade-in-up is-visible`}>
              {msg.text}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <div className="chat-input">
          <input 
            type="text" 
            value={input} 
            onChange={(e) => setInput(e.target.value)} 
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type your query..." 
          />
          <button onClick={handleSend} className="btn btn-primary" style={{ padding: '10px 20px' }}>Send</button>
        </div>
      </div>
      <div className="chat-toggle" onClick={() => setIsOpen(!isOpen)}>
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </div>
    </>
  );
};

export default ChatWidget;
