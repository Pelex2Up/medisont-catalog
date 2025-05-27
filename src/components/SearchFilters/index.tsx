/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useEffect, useState } from "react";
import styles from "./searchFilters.module.scss";
import { CategoryT } from "../../api/apiTypes";
import { IParent } from "../../pages/CatalogPage";
import TuneIcon from "@mui/icons-material/Tune";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  useMediaQuery,
} from "@mui/material";
import { useSearchParams } from "react-router";

interface ISearchFilters {
  category: CategoryT | IParent;
  updateUrl: (newParams: any) => void;
}

export interface IFilter {
  name: string;
  values: string[];
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export const SearchFilters: FC<ISearchFilters> = ({ category, updateUrl }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [filters, setFilters] = useState<{ name: string; value: string }[]>();
  const isMobile = useMediaQuery("(max-width:1200px)");
  const [params, setParams] = useSearchParams();

  const handleChange = (index: number, newValue: string) => {
    setFilters((prevFilters) => {
      if (!prevFilters) return undefined;

      const newFilters = prevFilters.map((filter, i) =>
        i === index ? { ...filter, value: newValue } : filter
      );

      // Вызываем updateUrl с обновленными значениями уже здесь
      const result = Object.fromEntries(
        newFilters.map(({ name, value }) => [name, value])
      );
      updateUrl({ ...Object.fromEntries(params), ...result });

      return newFilters;
    });
  };

  useEffect(() => {
    if (category) {
      const newState = category.params.map((item) => {
        return { name: item.name, value: "" };
      });
      if (newState) setFilters(newState);
    }
  }, [category]);

  if (category.params.length === 0 || !filters) {
    return null;
  }

  return (
    <>
      <div className={`${styles.searchFilters} ${open && styles.open}`}>
        <div
          className={styles.searchFilters_btn}
          onClick={() => setOpen(!open)}
        >
          {!isMobile
            ? open
              ? `Фильтры к разделу ${category.name}`
              : "Доступны фильтры"
            : "Фильтры"}
          <TuneIcon />
        </div>
        {open && (
          <FormControl sx={{ minWidth: 120 }} fullWidth>
            {category.params.map((cat, index) => (
              <>
                <InputLabel id={cat.name + "_label"} key={index + "_label"}>
                  {cat.name}
                </InputLabel>
                <Select
                  labelId={cat.name + "_label"}
                  id={cat.name + "_select"}
                  value={filters[index].value}
                  key={index + "_select"}
                  label={cat.name}
                  onChange={(event) => handleChange(index, event.target.value)}
                  MenuProps={MenuProps}
                >
                  <MenuItem value="" key={cat.name + "_zeroValue"}>
                    <em>-</em>
                  </MenuItem>
                  {cat.values.map((val, index) => (
                    <MenuItem value={val} key={val + index + "_value"}>
                      {val}
                    </MenuItem>
                  ))}
                </Select>
              </>
            ))}
          </FormControl>
        )}
      </div>
    </>
  );
};
