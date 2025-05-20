import { FC, useState } from "react";
import styles from "./header.module.scss";
import logo from "./assets/image.png";
import { about, printing, realise } from "./config";
import Hamburger from "hamburger-react";
import { Box, Modal, Typography } from "@mui/material";
import phoneImg from "./assets/modal.png";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  bgcolor: "background.paper",
  // border: "2px solid #000",
  boxShadow: 24,
};

export const Header: FC = () => {
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
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
          <Hamburger color="#ffffff" onToggle={setOpen} />
        </div>
      </div>
      {open && (
        <div className={styles.wrapper_mobileMenu}>
          <img
            src={logo}
            alt={logo}
            className={styles["wrapper_mobileMenu_logo"]}
          />
          <div className={styles.wrapper_mobileMenu_links}>
            <a
              href="https://medisont.by/pechatnaja"
              // href="https://medisont.by/#submenu:catalog"
              className={styles["wrapper_mobileMenu_links_navElement"]}
            >
              Печатаем
              {/* <ul
                role="menu"
                className={
                  styles.wrapper_mobileMenu_links_navElement_dropDownMenu
                }
              >
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
              </ul> */}
            </a>
            <span
              // href="https://medisont.by/#submenu:izdatelstvo"
              className={styles["wrapper_mobileMenu_links_navElement"]}
            >
              Издаём
              {/* <ul
                role="menu"
                className={styles.wrapper_navBlock_navElement_dropDownMenu}
              >
                <div
                  className={
                    styles.wrapper_navBlock_navElement_dropDownMenu_corner
                  }
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
              </ul> */}
            </span>
            <a
              href="https://medisont.by/suvenirnaja"
              className={styles["wrapper_mobileMenu_links_navElement"]}
            >
              Брендируем
            </a>
            <a
              href="https://medisont.by/price"
              className={styles["wrapper_mobileMenu_links_navElement"]}
            >
              Цены
            </a>
            <span
              // href="https://medisont.by/#submenu:onas"
              className={styles["wrapper_mobileMenu_links_navElement"]}
            >
              О нас
              {/* <ul
                role="menu"
                className={styles.wrapper_navBlock_navElement_dropDownMenu}
              >
                <div
                  className={
                    styles.wrapper_navBlock_navElement_dropDownMenu_corner
                  }
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
              </ul> */}
            </span>
            <a
              href="https://medisont.by/kontakty"
              className={styles["wrapper_mobileMenu_links_navElement"]}
              style={{ padding: 0 }}
            >
              Контакты
            </a>
          </div>
          <button onClick={() => setOpenModal(true)} className={styles.phoneButton}>Позвонить</button>
          <Modal
            open={openModal}
            onClose={() => setOpenModal(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{ zIndex: 99999999999 }}
          >
            <Box sx={style}>
              <img src={phoneImg} alt={phoneImg} style={{ width: "100%" }} />
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                sx={{
                  color: "red",
                  fontSize: "24px",
                  fontWeight: "600",
                  textAlign: "center",
                  padding: '1rem 1rem 0',
                  lineHeight: '26px',
                  fontFamily: "'Segoe UI Semibold', sans-serif"
                }}
              >
                Нажмите на номер для вызова
              </Typography>
              <Typography
                id="modal-modal-description"
                sx={{
                  mt: 2,
                  padding: "0 2rem 15px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  // gap: '20px'
                }}
              >
                <a
                  href="tel:+375333970093"
                  style={{
                    fontSize: "12px",
                    width: "100%",
                    textAlign: "center",
                    color: "#000000",
                    textDecoration: "none",
                  }}
                >
                  +375{" "}
                  <strong
                    style={{ fontFamily: `"Segoe UI Bold", Arial, sans-serif` }}
                  >
                    33 397-00-93
                  </strong>{" "}
                  моб
                </a>
                <a
                  href="tel:+375292007410"
                  style={{
                    fontSize: "12px",
                    width: "100%",
                    textAlign: "center",
                    color: "#000000",
                    textDecoration: "none",
                  }}
                >
                  +375{" "}
                  <strong
                    style={{ fontFamily: `"Segoe UI Bold", Arial, sans-serif` }}
                  >
                    29 200-74-10
                  </strong>{" "}
                  моб
                </a>
              </Typography>
            </Box>
          </Modal>
        </div>
      )}
    </section>
  );
};
