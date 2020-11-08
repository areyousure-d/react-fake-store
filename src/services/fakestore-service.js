export default class FakestoreService {

  _apiBase = 'https://fakestoreapi.com'; 

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, recieved ${res.status}`);
    }
    return await res.json();
  }

  getAllProducts = async () => {
    const res = await this.getResource('/products/');
    return res;
  }

  getProductById = async (id) => {
    const res = await this.getResource(`/products/${id}`);
    return res;
  }

  getProductsInCategory = async (category) => {
    const res = await this.getResource(`/products/category/${category}`);
    return res;
  }

  getJeweleryProducts = async () => {
    return this.getProductsInCategory('jewelery');
  }

  getMenClosingProducts = async () => {
    return this.getProductsInCategory('men clothing');
  }

  getWomenClosingProducts = async () => {
    return this.getProductsInCategory('women clothing');
  }

  getElectronicProducts = async () => {
    return this.getProductsInCategory('electronics');
  }

}

