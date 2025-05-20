import { FC } from "react";
import { CategoryT } from "../../api/apiTypes";
import { IParent } from "../../pages/CatalogPage";
import styles from "./categoryImageItem.module.scss";
import blankImage from "../../assets/noImage.svg";

export interface ICategoryImageItem {
  onChange: (category: IParent | CategoryT | null) => void;
  category: IParent;
}

export const CategoryImageItem: FC<ICategoryImageItem> = ({
  category,
  onChange,
}) => {
  return (
    <div
      className={styles.wrapper}
      onClick={() => onChange(category)}
    >
      <div className={styles.wrapper_image}>
        <img
          className={styles.wrapper_image_bg}
          src={
            category.image
              ? import.meta.env.VITE_BASE_URL_HOST + category.image
              : blankImage
          }
          alt={category.name}
        />
      </div>
      <span className={styles.wrapper_name}>{category.name}</span>
    </div>
  );
};
