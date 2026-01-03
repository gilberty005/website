// Route path constants
export const routes = {
  home: '/',
  portfolio: '/portfolio',
  projects: '/projects',
  blog: '/blog',
  contact: '/contact',
  lithum: '/lithum',
  frosci: '/frosci',
  pedestrian: '/pedestrian',
  yhacks: '/yhacks',
  pokemon: '/pokemon',
  notFound: '*',
};

// Routes that should hide navbar and footer
export const hideNavbarFooterRoutes = [
  routes.lithum,
  routes.frosci,
];

