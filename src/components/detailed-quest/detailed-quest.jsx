import { useState, useEffect } from 'react';
import { MainLayout } from 'components/common/common';
import { ReactComponent as IconClock } from 'assets/img/icon-clock.svg';
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './detailed-quest.styled';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { fetchCurrentQuestAction } from '../../store/api-actions';
import { getQuest, getQuestLoading } from '../../store/quests/selectors';

import Preloader from '../loading-screen/loading-screen';
import { BookingModal } from './components/components';

import { getTranslationFilter, getTranslationLevel } from '../../utils';

const DetailedQuest = () => {
  const dispatch = useDispatch();

  const {id} = useParams();
  const quest = useSelector(getQuest)
  const questLoading = useSelector(getQuestLoading)

  const [isBookingModalOpened, setIsBookingModalOpened] = useState(false);

  useEffect(() => {
    dispatch(fetchCurrentQuestAction(id));
  }, [dispatch, id]);

  const onBookingBtnClick = () => {
    setIsBookingModalOpened(!isBookingModalOpened);
  };

  if (quest === null || questLoading) {
    return <Preloader />
  }

  return (
    <MainLayout>
      <S.Main>
        <S.PageImage
          src={`../${quest.coverImg}`}
          alt={`Квест ${quest.title}`}
          width="1366"
          height="768"
        />
        <S.PageContentWrapper>
          <S.PageHeading>
          <S.PageTitle>{quest.title}</S.PageTitle>
            <S.PageSubtitle>{getTranslationFilter(quest.type)}</S.PageSubtitle>
          </S.PageHeading>

          <S.PageDescription>
            <S.Features>
              <S.FeaturesItem>
                <IconClock width="20" height="20" />
                <S.FeatureTitle>{quest.duration} мин</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPerson width="19" height="24" />
                <S.FeatureTitle>{quest.peopleCount} чел</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPuzzle width="24" height="24" />
                <S.FeatureTitle>{getTranslationLevel(quest.level)}</S.FeatureTitle>
              </S.FeaturesItem>
            </S.Features>

            <S.QuestDescription>
              {quest.description}
            </S.QuestDescription>

            <S.QuestBookingBtn onClick={onBookingBtnClick}>
              Забронировать
            </S.QuestBookingBtn>
          </S.PageDescription>
        </S.PageContentWrapper>

        {isBookingModalOpened && <BookingModal onButtonClick={onBookingBtnClick}/>}
      </S.Main>
    </MainLayout>
  );
};

export default DetailedQuest;
