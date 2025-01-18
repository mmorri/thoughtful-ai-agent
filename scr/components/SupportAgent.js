import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send } from 'lucide-react';
import { RESPONSES } from '../data/responses';

const findAnswer = (query) => {
  query = query.toLowerCase();
  
  // Try exact match first
  const exactMatch = RESPONSES.questions.find(
    qa => qa.question.toLowerCase() === query
  );
  if (exactMatch) return exactMatch.answer;

  // Try keyword matching
  const keywordMatch = RESPONSES.questions.find(
    qa => qa.question.toLowerCase().includes(query) || 
          query.includes(qa.question.toLowerCase())
  );
  if (keywordMatch) return keywordMatch.answer;

  // Fallback response
  return "I apologize, but I don't have specific information about that. I can help you with questions about EVA (Eligibility Verification), CAM (Claims Processing), PHIL (Payment Posting), or general information about Thoughtful AI's agents. How can I assist you with these topics?";
};

const SupportAgent = () => {
  const [messages, setMessages] = useState([
    {
      type: 'agent',
      content: "Hello! I'm your Thoughtful AI support assistant. How can I help you today?"
    }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { type: 'user', content: input }]);

    // Get and add agent response
    const response = findAnswer(input);
    setTimeout(() => {
      setMessages(prev => [...prev, { type: 'agent', content: response }]);
    }, 500);

    setInput('');
  };

  return (
    <div className="flex flex-col h-screen max-w-2xl mx-auto p-4 bg-gray-50">
      <div className="flex items-center gap-2 p-4 bg-blue-600 text-white rounded-t-lg">
        <MessageCircle className="w-6 h-6" />
        <h1 className="text-xl font-semibold">Thoughtful AI Support</h1>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-lg ${
                message.type === 'user'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2 p-4 bg-white border-t">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your question here..."
          className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <Send className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
};

export default SupportAgent;