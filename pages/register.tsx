import React, { useState, ChangeEvent, FormEvent } from 'react';
import styles from './Register.module.css';
import { useRouter } from 'next/router';
import '../public/styles/global.css';
import Image from 'next/image';
import logo from '../public/Images/logo.png'; // Make sure this path is correct
import { setRegisteredCredentials } from '../pages/authority';

const Register = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  });

  const [registrationError, setRegistrationError] = useState<string | null>(null);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const simulateRegistration = () => {
    const { username, password } = formData;
    setRegistrationError(null);

    // Simulate a successful registration without a real API
    setRegisteredCredentials({ username, password });
    console.log('Registration successful');

    router.push('/login');
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    simulateRegistration();
    
   // Check if passwords match
   if (formData.password !== formData.confirmPassword) {
     alert('Passwords do not match');
     return;
   }
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
               <h1 className={styles.registerText}>Register a new account</h1>
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
                    <input  
                        type="password" 
                        name="confirmPassword"
                        value= {formData.confirmPassword}
                         onChange= {handleInputChange}
                         placeholder="Confirm Password"
                         required      
                          className= { styles.inputField }/>        
                    <br />              
                 	<input type="submit" value="Register"
                          className= { styles.submitButton }/>
               </form>
               {registrationError && <p>{registrationError}</p>}
            </div>
        </div>
     </div>);
};

export default Register;
