import React from 'react';

import { Favorites } from '../pages/Favorites/Favorites';
import AllNotes from '../pages/ListNotes/ListNotes';

export type TMapRoutes = {
  label: string;
  path: string;
  component: React.FC;
};

export const routes: TMapRoutes[] = [
  {
    label: 'Todos os Recados',
    path: '/allnotes',
    component: AllNotes,
  },

  {
    label: 'Favoritos',
    path: '/favoritos',
    component: Favorites,
  },
];
