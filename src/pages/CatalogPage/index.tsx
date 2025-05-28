/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useCallback, useEffect, useState } from "react";
import {
  useGetCatalogDataMutation,
  useGetCategoriesQuery,
  useGetPriceRangeQuery,
} from "../../api/catalogService";
import styles from "./catalogPage.module.scss";
import { CatalogItem } from "../../components/catalogItem";
import { Pagination } from "../../components/pagination";
import { usePagination } from "../../customHooks/usePagination";
import Slider from "@mui/material/Slider";
import { CatalogResponseT, CategoryT } from "../../api/apiTypes";
import { SkeletonCatalogItem } from "../../components/sceleton/catalogItemsSceleton";
import { CategoryItem } from "../../components/categoryItem";
import { Checkbox } from "@mui/material";
import { useLocation, useSearchParams } from "react-router";
import { debounce } from "lodash";
import { CategoryImageItem } from "../../components/categoryImageItem";
import { SearchFilters } from "../../components/SearchFilters";

export interface IParent {
  main_tree: boolean;
  id: number;
  external_id: string;
  name: string;
  childs: CategoryT[];
  image: string;
  product_count: number;
  params: {
    name: string;
    values: string[];
  }[];
}

export const CatalogPage: FC = () => {
  const location = useLocation();
  const { data: priceData } = useGetPriceRangeQuery();
  const [searchParams, setSearchParams] = useSearchParams(location.search);
  const [currentPage, setPage] = useState<number>(1);
  const [priceValue, setPriceValue] = useState<number[]>();
  const [selectedCategory, setSelectedCategory] = useState<
    CategoryT | IParent
  >();
  const [checked, setChecked] = useState<boolean>(false);
  const [getPageData, { data, isLoading: isFetching }] =
    useGetCatalogDataMutation();
  const [catalogData, setCatalogData] = useState<
    CatalogResponseT | undefined
  >();
  const { data: categoriesData, isFetching: isFetchingCategories } =
    useGetCategoriesQuery();
  const { page, onPageChange, paginationRange } = usePagination({
    totalCount: catalogData?.count as number,
    currentPage: currentPage,
  });
  const [groupedCategories, setGroupedCategories] = useState<IParent[]>([]);
  const [priceRange, setPriceRange] = useState<{ min: number; max: number }>();
  const permittedParams = ["page", "price_min", "price_max", "category"];

  const updateUrl = (newParams: any) => {
    const currentParams = Object.fromEntries(searchParams);
    const updatedParams = { ...currentParams, ...newParams };
    const filteredParams = filterObjectByValues(updatedParams);
    setSearchParams(filteredParams);
    debouncedUpdateData(`?${new URLSearchParams(filteredParams).toString()}`);
  };

  const debouncedUpdateData = useCallback(
    debounce(
      (params: string) =>
        getPageData(params)
          .unwrap()
          .then((data) => setCatalogData(data)),
      500
    ),
    [getPageData]
  );

  const getPageDataMemo = useCallback(
    (params: string) => getPageData(params).unwrap(),
    [getPageData]
  );

  const handleChange = (event: Event, newValue: number[]) => {
    event.preventDefault();
    onPageChange(1);
    setPriceValue(newValue);
    updateUrl({
      price_min: newValue[0],
      price_max: newValue[1],
      page: 1,
    });
  };

  function filterObjectByValues(obj: Record<string, any>): Record<string, any> {
    return Object.fromEntries(
      Object.entries(obj).filter(([_, value]) => String(value).length > 0)
    );
  }

  // Отделяем родительские категории
  function buildParentCategories(categories: CategoryT[]): IParent[] {
    const parents = categories
      .filter((cat) => cat.parent === null || cat.main_tree === true)
      .sort((a, b) => a.priority - b.priority);

    return parents.map((parent) => ({
      id: parent.id,
      external_id: parent.external_id,
      name: parent.name,
      main_tree: parent.main_tree ?? false,
      image: parent.image,
      childs: categories.filter(
        (child) => child.parent === parent.id && !child.main_tree
      ),
      params: parent.params,
      product_count: parent.product_count,
    }));
  }

  useEffect(() => {
    if (categoriesData) {
      const groupedCat = buildParentCategories(categoriesData);
      if (groupedCat.length > 0) {
        setGroupedCategories(groupedCat);
      }
    }
  }, [categoriesData]);

  useEffect(() => {
    if (searchParams && searchParams.get("page")) {
      onPageChange(Number(searchParams.get("page")));
      setPage(Number(searchParams.get("page")));
    }
  }, [searchParams]);

  useEffect(() => {
    if (!data && !isFetching && searchParams && location && selectedCategory) {
      getPageDataMemo(`?${searchParams}`).then((data) => setCatalogData(data));
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [isFetching, data, searchParams, selectedCategory]);

  useEffect(() => {
    const categoryId = searchParams.get("category");
    if (categoryId && categoriesData && !selectedCategory) {
      const selectedCat = categoriesData.find(
        (category) => String(category.id) === categoryId
      );
      if (selectedCat) {
        setSelectedCategory(selectedCat);
      }
    }
  }, [searchParams, categoriesData]);

  useEffect(() => {
    if (priceData) {
      setPriceRange({
        min: priceData.price.price_min_value,
        max: priceData.price.price_max_value,
      });
      setPriceValue([
        priceData.price.price_min_value,
        priceData.price.price_max_value,
      ]);
    }
  }, [priceData]);

  const handleCategoryClick = (category: IParent | CategoryT | null) => {
    if (category) {
      onPageChange(1);
      setSelectedCategory(category);
      const newParams = Object.fromEntries(searchParams);
      newParams["category"] = String(category.id);
      newParams["page"] = String(1);
      const clearedParams = Object.fromEntries(
        Object.entries(newParams).map(([key, value]) =>
          permittedParams.includes(key) ? [key, value] : [key, ""]
        )
      );
      updateUrl(clearedParams);
    } else {
      setSelectedCategory(undefined);
      onPageChange(1);
      setCatalogData(undefined);
      setSearchParams((prev) => {
        const newParamsObj = Object.fromEntries(prev);
        const clearedParams = Object.fromEntries(
          Object.entries(newParamsObj).map(([key, value]) =>
            permittedParams.includes(key) ? [key, value] : [key, ""]
          )
        );
        const filteredParams = filterObjectByValues(clearedParams);
        const newParams = new URLSearchParams(filteredParams);
        newParams.set("page", "1");
        newParams.delete("category");
        newParams.delete("price_min");
        newParams.delete("price_max");
        return newParams;
      });
    }
  };

  const handlePageChange = (page: number) => {
    if (page) {
      setPage(page);
      onPageChange(page);
      updateUrl({ page: page });
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleCheck = () => {
    setChecked(!checked);
    if (!checked) {
      updateUrl({ available: !checked });
    } else {
      searchParams.delete("available");
      updateUrl(searchParams);
    }
  };

  useEffect(() => {
    if (priceRange && selectedCategory) {
      setPriceValue((prevPriceValue) => {
        if (prevPriceValue) {
          const newMin = Math.max(priceRange.min, prevPriceValue[0]);
          const newMax = Math.min(priceRange.max, prevPriceValue[1]);

          // Проверяем, изменения произошли
          if (newMin !== prevPriceValue[0] || newMax !== prevPriceValue[1]) {
            return [newMin, newMax];
          }
        }
        return prevPriceValue; // Возвращаем старое значение, если изменений не произошло
      });
    }
  }, [priceRange]);

  useEffect(() => {
    if (priceValue && priceValue[0] && priceValue[1] && selectedCategory) {
      setSearchParams((prev) => {
        const newParams = new URLSearchParams(prev);
        newParams.set("price_min", String(priceValue[0]));
        newParams.set("price_max", String(priceValue[1]));
        return newParams;
      });
    }
  }, [priceValue, setSearchParams]);

  return (
    <div style={{ position: "relative", marginBottom: "4rem" }}>
      {selectedCategory && (
        <SearchFilters category={selectedCategory} updateUrl={updateUrl} />
      )}
      <div className={styles.wrapper}>
        <div className={styles.wrapper_filters}>
          <div className={styles.wrapper_filters_categories}>
            <span
              onClick={() => {
                handleCategoryClick(null);
              }}
              className={`${!selectedCategory ? styles.selected : ""} ${
                styles.allCatSelector
              }`}
            >
              Все категории
            </span>
            {groupedCategories &&
              groupedCategories.map((category) =>
                category.product_count > 0 ? (
                  <CategoryItem
                    key={category.id}
                    category={category}
                    onChange={handleCategoryClick}
                    selected={selectedCategory}
                  />
                ) : null
              )}
          </div>
          {priceRange && priceValue && (
            <div className={styles.wrapper_filters_priceSlider}>
              <span className={styles.wrapper_filters_priceSlider_title}>
                Цена (BYN)
              </span>
              <Slider
                getAriaLabel={() => "Price range"}
                value={priceValue}
                onChange={handleChange}
                valueLabelDisplay="auto"
                min={priceRange.min}
                max={priceRange.max}
                color="primary"
                sx={{ maxWidth: "300px", marginLeft: "10px", width: "92%" }}
              />
              <div className={styles.wrapper_filters_priceSlider_range}>
                <input
                  type="text"
                  className={styles.wrapper_filters_priceSlider_range_input}
                  value={priceValue[0]}
                  onChange={(event) =>
                    setPriceValue([Number(event.target.value), priceValue[1]])
                  }
                />
                -
                <input
                  type="text"
                  className={styles.wrapper_filters_priceSlider_range_input}
                  value={priceValue[1]}
                  onChange={(event) =>
                    setPriceValue([priceValue[0], Number(event.target.value)])
                  }
                />
              </div>
            </div>
          )}
          <div className={styles.wrapper_filters_available}>
            <span className={styles.wrapper_filters_available_title}>
              Доступные товары
            </span>
            <div className={styles.wrapper_filters_available_box}>
              <Checkbox checked={checked} onChange={handleCheck} /> Только
              товары в наличии
            </div>
          </div>
        </div>
        {isFetching || isFetchingCategories ? (
          <div className={styles.wrapper_catalog}>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
              <SkeletonCatalogItem key={index} />
            ))}
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "4rem",
              width: "100%",
            }}
          >
            {selectedCategory && catalogData ? (
              <div className={styles.wrapper_catalog}>
                {catalogData.results.length ? (
                  catalogData.results.map((item) => (
                    <CatalogItem product={item} key={item.group_code} />
                  ))
                ) : (
                  <span style={{ fontSize: "20px", margin: "0 auto" }}>
                    Не найдено подходящих товаров...
                  </span>
                )}
              </div>
            ) : (
              <div className={styles.wrapper_catalog}>
                {groupedCategories.map((category) =>
                  category.product_count > 0 ? (
                    <CategoryImageItem
                      key={category.id}
                      category={category}
                      onChange={handleCategoryClick}
                    />
                  ) : null
                )}
              </div>
            )}
            {selectedCategory && (
              <Pagination
                currentPage={page}
                paginationRange={paginationRange}
                onPageChange={handlePageChange}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};
