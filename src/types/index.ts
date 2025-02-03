export interface IGetResponseProducts {
  data: IGetProducts;
  message: string;
  statusCode: number;
}
export interface IGetProducts {
  limit: number;
  page: number;
  products: IProduct[];
  total: number;
}
export interface IProduct {
  categroyId?: number;
  id: number;
  title?: string;
  stock: number;
  image: string[];
  description: string;
  averageRating: number;
  price: number;
  sku: string;
  colors: string[];
  tags: string[];
  is_liked?: boolean;
  discount?: number;
  discount_price: number;
}
export interface IProductQuery {
  filter?: string;
  order?: "asc" | "desc";
  page?: number;
  limit?: number;
  sortBy?: string;
  priceOrder?: "asc" | "desc";
}
export interface ICustomer {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  confirm_password: string;
  // phone_number: string;
}
export interface IGetResponseSingleProduct {
  data: IGetSingleProduct;
  message: string;
  statusCode: number;
}
export interface IGetSingleProduct {
  product: {
    id: number;
    image: string[];
    price: number;
    title: string;
    color: string[];
    additional_info: string;
    description: string;
    average_rating: number;
    sku: string;
    tags: string[];
    categoryId?: number;
    product_category: {
      id: number;
      name: string;
    };
    product_comments: {
      comment: string;
  };
  };
}
