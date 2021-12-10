import { useDispatch, useSelector } from 'react-redux';

import logo from 'assets/img/logo.svg';
import * as S from './header.styled';

import { getCurrentMenu } from '../../../store/filter/selectors';
import { changeCurrentMenu } from '../../../store/action';

import { AppRoute, MenuType } from '../../../const';

const Header = () => {
  const dispatch = useDispatch();

  const currentMenu = useSelector(getCurrentMenu);

  const onMenuChange = (menu) => {
    dispatch(changeCurrentMenu(menu))
  }

  return (
    <S.StyledHeader>
      <S.HeaderWrapper>
        <S.Logo>
          <S.Image src={logo} alt="Логотип Escape Room" width="134" height="50" />
        </S.Logo>

        <S.Navigation>
          <S.Links>
            <S.LinkItem onClick={() => onMenuChange(MenuType.Quests)}>
              <S.Link $isActiveLink={currentMenu === MenuType.Quests} to={AppRoute.Main}>
                Квесты
              </S.Link>
            </S.LinkItem>

            <S.LinkItem onClick={() => onMenuChange(MenuType.Beginners)}>
              <S.Link $isActiveLink={currentMenu === MenuType.Beginners} to={AppRoute.Plug}>
                Новичкам
              </S.Link>
            </S.LinkItem>

            <S.LinkItem onClick={() => onMenuChange(MenuType.Reviews)}>
              <S.Link $isActiveLink={currentMenu === MenuType.Reviews} to={AppRoute.Plug}>
                Отзывы
              </S.Link>
            </S.LinkItem>

            <S.LinkItem onClick={() => onMenuChange(MenuType.Stock)}>
              <S.Link $isActiveLink={currentMenu === MenuType.Stock} to={AppRoute.Plug}>
                Акции
              </S.Link>
            </S.LinkItem>

            <S.LinkItem onClick={() => onMenuChange(MenuType.Contacts)}>
              <S.Link $isActiveLink={currentMenu === MenuType.Contacts} to={AppRoute.Contacts}>
                Контакты
              </S.Link>
            </S.LinkItem>
          </S.Links>
        </S.Navigation>
        <S.Phone href={MenuType.Tel}>
          8 (800) 333-55-99
        </S.Phone>
      </S.HeaderWrapper>
    </S.StyledHeader>
  )
};

export default Header;
