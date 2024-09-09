import { EropDownBlockTypes } from '@/shared/types/dropDownBlockTypes';
import { ReactNode } from 'react';

export interface IDropDownBlockProps {
  title: string;
  children: ReactNode;
  size: EropDownBlockTypes;
}
