import React, {ChangeEvent} from 'react';
import s from './Settings.module.css'
import {SuperButton} from "./SuperButton";

type SettingsPropsType = {
    setStartNum: (startNum: number) => void
    startNum: number
    setMaxNum: (maxNum: number) => void
    maxNum: number
    error: boolean
    displaySettingMessage: (isSettingMode: boolean) => void
    editMode: boolean
    setCount:(count: number) => void
}

export const Settings = (props: SettingsPropsType) => {
    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMaxNum(e.currentTarget.valueAsNumber)
    }
    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.setStartNum(e.currentTarget.valueAsNumber)
    }
    const onFocusHandler = () => {
        props.displaySettingMessage(true)
    }
    const onPressSetHandler = () => {
        props.displaySettingMessage(false)
        props.setCount(props.startNum)

    }

    let finalInputClassName = `${s.settings_input} ${props.error ? s.error_input : ''}`

    return (
        <>
            <div onFocus={onFocusHandler}
                 className={s.settings_block}>
                <div className={s.input_block}>
                    Max value
                    <input value={props.maxNum}
                           onChange={onChangeMaxValue}
                           className={finalInputClassName}
                           type="number"/>
                </div>
                <div className={s.input_block}>
                    Start value
                    <input value={props.startNum}
                           onChange={onChangeStartValue}
                           className={finalInputClassName}
                           type="number"/>
                </div>
            </div>
            <div className={s.settings_btn_wrapper}>
                <SuperButton name={'Set'}
                             callback={onPressSetHandler}
                             disabled={!props.editMode || props.error}/>
            </div>
        </>
    );
};

