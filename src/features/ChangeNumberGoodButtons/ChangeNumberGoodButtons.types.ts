export interface IChangeNumberGoodButtonsProps {
  size: 'small' | 'medium';
  number: number;
  minusHandler: () => void;
  plusHandler: () => void;
  addHandler: () => void;
}
