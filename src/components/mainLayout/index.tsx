import { FC, useEffect, useState } from "react";
import { Outlet } from "react-router";
import styles from "./mainLayout.module.scss";
import { Header } from "../Header";
import { UpperFooterBlock } from "../upperFooterBlock";
import { Footer } from "../Footer";
import { Cart } from "../Cart";
import { useCart } from "react-use-cart";
import { useMediaQuery } from "@mui/material";

export const MainLayout: FC = () => {
  const { items } = useCart();
  const [headerSmall, setHeaderSmall] = useState<boolean>(false);
  const media = useMediaQuery(`(min-width:1200px)`);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const blockHeight =
        document.getElementById("header-section")?.offsetHeight ?? 0;

      if (media && scrollPosition > blockHeight - 50) {
        setHeaderSmall(true);
      } else {
        setHeaderSmall(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [headerSmall, setHeaderSmall, media]);

  return (
    <div className={styles.wrapper}>
      <Header smallHeader={headerSmall} />
      {items.length > 0 && <Cart />}
      <div className={styles.wrapper_body}>
        <Outlet />
        <UpperFooterBlock />
        <Footer />
      </div>
    </div>
  );
};
