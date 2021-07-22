import Head from "next/head";

import classes from "../styles/Home.module.css";

import UploadPhoto from "../components/UploadPhoto/UploadPhoto";

export default function Home() {
  return (
    <div className={classes.hero}>
      <h1>Remove the background from your photo online for free</h1>
      <div className={classes.main_container}>
        <UploadPhoto />
      </div>
    </div>
  );
}
