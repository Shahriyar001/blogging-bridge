import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";
const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>11.02.2023 - </span>
          <span className={styles.category}>Culture</span>
        </div>
        <Link href="/">
          <h1>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, esse.
          </h1>
        </Link>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
          dignissimos nesciunt laboriosam autem nihil, fugiat sit! Magni
          voluptas ipsa ipsum beatae illum doloribus dolore qui consequatur
          veritatis temporibus, maxime nemo?
        </p>
        <Link className={styles.link} href="/">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
