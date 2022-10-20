import React from 'react'

// COMPONENT
import ReadableItem from './ReadableItem'

const ReadableList = ({ readableItems, handleDecrement, handleIncrement }) => {
    return (
        <div>
            {readableItems && //
                readableItems.map((item) => (
                    <ReadableItem
                        key={item.id}
                        acc={item}
                        handleDecrement={handleDecrement}
                        handleIncrement={handleIncrement}
                    />
                ))}
        </div>
    )
}

export default React.memo(ReadableList)
