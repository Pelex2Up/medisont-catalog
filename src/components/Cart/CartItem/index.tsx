import { FC } from "react";
import { Item, useCart } from "react-use-cart";
import styles from "./cartItem.module.scss";
import { generatePath } from "react-router";
import { PathE } from "../../../enum/pathE";

export interface ICartItem {
  item: Item;
}

export const CartItem: FC<ICartItem> = ({ item }) => {
  const { updateItemQuantity } = useCart();

  return (
    <div className={styles.cartItem}>
      <a
        href={generatePath(PathE.DETAILS, {
          article: `${item.group_code.replace("/", "&")}=${item.id}`,
        })}
      >
        <img
          src={item.img}
          className={styles["cartItem_img"]}
          alt={item.picture}
        />
      </a>
      <a
        href={generatePath(PathE.DETAILS, {
          article: `${item.group_code.replace("/", "&")}=${item.id}`,
        })}
      >
        <div className={styles["cartItem_text"]}>
          <span className={styles["cartItem_text_name"]} title={item.name}>
            {item.name}
          </span>
          <span className={styles["cartItem_text_price"]}>
            {item.price} {item.currency}
          </span>
        </div>
      </a>
      <div className={styles["cartItem_count"]}>
        <button
          className={styles["cartItem_count_button"]}
          onClick={() => updateItemQuantity(item.id, Number(item.quantity) + 1)}
        >
          +
        </button>
        <span className={styles["cartItem_count_counter"]}>
          {item.quantity}
        </span>
        <button
          className={styles["cartItem_count_button"]}
          onClick={() => updateItemQuantity(item.id, Number(item.quantity) - 1)}
        >
          -
        </button>
      </div>
    </div>
  );
};
