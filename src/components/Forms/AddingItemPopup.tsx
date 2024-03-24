import React, { FC } from "react";
import { Field, Form, Formik } from 'formik';
import { PopupWrapper } from "../PopupWrapper/PopupWrapper";
import cl from './form.module.scss'

export type formData = {
    popupCondition: boolean,
    changePopupCondition: any,
    catalogItems: any,
    setCatalogItems:any
}
function validateField(value: string) {
    if(!value){return 'required'}
}

export const AddingItemPopup: FC<formData> = ({popupCondition,changePopupCondition,catalogItems,setCatalogItems}) => {
    console.log(typeof(catalogItems))
    return (
        <>
            <PopupWrapper
                visible={popupCondition}
                close={changePopupCondition}
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
            catalogItems.push(values);
            setCatalogItems([...catalogItems]);
            changePopupCondition()
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
    )
}