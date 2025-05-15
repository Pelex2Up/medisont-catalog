import { FC } from "react";
import styles from "./upperFooterBlock.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Grid, Autoplay } from "swiper/modules";
import "./swiperstyles.css";
import "swiper/swiper-bundle.css";
import { logoArray } from "./assets";

export const UpperFooterBlock: FC = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles["wrapper_title"]}>Нам доверяют</h2>
      <div className={styles.wrapper_swiperBlock}>
        <Swiper
          slidesPerView={1}
          modules={[Navigation, Grid, Autoplay]}
          navigation={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          style={{ zIndex: 3, background: "#ffffff", maxWidth: "1400px" }}
        >
          {logoArray.map((item, index) => (
            <SwiperSlide
              key={index}
              className={styles.slide}
              style={{
                display: "flex",
                gap: "59px",
                alignItems: "center",
              }}
              data-swiper-autoplay="2000"
            >
              <img
                className={styles.slide_img}
                src={item.image1}
                alt={item.image1}
              />
              <img
                className={styles.slide_img}
                src={item.image2}
                alt={item.image2}
              />
              <img
                className={styles.slide_img}
                src={item.image3}
                alt={item.image3}
              />
              <img
                className={styles.slide_img}
                src={item.image4}
                alt={item.image4}
              />
              <img
                className={styles.slide_img}
                src={item.image5}
                alt={item.image5}
              />
              <img
                className={styles.slide_img}
                src={item.image6}
                alt={item.image6}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
