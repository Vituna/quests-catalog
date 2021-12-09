import { createReducer } from '@reduxjs/toolkit';
import { changeCurrentFilter } from '../action';

import {DEFAULT_FILTER} from 'const';

const initialState = {
  currentFilter: DEFAULT_FILTER
};

const filter = createReducer(initialState, (builder) => {
  builder
  .addCase(changeCurrentFilter, (state, action) => {
    const {filter} = action.payload;
    state.currentFilter = filter;
  })
});

export {filter};
