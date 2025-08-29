import { Test, TestingModule } from '@nestjs/testing';
import { SaledetailService } from './saledetail.service';

describe('SaledetailService', () => {
  let service: SaledetailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SaledetailService],
    }).compile();

    service = module.get<SaledetailService>(SaledetailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
