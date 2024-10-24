import { useFormik } from 'formik';
import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '../../../Buttons/Button/Button';
import { NumberFormField } from '../../../FormField/NumberFormField';
import { TextFormField } from '../../../FormField/TextFormField';
import { getServerErrorCode, isNotDefinedString, isValidFileType } from '../../../../utils/validation';
import { ProductFormErrors, ProductFormValues, DdlItem } from '../types/ProductFormTypes';
import { TextAreaFormField } from '../../../FormField/TextAreaFormField';
import { SelectFormField } from '../../../FormField/SelectFormField';
import { Uploader } from 'src/components/FormField/UploadFormField';
import { message, UploadFile } from 'antd';
import { UploadChangeParam } from 'antd/es/upload';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, AppState } from 'src/app/redux/store';
import { fetchCategories } from 'src/app/redux/category';
import { useMutation } from '@apollo/client';
import { uploadServerUrl } from 'src/app/constants/Api';
import { ADD_PRODUCT, ProductAddData, ProductAddInput, GET_PRODUCTS } from 'src/helper/connections/productConnections';

export type TypeForm = {
  closeModal?: () => void;
};

export const ProductForm: FC<TypeForm> = ({ closeModal }) => {
  const { t } = useTranslation();
  const [file, setFile] = useState(null);
  const { categories } = useSelector((state: AppState) => state.category);
  const dispatch = useDispatch<AppDispatch>();
  const token = useSelector<AppState, AppState['token']>((state) => state.token);

  const [add] = useMutation<ProductAddData, ProductAddInput>(ADD_PRODUCT, {
    onCompleted: (data) => {
      message.info(t(`forms.ProductForm.SuccessMessage`));
    },
    onError: (error) => {
      message.error(t(`Errors.${getServerErrorCode(error)}`));
    },
    refetchQueries: [GET_PRODUCTS],
  });

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

    if (values.photo == undefined) {
      errors.photoErrors = t(`errors.is_required`);
    } else if (values.photo && !isValidFileType(values.photo, 'image')) {
      errors.photoErrors = t(`errors.need_image_file`);
    }
    return errors;
  };

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const formManager = useFormik<ProductFormValues>({
    initialValues: {
      name: undefined,
      price: undefined,
      oldPrice: undefined,
      desc: undefined,
      photo: undefined,
      photoErrors: undefined,
      photoTouched: undefined,
      category: undefined,
    },
    onSubmit: (values, actions) => {
      console.log('poduct added', values);
      add({
        variables: {
          input: {
            name: values.name,
            price: values.price,
            desc: values.desc,
            categoryId: values.category,
            photo: file,
          },
        },
      });
      actions.resetForm();
      if (closeModal) closeModal();
    },
    validate: validate,
  });

  const { handleSubmit, values, touched, errors, submitCount, handleBlur, handleChange } = formManager;

  const beforeUpload = (photo: UploadFile) => {
    formManager.setFieldValue('photo', photo);
    return true;
  };

  const onFilechange = (file: UploadChangeParam) => {
    if (file.file.status == 'removed') {
      formManager.setFieldValue('photo', undefined);
    }

    if (file.file.status == 'done') {
      setFile(file.file.response.url);
    }
  };

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

      <Uploader
        beforeUpload={beforeUpload}
        onChange={onFilechange}
        submitCount={submitCount}
        errors={errors.photoErrors}
        touched={touched.photoTouched}
        title="photo"
        action={uploadServerUrl}
        headers={{ authorization: `Bearer ${token}` }}
        fileList={values.photo != null ? [values.photo] : []}
      />

      <Button type="submit" variant={'primary'} size="small" onClick={handleSubmit}>
        {t('forms.ProductForm.Button.title')}
      </Button>
    </form>
  );
};
