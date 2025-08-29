import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString } from 'class-validator';

export class RegisterUserDto {
  @ApiProperty({ description: 'Nombre del usuario', example: 'Juan Perez', required: false })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty({ description: 'Correo electrónico', example: 'juan@example.com', required: true })
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'Contraseña', example: 'P@ssw0rd', required: true })
  @IsString()
  password: string;
}
