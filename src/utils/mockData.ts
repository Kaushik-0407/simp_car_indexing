import type { Product, QualityIndexData } from "../types";
export const mockProducts: Product[] = [
  {
    id: 'product1',
    name: 'Tesla Model S',
    description: 'Luxury electric sedan with autopilot',
    price: 79990,
    image: 'images/tesla.jpg',
    qualityIndex: 92,
    features: ['Autopilot', 'Long Range', 'Ludicrous Mode']
  },
  {
    id: 'product2',
    name: 'Ford Mustang Mach-E',
    description: 'Electric SUV with sporty performance',
    price: 42995,
    image: '/images/mustang-mach-e.jpg',
    qualityIndex: 85,
    features: ['Extended Range', 'AWD', 'Ford Co-Pilot360']
  }
];

export const qualityIndexData: QualityIndexData[] = [
  { label: 'Performance', value: 95, color: '#4CAF50' },
  { label: 'Reliability', value: 89, color: '#8BC34A' },
  { label: 'Features', value: 91, color: '#CDDC39' },
  { label: 'Design', value: 93, color: '#FFEB3B' },
  { label: 'Value', value: 87, color: '#FFC107' }
];