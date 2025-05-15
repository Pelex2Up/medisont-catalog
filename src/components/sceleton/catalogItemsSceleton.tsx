import { FC } from "react";
import styles from "./skeleton.module.scss";
import { Skeleton } from "@mui/material";

export const SkeletonCatalogItem: FC = () => {
  return (
    <div className={styles.sceletonWrapper}>
      <Skeleton variant="rectangular" height={300} />
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} height={70} />
      <Skeleton variant="text" sx={{ fontSize: "0.5rem" }} height={30} width={60} />
    </div>
  );
};
