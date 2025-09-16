import React, { FC } from 'react'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { Button, Form, Input, Alert } from 'antd'
import { FormItem } from '../../../shared/form-item/form-item';

import { RegisterData } from 'src/models/register'

export interface IRegisterProps {
    registerError: string[]
    onSubmit: SubmitHandler<RegisterData>
}


const RegisterForm: FC<IRegisterProps> = ({onSubmit, registerError}) => {
    const { control, handleSubmit, formState: { errors }, watch } = useForm<RegisterData>()

    return (
      <Form onFinish={handleSubmit(onSubmit)}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ minWidth: 410, maxWidth: 600 }}
      >
          <Controller
            name="email"
            control={control}
            rules={{required: "Обязательно для заполнения"}}
            render={({field}) => (
              <Form.Item
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <FormItem
                  title="Адрес эл. почты"
                  validateStatus={errors && errors["email"] ? "error" : ""}
                  help={errors.email?.message}
                >
                  <Input {...field} />
                </FormItem>
              </Form.Item>
            )}
          />

          <Controller
            name="password"
            control={control}
            rules={{
              required: "Обязательно для заполнения",
              minLength: {
                value: 6,
                message: "Минимальная длина названия - 6 символов" }
            }}
            render={({field}) => (
              <Form.Item>
                <FormItem
                  title="Пароль"
                  validateStatus={errors && errors["password"] ? "error" : ""}
                  help={errors.password?.message}
                >
                  <Input.Password {...field}  />
                </FormItem>
              </Form.Item>
            )}
          />

          <Controller
            name="confirm_password"
            control={control}
            rules={{
              required: "Обязательно для заполнения",
              validate: (value: string) => {
                if (watch("password") != value)
                  return "Пароли должны совпадать";
              }}}
            render={({field}) => (
              <Form.Item>
                <FormItem
                  title="Подтверждение пароля"
                  validateStatus={errors && errors["confirm_password"] ? "error" : ""}
                  help={errors.confirm_password?.message}
                >
                  <Input.Password {...field}  />
                </FormItem>
              </Form.Item>
            )}
          />

          {(registerError.length > 0) &&
                <Alert message={registerError} type="error" style={{marginBottom: 20}} />
          }

          <Form.Item label={null}>
            <Button htmlType="submit" type="primary">Регистрация</Button>
          </Form.Item>
      </Form>
    )
}

export default RegisterForm