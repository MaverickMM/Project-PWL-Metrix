import React from 'react';
import Header from '../components/Header';
import '../public/styles/global.css';

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