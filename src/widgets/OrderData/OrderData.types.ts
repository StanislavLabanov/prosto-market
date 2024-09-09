export interface IOrderData {
  date: string;
  from: string;
  address: string;
  to: string;
  items: {
    id: number;
    name: string;
    prise: number;
    number: number;
    weight: string;
  }[];
  total: string;
}
