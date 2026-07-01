import { useState } from "react";
import ChatButton from "./ChatButton/ChatButton";
import ChatCard from "./ChatCard/ChatCard";
import { enviarMensagem } from "../../services/chatService";

function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const [messages, setMessages] = useState([
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
  if (isClosing) return;

  setIsClosing(true);

  setTimeout(() => {
    setIsOpen(false);
    setIsClosing(false);
  }, 280);
}

  async function sendMessage(text) {
    const userMessage = { id: Date.now(), sender: "user", text };
    setMessages((old) => [...old, userMessage]);
    setIsTyping(true);

    try {
      const resposta = await enviarMensagem(text);

      const botMessage = {
        id: Date.now() + 1,
        sender: "bot",
        text: resposta,
      };
      setMessages((old) => [...old, botMessage]);
    } catch (error) {
      const errorMessage = {
        id: Date.now() + 1,
        sender: "bot",
        text: "Desculpe, tive um problema para me conectar. Tente novamente!",
      };
      setMessages((old) => [...old, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  }

  return (
    <>
      <ChatButton onClick={openChat} />
      {isOpen && (
        <ChatCard
          onClose={closeChat}
          messages={messages}
          onSendMessage={sendMessage}
          isClosing={isClosing}
          isTyping={isTyping}
        />
      )}
    </>
  );
}

export default ChatBot;