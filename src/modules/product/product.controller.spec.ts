import { Test, TestingModule } from '@nestjs/testing';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

describe('ProductController', () => {
  let controller: ProductController;

  const mockService = {
    create: jest.fn(),
    findAll: jest.fn(),
    findById: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
    findByProviderId: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductController],
      providers: [{ provide: ProductService, useValue: mockService }],
    }).compile();

    controller = module.get<ProductController>(ProductController);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('findAll should return array of products', async () => {

    mockService.findAll.mockResolvedValue([{ id: 1, name: 'Product 1' }]);
    const result = await controller.findAll();
    expect(result).toEqual([{ id: 1, name: 'Product 1' }]);
  });

    it('findById should return product', async () => {
    mockService.findById.mockResolvedValue({ id: 1, name: 'Product 1' });
    expect(await controller.findById('1')).toEqual({ id: 1, name: 'Product 1' });
  });
});