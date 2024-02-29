import React from "react";
import styles from "./singlePage.module.css";
import Menu from "../componants/Menu/Menu";
import Image from "next/image";
import Comments from "../componants/comments/Comments";

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit,Lorem ipsum dolor sit amet consectetur.
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.image} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>John Doe - </span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <h2>Lorem ipsum dolor sit.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ut
              adipisci quasi cumque hic, cupiditate commodi molestias, incidunt
              maiores repellat voluptatem ipsa reprehenderit molestiae, aut ea?
              Ducimus commodi molestiae eius porro, fugiat dolorem assumenda
              provident distinctio quas placeat nulla deserunt!
            </p>
            <h2>Lorem ipsum dolor sit.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ut
              adipisci quasi cumque hic, cupiditate commodi molestias, incidunt
              maiores repellat voluptatem ipsa reprehenderit molestiae, aut ea?
              Ducimus commodi molestiae eius porro, fugiat dolorem assumenda
              provident distinctio quas placeat nulla deserunt!
            </p>
            <h2>Lorem ipsum dolor sit.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ut
              adipisci quasi cumque hic, cupiditate commodi molestias, incidunt
              maiores repellat voluptatem ipsa reprehenderit molestiae, aut ea?
              Ducimus commodi molestiae eius porro, fugiat dolorem assumenda
              provident distinctio quas placeat nulla deserunt!
            </p>
            <h2>Lorem ipsum dolor sit.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ut
              adipisci quasi cumque hic, cupiditate commodi molestias, incidunt
              maiores repellat voluptatem ipsa reprehenderit molestiae, aut ea?
              Ducimus commodi molestiae eius porro, fugiat dolorem assumenda
              provident distinctio quas placeat nulla deserunt!
            </p>
          </div>
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
    // <div className={styles.container}>
    //   <div className={styles.infoContainer}>
    //     <div className={styles.textContainer}>
    //       <h1 className={styles.title}>
    //         Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    //       </h1>
    //       <div className={styles.user}>
    //         {/* {data?.user?.image && (
    //           <div className={styles.userImageContainer}>
    //             <Image
    //               src={data.user.image}
    //               alt=""
    //               fill
    //               className={styles.avatar}
    //             />
    //           </div>
    //         )} */}
    //         <Image src="/p1.jpeg" alt="" fill className={styles.image} />
    //         <div className={styles.userTextContainer}>
    //           <span className={styles.username}>John Doe</span>
    //           <span className={styles.date}>01.01.2024</span>
    //         </div>
    //       </div>
    //     </div>
    //     {/* {data?.img && (
    //       <div className={styles.imageContainer}>
    //         <Image src={data.img} alt="" fill className={styles.image} />
    //       </div>
    //     )} */}
    //     <Image src="/p1.jpeg" alt="" fill className={styles.image} />
    //   </div>
    //   <div className={styles.content}>
    //     <div className={styles.post}>
    //       <div
    //         className={styles.description}
    //         // dangerouslySetInnerHTML={{ __html: data?.desc }}
    //       />
    //       <div className={styles.comment}>
    //         {/* <Comments postSlug={slug}/> */}
    //       </div>
    //     </div>
    //     <Menu />
    //   </div>
    // </div>
  );
};

export default SinglePage;
