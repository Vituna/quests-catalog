import { NameSpace } from '../root-reducer';

export const getCurrentFilter = (state) => state[NameSpace.Filter].currentFilter;
export const getCurrentMenu = (state) => state[NameSpace.Filter].currentMenu;
