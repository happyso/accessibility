import React from 'react';
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";

const ReadableItem = ({ id, title, value, DecreaseHandler,  IncreaseHandler, unit}) => {
    const css =
    '.hn-style { ' + title + ':' + value + unit + ' !important }';
    return (
        <div className="controlBox" id={id}>
            <div className="d-flex">
                <div className="text">
                    <h6>{title}</h6>
                    <div className="currentValue">{value}{unit}</div>
                </div>
            </div>
            <div className="btnWarp">
                <button
                    type="button"
                    name={title}
                    className="hnAccbtn"
                    tabIndex="1"
                    onClick={DecreaseHandler}
                >
                    <AiOutlineCaretDown />
                </button>
                <button
                    type="button"
                    name={title}
                    className="hnAccbtn"
                    tabIndex="1"
                    onClick={IncreaseHandler}
                >
                     <AiOutlineCaretUp />
                </button>
            </div>
            <style id={title} type='text/css'>{css}</style>
        </div>
    )
}

export default React.memo(ReadableItem);