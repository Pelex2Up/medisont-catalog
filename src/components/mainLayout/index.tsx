import { FC } from "react";
import { Outlet } from "react-router";
import styles from "./mainLayout.module.scss";
import { Header } from "../Header";
import { UpperFooterBlock } from "../upperFooterBlock";
import { Footer } from "../Footer";
import { Cart } from "../Cart";

export const MainLayout: FC = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Cart />
      <div className={styles.wrapper_body}>
        <Outlet />
        <UpperFooterBlock />
        <Footer />
      </div>
    </div>
  );
};
