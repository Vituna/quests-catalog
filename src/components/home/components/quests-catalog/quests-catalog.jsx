import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './quests-catalog.styled';

import {Filers} from '../../../../const'
import {getTranslationLevel} from '../../../../utils'

import {mockQuests} from '../../../../mock'

const QuestsCatalog = () => (
  <>
    <S.Tabs>
      {Filers.map(({title, icon: Icon}) => {
        return (
          <S.TabItem>
          <S.TabBtn isActive>
            <Icon />
            <S.TabTitle>{title}</S.TabTitle>
          </S.TabBtn>
        </S.TabItem>
        )
      })}
    </S.Tabs>

    <S.QuestsList>
    {mockQuests.map(({id, title, peopleCount, level}) => {
      return (
        <S.QuestItem key={id}>
        <S.QuestItemLink to="/quest">
          <S.Quest>
            <S.QuestImage
              src="img/preview-sklep.jpg"
              width="344"
              height="232"
              alt="квест Склеп"
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
);

export default QuestsCatalog;
