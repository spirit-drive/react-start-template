import { useFormik } from 'formik';
import React, { ChangeEvent, FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '../../../Buttons/Button/Button';
import { NumberFormField } from '../../../FormField/NumberFormField';
import { TextFormField } from '../../../FormField/TextFormField';
import { isNotDefinedString } from '../../../../utils/validation';
//import { ProductFormErrors } from '../types/ProductFormTypes';
import { TextAreaFormField } from '../../../FormField/TextAreaFormField';
import { SelectFormField } from '../../../FormField/SelectFormField';
import { useFetchCategoriesQuery } from 'src/shared/api/rtk/categoriesApi';
import { useCreateUpdateProductMutation } from 'src/shared/api/rtk/productApi';
import { Product, ProductParams, DdlItem, ProductFormErrors } from 'src/types/ProductTypes';
import { FileUploader } from 'src/components/FileUploader/FileUploader';

export type TypeForm = {
  id?: string;
  closeModal?: () => void;
  product?: Product;
};

export const ProductForm: FC<TypeForm> = ({ closeModal, id, product }) => {
  const { t } = useTranslation();
  const { data: categories, error, isLoading } = useFetchCategoriesQuery();
  const [editProduct, { isLoading: createCategoryLoading, error: createCategoryError }] =
    useCreateUpdateProductMutation();

  const validate = (values: ProductParams) => {
    const errors = {} as ProductFormErrors;
    if (isNotDefinedString(values.name)) {
      errors.name = t('errors.is_required');
    }

    if (values.price == undefined || Number(values.price) <= 0) {
      errors.price = t('errors.number_is_lower_then_zero');
    }

    if (isNotDefinedString(values.categoryId)) {
      errors.category = t('errors.is_required');
    }

    if (values.photo == undefined) {
      errors.photo = t(`errors.is_required`);
    }

    return errors;
  };

  const formManager = useFormik<ProductParams>({
    initialValues: {
      name: product?.name ?? undefined,
      price: product?.price ?? undefined,
      oldPrice: product?.oldPrice ?? undefined,
      desc: product?.desc ?? undefined,
      photo: product?.photo ?? undefined,
      categoryId: product?.category?.id ?? undefined,
      category: product?.category ?? null,
    },
    onSubmit: (values, actions) => {
      editProduct({ values, id }).then((data) => {});
      actions.resetForm();
      if (closeModal) closeModal();
    },
    validate: validate,
  });

  const { handleSubmit, values, touched, errors, submitCount, handleBlur, handleChange, setFieldValue } = formManager;

  const handlePhotoUpdate = useCallback(
    (photo: string) => {
      setFieldValue('photo', photo);
    },
    [setFieldValue]
  );

  const categorySource: DdlItem[] = [];
  categories?.map((values) => {
    categorySource.push({ label: values.name, value: values.id });
  });

  const handleChangePrice = (value: number) => {
    formManager.setFieldValue('price', value);
  };

  const handleChangeOldPrice = (value: number) => {
    formManager.setFieldValue('oldPrice', value);
  };

  const handleChangeCategory = (value: ChangeEvent<string>) => {
    formManager.setFieldValue('categoryId', value);
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

      <SelectFormField
        name="categoryId"
        onBlur={handleBlur}
        onChange={handleChangeCategory}
        submitCount={submitCount}
        errors={errors.categoryId}
        touched={touched.categoryId}
        value={values.category?.id}
        placeholder={t('forms.ProductForm.Category.title')}
        title={t('forms.ProductForm.Category.placeholder')}
        options={categorySource}
      />

      <FileUploader pic={values.photo} proportion="16/9" onUpload={handlePhotoUpdate} />

      <Button type="submit" variant={'primary'} size="small" onClick={handleSubmit}>
        {t('forms.ProductForm.Button.title')}
      </Button>
    </form>
  );
};
