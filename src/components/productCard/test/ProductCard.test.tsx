// import React from 'react';
// import { render, screen, fireEvent } from '@testing-library/react';
// import { MemoryRouter, useNavigate } from 'react-router-dom';
// import ProductCard from '..';
// import type { Product } from '../../../types';

// jest.mock('react-router-dom', () => ({
//   ...jest.requireActual('react-router-dom'),
//   useNavigate: jest.fn(),
// }));

// const mockNavigate = useNavigate as jest.Mock;

// const mockProduct: Product = {
//   id: 'product1',
//   name: 'Tesla Model S',
//   description: 'Luxury electric sedan with autopilot',
//   price: 79990,
//   image: '/test-image.jpg',
//   qualityIndex: 9,
//   features: ['Autopilot', 'Electric']
// };

// describe('ProductCard Component', () => {
//   beforeEach(() => {
//     mockNavigate.mockClear();
//   });

//   it('renders product name, description, image, and price', () => {
//     render(
//       <MemoryRouter>
//         <ProductCard product={mockProduct} />
//       </MemoryRouter>
//     );

//     expect(screen.getByText('Tesla Model S')).toBeInTheDocument();
//     expect(screen.getByText('Luxury electric sedan with autopilot')).toBeInTheDocument();
//     expect(screen.getByRole('img')).toHaveAttribute('src', '/test-image.jpg');
//     expect(screen.getByText('$79,990')).toBeInTheDocument();
//     expect(screen.getByRole('button', { name: /view details/i })).toBeInTheDocument();
//   });

//   it('navigates to product details page on button click', () => {
//     render(
//       <MemoryRouter>
//         <ProductCard product={mockProduct} />
//       </MemoryRouter>
//     );

//     const button = screen.getByRole('button', { name: /view details/i });
//     fireEvent.click(button);

//     expect(mockNavigate).toHaveBeenCalledWith('/products/product1');
//   });
// });
