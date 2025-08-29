import { ApiProperty } from '@nestjs/swagger';

export class BranchEntity {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'Sucursal Centro' })
  name: string;

  @ApiProperty({ example: 'Calle 123' })
  address: string;
}
