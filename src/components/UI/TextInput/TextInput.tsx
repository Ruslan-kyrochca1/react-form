import React from 'react'
import { InputType } from '../../../types/types'
import classes from './TextInput.module.css'

const Input =  ({ placeholder, name, description, error, type, label, required, variant = 'default', radius, size = "medium", withAsterisk = false, disabled, inputId, icon }: InputType) => {
  const radiusClass = classes[`radius-${radius || 'md'}`];
  const className  = `${classes.input} 
                      ${classes['input-' + variant]} 
                      ${radiusClass}
                      ${icon ? classes.withIcon : ''}`
  const labelClass = `${classes.label} ${withAsterisk ? classes['label-withAsterisk'] : ''}`;
  return (
    <div className={classes.container} style={{fontSize: size===undefined?"medium":size }}>
      <label htmlFor={inputId} className={labelClass}>{label}</label>
      {description&&<p className={classes.description}>{description}</p>}
      <div className={classes.inputWrapper}>
        {icon && <div className={classes.iconSection}>{icon}</div>}
        <input 
          id={inputId} 
          className={className} 
          name={name} 
          type={type} 
          required={required} 
          placeholder={placeholder} 
          disabled={disabled}/>
        </div>
        {error && <span style={{color: 'red', fontSize: '12px'}}>Ошибка: {error}</span>}
    </div>
    
  )
}

export default Input