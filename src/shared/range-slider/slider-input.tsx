import React, { ChangeEvent, FC } from "react"

interface SliderInputProps {
    min: number
    max: number
    step: number
    value: number
    className?: string
    inputRef?: React.RefObject<HTMLInputElement>
    onChange: (value: number) => void
}


const SliderInput: FC<SliderInputProps> = ({ min, max, step, value, className, inputRef, onChange }) => {
    return (
        <input
            type='range'
            min={min}
            max={max}
            step={step}
            value={value}
            className={className}
            ref={inputRef}
            onChange={(e: ChangeEvent<HTMLInputElement>) => { onChange(+e.target.value) }}
        />
    )
}

export default SliderInput