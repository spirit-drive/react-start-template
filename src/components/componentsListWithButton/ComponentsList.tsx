import React, { useState } from 'react';
import { Layout } from '../lauout/Layout';
import cn from 'classnames';
import cl from './ComponentsList.module.scss';
import { Button } from '../button/Button';
import { createRandomOperation } from './functions';
import { CoMponentItem } from './ComponentItem';
import { PopupWithButton } from '../popupWithButton/PopupWithButton';
import { PopupWrapper } from '../PopupWrapper/PopupWrapper';
import { Field, Form, Formik } from 'formik';
import { AddingItemPopup } from '../Forms/AddingItemPopup';
const operations = [
  {
    operationId: '01',
    total: '100500',
    category: 'мизерные траты',
    name: 'First operation',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ipsam vel qui quae repellat quasi, maxime quos aliquid dicta doloremque laudantium similique perferendis dolores itaque! Molestiae impedit quaerat deserunt nobis non iste perferendis aut velit sapiente molestias ea, corrupti illum dolorem veritatis minima, explicabo mollitia necessitatibus, maiores in doloribus eius quibusdam sunt ipsum. Exercitationem, incidunt praesentium deleniti magni blanditiis tenetur ipsam distinctio voluptatem hic. Optio assumenda numquam ad architecto natus ex aspernatur, earum, facere perspiciatis quidem voluptates fugiat saepe illo sed. Recusandae corporis sint esse sequi cupiditate laboriosam culpa eaque, quod voluptate ut nesciunt eos? Itaque debitis nesciunt accusantium esse!',
    createdAt: '20-10-2020',
  },
  {
    operationId: '02',
    total: '100501',
    category: 'траты',
    name: 'SecondOperation',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ipsam vel qui quae repellat quasi, maxime quos aliquid dicta doloremque laudantium similique perferendis dolores itaque! Molestiae impedit quaerat deserunt nobis non iste perferendis aut velit sapiente molestias ea, corrupti illum dolorem veritatis minima, explicabo mollitia necessitatibus, maiores in doloribus eius quibusdam sunt ipsum. Exercitationem, incidunt praesentium deleniti magni blanditiis tenetur ipsam distinctio voluptatem hic. Optio assumenda numquam ad architecto natus ex aspernatur, earum, facere perspiciatis quidem voluptates fugiat saepe illo sed. Recusandae corporis sint esse sequi cupiditate laboriosam culpa eaque, quod voluptate ut nesciunt eos? Itaque debitis nesciunt accusantium esse!',
    createdAt: '20-10-2020',
  },
  {
    operationId: '03',
    total: '100503',
    category: 'Болшьшие траты',
    name: 'third operation',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ipsam vel qui quae repellat quasi, maxime quos aliquid dicta doloremque laudantium similique perferendis dolores itaque! Molestiae impedit quaerat deserunt nobis non iste perferendis aut velit sapiente molestias ea, corrupti illum dolorem veritatis minima, explicabo mollitia necessitatibus, maiores in doloribus eius quibusdam sunt ipsum. Exercitationem, incidunt praesentium deleniti magni blanditiis tenetur ipsam distinctio voluptatem hic. Optio assumenda numquam ad architecto natus ex aspernatur, earum, facere perspiciatis quidem voluptates fugiat saepe illo sed. Recusandae corporis sint esse sequi cupiditate laboriosam culpa eaque, quod voluptate ut nesciunt eos? Itaque debitis nesciunt accusantium esse!',
    createdAt: '20-10-2020',
  },
  {
    operationId: '04',
    total: '100504',
    category: 'Очень большие траты',
    name: 'lastOperation',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ipsam vel qui quae repellat quasi, maxime quos aliquid dicta doloremque laudantium similique perferendis dolores itaque! Molestiae impedit quaerat deserunt nobis non iste perferendis aut velit sapiente molestias ea, corrupti illum dolorem veritatis minima, explicabo mollitia necessitatibus, maiores in doloribus eius quibusdam sunt ipsum. Exercitationem, incidunt praesentium deleniti magni blanditiis tenetur ipsam distinctio voluptatem hic. Optio assumenda numquam ad architecto natus ex aspernatur, earum, facere perspiciatis quidem voluptates fugiat saepe illo sed. Recusandae corporis sint esse sequi cupiditate laboriosam culpa eaque, quod voluptate ut nesciunt eos? Itaque debitis nesciunt accusantium esse!',
    createdAt: '20-10-2020',
  },
];

export const ComponentsList = () => {
  const [catalog, setCatalog] = useState(operations);
  function generateOperation() {
    const date = new Date();
    const newItem = createRandomOperation(date);
    catalog.push(newItem);
    setCatalog([...catalog]);
  }
  const [popupCondition, setPopupCoindition]= useState(false)
  return (
    <>
      <Layout>
        <Button
          onClick={() => { setPopupCoindition(!popupCondition) }}>
          add operation
        </Button>
        <div className={cn(cl.operations_wrapper)}>
          {catalog.map((catalogItem) => (
            <CoMponentItem key={catalogItem.operationId} item={catalogItem} />
          ))}
        </div>
        <div className={cn(cl.buttons)}>
          <Button onClick={() => generateOperation()} itemClass={cl.showMore}>
            Добавить произвольную операцию
          </Button>
        </div>
      </Layout>
      <AddingItemPopup
        popupCondition={popupCondition}
        changePopupCondition={() => { setPopupCoindition(!popupCondition) }}
        catalogItems={catalog}
        setCatalogItems = {setCatalog}

      />

    </>
  );
};
