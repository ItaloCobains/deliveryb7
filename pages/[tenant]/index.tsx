import styles from "./../../styles/Home.module.css";

import { Banner } from "../../components/Banner"
import { SearchInput } from "../../components/SearchInput";
import { ProductItem } from '../../components/ProductItem';
import { useApi } from "../../libs/useApi";


const Home = () => {

  const handleSearch = (searchValue: string) => {
    console.log(`Vc esta buscando por: ${searchValue}`);
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerTop}>
          <div className={styles.headerTopLeft}>
            <div className={styles.headerTitle}>
              Seja Bem Vindo (a) 👋
            </div>
            <div className={styles.headerSubTitle}>
              O que deseja para hoje ?
            </div>
          </div>
          <div className={styles.headerTopRight}>
            <div className={styles.MenuBottom}>
              <div className={styles.menuButtomLine}></div>
              <div className={styles.menuButtomLine}></div>
              <div className={styles.menuButtomLine}></div>
            </div>
          </div>
        </div>
        <div className={styles.headerBottom}>
          <SearchInput mainColor="#fb9400" onSearch={handleSearch} />
        </div>
      </header>

      <Banner />

      <div className={styles.grid}>
        <ProductItem
          data={{ id: 1, image: '/tmp/burgue.png', categoryName: "Tradicional", name: "Texas Burguer", price: "R$ 25,50" }}
          mainColor="#fb9400"
          secondColor="#CCC"
        />
        <ProductItem
          data={{ id: 2, image: '/tmp/burgue.png', categoryName: "Tradicional", name: "Texas Burguer", price: "R$ 25,50" }}
          mainColor="#fb9400"
          secondColor="#CCC"
        />
        <ProductItem
          data={{ id: 3, image: '/tmp/burgue.png', categoryName: "Tradicional", name: "Texas Burguer", price: "R$ 25,50" }}
          mainColor="#fb9400"
          secondColor="#CCC"
        />
        <ProductItem
          data={{ id: 4, image: '/tmp/burgue.png', categoryName: "Tradicional", name: "Texas Burguer", price: "R$ 25,50" }}
          mainColor="#fb9400"
          secondColor="#CCC"
        />
        <ProductItem
          data={{ id: 5, image: '/tmp/burgue.png', categoryName: "Tradicional", name: "Texas Burguer", price: "R$ 25,50" }}
          mainColor="#fb9400"
          secondColor="#CCC"
        />
        <ProductItem
          data={{ id: 6, image: '/tmp/burgue.png', categoryName: "Tradicional", name: "Texas Burguer", price: "R$ 25,50" }}
          mainColor="#fb9400"
          secondColor="#CCC"
        />

      </div>
    </div>
  );
};

export default Home;
