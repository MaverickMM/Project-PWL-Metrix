import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import styles from './Header.module.css';

const Header = () => {
    const router = useRouter();

    return (
        <header className={styles.header}>
            <div>
                <nav className={styles.nav}>
                    <img src="/images/logo.png" alt="Logo" className={styles.logo} />
                    <Link href="/">
                        <span className={classNames(styles.link, { [styles.active]: router.pathname === '/' })}>Home</span>
                    </Link>
                    <Link href="/topsongs">
                        <span className={classNames(styles.link, { [styles.active]: router.pathname === '/topsongs' })}>Top Songs</span>
                    </Link>
                    <Link href="/discover">
                        <span className={classNames(styles.link, { [styles.active]: router.pathname === '/discover' })}>Discover</span>
                    </Link>
                    <Link href="/detectsong">
                        <span className={classNames(styles.link, { [styles.active]: router.pathname === '/detectsong' })}>Detect Song</span>
                    </Link>                    
                </nav>
            </div>
            <input type="text" placeholder="Search..." className={styles.searchBar} />
        </header>
    );
};

export default Header;