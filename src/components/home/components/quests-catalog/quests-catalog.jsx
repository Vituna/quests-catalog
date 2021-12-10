import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './quests-catalog.styled';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import {getCurrentFilter} from '../../../../store/filter/selectors';
import {getQuests} from '../../../../store/quests/selectors';
import {changeCurrentFilter} from '../../../../store/action';


import {Filers, FilterType} from '../../../../const';
import {getTranslationLevel, getTranslationFilter} from '../../../../utils';

const QuestsCatalog = () => {
  const dispatch = useDispatch();

  const currentFilter = useSelector(getCurrentFilter);
  const questsHome = useSelector(getQuests)

  const onFilterChange = (title) => {
    dispatch(changeCurrentFilter(title))
  }

  const quests = questsHome.filter((offer) => currentFilter === getTranslationFilter(offer.type) || currentFilter === FilterType.AllQuests);

  return (
    <>
    <S.Tabs>
      {Filers.map(({title, icon: Icon}) => {
        return (
          <S.TabItem onClick={() => onFilterChange(title)} key={title}>
          <S.TabBtn isActive={currentFilter === title}>
            <Icon />
            <S.TabTitle>{title}</S.TabTitle>
          </S.TabBtn>
        </S.TabItem>
        )
      })}
    </S.Tabs>

    <S.QuestsList>
    {quests.map(({id, title, peopleCount, level, previewImg}) => {
      return (
        <S.QuestItem key={id}>
        <S.QuestItemLink to={`quest/${id}`}>
          <S.Quest>
            <S.QuestImage
              src={previewImg}
              width="344"
              height="232"
              alt={`квест ${title}`}
            />

            <S.QuestContent>
              <S.QuestTitle>{title}</S.QuestTitle>

              <S.QuestFeatures>
                <S.QuestFeatureItem>
                  <IconPerson />
                  {peopleCount.join('-')} чел
                </S.QuestFeatureItem>
                <S.QuestFeatureItem>
                  <IconPuzzle />
                  {getTranslationLevel(level)}
                </S.QuestFeatureItem>
              </S.QuestFeatures>
            </S.QuestContent>
          </S.Quest>
        </S.QuestItemLink>
      </S.QuestItem>

      )
    })}

    </S.QuestsList>
  </>
  )
  };

export default QuestsCatalog;
