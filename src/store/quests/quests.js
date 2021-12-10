import { createReducer } from '@reduxjs/toolkit';
import {loadQuests, loadCurrentQuest} from 'store/action';

const initialState = {
  quests: [],
  quest: null,
};

const quests = createReducer(initialState, (builder) => {
  builder
  .addCase(loadQuests, (state, action) => {
    const {quests} = action.payload;
    state.quests = quests;
  })
  .addCase(loadCurrentQuest, (state, action) => {
    const {quest} = action.payload;
    state.quest = quest;
  })
})

export {quests}
