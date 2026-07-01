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
      {messages.map((msg) => (
        <div
          key={msg.id}
          className={
            msg.sender === "user"
              ? styles.userRow
              : styles.botRow
          }
        >
          {msg.sender === "user" ? (
            <UserMessage text={msg.text} />
          ) : (
            <ChatBotMessage text={msg.text} />
          )}
        </div>
      ))}

      {isTyping && (
        <div className={styles.botRow}>
          <ChatBotMessage text="..." />
        </div>
      )}

      <div ref={endRef} />
    </div>
  );
}

export default ChatMessages;