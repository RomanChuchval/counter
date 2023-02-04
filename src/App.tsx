import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./Counter";
import {SuperButton} from "./SuperButton";
import {Settings} from "./Settings";


function App() {

    const [startNum, setStartNum] = useState<number>(0)
    const [maxNum, setMaxNum] = useState<number>(5)
    const [count, setCount] = useState<number>(startNum)
    const [editMode, setEditMode] = useState<boolean>(false)

    useEffect(() => {
        let localStartNum = localStorage.getItem('start num')
        let localMaxNum = localStorage.getItem('max num')
        let localCurrentValue = localStorage.getItem('current value')
        if (localStartNum && localMaxNum && localCurrentValue) {
            setStartNum(JSON.parse(localStartNum))
            setMaxNum(JSON.parse(localMaxNum))
            setCount(JSON.parse(localCurrentValue))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('max num', JSON.stringify(maxNum))
        localStorage.setItem('start num', JSON.stringify(startNum))
        localStorage.setItem('current value', JSON.stringify(count))
    }, [startNum, maxNum, count])


    const error = startNum >= maxNum
    const increment = () => {
        count < maxNum && setCount(count + 1)
    }
    const reset = () => {
        setCount(startNum)
    }


    const userMessage = editMode ? `Enter values and press 'set'` : ''

    return (
        <div className="App">
            <div className={"Counter_wrapper"}>
                <Counter error={error}
                         count={count}
                         startNum={startNum}
                         maxNum={maxNum}
                         displayMessage={userMessage}>
                    {error ? 'Incorrect value' : editMode ? userMessage : count}
                </Counter>
                <div className={"Counter_btn_wrapper"}>
                    <SuperButton disabled={count === maxNum || !!userMessage}
                                 name={'Increment'}
                                 callback={increment}/>
                    <SuperButton disabled={count === startNum || !!userMessage}
                                 name={'Reset'}
                                 callback={reset}/>
                </div>
            </div>
            <div className={'Settings_wrapper'}>
                <Settings
                    setCount={setCount}
                    displaySettingMessage={setEditMode}
                    error={error}
                    startNum={startNum}
                    setStartNum={setStartNum}
                    maxNum={maxNum}
                    setMaxNum={setMaxNum}
                    editMode={editMode}
                />
            </div>
        </div>
    );
}

export default App;
