import React from "react";
import styles from "./Featured.module.css";
import Image from "next/image";
import image from "../../../public/p1.jpeg";

const Featured = () => {
  return (
    // <div className={styles.container}>
    //   <h1 className={styles.title}>
    //     <b>hello</b>asghjhy esrtdyfyh asrtdhy
    //   </h1>
    //   <div className={styles.post}>
    //     <div className={styles.imgContainer}>
    //       <Image src={image} alt="" />
    //     </div>
    //     <div className={styles.textContainer}>
    //       <h1 className={styles.postTitle}>
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
    //         dolorum!
    //       </h1>
    //       <p className={styles.postDescription}>
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nihil
    //         deserunt adipisci minus fuga modi ea rerum quidem optio veniam rem,
    //         quis itaque. Laboriosam nobis consequuntur ullam corporis, ipsum
    //         nihil quod! Consequatur placeat aliquid commodi deserunt possimus
    //         ipsa voluptate odio?
    //       </p>
    //       <button className={styles.button}>Read more</button>
    //     </div>
    //   </div>
    // </div>
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, lama dev here!</b> Discover my stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src={image} alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Lorem ipsum dolor sit amet alim consectetur adipisicing elit.
          </h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Cupiditate, quam nisi magni ea laborum inventore voluptatum
            laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium
            quisquam! Harum unde sit culpa debitis.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
