import { combineReducers } from 'redux';
import { filter } from './filter/filter';
import { quests } from './quests/quests';

export const NameSpace = {
  Filter: 'FILTER',
  Quests: 'QUESTS',
}

export const rootReducer = combineReducers({
  [NameSpace.Filter]: filter,
  [NameSpace.Quests]: quests,
})
