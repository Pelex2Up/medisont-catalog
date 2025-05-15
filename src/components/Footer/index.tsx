import { FC } from "react";
import logoImage from "./assets/image.png";
import styles from "./footer.module.scss";

export const Footer: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles["wrapper_upperBlock"]}>
        <div className={styles["wrapper_upperBlock_logoBlock"]}>
          <a href="https://medisont.by">
            <img
              className={styles["wrapper_upperBlock_logoBlock_logo"]}
              src={logoImage}
              alt={logoImage}
            />
          </a>
          <span className={styles["wrapper_upperBlock_logoBlock_text"]}>
            © ООО "МЕДИСОНТ"
            <br /> типография и издательство
          </span>
        </div>
        <div className={styles["wrapper_upperBlock_kontakty"]}>
          <span className={styles["wrapper_upperBlock_kontakty_upperText"]}>
            контакты
          </span>
          <div className={styles["wrapper_upperBlock_kontakty_lowerText"]}>
            +375 17{" "}
            <strong
              style={{ fontFamily: `"Segoe UI Bold", Arial, sans-serif` }}
            >
              300-00-93
            </strong>{" "}
            гор
            <br />
            многоканальный номер
            <br />
            <br />
            +375 33{" "}
            <strong
              style={{ fontFamily: `"Segoe UI Bold", Arial, sans-serif` }}
            >
              397-00-93
            </strong>{" "}
            моб
            <br />
            +375 29{" "}
            <strong
              style={{ fontFamily: `"Segoe UI Bold", Arial, sans-serif` }}
            >
              200-74-10
            </strong>{" "}
            моб
            <br />
            <br />
            <a href="mailto:zakaz@medisont.by">zakaz@medisont.by</a>
            <br />
          </div>
        </div>
        <div className={styles["wrapper_upperBlock_kontakty"]}>
          <span className={styles["wrapper_upperBlock_kontakty_upperText"]}>
            адрес
          </span>
          <div className={styles["wrapper_upperBlock_kontakty_lowerText"]}>
            г. Минск, <br />
            <a
              href="https://www.medisont.by/kontakty#map"
              className={styles.adressLink}
            >
              ул. Смолячкова, 9-113
              <br />
              <br />
            </a>
            <a href="https://g.page/Medisont/review?rc">
              <span style={{ color: "rgb(255, 255, 255)" }}>
                <strong
                  style={{ fontFamily: `"Segoe UI Bold", Arial, sans-serif` }}
                >
                  Оставьте отзыв
                </strong>{" "}
                <br />о нас в Google!
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
