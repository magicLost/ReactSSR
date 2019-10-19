import React from 'react';

const Home = () => {
    return (
        <div>
            <p>I'm the home component</p>
            <button onClick={() => console.log("Click")}>Press me!</button>
        </div>
    );
};

export default Home;