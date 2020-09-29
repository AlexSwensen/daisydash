import Head from "next/head";
import Frame from "../components/frame/frame";
import styles from "../styles/Home.module.scss";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Frame>foobar</Frame>
    </Fragment>
  );
}
