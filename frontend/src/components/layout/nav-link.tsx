'use client';

import { FC } from 'react';
import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLinkProps extends LinkProps {
  label: string;
  activeClassName: string;
  className: string;
}

export const NavLink: FC<NavLinkProps> = ({
  label,
  href,
  activeClassName,
  className,
  ...rest
}) => {
  const path = usePathname();

  const isActive = path === href;

  return (
    <Link className={isActive ? activeClassName : ''} href={href} {...rest}>
      {label}
    </Link>
  );
};
