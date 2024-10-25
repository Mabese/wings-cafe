import React from 'react';
import ReactDOM from 'react-dom';
import WingsCafe from './WingsCafe'; // Make sure the filename is also updated to match
import './App.css';

const App = () => {
    return (
        <>
            <WingsCafe />
        </>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
