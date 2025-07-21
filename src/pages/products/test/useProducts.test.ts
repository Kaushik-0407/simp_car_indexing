// src/hooks/__tests__/useProducts.test.ts
import { renderHook, act } from '@testing-library/react';
import { mockProducts } from '../../../utils/mockData';
import { useProducts } from '../hook/useProducts';

jest.useFakeTimers();

describe('useProducts Hook', () => {
  test('should return initial loading state and fetch products', async () => {
    const { result } = renderHook(() => useProducts());

    // Initial state
    expect(result.current.loading).toBe(true);
    expect(result.current.products).toEqual([]);
    expect(result.current.error).toBeNull();

    // Fast-forward time to resolve the mock timeout
    await act(async () => {
      jest.runAllTimers(); // simulate the 500ms delay
    });

    // Final state after fetch
    expect(result.current.loading).toBe(false);
    expect(result.current.products).toEqual(mockProducts);
    expect(result.current.error).toBeNull();
  });

  test('should return correct product by ID', async () => {
    const { result } = renderHook(() => useProducts());

    await act(async () => {
      jest.runAllTimers();
    });

    const product = result.current.getProductById('product1');
    expect(product?.id).toBe('product1');
  });
});
