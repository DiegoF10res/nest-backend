import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class LoginDto {
  @ApiProperty({ description: 'Correo electrónico', example: 'juan@example.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'Contraseña', example: 'P@ssw0rd' })
  @IsString()
  password: string;
}
