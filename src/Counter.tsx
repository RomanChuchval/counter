import React from 'react';
import s from './Counter.module.css'

type CounterPropsType = {
    count: number
}

export const Counter: React.FC<CounterPropsType> = ({
    count
}) => {

    const finalCountClassName = `${count === 5 ? s.counter_title : s.counter_default}`

    return (
        <div className={s.counter}>
            <p className={finalCountClassName}>
                {count}
            </p>
        </div>
    );
};

