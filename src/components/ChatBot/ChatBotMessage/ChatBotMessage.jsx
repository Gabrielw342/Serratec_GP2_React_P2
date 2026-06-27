import styles from "./ChatBotMessage.module.css";

function ChatBotMessage({ text }) {
  return (
    <div className={styles.container}>
      <div className={styles.bubble}>{text}</div>
    </div>
  );
}

export default ChatBotMessage;