import {loadQuests, loadCurrentQuest} from './action';

import { ApiRoute } from '../const';

export const fetchQuestsAction = () => (
  async (dispatch, _getState, api) => {
      const {data} = await api.get(ApiRoute.Quests)
      dispatch(loadQuests(data))
  }
)

export const fetchCurrentQuestAction = (id) => (
  async (dispatch, _getState, api) => {
    try {
      const {data} = await api.get(`${ApiRoute.Quests}/${id}`)
      dispatch(loadCurrentQuest(data))
    } catch {
      console.log('catch')
    }
  }
)
