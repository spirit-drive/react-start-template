import React, { FC, useReducer } from 'react';
import DefaultButton from '../../components/Buttons/DefaultButton';
import CustomInput from '../../components/Inputs/CustomInput';
import { useForm } from 'react-hook-form';
import { useStore } from '../../helper/useStore';
import { DisplayProductProps } from '../../types';
import { generateUniqId } from '../../helper/utils';

type CreateProductFormProps = {
  toggleModal: () => void,
}

type StateFormType = {
  coast: number,
  category: string,
  img: string,
  title: string,
  description: string,
}

enum ActionTypeEnum {
  setCoast = 'setCoast',
  setCategory = 'setCategory',
  setImg = 'setImg',
  setTitle = 'setTitle',
  setDescription = 'setDescription',
}

type ActionType =
  {type: ActionTypeEnum.setCoast, payload: number}
  | {type: ActionTypeEnum.setCategory, payload: string}
  | {type: ActionTypeEnum.setImg, payload: string}
  | {type: ActionTypeEnum.setTitle, payload: string}
  | {type: ActionTypeEnum.setDescription, payload: string}

const stateForm: StateFormType = {
  coast: 0,
  category: '',
  img: 'http://placehold.it/50x50',
  title: '',
  description: '',
}
const reducer = (stateForm: StateFormType, action: ActionType): StateFormType => {
  switch (action.type) {
    case ActionTypeEnum.setCoast:
      return {...stateForm, coast: action.payload};
    case ActionTypeEnum.setCategory:
      return {...stateForm, category: action.payload};
    case ActionTypeEnum.setImg:
      return {...stateForm, img: action.payload};
    case ActionTypeEnum.setTitle:
      return {...stateForm, title: action.payload};
    case ActionTypeEnum.setDescription:
      return {...stateForm, description: action.payload};
    default:
      return stateForm
  }
}

const CreateProductForm: FC<CreateProductFormProps> = ({toggleModal}) => {
  const {register, handleSubmit} = useForm();
  const { getStore, addProduct } = useStore();

  const initialStore = getStore();

  const [state, dispatch] = useReducer(reducer, stateForm);

  const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case 'coast':
        dispatch({type: ActionTypeEnum.setCoast, payload: Number(e.target.value)})
        break
      case 'category':
        dispatch({type: ActionTypeEnum.setCategory, payload: e.target.value})
        break
      case 'img':
        dispatch({type: ActionTypeEnum.setImg, payload: e.target.value})
        break
      case 'title':
        dispatch({type: ActionTypeEnum.setTitle, payload: e.target.value})
        break
      case 'description':
        dispatch({type: ActionTypeEnum.setDescription, payload: e.target.value})
        break
    }
  }

  const onSubmit = (product: DisplayProductProps) => {
    const productWithKey = { ...product, key: generateUniqId() };
    addProduct(productWithKey)
    toggleModal();
  }

  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
      <CustomInput placeholder='введите заголовок' type='text' callback={handleForm} label='title' required register={register}/>
      <CustomInput placeholder='введите описание' type='text' callback={handleForm} label='description' required register={register}/>
      <CustomInput placeholder='введите категорию' type='text' callback={handleForm} label='category' required register={register}/>
      <CustomInput placeholder='введите цену' type='number' callback={handleForm} label='coast' required register={register} />
      <CustomInput placeholder='введите url картинки' defaultValue='http://placehold.it/50x50' type='text' callback={handleForm} label='img' required register={register}/>

      <DefaultButton>Создать</DefaultButton>
    </form>
  )
}

export default CreateProductForm