import styles from "./ChatMessages.module.css";
import UserMessage from "../UserMessage/UserMessage";
import ChatBotMessage from "../ChatBotMessage/ChatBotMessage";
import type { Message } from "../ChatBot";

interface ChatMessagesProps {
  messages: Message[];
}

function ChatMessages({ messages }: ChatMessagesProps) {
  return (
    <div className={styles.container}>
      {messages.map((msg) =>
        msg.sender === "user" ? (
          <UserMessage
            key={msg.id}
            text={msg.text}
          />
        ) : (
          <ChatBotMessage
            key={msg.id}
            text={msg.text}
          />
        )
      )}
    </div>
  );
}

export default ChatMessages;