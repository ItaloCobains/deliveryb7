import styles from "./../../styles/Home.module.css";

const Home = () => {
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
                    ...
                </div>
            </header>
        </div>
    );
};

export default Home;
