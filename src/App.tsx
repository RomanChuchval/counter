import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./Counter";
import {SuperButton} from "./SuperButton";
import {Settings} from "./Settings";


function App() {
    const [startNum, setStartNum] = useState<number>(0)
    const [maxNum, setMaxNum] = useState<number>(5)
    const [count, setCount] = useState<number>(startNum)
    const [error, setError] = useState<string>('')
    const [message, setMessage] = useState<string>('')

    const increment = () => {
        count < maxNum && setCount(count + 1)
    }
    const reset = () => {
        setCount(startNum)
    }

    const displayErrorMessage = () => {
        if (maxNum <= startNum || startNum < 0) {
            setError('Incorrect value!')
        } else if (maxNum > startNum) {
            setError('')
        }
    }

    const displaySettingMessage = (isDisplay: boolean) => {
        if (isDisplay) {
            setMessage(`Enter values and press 'set'`)
        } else {
            setMessage('')
            setCount(startNum)
        }
    }
    useEffect(() => {
        displayErrorMessage()
    }, [maxNum, startNum])


    return (
        <div className="App">
            <div className={"Counter_wrapper"}>
                <Counter error={error}
                         count={count}
                         startNum={startNum}
                         maxNum={maxNum}
                         displayMessage={message}>
                    {error ? error : message ? message : count}
                </Counter>

                <div className={"Counter_btn_wrapper"}>
                    <SuperButton disabled={count === maxNum || !!message}
                                 name={'Increment'}
                                 callback={increment}/>

                    <SuperButton disabled={count === startNum || !!message}
                                 name={'Reset'}
                                 callback={reset}/>
                </div>
            </div>
            <div className={'Settings_wrapper'}>
                <Settings
                    message={message}
                    displaySettingMessage={displaySettingMessage}
                    error={error}
                    startNum={startNum}
                    setStartNum={setStartNum}
                    maxNum={maxNum}
                    setMaxNum={setMaxNum}
                />
            </div>
        </div>
    );
}

export default App;
