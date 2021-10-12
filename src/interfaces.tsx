export interface UserInput {
  onInputHandler: (value: string) => void;
  value: string;
}

export interface Data {
  category: string;
  price: string;
  stocked: boolean;
  name: string;
}
