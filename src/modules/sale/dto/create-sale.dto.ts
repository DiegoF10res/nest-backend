export class CreateSaleDetailDto {
    productId: number;
    quantity: number;
    price: number;
}

export class CreateSaleDto {
    userId: number;
    branchId: number;
    total: number;
    details: CreateSaleDetailDto[];
}