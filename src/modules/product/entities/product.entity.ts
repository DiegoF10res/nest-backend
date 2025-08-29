
import { ApiProperty } from '@nestjs/swagger';

export class ProductEntity {
  @ApiProperty({ description: 'ID del producto', example: 1 })
  id: number;

  @ApiProperty({ description: 'Nombre del producto', example: 'Arroz' })
  name: string;

  @ApiProperty({ description: 'Precio', example: 100.5 })
  price: number;

  @ApiProperty({ description: 'Stock disponible', example: 10 })
  stock: number;

  @ApiProperty({ description: 'ID del proveedor', example: 1 })
  providerId: number;

  @ApiProperty({ description: 'Descripción', example: 'Paquete 1kg', required: false })
  description?: string;
}
