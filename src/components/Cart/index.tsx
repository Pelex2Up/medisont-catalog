import { FC, useEffect, useState } from "react";
import styles from "./cart.module.scss";
import { useCart } from "react-use-cart";
import {
  Box,
  FormControl,
  FormHelperText,
  Modal,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { CartItem } from "./CartItem";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { MuiTelInput } from "mui-tel-input";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto",
  bgcolor: "background.paper",
  // border: "2px solid #000",
  boxShadow: 24,
  borderRadius: "10px",
  p: 4,
  overflowY: "scroll",
  maxHeight: "75dvh",
  maxWidth: '95vw'
};

export const Cart: FC = () => {
  const { items } = useCart();
  const [open, setOpen] = useState<boolean>(false);
  const [openOrder, setOpenOrder] = useState<boolean>(false);
  const isMobile = useMediaQuery("(max-width:1200px)");
  const [totalPrice, setTotalPrice] = useState<number>();
  const [phone, setPhone] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleChange = (newValue: string) => {
    setPhone(newValue);
  };

  const createOrder = () => {
    setOpen(false);
    setOpenOrder(true);
  };

  useEffect(() => {
    if (items.length) {
      let price: number = 0;
      items.map((item) => (price += item.price * Number(item.quantity)));
      if (price !== 0) {
        setTotalPrice(price);
      }
    }
  }, [items]);

  return (
    <>
      <button className={styles.cartWrapper} onClick={() => setOpen(true)}>
        {isMobile ? (
          <ShoppingCartCheckoutIcon />
        ) : (
          `Товаров в заказе: ${items.length}`
        )}
      </button>
      {open && (
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{ zIndex: 999 }}
        >
          <Box sx={style}>
            <div style={{ width: "100%", textAlign: "right" }}>
              <button
                className={styles.btnClose}
                onClick={() => setOpen(false)}
                title="Закрыть"
              >
                &#x2715;
              </button>
            </div>
            {/* <img src={phoneImg} alt={phoneImg} style={{ width: "100%" }} /> */}
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{
                color: "#111",
                fontSize: "24px",
                fontWeight: "600",
                textAlign: "center",
                padding: "1rem 1rem 0",
                lineHeight: "26px",
                fontFamily: "'Segoe UI Semibold', sans-serif",
                minWidth: "250px",
              }}
            >
              {items.length > 0
                ? "Ваш заказ"
                : "В корзине пока пусто... Добавьте товары в корзину"}
            </Typography>
            <br />
            {items.map((item, index) => (
              <CartItem item={item} key={index} />
            ))}
            {items.length > 0 && (
              <button
                className={styles.btnOrder}
                disabled={items.length < 1}
                onClick={createOrder}
              >
                Заказать
              </button>
            )}
          </Box>
        </Modal>
      )}
      {openOrder && (
        <Modal
          open={openOrder}
          onClose={() => setOpenOrder(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{ zIndex: 999 }}
        >
          <Box sx={style}>
            <div style={{ width: "100%", textAlign: "right" }}>
              <button
                className={styles.btnClose}
                onClick={() => setOpenOrder(false)}
                title="Закрыть"
              >
                &#x2715;
              </button>
            </div>
            {/* <img src={phoneImg} alt={phoneImg} style={{ width: "100%" }} /> */}
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{
                color: "#111",
                fontSize: "24px",
                fontWeight: "600",
                textAlign: "center",
                padding: "1rem 1rem 0",
                lineHeight: "26px",
                fontFamily: "'Segoe UI Semibold', sans-serif",
                minWidth: "250px",
              }}
            >
              Оформление заказа
            </Typography>
            <br />
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h4"
              sx={{
                color: "#111",
                fontSize: "18px",
                fontWeight: "600",
                textAlign: "left",
                padding: "1rem 1rem 0",
                lineHeight: "22px",
                fontFamily: "'Segoe UI Semibold', sans-serif",
                // minWidth: "250px",
              }}
            >
              Информация о заказе:
            </Typography>
            <div
              style={{
                width: "100%",
                height: "1px",
                backgroundColor: "grey",
                margin: "10px auto",
              }}
            />
            {items.map((item, index) => (
              <div className={styles.orderInfo} key={"order_" + item.name}>
                <span className={styles["orderInfo_itemName"]}>
                  {index + 1}. {item.name}{" "}
                  <strong style={{ fontFamily: `'Segoe UI Bold', sans-serif` }}>
                    ({item.price} {item.currency})
                  </strong>
                </span>
                <span>x{item.quantity}</span>
              </div>
            ))}
            <span
              style={{
                fontFamily: `'Segoe UI Bold', sans-serif`,
                padding: "0 1rem",
              }}
            >
              Итого к оплате: {totalPrice} BYN
            </span>
            <div
              style={{
                width: "100%",
                height: "1px",
                backgroundColor: "grey",
                margin: "10px auto",
              }}
            />
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h4"
              sx={{
                color: "#111",
                fontSize: "18px",
                fontWeight: "600",
                textAlign: "left",
                padding: "1rem 1rem 0",
                lineHeight: "22px",
                fontFamily: "'Segoe UI Semibold', sans-serif",
                // minWidth: "250px",
              }}
            >
              Ваши реквизиты:
            </Typography>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <FormControl sx={{ mt: "1rem" }}>
                <TextField
                  id="name"
                  name="name"
                  aria-describedby="name-helper-text"
                  variant="outlined"
                  label={"ФИО"}
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </FormControl>
              <FormControl sx={{ mt: "1rem" }}>
                <TextField
                  id="email"
                  aria-describedby="email-helper-text"
                  variant="outlined"
                  label={"Электронная почта"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <FormHelperText id="email-helper-text">
                  Ваши данные в безопасности — мы никогда не передаём ваш email
                  третьим лицам.
                </FormHelperText>
              </FormControl>
              <FormControl sx={{ mt: "1rem" }}>
                <MuiTelInput
                  id="phone"
                  value={phone}
                  onChange={handleChange}
                  langOfCountryName="ru"
                  onlyCountries={["BY", "RU"]}
                  variant="outlined"
                  label={"Номер телефона"}
                  aria-describedby="phone-helper-text"
                />
                <FormHelperText id="phone-helper-text">
                  Номер телефона будет использован только для связи по Вашему
                  заказу.
                </FormHelperText>
              </FormControl>
              {items.length > 0 && (
                <button
                  className={styles.btnOrder}
                  style={{ marginTop: "1rem" }}
                >
                  Отправить заявку
                </button>
              )}
            </div>
          </Box>
        </Modal>
      )}
    </>
  );
};
