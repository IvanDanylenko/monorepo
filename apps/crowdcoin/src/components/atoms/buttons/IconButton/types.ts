import { IconButtonProps as MuiIconButtonProps } from '@mui/material';
import { NextLinkProps } from '@ivan/next';

export interface IconButtonProps extends MuiIconButtonProps, Omit<NextLinkProps, 'href'> {
  href?: string;
}
