import React, {ReactNode} from "react";
import { Modal } from "./Modal";

export default {
  title: "Компоненты/Modal",
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    visible: {
      type: Boolean,
      description: "Отобразить/Скрыть модальное окно",
      defaultValue: true,
      options: [true, false],
      control: {
        type: "radio"
      },
    },
    children: {
      type: ReactNode,
      description: "Вутреннее содержимое модального окна",
    }
  }
}

const Template = (arg) => <Modal {...arg} />

export const modal = Template.bind({});

modal.args = {
  visible: true,
  children: "Lorem Ipsum - это текст-\"рыба\", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной \"рыбой\" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum."
};