import React from 'react';
import Header from '../components/Header';
import dynamic from 'next/dynamic';
// import Footer from '@/components/Footer';
import '../styles/global.css';


const Card = dynamic(() => import('../components/Card'), { ssr: false });


const HomePage = () => {
    return (
        <div>
            <Header />
            <main>
                <p>Welcome to my website!</p>
            </main>
        </div>
    );
};

export default HomePage;