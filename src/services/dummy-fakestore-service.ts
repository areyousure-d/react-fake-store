import { IProduct } from "../redux/reducers/types/products-types";

// todo: add types
export default class DummyFakestoreService {
  _apiBase = process.env.PUBLIC_URL + "/products";

  getResource = async (url: string): Promise<any> => {
    const res = await fetch(`${this._apiBase}${url}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, recieved ${res.status}`);
    }

    return await res.json();
  };

  addUrlToImage = (res: any): IProduct[] => {
    res.products = res.products.map((product: IProduct) => {
      product.image = process.env.PUBLIC_URL + "/products/img/" + product.image;
      return product;
    });
    return res.products;
  };

  getAllProducts = async () => {
    const res = await this.getResource("/products.json");

    return this.addUrlToImage(res);
  };

  getProductById = async (id: number) => {
    const res = await this.getResource(`/products.json`);

    const product = res.products.find((product: IProduct) => product.id === id);
    res.products = [];
    res.products.push(product);

    const products = this.addUrlToImage(res);

    if (!products[0]) {
      throw new Error();
    }
    return products[0];
  };

  getProductsInCategory = async (category: string) => {
    const res = await this.getResource(`/products.json`);
    res.products = res.products.filter((product: IProduct) => {
      return product.category === category;
    });

    return this.addUrlToImage(res);
  };

  getJeweleryProducts = async () => {
    return this.getProductsInCategory("jewelery");
  };

  getMenClosingProducts = async () => {
    return this.getProductsInCategory("men clothing");
  };

  getWomenClosingProducts = async () => {
    return this.getProductsInCategory("women clothing");
  };

  getElectronicProducts = async () => {
    return this.getProductsInCategory("electronics");
  };
}
