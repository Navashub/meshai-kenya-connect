
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, ArrowUp, Paperclip, Loader2, User } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Hello! I'm MeshAI, your entrepreneurship assistant. How can I help you with your business in Kenya today?",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputMessage.trim()) return;
    
    const userMessage = {
      id: Date.now().toString(),
      role: "user" as const,
      content: inputMessage,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    try {
      // Simulate API call to an AI service
      setTimeout(() => {
        // Sample response based on common entrepreneurship questions
        let responseContent = "";
        const normalizedInput = inputMessage.toLowerCase();
        
        if (normalizedInput.includes("register") && normalizedInput.includes("business")) {
          responseContent = `To register a business in Kenya, you have several options:

1. **Sole Proprietorship:**
   - Visit eCitizen portal (ecitizen.go.ke)
   - Apply for a Business Registration Certificate (BRC)
   - Pay KSh 850 for registration fee
   - Obtain KRA PIN

2. **Limited Liability Company:**
   - Visit the Business Registration Service portal
   - Conduct a name search (KSh 150)
   - Complete incorporation forms (CR1, CR8)
   - Pay registration fee (KSh 10,650)
   - Submit Articles of Association
   - Wait 3-5 working days for certificate

Would you like more information on any specific part of the process?`;
        } else if (normalizedInput.includes("funding") || normalizedInput.includes("invest") || normalizedInput.includes("capital")) {
          responseContent = `Here are funding options for young entrepreneurs in Kenya:

1. **Youth Enterprise Development Fund** - Government loans from KSh 50,000 to 5M

2. **Kenya Climate Innovation Center** - Offers funding for green businesses

3. **KCB Lion's Den** - TV pitching platform with potential investors

4. **Angel Investors** - Networks like Kenya Angel Investors Network (KAIN)

5. **Venture Capital** - Firms like Novastar Ventures, DOB Equity, and Savannah Fund

6. **Incubators/Accelerators:**
   - Nailab
   - iHub
   - GrowthAfrica
   - Villgro Kenya

7. **Competitions:**
   - Anzisha Prize
   - Tony Elumelu Foundation
   - Hult Prize

Would you like me to provide more details on any specific funding source?`;
        } else if (normalizedInput.includes("tax") || normalizedInput.includes("kra")) {
          responseContent = `For Kenyan business taxes, here are the essentials:

1. **Registration:** First, register for a KRA PIN through iTax

2. **Common taxes for entrepreneurs:**
   - Income Tax (30% corporate rate, or progressive for individuals)
   - Value Added Tax (VAT) - 16% for businesses with >KSh 5M turnover
   - Pay As You Earn (PAYE) - For employees
   - Withholding Tax

3. **Filing periods:**
   - VAT - Monthly by 20th
   - PAYE - Monthly by 9th
   - Corporate tax - Annual with quarterly installments
   - Individual tax - Annual by June 30th

4. **Digital Service Tax** - 1.5% on gross transactions for digital services

I recommend working with a certified accountant to optimize your tax strategy.`;
        } else {
          responseContent = "I'd be happy to help with your question about entrepreneurship in Kenya. Could you tell me a bit more about your specific business idea or challenge?";
        }

        const botMessage = {
          id: (Date.now() + 1).toString(),
          role: "assistant" as const,
          content: responseContent,
          timestamp: new Date()
        };
        
        setMessages(prev => [...prev, botMessage]);
        setIsLoading(false);
      }, 1500);
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen max-h-screen">
      <div className="bg-white border-b py-4 px-4">
        <div className="container mx-auto">
          <div className="flex items-center gap-2">
            <div className="bg-kenya-green p-1 rounded-full">
              <Sparkles size={20} className="text-white" />
            </div>
            <h1 className="text-xl font-semibold">AI Assistant</h1>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto bg-gray-50 p-4">
        <div className="container mx-auto max-w-3xl">
          <div className="space-y-4">
            {messages.map((message) => (
              <Card key={message.id} className={`${
                message.role === "assistant" ? "border-l-4 border-l-kenya-green" : ""
              }`}>
                <CardContent className="p-4">
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 mt-1">
                      {message.role === "assistant" ? (
                        <div className="bg-kenya-green rounded-full p-1">
                          <Sparkles size={18} className="text-white" />
                        </div>
                      ) : (
                        <div className="bg-gray-200 rounded-full p-1">
                          <User size={18} className="text-gray-700" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-1">
                        <p className="font-semibold text-sm">
                          {message.role === "assistant" ? "MeshAI Assistant" : "You"}
                        </p>
                        <span className="text-xs text-gray-500 ml-2">
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>
                      <div className="prose prose-sm max-w-none">
                        {message.content.split('\n').map((line, i) => (
                          <p key={i} className="my-1">
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            {isLoading && (
              <Card>
                <CardContent className="p-4">
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-kenya-green rounded-full p-1">
                        <Loader2 size={18} className="text-white animate-spin" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-500">MeshAI is typing...</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>
      </div>

      <div className="bg-white border-t p-4">
        <div className="container mx-auto max-w-3xl">
          <form onSubmit={handleSendMessage} className="flex gap-2">
            <Button
              type="button"
              size="icon"
              variant="outline"
              className="flex-shrink-0"
            >
              <Paperclip size={20} />
            </Button>
            <Input
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ask anything about business in Kenya..."
              className="flex-1"
              disabled={isLoading}
            />
            <Button 
              type="submit" 
              size="icon" 
              className="flex-shrink-0 bg-kenya-green hover:bg-kenya-green/90"
              disabled={isLoading || !inputMessage.trim()}
            >
              <ArrowUp size={20} />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chat;
