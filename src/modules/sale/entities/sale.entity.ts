import { ApiProperty } from '@nestjs/swagger';

export class SaleEntity {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: '2025-08-29T00:00:00.000Z' })
  date: string;

  @ApiProperty({ example: 1 })
  userId: number;

  @ApiProperty({ example: 1 })
  branchId: number;

  @ApiProperty({ example: 100.5 })
  total: number;
}
