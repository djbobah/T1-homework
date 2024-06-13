export interface ISearch {
  products: IProduct[];
  total: number;
  skip: number;
  limit: number;
}

export interface IProduct {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: IDimensionsProduct;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: IReviewProduct[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: IMetaProduct;
  images: string[];
  thumbnail: string;
}

export interface IMetaProduct {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
}

export interface IReviewProduct {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

export interface IDimensionsProduct {
  width: number;
  height: number;
  depth: number;
}