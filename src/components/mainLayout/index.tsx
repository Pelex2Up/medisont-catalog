import { FC } from "react";
import { Outlet } from "react-router";
import styles from "./mainLayout.module.scss";
import { Header } from "../Header";
import { UpperFooterBlock } from "../upperFooterBlock";
import { Footer } from "../Footer";
import { Cart } from "../Cart";
import { useCart } from "react-use-cart";

export const MainLayout: FC = () => {
  const { items } = useCart();
  return (
    <div className={styles.wrapper}>
      <Header />
      {items.length > 0 && <Cart />}
      <div className={styles.wrapper_body}>
        <Outlet />
        <UpperFooterBlock />
        <Footer />
      </div>
    </div>
  );
};
