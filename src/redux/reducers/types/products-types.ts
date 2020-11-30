export interface IProduct {
  id: number;
  image: string;
  title: string;
  category: string;
  description: string;
  price: number;
}

export interface IProductInState extends IProduct {
  count: number;
}

export interface IProductsState {
  loading: boolean;
  products: IProduct[];
  error: string | null;
  product: IProduct;
}
