it('remove it', () => {
  expect(true).toBe(true);
});

import { CreateRandomOperation, CreateRandomProduct } from './3_write';

describe('all', () => {
  it('operation', () => {
    const createdAt = '1';
    const operation = CreateRandomOperation(createdAt);
    expect(operation).toHaveProperty('createdAt', createdAt);
    expect(operation).toHaveProperty('id');
    expect(operation).toHaveProperty('name');
    expect(operation).toHaveProperty('desc');
    expect(operation).toHaveProperty('createdAt');
    expect(operation).toHaveProperty('amount');
    expect(operation).toHaveProperty('category');
    expect(operation).toHaveProperty('type');
  });

  it('product', () => {
    const createdAt = '2';
    const product = CreateRandomProduct(createdAt);
    expect(product).toHaveProperty('id');
    expect(product).toHaveProperty('name');
    expect(product).toHaveProperty('photo');
    expect(product).toHaveProperty('desc');
    expect(product).toHaveProperty('createdAt');
    expect(product).toHaveProperty('oldPrice');
    expect(product).toHaveProperty('price');
    expect(product).toHaveProperty('category');
  });
});
