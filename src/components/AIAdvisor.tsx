import React from 'react';
import { GoogleGenAI } from "@google/genai";
import { MessageSquare, Send, X, Bot, User, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import ReactMarkdown from 'react-markdown';

export default function AIAdvisor() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [input, setInput] = React.useState('');
  const [messages, setMessages] = React.useState<{ role: 'user' | 'bot'; content: string }[]>([
    { role: 'bot', content: 'Hello! I am your Aetheria Academic Advisor. How can I help you today? You can ask about programs, admissions, or campus life.' }
  ]);
  const [isLoading, setIsLoading] = React.useState(false);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
          {
            role: "user",
            parts: [{ text: `You are an AI Academic Advisor for Aetheria University. 
            Aetheria University is a fictional prestigious university known for its 100-year history, 
            top-tier research in Quantum Computing, Sustainability, and Arts. 
            It has a global ranking of #12. 
            The tone should be professional, welcoming, and helpful.
            
            User asks: ${userMessage}` }]
          }
        ],
        config: {
          systemInstruction: "You are a helpful academic advisor for Aetheria University. Provide concise and informative answers about the university.",
        }
      });

      const botResponse = response.text || "I'm sorry, I couldn't process that request. Please try again.";
      setMessages(prev => [...prev, { role: 'bot', content: botResponse }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'bot', content: "I'm having trouble connecting to my knowledge base. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-univ-primary text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center gap-2 group"
      >
        <MessageSquare className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 font-medium whitespace-nowrap">
          Ask AI Advisor
        </span>
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-[90vw] sm:w-[400px] h-[500px] bg-white rounded-3xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-univ-primary p-4 flex justify-between items-center text-white">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-lg">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">Academic Advisor</h3>
                  <p className="text-[10px] text-slate-300">Powered by Aetheria AI</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-white/10 rounded-full transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`flex gap-2 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-univ-secondary text-white' : 'bg-univ-primary text-white'}`}>
                      {msg.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                    </div>
                    <div className={`p-3 rounded-2xl text-sm ${msg.role === 'user' ? 'bg-univ-secondary text-white rounded-tr-none' : 'bg-white text-slate-700 shadow-sm border border-slate-100 rounded-tl-none'}`}>
                      <div className="prose prose-sm max-w-none prose-p:leading-relaxed">
                        <ReactMarkdown>
                          {msg.content}
                        </ReactMarkdown>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex gap-2 items-center bg-white p-3 rounded-2xl shadow-sm border border-slate-100">
                    <Loader2 className="w-4 h-4 animate-spin text-univ-primary" />
                    <span className="text-xs text-slate-500">Advisor is thinking...</span>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-slate-100">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask a question..."
                  className="flex-1 bg-slate-100 border-none rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-univ-primary transition-all"
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="bg-univ-primary text-white p-2 rounded-xl hover:bg-univ-primary/90 disabled:opacity-50 transition-all"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
