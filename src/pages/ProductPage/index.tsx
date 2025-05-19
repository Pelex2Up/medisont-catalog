import { FC, useEffect, useState } from "react";
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
} from "@mui/material";
import WestIcon from "@mui/icons-material/West";
import parse from "html-react-parser";
import { PathE } from "../../enum/pathE";
import { CategoryItem } from "../../components/categoryItem";
import { IParent } from "../CatalogPage";
import { CategoryT } from "../../api/apiTypes";

export const ProductPage: FC = () => {
  const { article } = useParams();
  const navigate = useNavigate();
  const [groupId, setGroupId] = useState<string>();
  const [itemId, setItemId] = useState<string>();
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [fetchData, { data: itemsData, isFetching }] =
    useLazyGetGroupDataQuery();
  const { data: categoriesData } = useGetCategoriesQuery();
  const [groupedCategories, setGroupedCategories] = useState<IParent[]>([]);

  const [slides, setSlides] = useState<ReactImageGalleryItem[]>();

  function buildParentCategories(categories: CategoryT[]): IParent[] {
    const parents = categories
      .filter((cat) => cat.parent === null || cat.main_tree === true)
      .sort((a, b) => a.priority - b.priority);

    return parents.map((parent) => ({
      id: parent.id,
      external_id: parent.external_id,
      name: parent.name,
      image: parent.image,
      product_count: parent.product_count,
      params: parent.params,
      childs: categories.filter(
        (child) => child.parent === parent.id && !child.main_tree
      ),
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
      if (index) {
        setSelectedIndex(index);
      }
      const images: ReactImageGalleryItem[] = itemsData.map((item) => {
        return { original: item.picture, thumbnail: item.img };
      });

      if (images) {
        setSlides(images);
      }
    }
  }, [itemsData, itemId]);

  const handleCategoryClick = (category: IParent | CategoryT | null) => {
    if (category) {
      navigate(generatePath(PathE.HOME + `?page=1&category=${category.id}`));
    }
  };

  if (!itemsData) {
    return <Loader />;
  }

  return (
    <>
      <button
        className={styles.backBtn}
        onClick={() => navigate(generatePath(PathE.HOME))}
      >
        <WestIcon /> Назад в каталог
      </button>
      <div className={styles.wrapper}>
        <div
          className={styles.wrapper_filters_categories}
          style={{ width: 300 }}
        >
          <span
            onClick={() => navigate(generatePath(PathE.HOME))}
            className={styles.allCatSelector}
          >
            Все категории
          </span>
          {groupedCategories.map((category) => (
            <CategoryItem
              key={category.id}
              category={category}
              onChange={handleCategoryClick}
              selected={categoriesData?.find(
                (cat) => itemsData[selectedIndex].category === String(cat.id)
              )}
            />
          ))}
        </div>
        <div className={styles.wrapper_leftSide}>
          {slides && (
            <ImageGallery
              additionalClass={styles.slider}
              showPlayButton={false}
              items={slides}
              startIndex={selectedIndex}
              onSlide={(index) => setSelectedIndex(index)}
            />
          )}
        </div>

        <div className={styles.wrapper_rightSide}>
          <span className={styles.wrapper_rightSide_title}>
            {itemsData[selectedIndex].name}
          </span>
          <span className={styles.wrapper_rightSide_brand}>
            Артикул: {itemsData[selectedIndex].vendor_code}
          </span>
          <span
            className={styles.wrapper_rightSide_price}
          >{`${itemsData[selectedIndex].price} ${itemsData[selectedIndex].currency}`}</span>
          {itemsData[selectedIndex].description && (
            <p className={styles.wrapper_rightSide_text}>
              {parse(itemsData[selectedIndex].description)}
            </p>
          )}
        </div>
      </div>
      <div className={styles.tech}>
        <TableContainer
          component={Paper}
          sx={{ marginLeft: "332px", width: "calc(100% - 332px)" }}
        >
          <Table aria-label="params">
            <TableHead>
              <TableRow>
                <TableCell>
                  <span className={styles.tech_title}>
                    Технические характеристики:{" "}
                  </span>
                </TableCell>
                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              {itemsData[selectedIndex].params.map(
                (param, index) =>
                  param.name !== "Картинки" &&
                  param.name !== "Макет товара" &&
                  param.name !== "Акции, Хиты, Новинки" &&
                  param.name !== "Артикул ТП" &&
                  param.name !== "Артикул" && (
                    <TableRow
                      key={index}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        {param.name}
                      </TableCell>
                      <TableCell align="left">{param.value}</TableCell>
                    </TableRow>
                  )
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};
