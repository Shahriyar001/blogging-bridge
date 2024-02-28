import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import facebook from "../../../public/facebook.png";
import instagram from "../../../public/instagram.png";
import tiktok from "../../../public/tiktok.png";
import youtube from "../../../public/youtube.png";
import Link from "next/link";
import ThemeToggle from "../themeToggle/ThemeToggle";
import AuthLinks from "../authLinks/AuthLinks";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src={facebook} width={24} height={24} alt="facebook" />
        <Image src={instagram} width={24} height={24} alt="facebook" />
        <Image src={tiktok} width={24} height={24} alt="facebook" />
        <Image src={youtube} width={24} height={24} alt="facebook" />
      </div>
      <div className={styles.logo}>Blogging Bridge</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>
          Home
        </Link>
        <Link href="/" className={styles.link}>
          Contact
        </Link>
        <Link href="/" className={styles.link}>
          About
        </Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
