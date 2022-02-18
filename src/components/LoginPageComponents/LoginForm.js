import React,{useState} from 'react';
import '../../css/loginform.css';
import dumbell from '../../images/dumbell.svg';

const LoginForm = ({ changeForm, formSelection }) => {
    const [userName, setUserName] = useState('');
    const [password, setUserPassword] = useState('');

    const change = () => {
        changeForm(!formSelection)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log('state', userName, password)
    }

    return (
        <div className='login-wrapper'>
            <div className='form'>
                <form onSubmit={e => { handleSubmit(e) }}>
                    {/* Icon */}
                    <img className='icon' src={dumbell} alt='icon' />

                    {/* Header Text */}
                    <h2>Login</h2>

                    {/* User name */}
                    <div className='input-group'>
                        <input type='text' name='userName' id='userName' onChange={e => setUserName(e.target.value)} required />
                        <label htmlFor='userName'>User Name</label>
                    </div>

                    {/* Password */}
                    <div className='input-group'>
                        <input type='password' name='password' id='password' onChange={e => setUserPassword(e.target.value)} required />
                        <label htmlFor='password'>Password</label>
                    </div>

                    {/* Submit Button -> firebase login -> start of app*/}
                    <input type='submit' value='Login' className='submit-btn' />

                    {/* google sign in btn -> modal for google login */}
                    <button className='google-btn'>
                        <div className="google-icon-wrapper">
                            <a>
                                <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
                            </a>
                        </div>
                    </button>
                </form>

                {/* Register Here -> to registration form */}
                <button className='register-text' onClick={change}>
                    Register here
                </button>
            </div>
        </div>
    );
}

export default LoginForm;


