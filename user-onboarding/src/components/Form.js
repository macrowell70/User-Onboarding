import React from 'react';

const Form = (props) => {
    const {
        values,
        submit,
        change,
        disabled,
        errors
    } = props

    return (
        <div className='container'>
            <form className='form container'>
                <label>First Name
                    <input 
                    type='text'
                    name='firstName'
                    placeholder='Enter First Name'
                    />
                </label>
                <label>Last Name
                    <input 
                    type='text'
                    name='lastName'
                    placeholder='Enter Last Name'
                    />
                </label>
                <label>Email
                    <input 
                    type='text'
                    name='email'
                    placeholder='Enter Email Address'
                    />
                </label>
                <label>Password
                    <input 
                    type='password'
                    name='password'
                    placeholder="Enter Password"
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