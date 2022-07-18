import styles from "./../../styles/Home.module.css";

import { Banner } from "../../components/Banner"
import { SearchInput } from "../../components/SearchInput";
import { ProductItem } from '../../components/ProductItem';
import { getTenantResponse, useApi } from "../../libs/useApi";
import { GetServerSideProps } from "next";


const Home = (data: Props) => {

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
              <div className={styles.menuButtomLine} style={{ backgroundColor: data.tenant.mainColor }}></div>
              <div className={styles.menuButtomLine} style={{ backgroundColor: data.tenant.mainColor }}></div>
              <div className={styles.menuButtomLine} style={{ backgroundColor: data.tenant.mainColor }}></div>
            </div>
          </div>
        </div>
        <div className={styles.headerBottom}>
          <SearchInput mainColor={data.tenant.mainColor} onSearch={handleSearch} />
        </div>
      </header>

      <Banner />

      <div className={styles.grid}>
        <ProductItem
          data={{ id: 1, image: '/tmp/burgue.png', categoryName: "Tradicional", name: "Texas Burguer", price: "R$ 25,50" }}
          mainColor={data.tenant.mainColor}
          secondColor={data.tenant.secondColor}
        />
        <ProductItem
          data={{ id: 1, image: '/tmp/burgue.png', categoryName: "Tradicional", name: "Texas Burguer", price: "R$ 25,50" }}
          mainColor={data.tenant.mainColor}
          secondColor={data.tenant.secondColor}
        />
        <ProductItem
          data={{ id: 1, image: '/tmp/burgue.png', categoryName: "Tradicional", name: "Texas Burguer", price: "R$ 25,50" }}
          mainColor={data.tenant.mainColor}
          secondColor={data.tenant.secondColor}
        />
        <ProductItem
          data={{ id: 1, image: '/tmp/burgue.png', categoryName: "Tradicional", name: "Texas Burguer", price: "R$ 25,50" }}
          mainColor={data.tenant.mainColor}
          secondColor={data.tenant.secondColor}
        />
      </div>
    </div>
  );
};

export default Home;

type Props = {
  tenant: getTenantResponse;
}


export const getServerSideProps: GetServerSideProps = async (context) => {
  const { tenant: tenantSlug } = context.query;
  const api = useApi();

  // get tenant

  const tenant = await api.getTenant(tenantSlug as string);

  if (!tenant) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      tenant
    }
  }
}



