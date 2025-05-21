import { FC, useState } from "react";
import styles from "./cart.module.scss";
import { useCart } from "react-use-cart";
import { Box, Modal, Typography } from "@mui/material";
import { CartItem } from "./CartItem";

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
};

export const Cart: FC = () => {
  const { items } = useCart();
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <button className={styles.cartWrapper} onClick={() => setOpen(true)}>
        Товаров в корзине: {items.length}
      </button>
      {open && (
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{ zIndex: 99999999999 }}
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
                minWidth: '250px'
              }}
            >
              {items.length > 0
                ? "Корзина товаров"
                : "В корзине пока пусто... Добавьте товары в корзину"}
            </Typography>
            <br />
            {items.map((item, index) => (
              <CartItem item={item} key={index} />
            ))}
            {items.length > 0 && (
              <button className={styles.btnOrder}>Заказать</button>
            )}
          </Box>
        </Modal>
      )}
    </>
  );
};
