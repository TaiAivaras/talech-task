export type ProductBase = {
  name: string;
  ean: string;
  type: string;
  weight: number;
  color: string;
  active: boolean;
  quantity: number;
  price: number;
};

export type Product = {
  id: string;
  history: ProductHistoryEntry[];
} & ProductBase;

export type ProductHistoryEntry = {
  quantity: number;
  price: number;
  createdOn: Date;
};
