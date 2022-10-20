import React, { useCallback, useState, useEffect } from 'react'
import ReadableList from './ReadableList'

// HELPER
import {
    getAccessibilityLocalStorage,
    saveAccessibilityLocalStorage,
} from '../../helper'

function Readable() {
    const [accItems, setAccItems] = useState(
        getAccessibilityLocalStorage('Accessibility') || []
    )
    /*
    
[{id: 0, title: 'font-size', value: 100},
{id: 1, title: 'letter-spacing', value: 1},
{id: 2, title: 'line-height', value: 100},
{id: 3, title: 'word-spacing', value: 1}]
    */

    const handleDecrement = useCallback((acc) => {
        setAccItems((accItems) =>
            accItems.map((item) => {
                if (item.id === acc.id) {
                    const countNumber =
                        acc.title === 'font-size' || acc.title === 'line-height'
                            ? 10
                            : 1
                    const value = acc.value - countNumber
                    return {
                        ...acc,
                        value: value < 0 ? 0 : acc.value - countNumber,
                    }
                }
                return item
            })
        )
    }, [])

    const handleIncrement = useCallback((acc) => {
        setAccItems((accItems) =>
            accItems.map((item) => {
                if (item.id === acc.id) {
                    const countNumber =
                        acc.title === 'font-size' || acc.title === 'line-height'
                            ? 10
                            : 1
                    return { ...acc, value: acc.value + countNumber }
                }
                return item
            })
        )
    }, [])

    useEffect(() => {
        saveAccessibilityLocalStorage('Accessibility', accItems)
    }, [accItems])

    return (
        <>
            <div className="ReadableBox">
                <ReadableList
                    readableItems={accItems}
                    handleDecrement={handleDecrement}
                    handleIncrement={handleIncrement}
                />
            </div>
        </>
    )
}

export default Readable
