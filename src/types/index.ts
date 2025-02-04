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
  data?: any;
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
  reviews: IReview[];
}
export interface IProductQuery {
  filter?: string;
  order?: "asc" | "desc";
  page?: number;
  limit?: number;
  sortBy?: string;
  priceOrder?: "asc" | "desc";
  categoryId?: number;
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
  categoryId?: number; // Bu yerga categoryId qo'shilgan
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

export interface ICustomerDataResponse {
  statusCode: number;
  message: string;
  data: {
    customer: ICustomer;
  };
}
export interface OtpResponse {
  id?: number;
  access_token: string;
  statusCode: number;
  message: string;
}
export interface IReview {
  id: number;
  comment: string;
}
