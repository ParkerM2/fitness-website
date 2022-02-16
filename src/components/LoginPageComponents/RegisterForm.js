import React from 'react'

const RegisterForm = () => {

    return (
        <form action="" className='form' onSubmit="{handleSubmit}">
            {/* Icon */}
            <img alt='icon' />

            {/* Header Text */}
            <h2>Register</h2>

            {/* User name */}
            <div className='input-group'>
                <input type='text' name='userName' id='userName' required />
                <label htmlFor='userName'>User Name</label>
            </div>

            {/* Password */}
            <div className='input-group'>
                <input type='text' name='password' id='password' required />
                <label htmlFor='password'>Password</label>
            </div>
          
            {/* Confirm Password */}
            <div className='input-group'>
                <input type='text' name='confirmPassword' id='confirmPassword' required />
                <label htmlFor='confirmPassword'>Password</label>
            </div>

            {/* Submit Button */}
            <input type='submit' value='Login' className='submit-btn' />
        </form>
    );
}

export default RegisterForm