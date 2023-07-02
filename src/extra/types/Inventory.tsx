export interface Inventory {
  id: number;
  price: number;
  quantity: number;
  inStock: boolean;
  size: string;
  barcode: number;
  // cargoBarcode?: CargoBarcode;
  // inStock: boolean;
  // product?: number;
  // inventorySize: InventorySize;
  // maryamPrice: number;
  // quantity: number;
  // id: number;
}
export interface CargoBarcode {
  id: number;
  barcode: number;
}
export interface InventorySize {
  id: number;
  size: string;
}
