import type { Product, QualityIndexData } from "../types";
export const mockProducts: Product[] = [
  {
    id: 'product1',
    name: 'Tesla Model S',
    description: 'Luxury electric sedan with autopilot',
    price: 79990,
    image: '/src/utils/images/tesla.jpg',
    qualityIndex: 7,
    features: ['Autopilot', 'Long Range', 'Ludicrous Mode']
  },
  {
    id: 'product2',
    name: 'Ford Mustang M',
    description: 'Electric SUV with sporty performance',
    price: 42995,
    image: '/src/utils/images/mustang.jpg',
    qualityIndex: 6,
    features: ['Extended Range', 'AWD', 'Ford Co-Pilot360']
  },
  {
    id: 'product3',
    name: 'BMW i8 Roadster',
    description: 'Plug-in hybrid sports car with futuristic design',
    price: 147500,
    image: '/src/utils/images/bmw-i8.jpg',
    qualityIndex: 8,
    features: ['Hybrid Powertrain', 'Carbon Fiber', 'Scissor Doors']
  },
  {
    id: 'product4',
    name: 'Audi e-tron GT',
    description: 'High-performance electric grand tourer',
    price: 99900,
    image: '/src/utils/images/audi-etron.jpg',
    qualityIndex: 9,
    features: ['Quattro AWD', 'Fast Charging', 'Virtual Cockpit']
  },
  {
    id: 'product5',
    name: 'Nissan Leaf',
    description: 'Affordable and efficient electric hatchback',
    price: 28990,
    image: '/src/utils/images/nissan-leaf.jpeg',
    qualityIndex: 6,
    features: ['Eco Mode', 'ProPILOT Assist', 'Zero Emissions']
  },
  {
    id: 'product6',
    name: 'Porsche Taycan',
    description: 'Luxury electric sports car with thrilling performance',
    price: 103800,
    image: '/src/utils/images/porsche-taycan.jpg',
    qualityIndex: 9,
    features: ['800V System', 'Launch Control', 'Sport Chrono']
  },
  {
    id: 'product7',
    name: 'Chevrolet Bolt EV',
    description: 'Compact electric car with surprising range',
    price: 31995,
    image: '/src/utils/images/chevy-bolt.jpg',
    qualityIndex: 2.3,
    features: ['One Pedal Driving', 'Regen Braking', 'Apple CarPlay']
  },
  {
    id: 'product8',
    name: 'Hyundai Ioniq 5',
    description: 'Innovative EV with ultra-fast charging',
    price: 45900,
    image: '/src/utils/images/ioniq5.jpg',
    qualityIndex: 4,
    features: ['Vehicle-to-Load', 'Smart Parking', 'Flat Floor Design']
  },
  {
    id: 'product9',
    name: 'Lucid Air',
    description: 'Premium electric sedan with class-leading range',
    price: 87400,
    image: '/src/utils/images/lucid-air.jpeg',
    qualityIndex: 7,
    features: ['DreamDrive', 'Glass Canopy', 'Over 500-mile Range']
  }
];


export const qualityIndexData: QualityIndexData[] = [
  { label: 'Performance', value: 95, color: '#4CAF50' },
  { label: 'Reliability', value: 89, color: '#8BC34A' },
  { label: 'Features', value: 91, color: '#CDDC39' },
  { label: 'Design', value: 93, color: '#FFEB3B' },
  { label: 'Value', value: 87, color: '#FFC107' }
];