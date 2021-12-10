import { MainLayout } from 'components/common/common';
import { AppRoute } from 'const';
import * as S from './not-found.styled';

const NotFoundPage = () => (
  <MainLayout>
    <S.Main>
      <S.PageTitle>404. Requested page is not available</S.PageTitle>
      <S.Link to={AppRoute.Main}>Click here to return to the main page</S.Link>
    </S.Main>
  </MainLayout>
)

export default NotFoundPage
