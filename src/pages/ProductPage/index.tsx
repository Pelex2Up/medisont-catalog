/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useEffect, useRef, useState } from "react";
import { generatePath, useNavigate, useParams } from "react-router";
import {
  useGetCategoriesQuery,
  useLazyGetGroupDataQuery,
} from "../../api/catalogService";
import styles from "./productPage.module.scss";
import { Loader } from "../../components/Loader";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useMediaQuery,
} from "@mui/material";
import parse from "html-react-parser";
import { PathE } from "../../enum/pathE";
import { CategoryItem } from "../../components/categoryItem";
import { IParent } from "../CatalogPage";
import { CategoryT } from "../../api/apiTypes";
import { useCart } from "react-use-cart";
import { Feedback } from "../../components/feedback";

export const ProductPage: FC = () => {
  const isMobile = useMediaQuery("(max-width:1200px)");
  const { addItem } = useCart();
  const { article } = useParams();
  const navigate = useNavigate();
  const [groupId, setGroupId] = useState<string>();
  const [itemId, setItemId] = useState<string>();
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [fetchData, { data: itemsData, isFetching }] =
    useLazyGetGroupDataQuery();
  const { data: categoriesData } = useGetCategoriesQuery();
  const [groupedCategories, setGroupedCategories] = useState<IParent[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<
    IParent | CategoryT
  >();
  const [itemDescription, setItemDescription] = useState<string>("");
  const galleryRef = useRef<any>(null);

  const [slides, setSlides] = useState<ReactImageGalleryItem[]>();

  const openFullScreen = () => {
    if (galleryRef.current) {
      galleryRef.current.fullScreen();
    }
  };

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
    if (article && article.length) {
      setGroupId(article.split("=")[0].replace("&", "/"));
      setItemId(article.split("=")[1]);
    }
  }, [article]);

  useEffect(() => {
    if (groupId && groupId.length && !isFetching && !itemsData) {
      fetchData(groupId);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [fetchData, groupId, isFetching, itemsData]);

  useEffect(() => {
    if (itemsData && itemId) {
      const index = itemsData.findIndex((item) => String(item.id) === itemId);
      const description = itemsData.find((item) => item.description.length > 0);

      if (description) {
        const cleanedText = description.description.replace(
          /<table[\s\S]*?<\/table>/gi,
          ""
        );
        setItemDescription(cleanedText);
      }
      if (index) {
        setSelectedIndex(index);
      }
      const images: ReactImageGalleryItem[] = itemsData.map((item) => {
        return { original: item.img, thumbnail: item.img };
      });

      if (images) {
        setSlides(images);
      }
    }
  }, [itemsData, itemId]);

  useEffect(() => {
    if (itemsData && categoriesData && !selectedCategory) {
      const selectedCat = categoriesData.find(
        (category) => category.id === Number(itemsData[selectedIndex].category)
      );

      if (selectedCat) {
        setSelectedCategory(selectedCat);
      }
    }
  }, [categoriesData, itemsData, selectedCategory, selectedIndex]);

  const handleCategoryClick = (category: IParent | CategoryT | null) => {
    if (category) {
      navigate(generatePath(PathE.HOME + `?page=1&category=${category.id}`));
    }
  };
  console.log(itemsData && itemsData[selectedIndex].params);

  if (!itemsData) {
    return <Loader />;
  }

  const renderMainImage = (item: ReactImageGalleryItem) => (
    <img
      src={item.original}
      alt={item.originalAlt}
      onClick={openFullScreen} // обработчик клика на картинку
      style={{
        cursor: "pointer",
        objectFit: "contain",
        width: "100%",
        maxWidth: "90vw",
        maxHeight: "88dvh",
      }}
    />
  );

  return (
    <div>
      {/* <button
        className={styles.backBtn}
        onClick={() => navigate(generatePath(PathE.HOME))}
      >
        <WestIcon /> Назад в каталог
      </button> */}
      <div className={styles.wrapper}>
        <div className={styles.wrapper_filters_categories}>
          <span
            onClick={() => navigate(generatePath(PathE.HOME))}
            className={styles.allCatSelector}
          >
            Все категории
          </span>
          {groupedCategories.map(
            (category) =>
              category.product_count > 0 && (
                <CategoryItem
                  key={category.external_id}
                  category={category}
                  onChange={handleCategoryClick}
                  selected={selectedCategory}
                />
              )
          )}
        </div>
        <div className={styles.wrapper_leftSide}>
          {slides && (
            <ImageGallery
              additionalClass={styles.slider}
              showPlayButton={false}
              items={slides}
              ref={galleryRef}
              startIndex={selectedIndex}
              renderItem={renderMainImage}
              onSlide={(index) => setSelectedIndex(index)}
            />
          )}
          {!isMobile && (
            <div className={styles.tech}>
              <TableContainer
                component={Paper}
                sx={
                  isMobile
                    ? {
                        width: "100%",
                        backgroundColor: "transparent",
                        boxShadow: "none",
                        mt: "2rem",
                      }
                    : {
                        // marginLeft: "332px",
                        width: "100%",
                        backgroundColor: "transparent",
                        boxShadow: "none",
                        mt: "2rem",
                      }
                }
              >
                <Table aria-label="params">
                  <TableHead>
                    <TableRow>
                      <TableCell
                        sx={{
                          p: "5px 10px",
                          fontFamily: '"Segoe UI Bold", sans-serif',
                          color: "#2b2b2b",
                        }}
                        colSpan={2}
                      >
                        <span className={styles.tech_title}>
                          Технические характеристики:{" "}
                        </span>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {itemsData[selectedIndex].params.map(
                      (param, index) =>
                        param.name !== "Картинки" &&
                        param.name !== "Макет товара" &&
                        param.name !== "Акции, Хиты, Новинки" &&
                        param.name !== "Артикул ТП" &&
                        param.name !== "Артикул" &&
                        param.name !== "Поставщик" &&
                        param.name !== "В наличии" &&
                        param.name !== "Бренд" &&
                        param.name !== "Тип нанесения" && (
                          <TableRow
                            key={index}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell
                              component="th"
                              scope="row"
                              width={"40%"}
                              sx={{
                                p: "5px 10px",
                                fontFamily: '"Segoe UI", sans-serif',
                                color: "#2b2b2b",
                              }}
                            >
                              {param.name}
                            </TableCell>
                            <TableCell
                              align="left"
                              sx={{
                                p: "5px 10px",
                                fontFamily: '"Segoe UI", sans-serif',
                                color: "#2b2b2b",
                              }}
                            >
                              {param.value}
                            </TableCell>
                          </TableRow>
                        )
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          )}
        </div>

        <div className={styles.wrapper_rightSide}>
          <span className={styles.wrapper_rightSide_title}>
            {itemsData[selectedIndex].name}
          </span>
          <span className={styles.wrapper_rightSide_brand}>
            Артикул: MSM{itemsData[selectedIndex].vendor_code} | В наличии:{" "}
            {itemsData[selectedIndex].params.find(
              (param) => param.name === "В наличии"
            )?.value ?? 0}
          </span>
          <span
            className={styles.wrapper_rightSide_brand}
            style={{ color: "#111" }}
          >
            <strong style={{ fontFamily: '"Segoe UI Bold", sans-serif' }}>
              Доступные типы нанесения:
            </strong>{" "}
            {itemsData[selectedIndex].params.find(
              (param) => param.name === "Тип нанесения"
            )?.value || "нет"}
          </span>
          <span
            className={styles.wrapper_rightSide_price}
          >{`${itemsData[selectedIndex].price} ${itemsData[selectedIndex].currency}`}</span>
          <button
            className={styles.addCart}
            onClick={() =>
              addItem(
                {
                  ...itemsData[selectedIndex],
                  id: String(itemsData[selectedIndex].id),
                  price: Number(itemsData[selectedIndex].price),
                },
                1
              )
            }
          >
            Добавить в заказ
          </button>
          {/* {itemsData[selectedIndex].description && ( */}
          <div className={styles.wrapper_rightSide_text}>
            {/* {parse(itemsData[selectedIndex].description)} */}
            {parse(itemDescription)}
          </div>
          {/* )} */}
        </div>
        {isMobile && (
          <>
            <div></div>
            <div className={styles.tech}>
              <TableContainer
                component={Paper}
                sx={
                  isMobile
                    ? {
                        width: "100%",
                        backgroundColor: "transparent",
                        boxShadow: "none",
                      }
                    : {
                        // marginLeft: "332px",
                        width: "100%",
                        backgroundColor: "transparent",
                        boxShadow: "none",
                      }
                }
              >
                <Table aria-label="params">
                  <TableHead>
                    <TableRow>
                      <TableCell
                        sx={{
                          p: "5px 10px",
                          fontFamily: '"Segoe UI Bold", sans-serif',
                          color: "#2b2b2b",
                        }}
                        colSpan={2}
                      >
                        <span className={styles.tech_title}>
                          Технические характеристики:{" "}
                        </span>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {itemsData[selectedIndex].params.map(
                      (param, index) =>
                        param.name !== "Картинки" &&
                        param.name !== "Макет товара" &&
                        param.name !== "Акции, Хиты, Новинки" &&
                        param.name !== "Артикул ТП" &&
                        param.name !== "Артикул" &&
                        param.name !== "Поставщик" &&
                        param.name !== "В наличии" &&
                        param.name !== "Бренд" &&
                        param.name !== "Тип нанесения" && (
                          <TableRow
                            key={index}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell
                              component="th"
                              scope="row"
                              width={"40%"}
                              sx={{
                                p: "5px 10px",
                                fontFamily: '"Segoe UI", sans-serif',
                                color: "#2b2b2b",
                              }}
                            >
                              {param.name}
                            </TableCell>
                            <TableCell
                              align="left"
                              sx={{
                                p: "5px 10px",
                                fontFamily: '"Segoe UI", sans-serif',
                                color: "#2b2b2b",
                              }}
                            >
                              {param.value}
                            </TableCell>
                          </TableRow>
                        )
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
            <div></div>
          </>
        )}
      </div>
      <Feedback />
    </div>
  );
};
