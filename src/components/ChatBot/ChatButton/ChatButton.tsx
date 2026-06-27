import styles from "./ChatButton.module.css";

interface ChatButtonProps {
  onClick: () => void;
}

function ChatButton({ onClick }: ChatButtonProps) {
  return (
    <button
      className={styles.chatButton}
      onClick={onClick}
    >
      💬
    </button>
  );
}

export default ChatButton;