import { Injectable, OnModuleInit, OnModuleDestroy } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  async onModuleInit() {
    await this.$connect();

    // 👇 Si estamos corriendo en tests, limpiamos la BD
    if (process.env.NODE_ENV === 'test') {
      await this.cleanDb();
    }
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }

  // Método para limpiar la BD
  async cleanDb() {
    await this.user.deleteMany();
    // 👉 si tienes más tablas, las borras aquí en orden correcto
    // await this.product.deleteMany();
    // await this.orders.deleteMany();
  }
}
