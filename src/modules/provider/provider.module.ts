import { Module } from '@nestjs/common';
import { ProviderService } from './provider.service';
import { ProviderController } from './provider.controller';
import { PrismaService } from 'src/infrastructure/prisma.service';

@Module({
  providers: [ProviderService, PrismaService],
  controllers: [ProviderController]
})
export class ProviderModule {}
