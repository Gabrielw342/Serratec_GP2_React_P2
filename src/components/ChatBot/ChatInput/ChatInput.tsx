import { useState, KeyboardEvent } from "react";
import styles from "./ChatInput.module.css";

interface ChatInputProps {
  onSendMessage: (text: string) => void;
}

function ChatInput({ onSendMessage }: ChatInputProps) {
  const [message, setMessage] = useState("");

  function handleSend() {
    if (!message.trim()) return;

    onSendMessage(message);
    setMessage("");
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      handleSend();
    }
  }

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        placeholder="Digite sua mensagem..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <button className={styles.button} onClick={handleSend}>
        Enviar
      </button>
    </div>
  );
}

export default ChatInput;