import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { baseQuery } from "./baseApi";
import {
  CatalogResponseT,
  CategoryT,
  IPriceInfo,
  ProductDataT,
} from "./apiTypes";

export const catalogService = createApi({
  reducerPath: "catalogService",
  baseQuery,
  endpoints: (build) => ({
    getCatalogData: build.mutation<CatalogResponseT, string>({
      query: (url) => `/grouped-products/v3/${url}`,
    }),
    getCategories: build.query<CategoryT[], void>({
      query: () => "/categories/",
    }),
    getGroupData: build.query<ProductDataT[], string>({
      query: (code) => `/grouped-products/by-group/?group_code=${code}`,
    }),
    getPriceRange: build.query<IPriceInfo, void>({
      query: () => "/inform/",
    }),
  }),
});

export const {
  useGetCatalogDataMutation,
  useGetCategoriesQuery,
  useLazyGetGroupDataQuery,
  useGetPriceRangeQuery,
} = catalogService;
