import React, { FC, useCallback, useEffect, useRef, useState } from 'react'
import SliderInput from './slider-input'
import cn from 'clsx'
import './range-slider.css'

export interface SliderRange {
    min: number
    max: number
}

export interface RangeSliderProps {
    min: number
    max: number
    step: number
    onChange: (value: SliderRange) => void
}

type SliderColor = "normal" | "alert"

const RangeSlider: FC<RangeSliderProps> = ({ min, max, step, onChange }) => {
    const [actualMin, setActualMin] = useState(Math.min(min, max))
    const [actualMax, setActualMax] = useState(Math.max(min, max))
    const [minValue, setMinValue] = useState(actualMin)
    const [maxValue, setMaxValue] = useState(actualMax)
    const [color, setColor] = useState<SliderColor>("normal")
    const minValueRef = useRef<HTMLInputElement>(null)
    const maxValueRef = useRef<HTMLInputElement>(null)
    const rangeRef = useRef<HTMLDivElement>(null)

    const getPercent = useCallback(
        (value: number) => Math.round(((value - actualMin) / (actualMax - actualMin)) * 100),
        [actualMin, actualMax]
    )

    const handleMinInputChanged = (value: number) => {
        const newValue = Math.max(Math.min(value, maxValue - step), actualMin)
        setMinValue(newValue);
    }

    const handleMaxInputChanged = (value: number) => {
        const newValue = Math.min(Math.max(value, minValue + step), actualMax)
        setMaxValue(newValue);
    }

    useEffect(() => {
        if (minValueRef.current) {
            const minPercent = getPercent(+minValueRef.current.value);
            const maxPercent = getPercent(maxValue);

            if (rangeRef.current) {
                rangeRef.current.style.width = `${maxPercent - minPercent}%`;
            }
        }
    }, [maxValue, getPercent]);

    useEffect(() => {
        if (maxValueRef.current) {
            const minPercent = getPercent(minValue)
            const maxPercent = getPercent(+maxValueRef.current.value)

            if (rangeRef.current) {
                rangeRef.current.style.left = `${minPercent}%`
                rangeRef.current.style.width = `${maxPercent - minPercent}%`
            }
        }
    }, [minValue, getPercent]);

    useEffect(() => {
        if (rangeRef.current) {
            const observer = new ResizeObserver((entries) => {
                const { width } = entries[0]?.contentRect

                if (width > 100) {
                    setColor("normal")
                }
                else {
                    setColor("alert")
                }
            })

            observer.observe(rangeRef.current)

            return () => {
                observer.disconnect()
            }
        }
    }, []
    )

    useEffect(() => {
        onChange({ min: minValue, max: maxValue });
    }, [minValue, maxValue, onChange]);

    return (
        <div className='container'>
            <SliderInput
                min={actualMin}
                max={actualMax}
                step={step}
                value={minValue}
                inputRef={minValueRef}
                onChange={handleMinInputChanged}
                className='thumb thumb-left'
            />
            <SliderInput
                min={actualMin}
                max={actualMax}
                step={step}
                value={maxValue}
                inputRef={maxValueRef}
                onChange={handleMaxInputChanged}
                className='thumb thumb-right'
            />
            <div className='slider'>
                <div className='slider-track' />
                <div
                    ref={rangeRef}
                    className={cn('slider-range', `slider-${color}`)}
                />
                <div className='slider-left-value'>{minValue}</div>
                <div className='slider-right-value'>{maxValue}</div>
            </div>
        </div>
    )
}

export default RangeSlider

