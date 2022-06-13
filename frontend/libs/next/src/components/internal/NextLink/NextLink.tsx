import { forwardRef } from 'react';
import Link from 'next/link';
import { NextLinkProps } from './types';

export const NextLink = forwardRef<HTMLAnchorElement, NextLinkProps>(
  ({ children, href, replace, scroll, shallow, prefetch, locale, ...rest }, ref) => {
    return (
      <Link
        href={href}
        replace={replace}
        scroll={scroll}
        shallow={shallow}
        prefetch={prefetch}
        locale={locale}
      >
        <a ref={ref} {...rest}>
          {children}
        </a>
      </Link>
    );
  },
);
NextLink.displayName = 'NextLink';
