import React, {ReactNode} from 'react';
import s from './Counter.module.css'

type CounterPropsType = {
    count: number | boolean
    startNum: number
    maxNum: number
    displayMessage: string
    children: ReactNode
    error: string
}

export const Counter: React.FC<CounterPropsType> = ({
    count,
    maxNum,
    children,
    error
}) => {

    const finalCountClassName = `${s.counter_default} 
    ${count === maxNum || error ? s.counter_title : ''}`

    return (
        <div className={s.counter}>
            <p className={finalCountClassName}>
                {children}
            </p>
        </div>
    );
};

