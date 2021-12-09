import {Level} from './const'

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
