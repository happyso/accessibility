import React, {useCallback, useState} from 'react';
import ReadableList from './ReadableList';

// HELPER
import { getAccessibilityLocalStorage, saveAccessibilityLocalStorage } from '../../helper';

function Readable() {

  const [accItems, setAccItems] = useState(getAccessibilityLocalStorage('Accessibility') || {});

  const DecreaseHandler = useCallback(acc => {
    const { name } = acc.currentTarget;
    const countNumber = name === "font-size" || name ===  "line-height" ? 10 : 1;
    const updateItems = {...accItems, [name]: accItems[name] - countNumber};
    setAccItems(updateItems);
    saveAccessibilityLocalStorage('Accessibility', updateItems);
  }, [accItems]) 


  const IncreaseHandler = useCallback(acc => {
    const { name } = acc.currentTarget;
    const countNumber = name === "font-size" || name ===  "line-height" ? 10 : 1;
    const updateItems = {...accItems, [name]: accItems[name] + countNumber};
    setAccItems(updateItems);
    saveAccessibilityLocalStorage('Accessibility', updateItems);
  }, [accItems]) 


  return (
    <>
      <div className="ReadableBox">
        <ReadableList readableItems={accItems} DecreaseHandler={DecreaseHandler} IncreaseHandler={IncreaseHandler} />
      </div>
    </>
    
  );
}

export default Readable;
