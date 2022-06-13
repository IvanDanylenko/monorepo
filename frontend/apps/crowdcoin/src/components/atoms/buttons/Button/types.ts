import { ElementType } from 'react';
import type { ButtonProps as MuiButtonProps } from '@mui/material';
import { NextLinkProps } from '@ivan/next';

export interface ButtonProps extends MuiButtonProps, Omit<NextLinkProps, 'href'> {
  t?: string;
  component?: ElementType;
  loading?: boolean;
}
