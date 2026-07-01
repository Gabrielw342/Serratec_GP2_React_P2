import styles from "./UserMessage.module.css";

function UserMessage({ text }) {
  return (
    <div className={styles.container}>
      <div className={styles.bubble}>{text}</div>
    </div>
  );
}

export default UserMessage;