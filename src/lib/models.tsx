export interface Book {
  id: number;
  title: string;
  author: string;
  year: number;
  is_published: boolean;
  description: string;
  sub: string;
  category: string;
}

export interface Coffee {
  c_id: number;
  c_title: string;
  c_price: number;
}

export interface Order {
  id: number;
  menu: string;
  total: number;
  note: string;
}
