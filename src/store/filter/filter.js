import { createReducer } from '@reduxjs/toolkit';
import { changeCurrentFilter, changeCurrentMenu } from '../action';

import { DEFAULT_FILTER, DEFAULT_MENU } from 'const';

const initialState = {
  currentFilter: DEFAULT_FILTER,
  currentMenu: DEFAULT_MENU,
};

const filter = createReducer(initialState, (builder) => {
  builder
  .addCase(changeCurrentFilter, (state, action) => {
    const {filter} = action.payload;
    state.currentFilter = filter;
  })
  .addCase(changeCurrentMenu, (state, action) => {
    const {menu} = action.payload;
    state.currentMenu = menu;
  })

});

export {filter};
