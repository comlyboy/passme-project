export interface IProduct {
    id?: any;
    name: string;
    description?: string;
    business: number;
    supplier?: number;
    category?: number;
    brand?: number;
    sku?: string;
    barcode: string;
    quantity?: number;
    min_quantity?: string;
    start_inventory?: number;
    min_quantity_required?: number;
    price?: number;
}