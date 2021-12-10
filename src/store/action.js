import { createAction } from '@reduxjs/toolkit';
import { ActionType } from 'types/action';

export const changeCurrentFilter = createAction(
  ActionType.ChangeFilter,
  (filter) => (
    {payload: {filter}}
  ),
);

export const loadQuests = createAction(
  ActionType.LoadQuests,
  (quests) => ({
    payload: {
      quests,
    },
  }),
);

export const loadCurrentQuest = createAction(
  ActionType.LoadCurrentQuest,
  (quest) => ({
    payload: {
      quest,
    },
  }),
);

export const loadQuestRequest = createAction(ActionType.LoadQuestRequest);
export const sendApplicationRequest = createAction(ActionType.SendApplicationRequest);
export const sendApplicationSuccess = createAction(ActionType.SendApplicationSuccess);
export const sendApplicationError = createAction(ActionType.SendApplicationError);
