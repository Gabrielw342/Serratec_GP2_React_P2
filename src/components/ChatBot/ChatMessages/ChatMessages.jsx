import { useEffect, useRef } from "react";
import styles from "./ChatMessages.module.css";
import UserMessage from "../UserMessage/UserMessage";
import ChatBotMessage from "../ChatBotMessage/ChatBotMessage";

function ChatMessages({ messages, isTyping }) {
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  return (
    <div className={styles.container}>
      {messages.map((msg) =>
        msg.sender === "user" ? (
          <UserMessage key={msg.id} text={msg.text} />
        ) : (
          <ChatBotMessage key={msg.id} text={msg.text} />
        )
      )}

      {isTyping && (
        <ChatBotMessage text="..." />
      )}

     
      <div ref={endRef} />
    </div>
  );
}

export default ChatMessages;