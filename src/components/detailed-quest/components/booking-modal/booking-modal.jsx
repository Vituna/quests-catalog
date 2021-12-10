import * as S from './booking-modal.styled';
import { ReactComponent as IconClose } from 'assets/img/icon-close.svg';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import { getSendApplicationLoading } from '../../../../store/quests/selectors';
import { sendApplication } from '../../../../store/api-actions';

const BookingModal = ({onButtonClick}) => {
  const dispatch = useDispatch();

  const sendApplicationLoading = useSelector(getSendApplicationLoading);

  const [name, setName] = useState('');
  const [peopleCount, setPeopleCount] = useState('');
  const [phone, setPhone] = useState('');
  const [legal, setLegal] = useState(true);

  const resetForm = () => {
    setName('');
    setPeopleCount('');
    setPhone('');
    onButtonClick();
  };

  const handleChangeName = (evt) => {
    setName(evt.target.value);
  };

  const handleChangePeopleCount = (evt) => {
    setPeopleCount(evt.target.value);
  };

  const handleChangePhone = (evt) => {
    setPhone(evt.target.value);
  };

  const handleChangeLegal = (evt) => {
    setLegal(evt.target.value);
  };

  const handleSubmitForm = (evt) => {
    evt.preventDefault();
    dispatch(sendApplication({name, peopleCount: Number(peopleCount), phone, isLegal: true}, resetForm));
  };

  console.log(sendApplicationLoading)
  return (
    <S.BlockLayer>
    <S.Modal>
      <S.ModalCloseBtn onClick={() => onButtonClick()}>
        <IconClose width="16" height="16" />
        <S.ModalCloseLabel >Закрыть окно</S.ModalCloseLabel>
      </S.ModalCloseBtn>
      <S.ModalTitle>Оставить заявку</S.ModalTitle>
      <S.BookingForm
        action="https://echo.htmlacademy.ru"
        method="post"
        id="booking-form"
        onSubmit={handleSubmitForm}
      >
        <S.BookingField>
          <S.BookingLabel htmlFor="booking-name">Ваше Имя</S.BookingLabel>
          <S.BookingInput
            type="text"
            id="booking-name"
            name="booking-name"
            placeholder="Имя"
            value={name}
            onChange={handleChangeName}
            required
          />
        </S.BookingField>
        <S.BookingField>
          <S.BookingLabel htmlFor="booking-phone">
            Контактный телефон
          </S.BookingLabel>
          <S.BookingInput
            type="tel"
            id="booking-phone"
            name="booking-phone"
            placeholder="Телефон"
            value={phone}
            onChange={handleChangePhone}

            required
          />
        </S.BookingField>
        <S.BookingField>
          <S.BookingLabel htmlFor="booking-people">
            Количество участников
          </S.BookingLabel>
          <S.BookingInput
            type="number"
            id="booking-people"
            name="booking-people"
            placeholder="Количество участников"
            value={peopleCount}
            onChange={handleChangePeopleCount}

            required
          />
        </S.BookingField>
        <S.BookingSubmit disabled={sendApplicationLoading} type="submit">Отправить заявку</S.BookingSubmit>
        <S.BookingCheckboxWrapper>
          <S.BookingCheckboxInput
            type="checkbox"
            id="booking-legal"
            name="booking-legal"
            value={legal}
            onChange={handleChangeLegal}

            required
          />
          <S.BookingCheckboxLabel
            className="checkbox-label"
            htmlFor="booking-legal"
          >
            <S.BookingCheckboxText>
              Я согласен с{' '}
              <S.BookingLegalLink href="#">
                правилами обработки персональных данных и пользовательским
                соглашением
              </S.BookingLegalLink>
            </S.BookingCheckboxText>
          </S.BookingCheckboxLabel>
        </S.BookingCheckboxWrapper>
      </S.BookingForm>
    </S.Modal>
  </S.BlockLayer>
  )
  };

export default BookingModal;
