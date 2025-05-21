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

interface ISearchFilters {
  category: CategoryT | IParent;
  updateUrl: (newParams: any) => Promise<void>;
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

  useEffect(() => {
    if (category) {
      const newState = category.params.map((item) => {
        return { name: item.name, value: "" };
      });
      if (newState) setFilters(newState);
    }
  }, [category]);

  const handleChange = (index: number, newValue: string) => {
    setFilters((prevFilters) => {
      if (prevFilters) {
        return prevFilters.map((filter, i) =>
          i === index ? { ...filter, value: newValue } : filter
        );
      } else return undefined;
    });
  };

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
          {!isMobile ?
            (open ? `Фильтры к разделу ${category.name}` : "Доступны фильтры"):'Фильтры'}
          <TuneIcon />
        </div>
        {open && (
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            {category.params.map((cat, index) => (
              <>
                <InputLabel
                  id="demo-simple-select-helper-label"
                  key={index + "_label"}
                >
                  {cat.name}
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={filters[index].value}
                  key={index + "_select"}
                  label="Age"
                  onChange={(event) => handleChange(index, event.target.value)}
                  MenuProps={MenuProps}
                >
                  <MenuItem value="">
                    <em>-</em>
                  </MenuItem>
                  {cat.values.map((val) => (
                    <MenuItem value={val} key={val + "_value"}>
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
