import { combineReducers } from 'redux';
import { filter } from './filter/filter'

export const NameSpace = {
  Filter: 'FILTER'
}

export const rootReducer = combineReducers({
  [NameSpace.Filter]: filter,
})
