import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter";
import {SuperButton} from "./SuperButton";


function App() {

    const [count, setCount] = useState<number>(0)
    const increment = () => {
        setCount(count + 1)
    }

    const reset = () => {
        setCount(0)
    }

    return (
        <div className="App">
            <Counter count={count}/>
            <div>
                <SuperButton disabled={count === 5} name={'Increment'} callback={increment}/>
                <SuperButton disabled={count === 0} name={'Reset'} callback={reset}/>
            </div>
        </div>
    );
}

export default App;
