import {Level, FilterType} from './const'

export const getTranslationLevel = (level) => {
  switch (level) {
    case Level.Hard:
      return 'сложный';
    case Level.Medium:
      return 'средний';
    case Level.Easy:
      return 'лёгкий';
    default:
      return '';
  }
};

export const getTranslationFilter = (type) => {
  switch (type) {
    case FilterType.Adventures:
      return 'Приключения';
    case FilterType.Horror:
      return 'Ужасы';
    case FilterType.Mystic:
      return 'Мистика';
    case FilterType.Detective:
      return 'Детектив';
    case FilterType['Sci-fi']:
      return 'Sci-fi';
    default:
      return '';
  }
};
