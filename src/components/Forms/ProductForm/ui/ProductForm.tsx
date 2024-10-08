import { useFormik } from 'formik';
import React, { ChangeEvent, FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '../../../Buttons/Button/Button';
import { NumberFormField } from '../../../FormField/NumberFormField';
import { TextFormField } from '../../../FormField/TextFormField';
import { isNotDefinedString } from '../../../../utils/validation';
import { ProductFormErrors, ProductFormValues, DdlItem } from '../types/ProductFormTypes';
import { TextAreaFormField } from '../../../FormField/TextAreaFormField';
import { SelectFormField } from '../../../FormField/SelectFormField';
import { categories } from '../../../../entities/Category/Const/CategoryConst';

export type TypeForm = {
  closeModal?: () => void;
};

export const ProductForm: FC<TypeForm> = ({ closeModal }) => {
  const { t } = useTranslation();

  const validate = (values: ProductFormValues) => {
    const errors = {} as ProductFormErrors;
    if (isNotDefinedString(values.name)) {
      errors.name = t('errors.is_required');
    }

    if (values.price == undefined || Number(values.price) <= 0) {
      errors.price = t('errors.number_is_lower_then_zero');
    }

    if (isNotDefinedString(values.category)) {
      errors.category = t('errors.is_required');
    }

    return errors;
  };

  const formManager = useFormik<ProductFormValues>({
    initialValues: {
      name: '',
      price: undefined,
      oldPrice: undefined,
      desc: '',
      photo: '',
      category: '',
    },
    onSubmit: (values, actions) => {
      console.log('poduct added',values);
      actions.resetForm();
      if(closeModal)
        closeModal();
    },
    validate: validate,
  });

  const { handleSubmit, values, touched, errors, submitCount, handleBlur, handleChange } = formManager;
  const categorySource: DdlItem[] = [];
  categories.map((values) => {
    categorySource.push({ label: values.name, value: values.id });
  });

  const handleChangePrice = (value: number) => {
    formManager.setFieldValue('price', value);
  };

  const handleChangeOldPrice = (value: number) => {
    formManager.setFieldValue('oldPrice', value);
  };

  const handleChangeCategory = (value: ChangeEvent<string>) => {
    formManager.setFieldValue('category', value);
  };

  return (
    <form>
      <TextFormField
        onBlur={handleBlur}
        onChange={handleChange}
        submitCount={submitCount}
        errors={errors.name}
        touched={touched.name}
        name="name"
        value={values.name}
        placeholder={t('forms.ProductForm.Name.title')}
        title={t('forms.ProductForm.Name.placeholder')}
      />

      <TextAreaFormField
        onBlur={handleBlur}
        onChange={handleChange}
        submitCount={submitCount}
        errors={errors.desc}
        touched={touched.desc}
        name="desc"
        value={values.desc}
        placeholder={t('forms.ProductForm.Description.title')}
        title={t('forms.ProductForm.Description.placeholder')}
      />

      <NumberFormField
        onBlur={handleBlur}
        onChange={handleChangePrice}
        submitCount={submitCount}
        errors={errors.price}
        touched={touched.price}
        name="price"
        value={values.price}
        placeholder={t('forms.ProductForm.Price.title')}
        title={t('forms.ProductForm.Price.placeholder')}
      />

      <NumberFormField
        onBlur={handleBlur}
        onChange={handleChangeOldPrice}
        submitCount={submitCount}
        errors={errors.oldPrice}
        touched={touched.oldPrice}
        name="oldPrice"
        value={values.oldPrice}
        placeholder={t('forms.ProductForm.OldPrice.title')}
        title={t('forms.ProductForm.OldPrice.placeholder')}
      />

      <TextFormField
        onBlur={handleBlur}
        onChange={handleChange}
        submitCount={submitCount}
        errors={errors.photo}
        touched={touched.photo}
        name="photo"
        value={values.photo}
        placeholder={t('forms.ProductForm.Photo.title')}
        title={t('forms.ProductForm.Photo.placeholder')}
      />

      <SelectFormField
        onBlur={handleBlur}
        onChange={handleChangeCategory}
        submitCount={submitCount}
        errors={errors.category}
        touched={touched.category}
        value={values.category}
        placeholder={t('forms.ProductForm.Category.title')}
        title={t('forms.ProductForm.Category.placeholder')}
        options={categorySource}
      />

      <Button type="submit" variant={'primary'} size="small" onClick={handleSubmit}>
        {t('forms.ProductForm.Button.title')}
      </Button>
    </form>
  );
};
