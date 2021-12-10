import { useDispatch, useSelector } from 'react-redux';

import logo from 'assets/img/logo.svg';
import * as S from './header.styled';

import { getCurrentMenu } from '../../../store/filter/selectors';
import { changeCurrentMenu } from '../../../store/action';

import {AppRoute} from '../../../const';

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
            <S.LinkItem onClick={() => onMenuChange('Квесты')}>
              <S.Link $isActiveLink={currentMenu === 'Квесты'} to={AppRoute.Main}>
                Квесты
              </S.Link>
            </S.LinkItem>

            <S.LinkItem>
              <S.Link to="#">Новичкам</S.Link>
            </S.LinkItem>

            <S.LinkItem>
              <S.Link to="#">Отзывы</S.Link>
            </S.LinkItem>

            <S.LinkItem>
              <S.Link to="#">Акции</S.Link>
            </S.LinkItem>

            <S.LinkItem onClick={() => onMenuChange('Контакты')}>
              <S.Link $isActiveLink={currentMenu === 'Контакты'} to={AppRoute.Contacts}>Контакты</S.Link>
            </S.LinkItem>
          </S.Links>
        </S.Navigation>
        <S.Phone href="tel:88003335599">8 (800) 333-55-99</S.Phone>
      </S.HeaderWrapper>
    </S.StyledHeader>
  )
};

export default Header;
