import React from 'react'
import { HandleSubmitType } from '../../types/types'
import TextInput from '../UI/TextInput/TextInput';
import Button from '../UI/Button/Button';
import classes from './Singin.module.css'
import { useForm } from '../hooks/useForm';

type SigninProps = {
  handleSubmit: HandleSubmitType;
};

const Signin: React.FC<SigninProps> = ({ handleSubmit }) => {
    const {handleChange, getValues} = useForm({
        email: "",
        password: ""
    })
    
    return (
        <form
            onSubmit={(event) =>{
                event.preventDefault()
                const { email, password } = getValues();
                handleSubmit(email, password)
            }}
            onChange={(event) => handleChange(event)}
            className={classes.form}
        >
            <TextInput type="Email" name="email" inputId="11" label="Email" placeholder="Email" required/>
            <TextInput type="password" name="password" inputId="12" label="Password" placeholder="Пароль" required/>
            <Button>Войти</Button>
        </form>
    )
}

export default Signin
