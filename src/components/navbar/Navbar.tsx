import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Component } from "react";
import styles from "./navbar.module.scss";

export class Navbar extends Component {
  render() {
    return (
      <div className={styles.navbar}>
        <FontAwesomeIcon
          icon={faBars}
          color={"white"}
          size="lg"
        ></FontAwesomeIcon>
      </div>
    );
  }
}
