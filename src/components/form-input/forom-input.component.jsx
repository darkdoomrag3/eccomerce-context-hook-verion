import React from 'react'
import './form-input.style.scss';


const ForomInput = ({ handelChange, label, ...otherProps }) => {
    return (
        <div className='group'>
            <input className='form-input' onChange={handelChange}  {...otherProps}/>

        {
            label ? 
            (<label className={`${otherProps.value.lenght ? 'shrink' : '' } form-input-label`}  >
{label}
            </label>)

                : null

        }

        </div>
    )
}

export default ForomInput;
