import React from 'react'
import TextInput from '../UI/TextInput/TextInput'
import Button from '../UI/Button/Button'
import classes from './Singup.module.css'
import { RegisterSubmitType } from '../../types/types';
import { useForm } from '../hooks/useForm';

type SignupProps = {
  handleRegister: RegisterSubmitType;
};

const Signup: React.FC<SignupProps> = ({ handleRegister }) => {
  const [error, setError] = React.useState<string | null>(null);
  const {ref, handleChange, getValues} = useForm({
    name:"",
    text: "",
    email: "",
    sex: "",
    password: "",
    confirmPassword: "",
  })

  const inputData = [
      {
      id: 0,
      type: 'text',
      name: 'name',
      label: 'Имя',
      placeholder: 'Введите ваше имя',
      description: 'Как к вам обращаться?',
      withAsterisk: true,
      required: true,
      variant: 'default',
    },
    {
      id: 1,
      type: 'text',
      name: 'nickname',
      label: 'Ник',
      placeholder: 'Придумайте ник',
      description: 'Будет отображаться в профиле',
      variant: 'default',
    },
    {
      id: 2,
      type: 'email',
      name: 'email',
      label: 'Email',
      placeholder: 'example@mail.com',
      description: 'Для того, чтоб держать вас в курсе последних новостей',
      variant: 'default',
      withAsterisk: true,
      required: true
    },
    {
      id: 3,
      type: 'text',
      name: 'sex',
      label: 'Пол',
      placeholder: 'Ваш пол',
      description: 'Укажите ваш пол',
      variant: 'default',
    },
    {
      id: 4,
      type: 'password',
      name: 'password',
      label: 'Пароль',
      placeholder: 'Придумайте пароль',
      description: 'Пароль должен быть надёжным',
      withAsterisk: true,
      required: true,
      variant: 'default',
    },
    {
      id: 5,
      type: 'password',
      name: 'confirmPassword',
      label: 'Повторите пароль',
      placeholder: 'Повторите пароль',
      description: 'Пароли должны совпадать',
      withAsterisk: true,
      required: true,
      variant: 'default',
    }
  ]
  return (
    <div className='container'>
      <form
        className={classes.form}
        onChange={handleChange}
        onSubmit={(event)=>{
          event.preventDefault()
          const values = getValues()
          if (values.password !== values.confirmPassword) {
            setError("Пароли не совпадают");
            return;
          }
          handleRegister(values.text, values.sex, values.password, values.name, values.email)
  
          
        }}
      >
        {inputData&&inputData.map(el => 
        <TextInput
          key={el.id}
          inputId={el.id + ""}
          {...el}
          variant={'default'}
        />)}
        <Button>Войти</Button>
        {error && <span className={classes.error}>{error}</span>}
      </form>
    </div>
  )
}

export default Signup
