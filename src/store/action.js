import { createAction } from '@reduxjs/toolkit';
import { ActionType } from 'types/action';

export const changeCurrentFilter = createAction(
  ActionType.ChangeFilter,
  (filter) => (
    {payload: {filter}}
  ),
);
