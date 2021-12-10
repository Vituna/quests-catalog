import { createReducer } from '@reduxjs/toolkit';
import { loadQuests, loadCurrentQuest, loadQuestRequest, sendApplicationRequest, sendApplicationSuccess, sendApplicationError } from 'store/action';

const initialState = {
  quests: [],
  quest: null,
  questLoading: false,
  sendApplicationLoading: false,
};

const quests = createReducer(initialState, (builder) => {
  builder
  .addCase(loadQuests, (state, action) => {
    const {quests} = action.payload;
    state.quests = quests;
  })
  .addCase(loadQuestRequest, (state) => {
    state.questLoading = true;
  })
  .addCase(loadCurrentQuest, (state, action) => {
    const {quest} = action.payload;
    state.questLoading = false;
    state.quest = quest;
  })
  .addCase(sendApplicationRequest, (state) => {
    state.sendApplicationLoading = true;
  })
  .addCase(sendApplicationSuccess, (state) => {
    state.sendApplicationLoading = false;
  })
  .addCase(sendApplicationError, (state) => {
    state.sendApplicationLoading = false;
  })
})

export {quests}
