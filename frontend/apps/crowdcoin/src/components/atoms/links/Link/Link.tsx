import { FC } from 'react';
import { Link as MuiLink } from '@mui/material';
import { NextLink } from '@ivan/next';
import { useTranslate } from '../../../../hooks';
import { LinkProps } from './types';

const Link: FC<LinkProps> = ({ t, children, ...rest }) => {
  const { t: translate } = useTranslate();
  return (
    <MuiLink component={NextLink} {...rest}>
      {t ? translate<string>(t) : children}
    </MuiLink>
  );
};

export default Link;
