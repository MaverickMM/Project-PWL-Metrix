import React, { useState, ChangeEvent, FormEvent } from 'react';
import styles from './Login.module.css';
import { useRouter } from 'next/router';
import '../public/styles/global.css';
import Image from 'next/image';
import logo from '../public/Images/logo.png';
import { getRegisteredCredentials } from '../pages/authority';

const Login = () => {
  const router = useRouter();
  const registeredCredentials = getRegisteredCredentials();

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const [loginError, setLoginError] = useState<string | null>(null);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const simulateLogin = () => {
    const { username, password } = formData;

    // Simulate a successful login without a real API
    if (registeredCredentials && username === registeredCredentials.username && password === registeredCredentials.password) {
      setLoginError(null);
      console.log('Login successful');
      router.push('/')
      // You can redirect or perform other actions after successful login
    } else {
      setLoginError('Invalid username or password');
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    simulateLogin();
 };

 return (
     <div className={styles.container}>
         <div className={styles.leftSide}>
            <Image src={logo} alt="Logo" className={styles.logo} width={500} height={300}/>
            <p className={styles.logoText}>Your Music Discovery</p> {/* Replace with your text */}
         </div>
         <div className={styles.rightSide}>
            <div className={styles.formContainer}>
               <h2 className={styles.welcomeText}>Welcome</h2>
               <h1 className={styles.loginText}>Login to your account</h1>
               <form onSubmit={handleSubmit} className={styles.form}>
                   <input 
                      type="text" 
                      name="username" 
                      value= {formData.username}
                      onChange= {handleInputChange}
                      placeholder="Username"
                      required
                      className= { styles.inputField }/>
                   <br />
                   <input 
                      type="password" 
                      name="password" 
                      value= {formData.password}
                       onChange= {handleInputChange}
                       placeholder="Password"
                       required
                       className= { styles.inputField }/>
                   <br />             
                 	<input type="submit" value="Login"
                          className= { styles.submitButton }/>
               </form>
               {loginError && <p className={styles.errorText}>{loginError}</p>}

               {/* Include a link to your registration page */}
      <p>Don't have an account? <a href="/register">Register here</a></p>
            </div>
        </div>
     </div>
     );
};

export default Login;
