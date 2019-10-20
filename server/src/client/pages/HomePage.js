import React from 'react';

const HomePage = () => {
    return (
        <div>
            <p>I'm the home component</p>
            <button onClick={() => console.log("Click")}>Press me!</button>
        </div>
    );
};

export default { component: HomePage };