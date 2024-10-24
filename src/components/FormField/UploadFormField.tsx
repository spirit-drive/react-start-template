import { Upload } from 'antd';
import React, { FC } from 'react';
import { Button } from '../Buttons/Button/Button';
import { MdOutlineFileUpload } from 'react-icons/md';
import { FormItem } from '../FormItem/FormItem';
import { getValidates } from 'src/utils/validation';
import { UploaderProps } from '../../types/FormFieldTypes';

export const Uploader: FC<UploaderProps> = ({
  title,
  beforeUpload,
  onChange,
  fileList,
  errors,
  touched,
  submitCount,
  action,
  headers,
}) => {
  const { validateStatus, help } = getValidates(errors, touched, submitCount);

  return (
    <FormItem title={title} validateStatus={validateStatus} help={help}>
      <Upload beforeUpload={beforeUpload} fileList={fileList} onChange={onChange} action={action} headers={headers}>
        <Button size="small" type="button" variant="secondary">
          <MdOutlineFileUpload /> Выберите фото...
        </Button>
      </Upload>
    </FormItem>
  );
};
