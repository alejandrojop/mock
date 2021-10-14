export interface UserInput {
  onChangeHandler: (value: string) => void;
  value: string;
}

export interface Data {
  category: string;
  price: string;
  stocked: boolean;
  name: string;
}

export interface CategoryGroup {
  label: string;
  items: Data[];
}
