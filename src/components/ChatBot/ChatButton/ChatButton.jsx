import styles from "./ChatButton.module.css";
import chatIcon from "../../../assets/chat-icon.png";

function ChatButton({ onClick }) {
  return (
    <button
      className={styles.chatButton}
      onClick={onClick}
      aria-label="Abrir chat"
    >
      <img
        src={chatIcon}
        alt="Abrir chat"
        className={styles.icon}
      />
    </button>
  );
}

export default ChatButton;