// // src/pages/__tests__/ProductsPage.test.tsx
// import * as React from 'react';
// import { render, screen, waitFor } from '@testing-library/react';
// import * as useProductsHook from '../hook/useProducts';
// import ProductsPage from '..';
// import { mockProducts } from '../../../utils/mockData';

// // Mock ProductCard component to isolate testing
// jest.mock('../../../components/productCard', () => ({
//   __esModule: true,
//   default: ({ product }: any) => (
//     <div data-testid="product-card">{product.name}</div>
//   ),
// }));



// describe('ProductsPage', () => {
//   test('displays loading spinner when loading', () => {
//     jest.spyOn(useProductsHook, 'useProducts').mockReturnValue({
//       products: [],
//       loading: true,
//       error: null,
//       getProductById: jest.fn(),
//     });

//     render(<ProductsPage />);
//     expect(screen.getByRole('progressbar')).toBeInTheDocument();
//   });

//   test('displays error message when error occurs', () => {
//     jest.spyOn(useProductsHook, 'useProducts').mockReturnValue({
//       products: [],
//       loading: false,
//       error: 'Failed to fetch products',
//       getProductById: jest.fn(),
//     });

//     render(<ProductsPage />);
//     expect(screen.getByText(/Failed to fetch products/i)).toBeInTheDocument();
//   });

//   test('displays product cards after loading', async () => {
//     jest.spyOn(useProductsHook, 'useProducts').mockReturnValue({
//       products: mockProducts,
//       loading: false,
//       error: null,
//       getProductById: jest.fn(),
//     });

//     render(<ProductsPage />);

//     expect(screen.getByText(/Our Products/i)).toBeInTheDocument();
//     expect(await screen.findAllByTestId('product-card')).toHaveLength(2);
//     expect(screen.getByText(/Tesla Model S/i)).toBeInTheDocument();
//     expect(screen.getByText(/BMW i8/i)).toBeInTheDocument();
//   });
// });
