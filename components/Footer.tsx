import React from 'react';
import { useRouter } from 'next/router';
import styles from './Footer.module.css';

const Footer = () => {
    const router = useRouter();

  return (
    <footer className={styles.footer}>
      <div className={styles.copyrightContainer}>
                <p className={styles.copyright}>Copyright 2023 Metrix</p>
                <p className={styles.copyright}>&nbsp;</p>
                <p className={styles.copyright}>Maverick Mikolas Mulyadi</p>
                <p className={styles.copyright}>Edith Felicia Putri</p>
                <p className={styles.copyright}>Beatrix Stefany</p>
            </div>
    </footer>
  );
};

export default Footer;