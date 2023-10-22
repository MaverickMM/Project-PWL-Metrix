import React, { useState, ChangeEvent, FormEvent } from 'react';
import styles from './Login.module.css';
import '../public/styles/global.css';
import Image from 'next/image';
import logo from '../public/Images/logo.png';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

   // Here you would typically make a request to your server to authenticate the user
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
            </div>
        </div>
     </div>);
};

export default Login;