import { Navbar } from "../navbar/Navbar";
import styles from "./frame.module.scss";

export default function Frame({ children }) {
  return (
    <div className={styles.frameContainer}>
      <Navbar></Navbar>
      <div className={styles.frameContent}>{children}</div>
    </div>
  );
}
