import React from "react";
import styles from "./ThemeToggle.module.css";
import Image from "next/image";
import moon from "../../../public/moon.png";
import sun from "../../../public/sun.png";

const ThemeToggle = () => {
  return (
    <div className={styles.container}>
      <Image src={moon} width={14} height={14} alt="moon" />
      <div className={styles.ball}></div>
      <Image src={sun} width={14} height={14} alt="sun" />
    </div>
  );
};

export default ThemeToggle;
