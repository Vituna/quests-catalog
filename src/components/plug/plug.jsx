import { MainLayout } from 'components/common/common';
import * as S from './plug.styled';

import { AppRoute } from 'const';

const PlugPage = () => (
  <MainLayout>
    <S.Main>
      <S.PageTitle>This page is under construction.</S.PageTitle>
      <S.Link to={AppRoute.Main}>Click here to return to the main page</S.Link>
    </S.Main>
  </MainLayout>
)

export default PlugPage
