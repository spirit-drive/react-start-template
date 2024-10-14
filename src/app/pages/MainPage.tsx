import React from 'react';
import { useTranslation } from 'react-i18next';
import { Btn, Collapse, Layout, Modal, ModalForm, Tooltip } from 'src/UI';
import { IShortCard, ShortCard } from 'src/UI/ShortCard/ShortCard';
import { defaultCards } from '../data';
import { newCardGenerator, randomNumberGenerator } from 'src/features';
import { createPortal } from 'react-dom';
import { OperationModal } from 'src/UI/Modal/OperationModal';

export const MainPage = (): React.ReactElement => {
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
  const [inputValue, setInputValue] = React.useState<string | number | readonly string[]>('');

  const [isCollapseOpened, setIsCollapseOpened] = React.useState<boolean>(false);

  const { t } = useTranslation();

  const [cards, setCards] = React.useState<IShortCard[]>(defaultCards);

  const handleShowMore = (): void => {
    const random = randomNumberGenerator(999, 1);
    setCards([...cards, newCardGenerator(random)]);
  };

  const handleModalFormClick = (): void => {
    setIsModalOpen(true);
  };

  const [showEditModal, setShowEditModal] = React.useState<boolean>(false);

  return (
    <Layout>
      <Tooltip title="Текст по наведению, пока только на русском">
        <p className="margin-bottom-16 padding-bottom-none">{t('appDesc')}</p>
      </Tooltip>

      <Collapse opened={isCollapseOpened} onClick={() => setIsCollapseOpened(!isCollapseOpened)}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati error exercitationem nesciunt harum, corporis
        enim fugiat nobis voluptates beatae, reiciendis placeat quod qui sapiente maxime molestias explicabo nostrum.
        Inventore, vel!
      </Collapse>

      <ModalForm inputValue={inputValue} setInputValue={setInputValue} handleModalFormClick={handleModalFormClick} />

      {createPortal(
        <Modal
          showModal={isModalOpen}
          title="Заголовок модального окна"
          closeHandler={() => {
            setIsModalOpen(false);
            setInputValue('');
          }}
          titleButton="Кнопка"
          onClickButton={() => console.log('КЛИК')}
        >
          <p>{inputValue}</p>
        </Modal>,
        document.body
      )}

      <div className="flex-column gap-16 margin-bottom-24">
        {cards.map((item: IShortCard) => {
          const { title, categoryName, price, description } = item;
          return (
            <ShortCard key={title} categoryName={categoryName} price={price} description={description} title={title} />
          );
        })}
      </div>
      <div className="flex-row gap-16">
        <Btn text={t('buttons.showMore')} onClick={handleShowMore} />
        <Btn text={t('buttons.addNewOperation')} onClick={() => setShowEditModal(true)} />
      </div>
      <OperationModal isOpen={showEditModal} setIsOpen={setShowEditModal} isAddMode />
    </Layout>
  );
};
