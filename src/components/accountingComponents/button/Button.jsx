import React from "react";
import './button.css'

export const Button = ({children, ...props}) =>{
    const btnClass = ['button', props.position].toString().replace(',' , ' ')

    return(
        <button
         type="button"
         data-operationId = {props.operationId}
         className={btnClass}>
              {children}
        </button>
    )
}