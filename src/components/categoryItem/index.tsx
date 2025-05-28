import { FC, useEffect, useState } from "react";
import styles from "./categoryItem.module.scss";
import { CategoryT } from "../../api/apiTypes";
import { IParent } from "../../pages/CatalogPage";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export interface ICategoryItem {
  onChange: (category: IParent | CategoryT | null) => void;
  category: IParent;
  selected: CategoryT | IParent | undefined;
}

export const CategoryItem: FC<ICategoryItem> = ({
  category,
  onChange,
  selected,
}) => {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if (selected) {
      const selectedThis = category.childs.find(
        (child) => child.id === selected.id
      );
      if (selectedThis) {
        setOpen(true);
      }
    }
    if (category === selected) {
      setOpen(true);
    }
  }, [category, selected]);

  return (
    <div className={styles.box}>
      <span
        style={
          category.main_tree
            ? { fontFamily: '"Segoe UI Semibold", Arial, sans-serif' }
            : {}
        }
        className={`${
          selected && selected.id === category.id ? styles.selected : ""
        } ${styles.wrapper}`}
      >
        <span
          onClick={() => {
            if (category !== selected) {
              onChange(category);
            }
          }}
        >
          {category.name}
        </span>
        {category.childs.length ? (
          open ? (
            <button
              onClick={() => setOpen(!open)}
              style={{
                background: "transparent",
                margin: 0,
                padding: 0,
                border: "none",
                color: "currentcolor",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <KeyboardArrowUpIcon />
            </button>
          ) : (
            <button
              onClick={() => setOpen(!open)}
              style={{
                background: "transparent",
                margin: 0,
                padding: 0,
                border: "none",
                color: "currentcolor",
                display: "flex",
                alignItems: "flex-end",
                cursor: "pointer",
              }}
            >
              <KeyboardArrowDownIcon />
            </button>
          )
        ) : (
          ""
        )}
      </span>
      {open && category.childs.length > 0 && (
        <div className={styles.box_subcats}>
          {category.childs.map((child) =>
            child.product_count > 0 ? (
              <span
                onClick={() => onChange(child)}
                className={`${
                  selected && selected.id === child.id ? styles.selected : ""
                } ${styles.wrapper}`}
                key={child.external_id}
              >
                - {child.name}
              </span>
            ) : null
          )}
        </div>
      )}
    </div>
  );
};
