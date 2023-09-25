interface NavLink {
  title: string;
  path: string;
}

export const headerNavLinks: NavLink[] = [
  {
    path: '/',
    title: 'home',
  },
  {
    path: '/products',
    title: 'products',
  },
  {
    path: '/entertainments',
    title: 'entertainments',
  },
  {
    path: '/support',
    title: 'support',
  },
];

export const copyrightNavLinks: NavLink[] = [
  {
    path: '#',
    title: 'policy',
  },
  {
    path: '#',
    title: 'terms',
  },
  {
    path: '#',
    title: 'sales',
  },
  {
    path: '#',
    title: 'legal',
  },
  {
    path: '#',
    title: 'sitemap',
  },
];
