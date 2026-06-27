import styles from "./ChatCard.module.css";
import ChatMessages from "../ChatMessages/ChatMessages";
import ChatInput from "../ChatInput/ChatInput";
import type { Message } from "../ChatBot";

interface ChatCardProps {
  onClose: () => void;
  messages: Message[];
  onSendMessage: (text: string) => void;
}

function ChatCard({ onClose, messages, onSendMessage }: ChatCardProps) {
  return (
    <div className={styles.chatCard}>
      <header className={styles.header}>
        <div className={styles.headerInfo}>
          <div className={styles.avatar}>🍳</div>

          <div className={styles.titleContainer}>
            <h2>Chef IA</h2>
            <span>Seu assistente culinário</span>
          </div>
        </div>

        <button className={styles.closeButton} onClick={onClose}>
          ✕
        </button>
      </header>

      <main className={styles.messages}>
        <ChatMessages messages={messages} />
      </main>

      <footer className={styles.footer}>
        <ChatInput onSendMessage={onSendMessage} />
      </footer>
    </div>
  );
}

export default ChatCard;