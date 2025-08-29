import { ApiProperty } from '@nestjs/swagger';

export class SaleDetailEntity {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 1 })
  saleId: number;

  @ApiProperty({ example: 1 })
  productId: number;

  @ApiProperty({ example: 2 })
  quantity: number;

  @ApiProperty({ example: 50 })
  price: number;
}
