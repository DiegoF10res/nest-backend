// import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
// import { PrismaClient } from '@prisma/client';

// @Injectable()
// export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
//   async onModuleInit() {
//     await this.$connect();
//   }

//   async onModuleDestroy() {
//     await this.$disconnect();
//   }

//   async cleanDatabase() {
//     await this.saleDetail.deleteMany();
//     await this.sale.deleteMany();
//     await this.product.deleteMany();
//     await this.provider.deleteMany();
//     await this.branch.deleteMany();
//     await this.user.deleteMany();
//   }
// }
