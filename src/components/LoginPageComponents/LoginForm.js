import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/loginform.css';
import dumbell from '../../images/dumbell.svg';

const LoginForm = () => {
    return (
        <div className='login-wrapper'>
            <form action="" className='form' onSubmit="handleSubmit">
                {/* Icon */}
                <img className='icon' src={dumbell} alt='icon' />

                {/* Header Text */}
                <h2>Login</h2>

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

                <div className='button-row'>
                    {/* Submit Button */}
                    <input type='submit' value='Login' className='submit-btn' />

                    {/* google sign in btn */}
                    <button className='google-btn'>
                        <div className="google-icon-wrapper">
                            <a>
                                <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
                            </a>
                        </div>
                    </button>
                </div>


                <button className='register-text'>
                    Register here
                </button>

            </form>
        </div>
    );
}

export default LoginForm


