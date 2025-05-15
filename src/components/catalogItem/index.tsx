import { FC, useState } from "react";
import { GroupDataT } from "../../api/apiTypes";
import styles from "./catalogItem.module.scss";
import blankImage from "../../assets/noImage.svg";
import { generatePath, useNavigate } from "react-router";
import { PathE } from "../../enum/pathE";

interface ICatalogItem {
  product: GroupDataT;
}

export const CatalogItem: FC<ICatalogItem> = ({ product }) => {
  const [selectedItem, setSelectedItem] = useState<number>(0);
  const navigate = useNavigate();

  return (
    <div className={styles.productWrapper}>
      <div className={styles.productWrapper_image}>
        <img
          className={styles.productWrapper_image_bg}
          src={
            product.products[selectedItem].img
              ? import.meta.env.VITE_BASE_URL_HOST +
                product.products[selectedItem].img
              : blankImage
          }
          alt={product.products[selectedItem].name}
        />
        <div className={styles.productWrapper_image_colors}>
          {product.products.map((color, index) => (
            <img
              key={color.external_id}
              src={
                color.img
                  ? import.meta.env.VITE_BASE_URL_HOST + color.img
                  : blankImage
              }
              loading="lazy"
              style={
                selectedItem === index && color.img
                  ? { border: "1px solid #e62229" }
                  : !color.img
                  ? selectedItem === index
                    ? {
                        backgroundColor: "#ffffff",
                        border: "1px solid #e62229",
                      }
                    : { backgroundColor: "#ffffff" }
                  : {}
              }
              onClick={() => setSelectedItem(index)}
              className={styles.productWrapper_image_colors_item}
            />
          ))}
        </div>
      </div>
      <span
        onClick={() =>
          navigate(
            generatePath(PathE.DETAILS, {
              article: `${product.group_code.replace("/", "&")}=${
                product.products[selectedItem].id
              }`,
            })
          )
        }
        className={styles.productWrapper_name}
      >
        {product.products[selectedItem].name}
      </span>
      <span className={styles.productWrapper_price}>
        {product.products[selectedItem].price}{" "}
        {product.products[selectedItem].currency}
      </span>
    </div>
  );
};
