import axios from 'axios';

import { ProductDocument } from '../models/Product';

const getProducts = async () => {
  const response = await axios.get<ProductDocument[]>(
    `${process.env.REACT_APP_BASE_API}/product`
  );

  return response;
};

const productService = {
  getProducts,
};

export default productService;
