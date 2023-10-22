import React, { useState, ChangeEvent, FormEvent } from 'react';
import styles from './Register.module.css';
import '../styles/global.css';
import Image from 'next/image';
import logo from '../public/Images/logo.png'; // Make sure this path is correct

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
   // Check if passwords match
   if (formData.password !== formData.confirmPassword) {
     alert('Passwords do not match');
     return;
   }

   // Here you would typically make a request to your server to register the user
   console.log(formData);
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
            </div>
        </div>
     </div>);
};

export default Register;
