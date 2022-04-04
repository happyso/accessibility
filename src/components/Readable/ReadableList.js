import React from 'react';

// COMPONENT
import ReadableItem from './ReadableItem';  

const ReadableList = ({ readableItems, DecreaseHandler,  IncreaseHandler }) => {
    const resultItems = [];
    Object.keys(readableItems).map( function (key, index) { 
        return resultItems.push({id:index, title: key, value: readableItems[key]})
    });
  return (
    <div>
      {
        readableItems && // Check if readableItem exists
        typeof readableItems === 'object' &&
        resultItems.length > 0 &&
        resultItems.map(({ id, title, value }) => (
            <ReadableItem
                key={id}
                id={title}
                title={title}
                value={value}
                unit={title === "font-size" || title ===  "line-height"? '%' : 'px' }
                DecreaseHandler={DecreaseHandler}
                IncreaseHandler={IncreaseHandler}
            />
        ))
      }
    </div>
  )
};

export default React.memo(ReadableList);