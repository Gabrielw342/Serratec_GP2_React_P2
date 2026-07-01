import styles from "./ChatBotMessage.module.css";

function ChatBotMessage({ text }) {
  return (
    <div className={styles.bubble}>
      {text}
    </div>
  );
}

export default ChatBotMessage;