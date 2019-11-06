export interface IInvoice {
  tax: string[];
  invoice_items: string[];
  due_date: string;
  date: string;
  status?: any;
  business: number;
  discount?: number;
  parent?: number;
  customer: number;
  payment_method?: string;
}

export interface IDiscount {
  discount: number;
  discount_name: string;
  choice: string;
}

export interface ITax {
  name: string;
  rate: 0;
}

export interface IItems {
  name: string;
  description: string;
  quantity: number;
  price_per_item: number;
  currency: number;
}

export interface IReccuring {
  monthly_frequency?: string;
  invoice: number;
  weekly_frequency?: string;
  frequency_period: string;
  end_date: string;
  start_date: string;
}

export interface PAYMENT {
  payment_date: string;
  payment_amount: number;
  payment_method: string;
  invoice: number;
}
