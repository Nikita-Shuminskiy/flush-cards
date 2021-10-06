import React, { ChangeEvent } from 'react'
import {InputHTMLAttributes} from 'react';
import {DetailedHTMLProps} from 'react';

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
type RangeInputProps = DefaultInputPropsType& {
    chagnedValue: (value: number) => void
}

const RangeInput:React.FC<RangeInputProps> = ({chagnedValue, ...restProps}) => {
const onChanged = (e: ChangeEvent<HTMLInputElement>) => {
    chagnedValue(+e.currentTarget.value)
}

    return (
        <div>
            <input type={'range'} onChange={onChanged}/>
        </div>
    )
}
export default RangeInput