import { FC } from "react";
import styles from "./header.module.scss";
import logo from "./assets/image.png";
import { about, printing, realise } from "./config";
import Hamburger from "hamburger-react";

export const Header: FC = () => {
  return (
    <section className={styles.wrapper}>
      <a href="https://medisont.by/">
        <img className={styles.wrapper_logo} src={logo} alt="logo" />
      </a>

      <nav className={styles["wrapper_navBlock"]}>
        <span
          // href="https://medisont.by/#submenu:catalog"
          className={styles["wrapper_navBlock_navElement"]}
        >
          Печатаем <div className={styles.arrow} />
          <ul
            role="menu"
            className={styles.wrapper_navBlock_navElement_dropDownMenu}
          >
            <div
              className={styles.wrapper_navBlock_navElement_dropDownMenu_corner}
            />
            <div
              className={
                styles.wrapper_navBlock_navElement_dropDownMenu_content
              }
            >
              {printing.map((print, index) => (
                <a
                  href={print.link}
                  key={index + print.name}
                  className={
                    styles.wrapper_navBlock_navElement_dropDownMenu_item
                  }
                >
                  {print.name}
                </a>
              ))}
            </div>
          </ul>
        </span>
        <span
          // href="https://medisont.by/#submenu:izdatelstvo"
          className={styles["wrapper_navBlock_navElement"]}
        >
          Издаём <div className={styles.arrow} />
          <ul
            role="menu"
            className={styles.wrapper_navBlock_navElement_dropDownMenu}
          >
            <div
              className={styles.wrapper_navBlock_navElement_dropDownMenu_corner}
            />
            <div
              className={
                styles.wrapper_navBlock_navElement_dropDownMenu_content
              }
            >
              {realise.map((print, index) => (
                <a
                  href={print.link}
                  key={index + print.name}
                  className={
                    styles.wrapper_navBlock_navElement_dropDownMenu_item
                  }
                >
                  {print.name}
                </a>
              ))}
            </div>
          </ul>
        </span>
        <a
          href="https://medisont.by/suvenirnaja"
          className={styles["wrapper_navBlock_navElement"]}
        >
          Брендируем
        </a>
        <a
          href="https://medisont.by/price"
          className={styles["wrapper_navBlock_navElement"]}
        >
          Цены
        </a>
        <span
          // href="https://medisont.by/#submenu:onas"
          className={styles["wrapper_navBlock_navElement"]}
        >
          О нас <div className={styles.arrow} />
          <ul
            role="menu"
            className={styles.wrapper_navBlock_navElement_dropDownMenu}
          >
            <div
              className={styles.wrapper_navBlock_navElement_dropDownMenu_corner}
            />
            <div
              className={
                styles.wrapper_navBlock_navElement_dropDownMenu_content
              }
            >
              {about.map((print, index) => (
                <a
                  href={print.link}
                  key={index + print.name}
                  className={
                    styles.wrapper_navBlock_navElement_dropDownMenu_item
                  }
                >
                  {print.name}
                </a>
              ))}
            </div>
          </ul>
        </span>
        <a
          href="https://medisont.by/kontakty"
          className={styles["wrapper_navBlock_navElement"]}
          style={{ padding: 0 }}
        >
          Контакты
        </a>
      </nav>
      <div
        className={styles["wrapper_phone"]}
        style={{
          lineHeight: "18px",
          minWidth: "156px",
          display: "flex",
          flexDirection: "column",
          gap: "1px",
          marginTop: "-10px",
        }}
      >
        <a
          href="tel:+375173000093"
          style={{
            fontSize: "32px",
            width: "100%",
            textAlign: "justify",
            lineHeight: 1,
            color: "#000000",
            textDecoration: "none",
          }}
        >
          <strong style={{ fontFamily: `"Segoe UI Bold", Arial, sans-serif` }}>
            300-00-93
          </strong>
        </a>
        <span
          style={{
            fontSize: "14px",
            width: "100%",
            textAlign: "justify",
            textDecoration: "none",
            color: "#000000",
          }}
        >
          многоканальный город
        </span>
        <a
          href="tel:+375333970093"
          style={{
            fontSize: "14px",
            width: "100%",
            textAlign: "justify",
            color: "#000000",
            textDecoration: "none",
          }}
        >
          +375{" "}
          <strong style={{ fontFamily: `"Segoe UI Bold", Arial, sans-serif` }}>
            33 397-00-93
          </strong>{" "}
          моб
        </a>
        <a
          href="tel:+375292007410"
          style={{
            fontSize: "14px",
            width: "100%",
            textAlign: "justify",
            color: "#000000",
            textDecoration: "none",
          }}
        >
          +375{" "}
          <strong style={{ fontFamily: `"Segoe UI Bold", Arial, sans-serif` }}>
            29 200-74-10
          </strong>{" "}
          моб
        </a>
      </div>
      <a
        href="https://drive.google.com/file/d/1M8ttAtyCn8qHtX5s6gBf7pEMue4wWa3l/view?usp=sharing"
        className={styles.button}
      >
        PDF-каталог
      </a>
      <div className={styles["wrapper_mobileHeader"]}>
        <div className={styles["wrapper_mobileHeader_text"]}>
          <span className={styles["wrapper_mobileHeader_text_top"]}>
            Медисонт
          </span>
          <p className={styles["wrapper_mobileHeader_text_bottom"]}>
            Типография | Издательство
          </p>
        </div>
        <div>
          <Hamburger color="#ffffff" />
        </div>
      </div>
      <div className={styles.wrapper_mobileMenu}></div>
    </section>
  );
};
