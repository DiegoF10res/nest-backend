

import { ApiProperty } from '@nestjs/swagger';

export class ProviderEntity {
  @ApiProperty({ description: 'ID del proveedor', example: 1 })
  id: number;

  @ApiProperty({ description: 'Nombre del proveedor', example: 'Proveedor S.A.' })
  name: string;

  @ApiProperty({ description: 'Información de contacto', example: 'correo@proveedor.com' })
  contactInfo: string;
}
