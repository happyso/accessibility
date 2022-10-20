import React, { memo } from 'react'
import { AiOutlineCaretUp, AiOutlineCaretDown } from 'react-icons/ai'

const ReadableItem = memo(({ acc, handleDecrement, handleIncrement }) => {
    const { id, title, value } = acc
    const unit = title === 'font-size' || title === 'line-height' ? '%' : 'px'
    const css = '.hn-style { ' + title + ':' + value + unit + ' !important }'
    const onIncrement = () => {
        handleIncrement(acc)
    }

    const onDecrement = () => {
        handleDecrement(acc)
    }
    return (
        <div className="controlBox" id={id}>
            <div className="d-flex">
                <div className="text">
                    <h6>{title}</h6>
                    <div className="currentValue">
                        {value}
                        {unit}
                    </div>
                </div>
            </div>
            <div className="btnWarp">
                <button
                    type="button"
                    name={title}
                    className="hnAccbtn"
                    tabIndex="1"
                    onClick={onDecrement}
                >
                    <AiOutlineCaretDown />
                </button>
                <button
                    type="button"
                    name={title}
                    className="hnAccbtn"
                    tabIndex="1"
                    onClick={onIncrement}
                >
                    <AiOutlineCaretUp />
                </button>
            </div>
            <style id={title} type="text/css">
                {css}
            </style>
        </div>
    )
})

export default React.memo(ReadableItem)
