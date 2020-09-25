import { Navbar } from "../navbar/Navbar";
import styles from "./frame.module.scss";
import styled from "styled-components";

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

export default function Frame() {
  return (
    <div className={styles.frameContainer}>
      <Navbar></Navbar>
      <div className={styles.frameContent}>
        <h1>Coming soon! 🙂</h1>
        <Button>foobar</Button>
      </div>
    </div>
  );
}
