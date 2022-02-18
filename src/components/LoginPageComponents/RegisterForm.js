import React from 'react'
import '../../css/loginform.css';
import dumbell from '../../images/dumbell.svg';

const RegisterForm = ({ changeForm, formSelection }) => {
    
    const change = () => {
        changeForm(!formSelection)
    }

    return (
        <div className='login-wrapper'>
            <div className='form'>
                <form action="" onSubmit="{handleSubmit}">
                    
                    {/* Icon */}
                    <img className='icon' src={dumbell} alt='icon' />
                    {/* Header Text */}
                    <h2>Register</h2>

                    {/* User name */}
                    <div className='input-group'>
                        <input type='text' name='userName' autoComplete='user name' id='userName' required />
                        <label htmlFor='userName'>User Name</label>
                    </div>
                    
                    {/* Email */}
                    <div className='input-group'>
                        <input type='text' name='Email' autoComplete='email' id='Email' required />
                        <label htmlFor='Email'>Email Address</label>
                    </div>

                    {/* Password */}
                    <div className='input-group'>
                        <input type='password' autoComplete='new-password' name='password' id='password' required />
                        <label htmlFor='password'>Password</label>
                    </div>
          
                    {/* Confirm Password */}
                    <div className='input-group'>
                        <input type='password' autoComplete='new-password' name='confirmPassword' id='confirmPassword' required />
                        <label htmlFor='confirmPassword'>Confirm Password</label>
                    </div>
                    {/* google sign in btn */}
                    <button className='google-btn'>
                        <div className="google-icon-wrapper">
                            <a>
                                <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
                            </a>
                        </div>
                    </button>

                    {/* Submit Button */}
                    <input type='submit' value='Register' className='submit-btn' />
                </form>
                <button className='register-text' onClick={change}>
                    Back To Login
                </button>
            </div>
        </div>
    );
}

export default RegisterForm