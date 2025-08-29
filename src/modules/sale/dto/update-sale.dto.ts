import { CreateSaleDetailDto } from "./create-sale.dto";

export class UpdateSaleDto{
    userId?: number;
    branchId: number;
    total: number;
    details: CreateSaleDetailDto[];
}