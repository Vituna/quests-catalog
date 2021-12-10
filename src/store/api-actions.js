import cogoToast from 'cogo-toast';

import { loadQuests, loadCurrentQuest, loadQuestRequest, sendApplicationRequest, sendApplicationSuccess, sendApplicationError } from './action';

import { ApiRoute, ERROR_MESSAGE} from '../const';

export const fetchQuestsAction = () => (
  async (dispatch, _getState, api) => {
      const {data} = await api.get(ApiRoute.Quests)
      dispatch(loadQuests(data))
  }
)

export const fetchCurrentQuestAction = (id) => (
  async (dispatch, _getState, api) => {
    dispatch(loadQuestRequest());
    try {
      const {data} = await api.get(`${ApiRoute.Quests}/${id}`)
      dispatch(loadCurrentQuest(data))
    } catch {
      console.log('catch')
    }
  }
)

export const sendApplication = ({name, peopleCount, phone, isLegal}, resetForm) => (
  async (dispatch, _getState, api) => {
    dispatch(sendApplicationRequest());
    try {
      await api.post(ApiRoute.Orders, {name, peopleCount, phone, isLegal});
      dispatch(sendApplicationSuccess());
      resetForm();
    } catch {
       dispatch(sendApplicationError());
       cogoToast.error(ERROR_MESSAGE)
    }
  }
)
