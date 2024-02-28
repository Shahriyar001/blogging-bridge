import React from "react";
import styles from "./CategoryList.module.css";
import Link from "next/link";
import Image from "next/image";
import coding from "../../../public/coding.png";
import culture from "../../../public/culture.png";
import fashion from "../../../public/fashion.png";
import food from "../../../public/food.png";
import style from "../../../public/style.png";
import travel from "../../../public/travel.png";

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.style}`}
        >
          <Image
            src={style}
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.style}`}
        >
          <Image
            src={fashion}
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.style}`}
        >
          <Image
            src={food}
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.style}`}
        >
          <Image
            src={travel}
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.style}`}
        >
          <Image
            src={culture}
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.style}`}
        >
          <Image
            src={coding}
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
