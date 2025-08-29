import { Test, TestingModule } from '@nestjs/testing';
import { SaledetailController } from './saledetail.controller';

describe('SaledetailController', () => {
  let controller: SaledetailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SaledetailController],
    }).compile();

    controller = module.get<SaledetailController>(SaledetailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
