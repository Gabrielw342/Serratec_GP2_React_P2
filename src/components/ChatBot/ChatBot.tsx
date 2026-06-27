import { useState } from "react";

import ChatButton from "./ChatButton/ChatButton";
import ChatCard from "./ChatCard/ChatCard";

export interface Message {
  id: number;
  sender: "user" | "bot";
  text: string;
}

function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "bot",
      text: "Olá! 👋 Eu sou o Chef IA. Como posso ajudar você hoje?",
    },
  ]);

  function openChat() {
    setIsOpen(true);
  }

  function closeChat() {
    setIsOpen(false);
  }

  function sendMessage(text: string) {
    const userMessage: Message = {
      id: Date.now(),
      sender: "user",
      text,
    };

    setMessages((old) => [...old, userMessage]);

    setTimeout(() => {
      const botMessage: Message = {
        id: Date.now() + 1,
        sender: "bot",
        text: "alooooooou!",
      };

      setMessages((old) => [...old, botMessage]);
    }, 800);
  }

  return (
    <>
      <ChatButton onClick={openChat} />

      {isOpen && (
        <ChatCard
          onClose={closeChat}
          messages={messages}
          onSendMessage={sendMessage}
        />
      )}
    </>
  );
}

export default ChatBot;