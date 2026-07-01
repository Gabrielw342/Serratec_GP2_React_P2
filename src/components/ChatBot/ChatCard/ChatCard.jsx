import styles from "./ChatCard.module.css";
import ChatMessages from "../ChatMessages/ChatMessages";
import ChatInput from "../ChatInput/ChatInput";
import chefAvatar from "../../../assets/placeholderteste.png";

function ChatCard({
  onClose,
  messages,
  onSendMessage,
  isClosing,
  isTyping,
}) {
  return (
    <div
      className={`${styles.chatCard} ${
        isClosing ? styles.closing : ""
      }`}
    >
      <header className={styles.header}>
        <div className={styles.headerInfo}>
          <div className={styles.avatar}>
            <img
              src={chefAvatar}
              alt="Chef IA"
              className={styles.avatarImage}
            />
          </div>

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
        <ChatMessages
          messages={messages}
          isTyping={isTyping}
        />
      </main>

      <footer className={styles.footer}>
        <ChatInput onSendMessage={onSendMessage} />
      </footer>
    </div>
  );
}

export default ChatCard;