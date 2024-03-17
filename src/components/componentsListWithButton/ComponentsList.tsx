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
  function validateField(value: string) {
    if(!value){return 'required'}
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
      <PopupWrapper
            visible={popupCondition}
            close={()=>{setPopupCoindition(!popupCondition)}}
      >
        <Formik
          initialValues={{
            name:'',
            createdAt:'',
            category: '',
            total: '',
            description: '',
            operationId:''
          }}
          onSubmit ={values => {
            console.log('submit', values)
            const date = new Date();
            values.operationId=date.toString()
            catalog.push(values);
            setCatalog([...catalog]);
            setPopupCoindition(!popupCondition)
          }}
          >
          {({ errors, touched }) => (
            <Form className={cl.formWrapper}>
              <label className={cl.label}>
                <span>Имя операции</span>
                <Field
                  name="name"
                  validate={validateField} />
                {errors.name && touched.name && (
                  <div className={cl.error}>{errors.name}</div>
                )}
              </label>
              <label className={cl.label}>
                <span>название операции</span>

                <Field
                  name="dateOperation"
                  type="date"
                  validate={validateField} />
                {errors.createdAt && touched.createdAt && (
                  <div className={cl.error}>{errors.createdAt}</div>
                )}
              </label>
              <label className={cl.label}>
                <span>Категория</span>
                <Field
                  name="category"
                  type="text"
                  validate={validateField} />
                  {errors.category && touched.category && (
                    <div className={cl.error}>{errors.category}</div>
                  )}
              </label>
              <label className={cl.label}>
                <span>сумма операции</span>
                <Field
                  name="total"
                  type="number"
                  validate={validateField} />
                  {errors.total && touched.total && (
                    <div className={cl.error}>{errors.total}</div>
                  )}
              </label>
              <label className={cl.label}>
                <span>Описание</span>
                <Field
                  name="description"
                  type="text"
                  validate={validateField} />
                  {errors.total && touched.total && (
                    <div className={cl.error}>{errors.total}</div>
                  )}
              </label>
              <button className={cl.button} type='submit'>
                save
</button>
            </Form>
          )}
        </Formik>
        </PopupWrapper>
    </>
  );
};
