import { ApiProperty } from '@nestjs/swagger';

export class UserEntity {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'Juan' })
  name?: string;

  @ApiProperty({ example: 'juan@example.com' })
  email?: string;

  @ApiProperty({ example: true })
  active?: boolean;
}
