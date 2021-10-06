import React, { ChangeEvent, FocusEventHandler } from 'react'
import {InputHTMLAttributes} from 'react';
import {DetailedHTMLProps} from 'react';
import s from './RangeInput.module.css'

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
type RangeInputProps = DefaultInputPropsType& {
    chagnedValue: (value: number) => void
    setFilterValue:()=> void
}

const RangeInput:React.FC<RangeInputProps> = ({chagnedValue,setFilterValue, ...restProps}) => {
const onChanged = (e: ChangeEvent<HTMLInputElement>) => {
    chagnedValue(+e.currentTarget.value)
}
const setValue = () => {
    setFilterValue()
}
    return (
        <div>
            <input type={'range'} onChange={onChanged} onMouseUp={setValue}   className={s.range} {...restProps}/>
        </div>
    )
}
export default RangeInput