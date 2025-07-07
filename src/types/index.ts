export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  qualityIndex: number;
  features: string[];
}

export interface QualityIndexData {
  label: string;
  value: number;
  color: string;
}

export type NavItem = {
  label: string;
  path: string;
  icon?: React.ReactNode;
};