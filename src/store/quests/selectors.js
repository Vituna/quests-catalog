import { NameSpace } from '../root-reducer';

export const getQuests = (state) => state[NameSpace.Quests].quests;
export const getQuest = (state) => state[NameSpace.Quests].quest;
