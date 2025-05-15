export type CatalogResponseT = {
  count: number;
  next: string | null;
  previous: string | null;
  price_max_value: number;
  price_min_value: number;
  results: GroupDataT[];
};

export type GroupDataT = {
  group_code: string;
  products: ProductDataT[];
};

export type ProductDataT = {
  id: number;
  params: { name: string; value: string }[];
  category: string;
  external_id: string;
  img: string;
  name: string;
  price: string;
  currency: string;
  picture: string;
  vendor_code: string;
  description: string;
  stock_shipper: number;
  stock_minsk: number;
  available: boolean;
  updated_at: string;
};

export type CategoryT = {
  id: number;
  external_id: string;
  name: string;
  parent: number | null;
  image: string;
  priority: number;
  main_tree: boolean;
};
