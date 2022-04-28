import React from 'react';

const Form = (props) => {
    const {
        values,
        submit,
        change,
        disabled,
        errors
    } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
      }
    
      const onChange = evt => {
        const { name, value, checked, type } = evt.target
        const valueToUse = type === "checkbox" ? checked : value
        change(name, valueToUse)
      }
    

    return (
        <div className='container'>
            <form className='form container' onSubmit={onSubmit}>
                <label>First Name
                    <input 
                    type='text'
                    name='firstName'
                    placeholder='Enter First Name'
                    value={values.firstName}
                    onChange={onChange}
                    />
                </label>
                <label>Last Name
                    <input 
                    type='text'
                    name='lastName'
                    placeholder='Enter Last Name'
                    value={values.lastName}
                    onChange={onChange}
                    />
                </label>
                <label>Email
                    <input 
                    type='text'
                    name='email'
                    placeholder='Enter Email Address'
                    value={values.email}
                    onChange={onChange}
                    />
                </label>
                <label>Password
                    <input 
                    type='password'
                    name='password'
                    placeholder="Enter Password"
                    value={values.password}
                    onChange={onChange}
                    />
                </label>
                <label>Terms and Conditions
                    <input 
                    type='checkbox'
                    />
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
};

export default Form