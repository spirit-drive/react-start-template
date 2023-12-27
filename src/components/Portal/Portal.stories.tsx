import React, { useState } from 'react';
import type { Meta } from '@storybook/react';
import { Portal } from './Portal';
import { Modal } from "../Modal";
import { FullOperationDisplay } from "../Operation";

const meta: Meta<typeof Portal> = {
  title: 'Компоненты/Portal',
  component: Portal,
  tags: ['autodocs'],
};

export default meta;

export const Вывод_текста_через_портал_1 = {  
  args: {
    children: "Этот текст выводится через портал в тег DIV с ID='storybook-root'",
    container: document.getElementById("storybook-root")
  },
};

export const Вывод_модального_окна_через_портал_2 = {  
    args: {
      children: <Modal visible={true} onCloseModalWindow={null}><p>Это модальное окно выводится ЧЕРЕЗ ПОРТАЛ в теге DIV с ID='storybook-root' <b style={{color: 'red'}}>для демонстрации в Storybook</b></p> 
      <p>В промышленной эксплуатации данное модальное окно будет выводиться через портал в теге DIV id='portal' в теле (body) документа</p>
      <p>Спасибо за понимание!</p>
      </Modal>,
      container: document.getElementById("storybook-root")
    },
  };

export const Вывод_операции_через_портал_3 = {  
    args: {
      children: <FullOperationDisplay
                    visible={true}
                    id={1}
                    name="Хлеб"
                    desc="Магазин Пятёрочка"
                    createAt="01.01.2023 23:59:59"
                    amount={56}
                    category={{id: 1, name: "Продукты", photo: ""}}
                    type="Расход"
                />
      ,container: document.getElementById("storybook-root")
    },
  };
