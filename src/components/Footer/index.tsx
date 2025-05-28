import { FC } from "react";
import logoImage from "./assets/image.png";
import styles from "./footer.module.scss";
import viberPNG from "./assets/viber.png";

export const Footer: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles["wrapper_upperBlock"]}>
        <div className={styles["wrapper_upperBlock_logoBlock"]}>
          <a href="https://medisont.by">
            <img
              className={styles["wrapper_upperBlock_logoBlock_logo"]}
              src={logoImage}
              alt={logoImage}
            />
          </a>
          <span className={styles["wrapper_upperBlock_logoBlock_text"]}>
            © ООО "МЕДИСОНТ"
            <br /> типография и издательство
          </span>
        </div>
        <div className={styles["wrapper_upperBlock_kontakty"]}>
          <span className={styles["wrapper_upperBlock_kontakty_upperText"]}>
            контакты
          </span>
          <div className={styles["wrapper_upperBlock_kontakty_lowerText"]}>
            +375 17{" "}
            <strong
              style={{ fontFamily: `"Segoe UI Bold", Arial, sans-serif` }}
            >
              300-00-93
            </strong>{" "}
            гор
            <br />
            многоканальный номер
            <br />
            <br />
            +375 33{" "}
            <strong
              style={{ fontFamily: `"Segoe UI Bold", Arial, sans-serif` }}
            >
              397-00-93
            </strong>{" "}
            моб
            <br />
            +375 29{" "}
            <strong
              style={{ fontFamily: `"Segoe UI Bold", Arial, sans-serif` }}
            >
              200-74-10
            </strong>{" "}
            моб
            <br />
            <br />
            <a href="mailto:zakaz@medisont.by">zakaz@medisont.by</a>
            <br />
          </div>
        </div>
        <div className={styles["wrapper_upperBlock_kontakty"]}>
          <span className={styles["wrapper_upperBlock_kontakty_upperText"]}>
            адрес
          </span>
          <div className={styles["wrapper_upperBlock_kontakty_lowerText"]}>
            г. Минск, <br />
            <a
              href="https://www.medisont.by/kontakty#map"
              className={styles.adressLink}
            >
              ул. Смолячкова, 9-113
              <br />
              <br />
            </a>
            <a href="https://g.page/Medisont/review?rc">
              <span style={{ color: "rgb(255, 255, 255)" }}>
                <strong
                  style={{ fontFamily: `"Segoe UI Bold", Arial, sans-serif` }}
                >
                  Оставьте отзыв
                </strong>{" "}
                <br />о нас в Google!
              </span>
            </a>
          </div>
        </div>
        <div className={styles["wrapper_upperBlock_kontakty"]}>
          <span className={styles["wrapper_upperBlock_kontakty_upperText"]}>
            меню
          </span>
          <div className={styles["wrapper_upperBlock_kontakty_lowerText"]}>
            <a href="https://medisont.by/">{`> Главная`}</a>
            <br />
            <a href="https://medisont.by/pechatnaja">{`> Печатаем`}</a>
            <br />
            <a href="https://medisont.by/izdatelstvo">{`> Издаем`}</a>
            <br />
            <a href="https://medisont.by/dizajn">{`> Создаём`}</a>
            <br />
            <a href="https://medisont.by/news">{`> Новости`}</a>
            <br />
            <a href="https://medisont.by/ustranjaem-oshybki-v-maketah">{`> Помощь`}</a>
            <br />
            <a href="https://medisont.by/o-nas">{`> О нас`}</a>
            <br />
            <a href="https://medisont.by/kontakty">{`> Контакты`}</a>
          </div>
        </div>
      </div>
      <div className={styles.line} />
      <div className={styles["wrapper_upperBlock"]}>
        <div className={styles["wrapper_upperBlock_kontakty"]}>
          <div className={styles["wrapper_upperBlock_kontakty_lowerText"]}>
            <a href="https://www.medisont.by/birdekeli">
              <strong style={{ fontFamily: `Segoe UI Bold` }}>Б</strong>ирдекели
            </a>
            <br />
            <a href="https://www.medisont.by/blanki">Бланки</a>
            <br />
            <a href="https://www.medisont.by/bloki-dlja-zapisej">
              Блоки для записей
            </a>
            <br />
            <a href="https://www.medisont.by/bloknity">Блокноты</a>
            <br />
            <a href="https://www.medisont.by/broshury">Брошюры</a>
            <br />
            <a href="https://www.medisont.by/buklety">Буклеты</a>
            <br />
            <a href="https://www.medisont.by/vizitki">
              <strong style={{ fontFamily: `Segoe UI Bold` }}>В</strong>изитки
            </a>
            <br />
            <a href="https://www.medisont.by/voblery">Воблеры</a>
            <br />
            <a href="https://www.medisont.by/diskontnye-karty">
              <strong style={{ fontFamily: `Segoe UI Bold` }}>Д</strong>
              исконтные карты
            </a>
            <br />
            <a href="https://www.medisont.by/ezhednevniki">
              <strong style={{ fontFamily: `Segoe UI Bold` }}>Е</strong>
              жедневники
            </a>
          </div>
        </div>
        <div className={styles["wrapper_upperBlock_kontakty"]}>
          <div className={styles["wrapper_upperBlock_kontakty_lowerText"]}>
            <a href="https://www.medisont.by/zhurnaly">
              <strong style={{ fontFamily: "Segoe UI Bold" }}>Ж</strong>урналы
            </a>
            <br />
            <a href="/kalendari-kvartalnye">
              <strong style={{ fontFamily: "Segoe UI Bold" }}>К</strong>алендари
              квартальные
            </a>
            <br />
            <a href="https://www.medisont.by/kalendary-nastennye">
              Календари настенные
            </a>
            <br />
            <a href="https://www.medisont.by/kalendary-domiki">
              Календари-домики
            </a>
            <br />
            <a href="https://www.medisont.by/kalendari-karmannye">
              Календари карманные
            </a>
            <br />
            <a href="https://www.medisont.by/kalendarnye-setki">
              Календарные сетки
            </a>
            <br />
            <a href="https://www.medisont.by/katalogi">Каталоги</a>
            <br />
            <a href="https://www.medisont.by/knigi">Книги</a>
            <br />
            <a href="https://www.medisont.by/korobki">Коробки</a>
            <br />
            <a href="https://www.medisont.by/konverty">Конверты</a>
          </div>
        </div>
        <div className={styles["wrapper_upperBlock_kontakty"]}>
          <div className={styles["wrapper_upperBlock_kontakty_lowerText"]}>
            <a href="https://www.medisont.by/kupony">Купоны</a>
            <br />
            <a href="https://www.medisont.by/listovki">
              <strong style={{ fontFamily: "Segoe UI Bold" }}>Л</strong>истовки
            </a>
            <br />
            <a href="https://www.medisont.by/magnity">
              <strong style={{ fontFamily: "Segoe UI Bold" }}>М</strong>агниты
            </a>
            <br />
            <a href="https://www.medisont.by/naklejki">
              <strong style={{ fontFamily: "Segoe UI Bold" }}>Н</strong>аклейки
            </a>
            <br />
            <a href="https://www.medisont.by/objavlenija">
              <strong style={{ fontFamily: "Segoe UI Bold" }}>О</strong>
              бъявления
            </a>
            <br />
            <a href="https://www.medisont.by/otkrytki">Открытки</a>
            <br />
            <a href="https://www.medisont.by/pakety">
              <strong style={{ fontFamily: "Segoe UI Bold" }}>П</strong>акеты
            </a>
            <br />
            <a href="https://www.medisont.by/papki">Папки</a>
            <br />
            <a href="https://www.medisont.by/plakaty">Плакаты</a>
            <br />
            <a href="https://www.medisont.by/planingi">Планинги</a>
          </div>
        </div>
        <div className={styles["wrapper_upperBlock_kontakty"]}>
          <div className={styles["wrapper_upperBlock_kontakty_lowerText"]}>
            <a href="https://www.medisont.by/priglashenija">Приглашения</a>
            <br />
            <a href="https://www.medisont.by/ruchki">
              <strong style={{ fontFamily: "Segoe UI Bold" }}>Р</strong>учки
            </a>
            <br />
            <a href="https://www.medisont.by/sertifikaty">
              <strong style={{ fontFamily: "Segoe UI Bold" }}>С</strong>
              ертификаты
            </a>
            <br />
            <a href="https://www.medisont.by/upakovka">
              <strong style={{ fontFamily: "Segoe UI Bold" }}>У</strong>паковка
            </a>
            <br />
            <a href="https://www.medisont.by/firmennye-blanki">
              <strong style={{ fontFamily: "Segoe UI Bold" }}>Ф</strong>ирменные
              бланки
            </a>
            <br />
            <a href="https://www.medisont.by/flaera">Флаеры</a>
            <br />
            <a href="https://www.medisont.by/flazhki">Флажки</a>
            <br />
            <a href="https://www.medisont.by/cenniki">
              <strong style={{ fontFamily: "Segoe UI Bold" }}>Ц</strong>енники
            </a>
            <br />
            <a href="https://www.medisont.by/etiketki">
              <strong style={{ fontFamily: "Segoe UI Bold" }}>Э</strong>тикетки
            </a>
            <br />
            <a href="https://www.medisont.by/jarlyki">
              <strong style={{ fontFamily: "Segoe UI Bold" }}>Я</strong>рлыки
            </a>
          </div>
        </div>
      </div>
      <div className={styles.wrapper_social}>
        <a
          href="https://m.me/medisont.minsk?ref=from_fbm_quickchatsite"
          target="_blank"
          rel="nofollow noopener"
          aria-label="facebook"
          style={{ width: "48px", height: "48px" }}
        >
          <svg
            role="presentation"
            width="48px"
            height="48px"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M50 100c27.6142 0 50-22.3858 50-50S77.6142 0 50 0 0 22.3858 0 50s22.3858 50 50 50Zm3.431-73.9854c-2.5161.0701-5.171.6758-7.0464 2.4577-1.5488 1.4326-2.329 3.5177-2.5044 5.602-.0534 1.4908-.0458 2.9855-.0382 4.4796.0058 1.1205.0115 2.2407-.0085 3.3587-.6888.005-1.3797.0036-2.0709.0021-.9218-.0019-1.8441-.0038-2.7626.0096 0 .8921.0013 1.7855.0026 2.6797.0026 1.791.0052 3.5853-.0026 5.3799.9185.0134 1.8409.0115 2.7627.0096.6912-.0015 1.382-.0029 2.0708.0021.0155 3.5565.0127 7.1128.0098 10.669-.0036 4.4452-.0072 8.8903.0252 13.3354 1.8903-.0134 3.7765-.0115 5.6633-.0095 1.4152.0014 2.8306.0028 4.2484-.0022.0117-4.0009.0088-7.9986.0058-11.9963-.0029-3.9979-.0058-7.9957.0059-11.9964.9533-.005 1.9067-.0036 2.86-.0021 1.2713.0019 2.5425.0038 3.8137-.0096.396-2.679.7335-5.3814.9198-8.0947-1.2576-.0058-2.5155-.0058-3.7734-.0058-1.2578 0-2.5157 0-3.7734-.0059 0-.4689-.0007-.9378-.0014-1.4066-.0022-1.4063-.0044-2.8123.0131-4.2188.198-1.0834 1.3158-1.9104 2.3992-1.8403h5.1476c.0117-2.8069.0117-5.602 0-8.4089-.6636 0-1.3273-.0007-1.9911-.0014-1.9915-.0022-3.9832-.0044-5.975.0131Z"
              fill="#ffffff"
            ></path>
          </svg>
        </a>
        <a
          href="https://vk.com/im?sel=-163540993"
          target="_blank"
          rel="nofollow noopener"
          aria-label="vk"
          style={{ width: "48px", height: "48px" }}
        >
          <svg
            role="presentation"
            width="48px"
            height="48px"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M50 100c27.614 0 50-22.386 50-50S77.614 0 50 0 0 22.386 0 50s22.386 50 50 50ZM25 34c.406 19.488 10.15 31.2 27.233 31.2h.968V54.05c6.278.625 11.024 5.216 12.93 11.15H75c-2.436-8.87-8.838-13.773-12.836-15.647C66.162 47.242 71.783 41.62 73.126 34h-8.058c-1.749 6.184-6.932 11.805-11.867 12.336V34h-8.057v21.611C40.147 54.362 33.838 48.304 33.556 34H25Z"
              fill="#ffffff"
            ></path>
          </svg>
        </a>
        <a
          href="https://www.instagram.com/medisont.minsk"
          target="_blank"
          rel="nofollow noopener"
          aria-label="instagram"
          style={{ width: "48px", height: "48px" }}
        >
          <svg
            role="presentation"
            width="48px"
            height="48px"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100ZM25 39.3918C25 31.4558 31.4566 25 39.3918 25H60.6082C68.5442 25 75 31.4566 75 39.3918V60.8028C75 68.738 68.5442 75.1946 60.6082 75.1946H39.3918C31.4558 75.1946 25 68.738 25 60.8028V39.3918ZM36.9883 50.0054C36.9883 42.8847 42.8438 37.0922 50.0397 37.0922C57.2356 37.0922 63.0911 42.8847 63.0911 50.0054C63.0911 57.1252 57.2356 62.9177 50.0397 62.9177C42.843 62.9177 36.9883 57.1252 36.9883 50.0054ZM41.7422 50.0054C41.7422 54.5033 45.4641 58.1638 50.0397 58.1638C54.6153 58.1638 58.3372 54.5041 58.3372 50.0054C58.3372 45.5066 54.6145 41.8469 50.0397 41.8469C45.4641 41.8469 41.7422 45.5066 41.7422 50.0054ZM63.3248 39.6355C65.0208 39.6355 66.3956 38.2606 66.3956 36.5646C66.3956 34.8687 65.0208 33.4938 63.3248 33.4938C61.6288 33.4938 60.2539 34.8687 60.2539 36.5646C60.2539 38.2606 61.6288 39.6355 63.3248 39.6355Z"
              fill="#ffffff"
            ></path>
          </svg>
        </a>
        <a
          href="https://www.youtube.com/channel/UCXBzWiK6XQP27Z67Bhjd-EA/videos?view_as=subscriber"
          target="_blank"
          rel="nofollow noopener"
          aria-label="youtube"
          style={{ width: "48px", height: "48px" }}
        >
          <svg
            role="presentation"
            width="48px"
            height="48px"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M50 100c27.614 0 50-22.386 50-50S77.614 0 50 0 0 22.386 0 50s22.386 50 50 50Zm17.9-67.374c3.838.346 6 2.695 6.474 6.438.332 2.612.626 6.352.626 10.375 0 7.064-.626 11.148-.626 11.148-.588 3.728-2.39 5.752-6.18 6.18-4.235.48-13.76.7-17.992.7-4.38 0-13.237-.184-17.66-.552-3.8-.317-6.394-2.44-6.916-6.218-.38-2.752-.626-6.022-.626-11.222 0-5.788.209-8.238.7-10.853.699-3.732 2.48-5.54 6.548-5.96C36.516 32.221 40.55 32 49.577 32c4.413 0 13.927.228 18.322.626Zm-23.216 9.761v14.374L58.37 49.5l-13.686-7.114Z"
              fill="#ffffff"
            ></path>
          </svg>
        </a>
        <a
          href="https://t.me/Medisont_bot"
          target="_blank"
          rel="nofollow noopener"
          aria-label="telegram"
          style={{ width: "48px", height: "48px" }}
        >
          <svg
            role="presentation"
            width="48px"
            height="48px"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M50 100c27.614 0 50-22.386 50-50S77.614 0 50 0 0 22.386 0 50s22.386 50 50 50Zm21.977-68.056c.386-4.38-4.24-2.576-4.24-2.576-3.415 1.414-6.937 2.85-10.497 4.302-11.04 4.503-22.444 9.155-32.159 13.734-5.268 1.932-2.184 3.864-2.184 3.864l8.351 2.577c3.855 1.16 5.91-.129 5.91-.129l17.988-12.238c6.424-4.38 4.882-.773 3.34.773l-13.49 12.882c-2.056 1.804-1.028 3.35-.129 4.123 2.55 2.249 8.82 6.364 11.557 8.16.712.467 1.185.778 1.292.858.642.515 4.111 2.834 6.424 2.319 2.313-.516 2.57-3.479 2.57-3.479l3.083-20.226c.462-3.511.993-6.886 1.417-9.582.4-2.546.705-4.485.767-5.362Z"
              fill="#ffffff"
            ></path>
          </svg>
        </a>
        <a
          href="viber://business/chat?uri=dxsaxruzd3dyon0b6jzoq3shkqjs"
          target="_blank"
          rel="nofollow"
          aria-label="Viber"
          title="Viber"
          style={{ width: "48px", height: "48px" }}
        >
          <img
            src={viberPNG}
            alt="website icon"
            style={{
              width: "48px",
              height: "48px",
              verticalAlign: "baseline",
              objectFit: "contain",
              objectPosition: "center",
            }}
          />
        </a>
      </div>
      <div className={styles.wrapper_feedback}>
        <a
          href="https://g.page/Medisont/review?rc"
          rel="noopener"
          target="_blank"
        >
          <div className={styles.wrapper_feedback_icon}>
            <svg
              role="presentation"
              width="30px"
              height="30px"
              viewBox="0 0 30 30"
            >
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g
                  className={styles.svg}
                  transform="translate(1.000000, 1.000000)"
                >
                  <circle cx="14.2" cy="14.1" r="14.1"></circle>
                  <path d="M12.1,19.9 L17.7,14.3 L12.1,8.7"></path>
                </g>
              </g>
            </svg>
          </div>
          <div className={styles.wrapper_feedback_text}>
            <span>Оставить отзыв о нас в Google!</span>
          </div>
        </a>
      </div>
    </div>
  );
};
