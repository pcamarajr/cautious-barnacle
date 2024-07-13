interface Product {
  id: string;
  name: string;
  description: string;
  isProduct: boolean;
  isService: boolean;
  unitId: string;
  price: number;
  vat: number;
}

interface Unit {
  id: string;
  name: string;
}
