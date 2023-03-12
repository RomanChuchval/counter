import React from 'react';
import './App.css';
import {Counter} from "./Counter";
import {SuperButton} from "./SuperButton";
import {SettingsContainer} from "./Settings";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./redux/store";
import {SettingsStateType} from "./redux/settings-reducer";
import {CounterStateType, incrementAC, setStartValueAC} from "./redux/counter-reducer";


function App() {

    const settingsState = useSelector<AppRootStateType, SettingsStateType>(state => state.settings)
    const counterState = useSelector<AppRootStateType, CounterStateType>(state => state.counter)
    const dispatch = useDispatch()


    const error = settingsState.startNum >= settingsState.maxNum
        || settingsState.startNum < 0
        || settingsState.maxNum < 0

    const userMessage = settingsState.isEditMode ? `Enter values and press 'set'` : ''
    const increment = () => {
        dispatch(incrementAC(settingsState.maxNum))
    }
    const reset = () => {
        dispatch(setStartValueAC(settingsState.startNum))
    }

    return (
        <div className="App">
            <div className={"Counter_wrapper"}>
                <Counter error={error}
                         count={counterState.count}
                         maxNum={settingsState.maxNum}
                         displayMessage={userMessage}>
                    {error ? 'Incorrect value' : settingsState.isEditMode ? userMessage : counterState.count}
                </Counter>
                <div className={"Counter_btn_wrapper"}>
                    <SuperButton disabled={counterState.count === settingsState.maxNum || !!userMessage}
                                 name={'Increment'}
                                 callback={increment}/>
                    <SuperButton disabled={counterState.count === settingsState.startNum || !!userMessage}
                                 name={'Reset'}
                                 callback={reset}/>
                </div>
            </div>
            <div className={'Settings_wrapper'}>
                <SettingsContainer
                    error={error}
                />
            </div>
        </div>
    );
}

export default App;
