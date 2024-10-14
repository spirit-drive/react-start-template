import React from 'react';
import { useTranslation } from 'react-i18next';
import { Btn } from '../Btn/Btn';

import '../../app/App.css';

interface ModalFormProps {
  inputValue: string | number | readonly string[];
  setInputValue: React.Dispatch<React.SetStateAction<string | number | readonly string[]>>;
  handleModalFormClick: () => void;
}

/**
 * Компонент вызова модального окна
 * с прокидыванием текста из инпута
 */

export const ModalForm = ({ inputValue, setInputValue, handleModalFormClick }: ModalFormProps): React.ReactElement => {
  const { t } = useTranslation();

  return (
    <div className="flex-column align-items-start gap-8 margin-bottom-16">
      <input
        value={inputValue}
        onChange={(e: React.FormEvent<HTMLInputElement>) => setInputValue(e.currentTarget.value)}
        placeholder={t('inputs.placeholders.enterText')}
      />
      <Btn text={t('buttons.openModal')} isDisabled={inputValue === ''} onClick={handleModalFormClick} />
    </div>
  );
};
