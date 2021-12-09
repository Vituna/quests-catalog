import { ReactComponent as IconAllQuests } from './assets/img/icon-all-quests.svg';
import { ReactComponent as IconAdventures } from './assets/img/icon-adventures.svg';
import { ReactComponent as IconHorrors } from './assets/img/icon-horrors.svg';
import { ReactComponent as IconMystic } from './assets/img/icon-mystic.svg';
import { ReactComponent as IconDetective } from './assets/img/icon-detective.svg';
import { ReactComponent as IconScifi } from './assets/img/icon-scifi.svg';

export const AppRoute = {
  Main: '/',
  Quest: '/quest/:id',
  Contacts: '/contacts'
}

export const ApiRoute = {
  Quests: '/quests',
  Orders: '/orders',
}

export const Filers = [
  {
    title: 'Все квесты',
    icon: IconAllQuests,
  },
  {
    title: 'Приключения',
    icon: IconAdventures,
  },
  {
    title: 'Ужасы',
    icon: IconHorrors,
  },
  {
    title: 'Мистика',
    icon: IconMystic,
  },
  {
    title: 'Детектив',
    icon: IconDetective,
  },
  {
    title: 'Sci-fi',
    icon: IconScifi,
  },
]

export const Level = {
  Hard: 'hard',
  Medium: 'medium',
  Easy: 'easy',
}