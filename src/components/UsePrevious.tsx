import React, {useRef} from 'react';

const UsePrevious = () => {

    const usePrevious = (value:number) => {
        const currentValue = useRef<number>(value);
        const previousValue = useRef<number>();

        if (currentValue.current !== value) {
            previousValue.current = currentValue.current;
            currentValue.current = value
        }
        return {previousValue, currentValue}
    }

    let {previousValue} = usePrevious(0)



    return (
        <div>
            <button>Click here to get {previousValue.current}</button>
        </div>
    );
};

export default UsePrevious;