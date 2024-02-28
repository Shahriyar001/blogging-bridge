import Image from "next/image";
import Link from "next/link";
import Featured from "./componants/featured/Featured";
import CategoryList from "./componants/categoryList/CategoryList";
import Menu from "./componants/Menu/Menu";
import CardList from "./componants/CardList/CardList";
import styles from "./homepage.module.css";

export default function Home() {
  return (
    <div>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>
    </div>
  );
}
