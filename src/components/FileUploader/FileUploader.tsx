import React, { ChangeEvent, memo, useEffect } from 'react';
import cn from 'clsx';
import { useUploadFileMutation } from 'src/shared/api/rtk/fileUploadApi';
import s from './FileUploader.module.scss';

interface FileUploaderProps {
  title?: string;
  pic?: string;
  proportion?: string;
  disabled?: boolean;
  onUpload: (url: string) => void;
  className?: string;
}

export const FileUploader = memo(
  ({ title, pic, proportion = '1/1', disabled, onUpload, className }: FileUploaderProps) => {
    const [uploadFile, { data, isLoading, error }] = useUploadFileMutation();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      if (isLoading || !e.target.files) return;
      const [file] = e.target.files;
      uploadFile(file);
    };

    useEffect(() => {
      if (!data) return;
      onUpload(data);
    }, [data, onUpload]);

    return (
      <div className={cn(s.outer, className, { [s.outer_disabled]: isLoading || disabled })}>
        <h4 className="py-3">Изображение</h4>
        <div className={s.picOuter} style={{ aspectRatio: proportion }}>
          <div className={cn(s.outer, className)}>
            <img className={s.pic} src={pic} />
          </div>
          <label className={s.edit}>
            <i className="fas fa-file-edit"></i>

            <input className={s.input} type="file" onChange={handleChange} />
          </label>
        </div>
        {error && <h4>{error as string}</h4>}
      </div>
    );
  }
);

FileUploader.displayName = 'FileUploader';
