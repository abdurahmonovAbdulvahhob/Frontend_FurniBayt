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
  id: number;
  title: string;
  stock: number;
  image: string[];
  description: string;
  averageRating: number;
  price: number;
  sku: string;
  colors: string[];
  tags: string[];
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
