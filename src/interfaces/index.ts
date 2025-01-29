export interface BreadcrumbItem {
  text: string;
  path: string;
}

export interface Product {
  code: string;
  name?: string;
  available?: boolean;
  visible?: boolean;
  details?: {
    name?: string;
    description?: string;
  };
  priceInCents: string;
  salePriceInCents: string;
  rating: number;
  image?: string;
  stockAvailable?: boolean;
}
