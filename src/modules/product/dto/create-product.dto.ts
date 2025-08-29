import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({ description: 'Nombre del producto', example: 'Arroz', required: true })
  name: string;

  @ApiProperty({ description: 'Precio en centavos o moneda', example: 100.50, required: true })
  price: number;

  @ApiProperty({ description: 'ID del proveedor', example: 1, required: true })
  providerId: number;

  @ApiProperty({ description: 'Stock inicial del producto', example: 10, required: true })
  stock: number;

  @ApiProperty({ description: 'Descripción opcional', example: 'Paquete 1kg', required: false })
  description?: string;
}