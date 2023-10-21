import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div>
                <img src="../Pictures/logo.png" alt="Logo" className={styles.logo} />
                <nav className={styles.nav}>
                    <Link href="/">Home</Link>
                    <Link href="/topsongs">Top Songs</Link>
                    <Link href="/discover">Discover</Link>
                    <Link href="/detectsong">Detect Song</Link>
                </nav>
            </div>
            <input type="text" placeholder="Search..." className={styles.searchBar} />
        </header>
    );
};

export default Header;