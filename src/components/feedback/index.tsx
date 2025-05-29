import { FC } from "react";
import styles from "./feedback.module.scss";
import { FormControl, TextField, useMediaQuery } from "@mui/material";
import { MuiTelInput } from "mui-tel-input";

export const Feedback: FC = () => {
  const isMobile = useMediaQuery(`(max-width:1200px)`);

  return (
    <div className={styles.feedback}>
      <h2 className={styles["feedback_title"]}>
        <strong style={{ fontFamily: "'Segoe UI Bold', sans-serif" }}>
          Поможем разобраться
        </strong>{" "}
        в параметрах
      </h2>
      <h4 className={styles["feedback_subtitle"]}>
        просто закажите профессиональную консультацию
      </h4>
      <div className={styles.feedback_form}>
        <FormControl sx={isMobile ? { width: "90vw" } : { width: "450px" }}>
          <MuiTelInput
            id="phone"
            // value={phone}
            // onChange={handleChange}
            sx={{
              // Root class for the input field
              "& .MuiOutlinedInput-root": {
                color: "#000",
                fontFamily: "Segoe UI",
                fontWeight: "bold",
                // Class for the border around the input field
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#000000",
                  borderWidth: "1px",
                  borderRadius: 0,
                },
              },
              // Class for the label of the input field
              "& .MuiInputLabel-outlined": {
                color: "rgb(118, 118, 118)",
              },
            }}
            langOfCountryName="ru"
            defaultCountry="BY"
            variant="outlined"
            label={"Номер телефона"}
            aria-describedby="phone-helper-text"
          />
        </FormControl>
        <FormControl sx={isMobile ? { width: "90vw" } : { width: "450px" }}>
          <TextField
            id="name"
            name="name"
            aria-describedby="name-helper-text"
            sx={{
              // Root class for the input field
              "& .MuiOutlinedInput-root": {
                color: "#000",
                fontFamily: "Segoe UI",
                fontWeight: "bold",
                // Class for the border around the input field
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#000000",
                  borderWidth: "1px",
                  borderRadius: 0,
                },
              },
              // Class for the label of the input field
              "& .MuiInputLabel-outlined": {
                color: "rgb(118, 118, 118)",
              },
            }}
            variant="outlined"
            label={"Как к Вам обращаться?"}
            // value={userName}
            // onChange={(e) => setUserName(e.target.value)}
          />
        </FormControl>
        <button className={styles.button}>Свяжитесь со мной!</button>
      </div>
    </div>
  );
};
